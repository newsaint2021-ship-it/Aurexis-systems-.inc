"use client";
import React, { useState } from "react";
import { spectralBridgeRegular } from "@/fonts/font";
import { motion, easeInOut } from "framer-motion";
import Paragraph from "../Paragraph";
import Loading from "../Loading";
import {
  budgetOptions,
  emailPattern,
  fieldLimits,
  serviceOptions,
  timelineOptions,
} from "@/utils/enquiry";

type Status =
  | { state: "idle" }
  | { state: "sending" }
  | { state: "success"; message: string }
  | { state: "error"; message: string };

const EASING = [0.83, 0, 0.17, 1];

const rise = {
  initial: { y: "100%" },
  animate: { y: 0, transition: { duration: 1, ease: EASING, delay: 0.5 } },
};

const scale = {
  initial: { scaleX: 0 },
  animate: { scaleX: 1, transition: { duration: 1, ease: easeInOut, delay: 0.7 } },
};

const appear = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1, ease: easeInOut, delay: 0.7 } },
};

const inputClass =
  "py-2 px-2 origin-left border-b-[1.5px] border-b-lightText dark:border-b-darkText outline-none bg-transparent focus-visible:border-b-[2.5px] w-full";
const optionClass = "bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText";

function FieldLabel({
  htmlFor,
  children,
  optional,
}: {
  readonly htmlFor: string;
  readonly children: React.ReactNode;
  readonly optional?: boolean;
}) {
  return (
    <motion.label
      variants={appear}
      initial="initial"
      animate="animate"
      className="text-[14px]"
      htmlFor={htmlFor}
    >
      {children}{" "}
      {optional ? (
        <span className="text-lightText60 dark:text-darkText60">(optional)</span>
      ) : (
        <span aria-hidden="true">*</span>
      )}
    </motion.label>
  );
}

function SelectField({
  id,
  name,
  label,
  options,
}: {
  readonly id: string;
  readonly name: string;
  readonly label: string;
  readonly options: string[];
}) {
  return (
    <div className="flex-1 flex flex-col gap-y-2">
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      <motion.select
        variants={scale}
        initial="initial"
        animate="animate"
        className={`${inputClass} cursor-pointer`}
        id={id}
        name={name}
        required
        defaultValue=""
      >
        <option value="" disabled className={optionClass}>
          Select
        </option>
        {options.map((option) => (
          <option key={option} value={option} className={optionClass}>
            {option}
          </option>
        ))}
      </motion.select>
    </div>
  );
}

