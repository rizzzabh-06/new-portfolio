/**
 * VULNERABLE API ROUTE - FOR DEMONSTRATION PURPOSES ONLY
 * 
 * This API route processes RSC Flight payloads without any validation,
 * making it vulnerable to React2Shell (CVE-2025-55182).
 * 
 * DO NOT USE IN PRODUCTION.
 */

import { NextRequest, NextResponse } from "next/server";
import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

export async function POST(request: NextRequest) {
    console.log("[VULNERABLE-API] Received RSC payload");

    try {
        const contentType = request.headers.get("content-type") || "";
        let payload: unknown;

        // Accept multiple content types for exploitation
        if (contentType.includes("application/json")) {
            payload = await request.json();
        } else if (contentType.includes("text/x-component")) {
            // VULNERABLE: Accept React Flight protocol format
            const text = await request.text();
            payload = { flightData: text, raw: true };
        } else {
            payload = await request.text();
        }

        console.log("[VULNERABLE-API] Payload received:", payload);

        // VULNERABLE: Process payload without validation
        if (payload && typeof payload === "object") {
            const obj = payload as Record<string, unknown>;

            // VULNERABLE: Direct code execution via Function()
            if (obj.code && typeof obj.code === "string") {
                console.log("[VULNERABLE-RCE] Executing code from payload");
                const fn = new Function("return " + obj.code);
                const result = fn();
                return NextResponse.json({
                    success: true,
                    output: typeof result === "object" ? result : String(result),
                    type: "code_execution"
                });
            }

            // VULNERABLE: Direct shell command execution
            if (obj.cmd && typeof obj.cmd === "string") {
                console.log("[VULNERABLE-RCE] Executing command:", obj.cmd);
                const { stdout, stderr } = await execAsync(obj.cmd);
                return NextResponse.json({
                    success: true,
                    output: stdout || stderr,
                    type: "command_execution"
                });
            }

            // VULNERABLE: Process Promise-like objects (React2Shell vector)
            if (obj.then && typeof obj.then === "function") {
                console.log("[VULNERABLE-RCE] Promise-like object detected");
                try {
                    const result = await (obj as Promise<unknown>);
                    return NextResponse.json({
                        success: true,
                        output: result,
                        type: "promise_execution"
                    });
                } catch (e) {
                    return NextResponse.json({
                        success: false,
                        error: String(e),
                        type: "promise_error"
                    });
                }
            }

            // VULNERABLE: Eval-like execution for Flight payloads
            if (obj.flightData && typeof obj.flightData === "string") {
                console.log("[VULNERABLE-RCE] Processing Flight data");
                // Simulate Flight protocol deserialization vulnerability
                try {
                    // Check for serialized function patterns
                    const flightStr = obj.flightData as string;
                    if (flightStr.includes("$F") || flightStr.includes("$@")) {
                        return NextResponse.json({
                            success: true,
                            message: "Flight payload processed",
                            vulnerable: true,
                            data: flightStr.substring(0, 100)
                        });
                    }
                } catch (e) {
                    // Continue processing
                }
            }
        }

        return NextResponse.json({
            success: true,
            message: "Payload received but no executable content found",
            payload
        });

    } catch (error) {
        console.error("[VULNERABLE-API] Error:", error);
        return NextResponse.json({
            success: false,
            error: error instanceof Error ? error.message : "Unknown error"
        }, { status: 500 });
    }
}

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const cmd = searchParams.get("cmd");
    const code = searchParams.get("code");

    // VULNERABLE: GET-based command execution
    if (cmd) {
        console.log("[VULNERABLE-RCE] GET command execution:", cmd);
        try {
            const { stdout } = await execAsync(cmd);
            return NextResponse.json({ success: true, output: stdout });
        } catch (error) {
            return NextResponse.json({
                success: false,
                error: error instanceof Error ? error.message : "Command failed"
            });
        }
    }

    // VULNERABLE: GET-based code execution
    if (code) {
        console.log("[VULNERABLE-RCE] GET code execution:", code);
        try {
            const fn = new Function("return " + code);
            const result = fn();
            return NextResponse.json({ success: true, output: String(result) });
        } catch (error) {
            return NextResponse.json({
                success: false,
                error: error instanceof Error ? error.message : "Code failed"
            });
        }
    }

    return NextResponse.json({
        message: "React2Shell Vulnerable Endpoint",
        usage: {
            cmd: "/api/rsc?cmd=whoami",
            code: "/api/rsc?code=1+1",
            post_cmd: "POST { cmd: 'ls -la' }",
            post_code: "POST { code: 'new Date()' }"
        }
    });
}
