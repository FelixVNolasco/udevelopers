import * as React from "react";
import { useForm } from "@tanstack/react-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";

const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters.")
    .max(80, "Name must be at most 80 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string(),
  subject: z.string(),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters.")
    .max(2000, "Message must be at most 2000 characters."),
});

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

type SubmitStatus = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = React.useState<SubmitStatus>("idle");
  const [errorMsg, setErrorMsg] = React.useState("");

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
    validators: {
      onSubmit: ({ value }) => {
        const result = contactSchema.safeParse(value);
        if (!result.success) {
          return result.error.flatten().fieldErrors;
        }
        return undefined;
      },
    },
    onSubmit: async ({ value }) => {
      setStatus("loading");
      setErrorMsg("");

      try {
        const res = await fetch(`${API_URL}/api/contact`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(value),
        });

        if (!res.ok) {
          const body = await res.json().catch(() => null);
          throw new Error(body?.error || "Something went wrong.");
        }

        setStatus("success");
        form.reset();
      } catch (err) {
        setStatus("error");
        setErrorMsg(
          err instanceof Error ? err.message : "Something went wrong."
        );
      }
    },
  });

  if (status === "success") {
    return (
      <div className="rounded-lg border border-green-200 bg-green-50 p-8 text-center">
        <h3 className="text-lg font-semibold text-green-800 mb-2">
          Thank you!
        </h3>
        <p className="text-sm text-green-700 mb-6">
          Your message has been sent. We will get back to you shortly.
        </p>
        <Button
          variant="outline"
          onClick={() => setStatus("idle")}
          className="border-green-300 text-green-800 hover:bg-green-100"
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
      className="space-y-2"
    >
      <FieldGroup>
        {/* Name */}
        <form.Field
          name="name"
          children={(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid;
            return (
              <Field data-invalid={isInvalid}>
                <FieldLabel htmlFor={field.name}>Full Name *</FieldLabel>
                <Input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  aria-invalid={isInvalid}
                  placeholder="John Doe"
                  autoComplete="name"
                />
                {isInvalid && (
                  <FieldError errors={field.state.meta.errors?.filter(Boolean)} />
                )}
              </Field>
            );
          }}
        />

        {/* Email */}
        <form.Field
          name="email"
          children={(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid;
            return (
              <Field data-invalid={isInvalid}>
                <FieldLabel htmlFor={field.name}>Email *</FieldLabel>
                <Input
                  id={field.name}
                  name={field.name}
                  type="email"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  aria-invalid={isInvalid}
                  placeholder="you@example.com"
                  autoComplete="email"
                />
                {isInvalid && (
                  <FieldError errors={field.state.meta.errors?.filter(Boolean)} />
                )}
              </Field>
            );
          }}
        />

        {/* Phone & Subject row */}
        <div className="grid sm:grid-cols-2 gap-6">
          {/* Phone */}
          <form.Field
            name="phone"
            children={(field) => (
              <Field>
                <FieldLabel htmlFor={field.name}>Phone</FieldLabel>
                <Input
                  id={field.name}
                  name={field.name}
                  type="tel"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="+1 (786) 000-0000"
                  autoComplete="tel"
                />
              </Field>
            )}
          />

          {/* Subject */}
          <form.Field
            name="subject"
            children={(field) => (
              <Field>
                <FieldLabel htmlFor={field.name}>Subject</FieldLabel>
                <Input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="Investment inquiry"
                  autoComplete="off"
                />
              </Field>
            )}
          />
        </div>

        {/* Message */}
        <form.Field
          name="message"
          children={(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid;
            return (
              <Field data-invalid={isInvalid}>
                <FieldLabel htmlFor={field.name}>Message *</FieldLabel>
                <Textarea
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  aria-invalid={isInvalid}
                  placeholder="Tell us about your inquiry..."
                  rows={6}
                  className="resize-none"
                />
                {isInvalid && (
                  <FieldError errors={field.state.meta.errors?.filter(Boolean)} />
                )}
              </Field>
            );
          }}
        />
      </FieldGroup>

      {status === "error" && (
        <p className="text-sm text-destructive font-medium">{errorMsg}</p>
      )}

      <div className="flex items-center gap-3 pt-2">
        <Button
          type="button"
          variant="outline"
          onClick={() => {
            form.reset();
            setStatus("idle");
            setErrorMsg("");
          }}
        >
          Reset
        </Button>
        <Button
          type="submit"
          disabled={status === "loading"}
          className="bg-[#335264] hover:bg-[#2a4453]"
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </Button>
      </div>
    </form>
  );
}
