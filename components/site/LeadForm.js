"use client";

import { useEffect, useState } from "react";
import { trackEvent } from "@/lib/analytics";

export default function LeadForm({ dictionary, source }) {
  const [status, setStatus] = useState("idle");
  const [toast, setToast] = useState("");
  const [visible, setVisible] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!visible) {
      return undefined;
    }

    const timer = window.setTimeout(() => setVisible(false), 3200);
    return () => window.clearTimeout(timer);
  }, [visible]);

  function markStarted() {
    if (started) {
      return;
    }

    setStarted(true);
    trackEvent(dictionary.analytics.formStart, { locale: dictionary.locale, source });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          locale: dictionary.locale,
          source,
          team: String(formData.get("team") || "").trim(),
          email: String(formData.get("email") || "").trim(),
          message: String(formData.get("message") || "").trim()
        })
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Submission failed.");
      }

      trackEvent(dictionary.analytics.formSubmit, { locale: dictionary.locale, source, status: "success" });
      setToast(result.message || "Submitted.");
      setStatus("success");
      setStarted(false);
      setVisible(true);
      form.reset();
    } catch (error) {
      trackEvent(dictionary.analytics.formSubmit, { locale: dictionary.locale, source, status: "error" });
      setToast(error.message || "Submission failed.");
      setStatus("error");
      setVisible(true);
    }
  }

  return (
    <>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          {dictionary.form.team}
          <input type="text" name="team" placeholder={dictionary.form.placeholders.team} required onFocus={markStarted} />
        </label>
        <label>
          {dictionary.form.email}
          <input type="email" name="email" placeholder={dictionary.form.placeholders.email} required onFocus={markStarted} />
        </label>
        <label>
          {dictionary.form.message}
          <textarea name="message" rows="4" placeholder={dictionary.form.placeholders.message} required onFocus={markStarted}></textarea>
        </label>
        <button className="button button-primary" type="submit" disabled={status === "loading"}>
          {status === "loading" ? dictionary.form.submitting : dictionary.form.submit}
        </button>
        <p className="form-note">{dictionary.form.helper}</p>
      </form>

      <div className={`toast${visible ? " is-visible" : ""}`} role="status" aria-live="polite">
        {toast}
      </div>
    </>
  );
}