function MainPage() {
  const [status, setStatus] = useState<Status>({ state: "idle" });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const email = String(formData.get("user_email") ?? "").trim();
    if (!emailPattern.test(email)) {
      setStatus({ state: "error", message: "Please enter a valid email address." });
      return;
    }

    setStatus({ state: "sending" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      const data: { message?: string } = await response.json().catch(() => ({}));

      if (!response.ok) {
        setStatus({
          state: "error",
          message: data.message ?? "Your enquiry could not be sent. Please try again.",
        });
        return;
      }

      form.reset();
      setStatus({
        state: "success",
        message:
          data.message ??
          "Thank you. Your enquiry has been sent and we will be in touch.",
      });
    } catch {
      setStatus({
        state: "error",
        message: "Network error. Please check your connection and try again.",
      });
    }
  }

  const sending = status.state === "sending";

  return (
    <div>
      <section className="my-[8vh]">
        <div className="sm:w-[75%] md:w-[60%] mx-auto">
          <h1
            className={`${spectralBridgeRegular.className} leading-[1] uppercase text-center text-[20vw] sm:text-[12vw]`}
          >
            <span className="block overflow-hidden">
              <motion.span variants={rise} initial="initial" animate="animate" className="block">
                Start <span className="italic lowercase">a</span>
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span variants={rise} initial="initial" animate="animate" className="block">
                project
              </motion.span>
            </span>
          </h1>
          <div className="flex justify-end">
            <motion.div
              variants={appear}
              initial="initial"
              animate="animate"
              className="w-[80%] sm:w-[60%] md:w-[55%]"
            >
              <Paragraph text="Tell us about your brand and what you need. The more context you share, the more useful our reply will be. We review every enquiry and respond with next steps or questions." />
            </motion.div>
          </div>
          <div className="mt-14">
            <form onSubmit={handleSubmit} aria-describedby="form-status">
              {/* Honeypot: hidden from people and assistive technology. */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="company_url">Leave this field empty</label>
                <input id="company_url" name="company_url" type="text" tabIndex={-1} autoComplete="off" />
              </div>

              <div className="flex flex-col xs:flex-row gap-6">
                <div className="flex-1 flex flex-col gap-y-2">
                  <FieldLabel htmlFor="name">Name</FieldLabel>
                  <motion.input
                    variants={scale}
                    initial="initial"
                    animate="animate"
                    className={inputClass}
                    id="name"
                    name="user_name"
                    type="text"
                    autoComplete="name"
                    required
                    maxLength={fieldLimits.name}
                  />
                </div>
                <div className="flex-1 flex flex-col gap-y-2">
                  <FieldLabel htmlFor="business">Business or brand</FieldLabel>
                  <motion.input
                    variants={scale}
                    initial="initial"
                    animate="animate"
                    className={inputClass}
                    id="business"
                    name="user_business"
                    type="text"
                    autoComplete="organization"
                    required
                    maxLength={fieldLimits.business}
                  />
                </div>
              </div>

              <div className="mt-6 flex flex-col xs:flex-row gap-6">
                <div className="flex-1 flex flex-col gap-y-2">
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <motion.input
                    variants={scale}
                    initial="initial"
                    animate="animate"
                    className={inputClass}
                    id="email"
                    name="user_email"
                    type="email"
                    autoComplete="email"
                    required
                    maxLength={fieldLimits.email}
                  />
                </div>
                <div className="flex-1 flex flex-col gap-y-2">
                  <FieldLabel htmlFor="website" optional>
                    Website or social profile
                  </FieldLabel>
                  <motion.input
                    variants={scale}
                    initial="initial"
                    animate="animate"
                    className={inputClass}
                    id="website"
                    name="user_website"
                    type="text"
                    inputMode="url"
                    autoComplete="url"
                    placeholder="yourbrand.co.za or @yourbrand"
                    maxLength={fieldLimits.website}
                  />
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-6">
                <SelectField id="service" name="user_service" label="Service" options={serviceOptions} />
                <SelectField id="budget" name="user_budget" label="Budget range" options={budgetOptions} />
                <SelectField id="timeline" name="user_timeline" label="Timeline" options={timelineOptions} />
              </div>

              <div className="mt-6 flex flex-col gap-y-2">
                <FieldLabel htmlFor="message">Project description</FieldLabel>
                <motion.textarea
                  variants={scale}
                  initial="initial"
                  animate="animate"
                  className={inputClass}
                  id="message"
                  name="user_message"
                  rows={4}
                  required
                  maxLength={fieldLimits.message}
                  placeholder="What are you selling, who are your customers and what should the new site achieve?"
                />
              </div>

              <div className="mt-6 flex flex-col gap-y-2">
                <FieldLabel htmlFor="references" optional>
                  References
                </FieldLabel>
                <motion.textarea
                  variants={scale}
                  initial="initial"
                  animate="animate"
                  className={inputClass}
                  id="references"
                  name="user_references"
                  rows={2}
                  maxLength={fieldLimits.references}
                  placeholder="Links to sites or brands you admire"
                />
              </div>

              <div id="form-status" role="status" aria-live="polite" className="mt-3 min-h-[1.5em]">
                {status.state === "error" || status.state === "success" ? (
                  <p
                    className={`${
                      status.state === "error" ? "text-red-600 dark:text-red-400" : "text-green-700 dark:text-green-400"
                    } text-[15px]`}
                  >
                    {status.message}
                  </p>
                ) : null}
              </div>

              <div className="mt-4">
                <motion.button
                  variants={appear}
                  initial="initial"
                  animate="animate"
                  type="submit"
                  disabled={sending}
                  aria-busy={sending}
                  className="group flex justify-center items-center hover:bg-lightText hover:text-lightBg dark:hover:bg-darkText dark:hover:text-darkBg duration-300 text-[16px] 2xl:text-[26px] w-full sm:w-[45%] py-2 border-[1px] border-lightText dark:border-darkText rounded-full outline-none focus-visible:ring-2 focus-visible:ring-lightText dark:focus-visible:ring-darkText disabled:opacity-70"
                >
                  {sending ? (
                    <>
                      <Loading classNameSize="w-7 h-7" />
                      <span className="sr-only">Sending</span>
                    </>
                  ) : (
                    "Send enquiry"
                  )}
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MainPage;
