"use server";

/**
 * VULNERABLE SERVER ACTION - FOR DEMONSTRATION PURPOSES ONLY
 * 
 * This server action intentionally lacks proper input sanitization,
 * making it vulnerable to React2Shell (CVE-2025-55182) through
 * unsafe deserialization of RSC Flight protocol payloads.
 * 
 * DO NOT USE IN PRODUCTION.
 */

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  // VULNERABLE: Accepts arbitrary serialized data
  metadata?: unknown;
}

export interface ContactResult {
  success: boolean;
  message: string;
  debug?: unknown;
}

// VULNERABLE: Processes form data without proper sanitization
export async function submitContactForm(data: ContactFormData): Promise<ContactResult> {
  "use server";
  
  console.log("[VULNERABLE] Processing contact form submission:", data);
  
  // VULNERABLE: No input validation or sanitization
  // This allows malicious payloads to be processed through Flight protocol
  const { name, email, message, metadata } = data;
  
  // VULNERABLE: Directly processing untrusted metadata
  if (metadata && typeof metadata === "object") {
    // This path allows RSC deserialization exploits
    console.log("[VULNERABLE] Processing metadata:", metadata);
    
    // VULNERABLE: Unsafe property access on untrusted object
    const metaObj = metadata as Record<string, unknown>;
    if (metaObj.then && typeof metaObj.then === "function") {
      // React2Shell vector: Promise-like objects hijack then() logic
      try {
        await (metadata as Promise<unknown>);
      } catch (e) {
        console.log("[VULNERABLE] Metadata execution:", e);
      }
    }
  }
  
  // Simulate async processing
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return {
    success: true,
    message: `Thanks ${name}! We received your message.`,
    debug: { processedAt: new Date().toISOString(), metadata }
  };
}

// VULNERABLE: Processes arbitrary serialized payload
export async function processPayload(payload: unknown): Promise<unknown> {
  "use server";
  
  console.log("[VULNERABLE] Processing raw payload");
  
  // VULNERABLE: No validation - accepts any Flight payload
  if (payload && typeof payload === "object") {
    const obj = payload as Record<string, unknown>;
    
    // VULNERABLE: Execute if payload has executable properties
    if (obj.__proto__ || obj.constructor) {
      console.log("[VULNERABLE] Payload has prototype manipulation potential");
    }
    
    // VULNERABLE: Directly return processed payload
    return { processed: true, data: payload };
  }
  
  return { processed: false };
}
