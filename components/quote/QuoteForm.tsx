"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";

import FormField from "./FormField";
import FormSelect from "./FormSelect";
import FormTextarea from "./FormTextArea";
import {Input,Select} from "../common/InputType";

import {
  countries,
  productCategories,
  products,
  units,
} from "@/data/quote";

const quoteSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  companyName: z.string().min(2, "Company name is required"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(10, "Enter a valid phone number"),
  country: z.string().min(1, "Select a country"),
  category: z.string().min(1, "Select a category"),
  product: z.string().min(1, "Select a product"),
  quantity: z.string().min(1, "Enter quantity"),
  unit: z.string().min(1, "Select unit"),
  specification: z.string().optional(),
  message: z.string().optional(),
  agree: z.boolean().refine((v) => v, {
    message: "Please accept the privacy policy.",
  }),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

export default function QuoteForm() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
  });

  const category = watch("category");

  const onSubmit = (data: QuoteFormData) => {
    console.log(data);
  };

  return (
    <div className="rounded-3xl bg-white text-black p-10 shadow-xl">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-slate-900">
          Request a Quote
        </h2>

        <p className="mt-3 text-slate-600">
          Fill in your requirements and our export specialists will
          contact you with the best quotation.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormField
            label="Full Name"
            required
            placeholder="John Doe"
            registration={register("fullName")}
            error={errors.fullName}
          />

          <FormField
            label="Company Name"
            required
            placeholder="ABC Trading Ltd."
            registration={register("companyName")}
            error={errors.companyName}
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <FormField
            label="Email Address"
            required
            type="email"
            placeholder="john@example.com"
            registration={register("email")}
            error={errors.email}
          />

          <FormField
            label="Phone Number"
            required
            placeholder="+91 9876543210"
            registration={register("phone")}
            error={errors.phone}
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Select
            placeholder="Country"
            label="Country"
            required={true}
            options={countries}
            register={register("country")}
            error={errors.country}
          />

          <Select
            placeholder="Product Category"
            label="Product Category"
            required={true}
            options={productCategories}
            register={register("category")}
            error={errors.category}
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Select
            placeholder="Product"
            label="Product"
            required={true}
            options={
              category
                ? products[
                    category as keyof typeof products
                  ] || []
                : []
            }
            register={register("product")}
            error={errors.product}
          />

          <FormField
            label="Required Quantity"
            required
            placeholder="100"
            registration={register("quantity")}
            error={errors.quantity}
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <FormSelect
            label="Unit"
            required
            options={units}
            registration={register("unit")}
            error={errors.unit}
          />

          <div />
        </div>

        <FormTextarea
          label="Specifications"
          rows={4}
          placeholder="Mention grade, quality, dimensions or other product specifications."
          registration={register("specification")}
          error={errors.specification}
        />

        <FormTextarea
          label="Additional Requirements"
          rows={5}
          placeholder="Tell us anything else that will help us prepare an accurate quotation."
          registration={register("message")}
          error={errors.message}
        />

        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            {...register("agree")}
            className="mt-1"
          />

          <p className="text-sm text-slate-600">
            I agree to the Privacy Policy and Terms &
            Conditions.
          </p>
        </div>

        {errors.agree && (
          <p className="text-sm text-red-500">
            {errors.agree.message}
          </p>
        )}

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-amber-500 py-4 text-lg font-semibold text-white transition hover:bg-amber-600"
        >
          <Send size={18} />
          Submit Quote Request
        </button>
      </form>
    </div>
  );
}