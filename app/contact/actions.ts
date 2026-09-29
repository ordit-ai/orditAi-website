export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
  errors: Partial<Record<"name" | "email" | "message", string>>;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Static export can't run server actions, so this runs entirely client-side.
// Point it at a real endpoint via NEXT_PUBLIC_CONTACT_ENDPOINT before relying
// on it to reach anyone — until then it just logs the submission locally.
const CONTACT_ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;

/**
 * Validates a contact submission and, if an endpoint is configured, submits
 * it from the browser. Used as the action for useActionState in ContactForm.
 */
export async function submitContactForm(_prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const firm = String(formData.get("firm") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  const errors: ContactFormState["errors"] = {};
  if (!name) errors.name = "Enter your name.";
  if (!EMAIL_PATTERN.test(email)) errors.email = "Enter a valid email.";
  if (!message) errors.message = "Add a short message.";

  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Check the fields below.", errors };
  }

  if (!CONTACT_ENDPOINT) {
    console.log("[contact] submission received (no endpoint configured)", { name, email, firm, message });
    return {
      status: "success",
      message: "Thanks — we'll get back to you within one business day.",
      errors: {},
    };
  }

  try {
    const response = await fetch(CONTACT_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, firm, message }),
    });

    if (!response.ok) {
      throw new Error(`Contact endpoint responded with ${response.status}`);
    }

    return {
      status: "success",
      message: "Thanks — we'll get back to you within one business day.",
      errors: {},
    };
  } catch (error) {
    console.error("[contact] submission failed", error);
    return {
      status: "error",
      message: "Something went wrong sending your message. Please email us directly instead.",
      errors: {},
    };
  }
}
