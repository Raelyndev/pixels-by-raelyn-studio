import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, Instagram, Linkedin, Mail } from "lucide-react";
import { z } from "zod";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Pixels by Raelyn" },
      {
        name: "description",
        content:
          "Tell me about your business, your goals, and the support you need. I'll review your inquiry and follow up with the best next step.",
      },
      { property: "og:title", content: "Contact — Pixels by Raelyn" },
      {
        property: "og:description",
        content: "Start a project with Pixels by Raelyn — a creative digital studio for small businesses.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const services = [
  "Website Design or Redesign",
  "Website Updates or Optimization",
  "Brand and Creative Support",
  "Social Media Content",
  "Digital Strategy and Support",
  "Ongoing Digital Support",
  "Not Sure Yet",
];

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name.").max(100),
  email: z.string().trim().email("Please enter a valid email.").max(255),
  business: z.string().trim().max(150).optional().or(z.literal("")),
  link: z.string().trim().max(255).optional().or(z.literal("")),
  service: z.string().min(1, "Please select a service."),
  budget: z.string().max(60).optional().or(z.literal("")),
  timeline: z.string().max(60).optional().or(z.literal("")),
  description: z.string().trim().min(10, "A short description helps me respond well.").max(2000),
  referral: z.string().max(150).optional().or(z.literal("")),
});

type FormState = Record<keyof z.infer<typeof schema>, string>;

const initial: FormState = {
  name: "", email: "", business: "", link: "", service: "",
  budget: "", timeline: "", description: "", referral: "",
};

