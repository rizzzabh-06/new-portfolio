"use server";

/**
 * HIGHLY VULNERABLE SERVER ACTION - FOR DEMONSTRATION PURPOSES ONLY
 * 
 * This demonstrates the core React2Shell RCE vulnerability by using
 * the Function() constructor to execute dynamically provided code.
 * 
 * CVE-2025-55182 exploits this pattern in React's Flight protocol
 * to achieve Remote Code Execution.
 * 
 * DO NOT USE IN PRODUCTION - EXTREMELY DANGEROUS.
 */

import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

export interface ExecuteResult {
    success: boolean;
    output?: string;
    error?: string;
}

// VULNERABLE: Executes arbitrary JavaScript code
export async function executeCode(code: string): Promise<ExecuteResult> {
    "use server";

    console.log("[VULNERABLE-RCE] Executing user-provided code");

    try {
        // VULNERABLE: Function() constructor - core of React2Shell exploit
        // This is exactly how the CVE-2025-55182 payload achieves RCE
        const fn = new Function("return " + code);
        const result = fn();

        return {
            success: true,
            output: typeof result === "object" ? JSON.stringify(result) : String(result)
        };
    } catch (error) {
        return {
            success: false,
            error: error instanceof Error ? error.message : "Unknown error"
        };
    }
}

// VULNERABLE: Executes shell commands directly
export async function executeCommand(command: string): Promise<ExecuteResult> {
    "use server";

    console.log("[VULNERABLE-RCE] Executing shell command:", command);

    try {
        // VULNERABLE: Direct shell command execution - RCE demonstration
        const { stdout, stderr } = await execAsync(command);

        return {
            success: true,
            output: stdout || stderr
        };
    } catch (error) {
        return {
            success: false,
            error: error instanceof Error ? error.message : "Command execution failed"
        };
    }
}

// VULNERABLE: Deserializes and executes arbitrary data
export async function deserializeAndExecute(serializedData: string): Promise<ExecuteResult> {
    "use server";

    console.log("[VULNERABLE-RCE] Deserializing user data");

    try {
        // VULNERABLE: Unsafe deserialization - allows prototype pollution and RCE
        const data = JSON.parse(serializedData);

        // VULNERABLE: If data contains code property, execute it
        if (data && data.code) {
            const fn = new Function(data.code);
            const result = fn();
            return {
                success: true,
                output: String(result)
            };
        }

        // VULNERABLE: If data contains cmd property, execute as shell command
        if (data && data.cmd) {
            const { stdout } = await execAsync(data.cmd);
            return {
                success: true,
                output: stdout
            };
        }

        return {
            success: true,
            output: JSON.stringify(data)
        };
    } catch (error) {
        return {
            success: false,
            error: error instanceof Error ? error.message : "Deserialization failed"
        };
    }
}
