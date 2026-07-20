
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { z } from "zod";


import {
  productOptions,
  subjectOptions,
} from "@/data/contact";
import {Input,Select} from "../common/InputType";

const contactSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  company: z.string().optional(),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(10, "Enter a valid phone number"),
  country: z.string().min(2, "Country is required"),
  subject: z.string().min(1, "Select a subject"),
  product: z.string().optional(),
  message: z.string().min(10, "Message is too short"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    console.log(data);
  };

  return (
    <div className="rounded-2xl bg-white p-8 shadow-xl">
      <h2 className="text-3xl font-bold">
        Send Us a Message
      </h2>

      <div className="mt-4 h-1 w-16 rounded bg-amber-500" />

      <p className="mt-5 text-slate-600">
        Fill in the form below and our team will respond to your inquiry.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-10 space-y-6 text-black"
      >
        {/* Row 1 */}
        <div className="grid gap-6 md:grid-cols-2">
          <Input
            placeholder="Full Name *"
            register={register("fullName")}
            error={errors.fullName?.message}
          />

          <Input
            placeholder="Company Name"
            register={register("company")}
          />
        </div>

        {/* Row 2 */}
        <div className="grid gap-6 md:grid-cols-2">
          <Input
            placeholder="Email Address *"
            register={register("email")}
            error={errors.email?.message}
          />

          <Input
            placeholder="Phone Number *"
            register={register("phone")}
            error={errors.phone?.message}
          />
        </div>

        {/* Row 3 */}
        <div className="grid gap-6 md:grid-cols-2">
          <Input
            placeholder="Country *"
            register={register("country")}
            error={errors.country?.message}
          />
  
          <Select
            register={register("subject")}
            options={subjectOptions}
            placeholder="Subject / Requirement *"
          />
        </div>

        {/* Product */}
        <Select
          required={true}
          register={register("product")}
          options={productOptions}
          placeholder="Product / Service Interested In"
        />

        {/* Message */}
        <div>
          <textarea
            {...register("message")}
            rows={6}
            placeholder="Your Message / Requirements *"
            className="w-full rounded-lg border border-slate-300 p-4 outline-none transition focus:border-amber-500"
          />

          {errors.message && (
            <p className="mt-2 text-sm text-red-500">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Footer */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <button
            type="submit"
            className="inline-flex items-center gap-3 font-bold rounded-lg bg-amber-500 px-8 py-4 text-white transition hover:bg-amber-600"
          >
            Submit Enquiry
            <ArrowRight size={18} />
          </button>

          <div className="flex items-center gap-3 text-slate-500">
            <ShieldCheck className="text-green-600" />

            <p className="text-sm">
              We respect your privacy. Your information is safe with us.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