function ContactPage() {
  const [values, setValues] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const update = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const errs: Partial<Record<keyof FormState, string>> = {};
      parsed.error.issues.forEach((iss) => {
        const k = iss.path[0] as keyof FormState;
        if (!errs[k]) errs[k] = iss.message;
      });
      setErrors(errs);
      return;
    }
    setSubmitting(true);
    // Placeholder — wire up to a form service, edge function, or database later.
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <>
      <section className="relative border-b border-border">
        <div className="watercolor left-[-140px] top-[-100px] h-[500px] w-[500px]" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-14 lg:px-10 lg:pt-28 lg:pb-20">
          <span className="eyebrow">Contact · Start a project</span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] max-w-4xl">
            Let's talk about{" "}
            <span className="serif-italic text-camel">what you're building.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-charcoal/85">
            Share a little about your business, your goals, and the support you need. I'll review your inquiry and
            follow up with the best next step.
          </p>
        </div>
      </section>

      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Aside */}
            <aside className="lg:col-span-4 space-y-8">
              <div>
                <span className="eyebrow-olive">Direct email</span>
                <a
                  href="mailto:hello@pixelsbyraelyn.com"
                  className="mt-3 flex items-center gap-2 text-lg text-olive hover:text-camel transition-colors"
                >
                  <Mail size={18} /> hello@pixelsbyraelyn.com
                </a>
                <p className="mt-3 text-sm text-charcoal/70">
                  Editable placeholder — replace with your preferred contact email.
                </p>
              </div>
              <div>
                <span className="eyebrow-olive">Follow along</span>
                <div className="mt-3 flex flex-col gap-2">
                  <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-charcoal hover:text-camel transition-colors">
                    <Instagram size={16} /> Instagram
                  </a>
                  <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-charcoal hover:text-camel transition-colors">
                    <Linkedin size={16} /> LinkedIn
                  </a>
                </div>
              </div>
              <div>
                <span className="eyebrow-olive">Response time</span>
                <p className="mt-3 text-charcoal/85">
                  Most inquiries receive a personal response within 2–3 business days.
                </p>
              </div>
              <div>
                <span className="eyebrow-olive">Based in</span>
                <p className="mt-3 text-charcoal/85">
                  Dallas–Fort Worth · Working with clients across Texas and beyond.
                </p>
              </div>
            </aside>

            {/* Form */}
            <div className="lg:col-span-8">
              {submitted ? (
                <div className="relative border border-border bg-card p-10 lg:p-14 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sage-light">
                    <CheckCircle2 className="text-olive" size={28} />
                  </div>
                  <h2 className="mt-6 text-3xl md:text-4xl leading-tight">
                    Thank you for <span className="serif-italic text-camel">reaching out.</span>
                  </h2>
                  <p className="mt-4 max-w-xl mx-auto text-charcoal/85">
                    Your inquiry has been received, and I'll be in touch with the next steps.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setValues(initial); }}
                    className="btn-ghost mt-8"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <Field label="Name" required id="name" error={errors.name}>
                      <input id="name" name="name" required value={values.name} onChange={update("name")} className="input" autoComplete="name" />
                    </Field>
                    <Field label="Email" required id="email" error={errors.email}>
                      <input id="email" name="email" type="email" required value={values.email} onChange={update("email")} className="input" autoComplete="email" />
                    </Field>
                    <Field label="Business or organization name" id="business" error={errors.business}>
                      <input id="business" name="business" value={values.business} onChange={update("business")} className="input" />
                    </Field>
                    <Field label="Website or social media link" id="link" error={errors.link}>
                      <input id="link" name="link" value={values.link} onChange={update("link")} className="input" placeholder="https://" />
                    </Field>
                    <Field label="Service needed" required id="service" error={errors.service}>
                      <select id="service" name="service" required value={values.service} onChange={update("service")} className="input bg-cream">
                        <option value="">Select a service…</option>
                        {services.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </Field>
                    <Field label="Estimated budget" id="budget" error={errors.budget}>
                      <select id="budget" name="budget" value={values.budget} onChange={update("budget")} className="input bg-cream">
                        <option value="">Prefer not to say</option>
                        <option>Under $2,500</option>
                        <option>$2,500 – $5,000</option>
                        <option>$5,000 – $10,000</option>
                        <option>$10,000+</option>
                        <option>Not sure yet</option>
                      </select>
                    </Field>
                    <Field label="Desired timeline" id="timeline" error={errors.timeline}>
                      <select id="timeline" name="timeline" value={values.timeline} onChange={update("timeline")} className="input bg-cream">
                        <option value="">Select a timeline…</option>
                        <option>ASAP</option>
                        <option>Within 1 month</option>
                        <option>1–3 months</option>
                        <option>3+ months</option>
                        <option>Flexible</option>
                      </select>
                    </Field>
                    <Field label="How did you hear about Pixels by Raelyn?" id="referral" error={errors.referral}>
                      <input id="referral" name="referral" value={values.referral} onChange={update("referral")} className="input" />
                    </Field>
                  </div>
                  <Field label="Project description" required id="description" error={errors.description}>
                    <textarea
                      id="description" name="description" required rows={6}
                      value={values.description} onChange={update("description")}
                      className="input resize-none"
                      placeholder="Share where you are today, what you'd like help with, and any goals or context that would help me respond well."
                    />
                  </Field>

                  <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
                    <p className="text-xs text-charcoal/60 max-w-md">
                      Your details are only used to respond to your inquiry.
                    </p>
                    <button type="submit" disabled={submitting} className="btn-accent disabled:opacity-70">
                      {submitting ? "Sending…" : "Send inquiry"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .input {
          width: 100%;
          background: transparent;
          border: 1px solid var(--border);
          padding: 0.75rem 0.9rem;
          font-family: var(--font-sans);
          font-size: 0.95rem;
          color: var(--charcoal);
          border-radius: 2px;
          transition: border-color 0.2s, background 0.2s;
        }
        .input:hover { border-color: var(--olive); }
        .input:focus { outline: none; border-color: var(--camel); background: rgba(255,255,255,0.35); box-shadow: 0 0 0 3px rgba(180,138,80,0.15); }
        .input::placeholder { color: rgba(63,67,53,0.4); }
      `}</style>
    </>
  );
}

function Field({
  label, id, required, error, children,
}: { label: string; id: string; required?: boolean; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="flex items-center gap-2 mb-2 text-sm font-medium text-charcoal">
        {label} {required && <span className="text-camel">*</span>}
      </label>
      {children}
      {error && <p role="alert" className="mt-1.5 text-xs text-camel-deep">{error}</p>}
    </div>
  );
}
