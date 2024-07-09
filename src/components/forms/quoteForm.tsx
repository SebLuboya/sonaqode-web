"use client";
import React, { useState } from "react";
import { Input } from "@/components/misc/Input";
import TextArea from "@/components/misc/TextArea";
import SingleImageDropzone from "@/components/misc/dropzones/singleFileDropzone";
import { Checkbox } from "@/components/misc/Checkbox";
import Link from "next/link";
import Button from "@/components/misc/button";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import toast from "react-hot-toast";
import { QuoteFormInput } from "@/types";
import axios from "axios";
import { isDev } from "@/utils";

const QuoteForm = () => {
  const [hasAgreed, setHasAgreed] = useState(false);
  const [file, setFile] = useState<File | undefined>();

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<QuoteFormInput>();

  const { mutate, isLoading } = useMutation({
    mutationKey: ["get-a-quote"],
    mutationFn: async (data: QuoteFormInput) => {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });
      if (file) {
        formData.append("file", file);
      }
      return axios.post("/api/quote", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    },
    onSuccess: () => {
      toast.success("Form submitted successfully", {
        duration: 5000,
        style: {
          border: "1px solid #0E6BA4",
          padding: "8px",
          paddingRight: "16px",
          paddingLeft: "16px",
        },
      });
      reset();
      setFile(undefined);
    },
    onError: (error) => {
      toast.error("There was an error submitting form. Try again!");
      console.error(error);
    },
  });

  return (
    <form
      onSubmit={handleSubmit((data) => mutate(data))}
      className="relative flex flex-col gap-6 w-full"
    >
      {isDev && (
        <Button
          type="button"
          onClick={() => {
            setValue("name", "John Doe");
            setValue("companyName", "Sonaqode");
            setValue("email", "brian@briannewton.dev");
            setValue("phone", "+44 (555) 000-0000");
            setValue("subject", "Company Webpage");
            setValue("description", "Super Secret");
          }}
          className={"absolute top-0 -right-[50%]"}
        >
          Fill Form
        </Button>
      )}
      <div>
        <Input
          label="Name"
          placeholder="Full Name"
          className="w-full"
          error={errors.name}
          {...register("name", { required: "name is required" })}
        />
      </div>
      <div>
        <Input
          label="Company name"
          placeholder="Company name"
          className="w-full"
          error={errors.companyName}
          {...register("companyName", { required: "company name is required" })}
        />
      </div>
      <div>
        <Input
          label="Email Address"
          type="email"
          placeholder="you@yourcompany.com"
          className="w-full"
          error={errors.email}
          {...register("email", { required: "email is required" })}
        />
      </div>
      <div>
        <Input
          label="Phone number"
          placeholder="+44 (555) 000-0000"
          className="w-full"
          error={errors.phone}
          {...register("phone", { required: "phone number is required" })}
        />
      </div>
      <div>
        <Input
          label="Subject"
          placeholder="How can we help you?"
          className="w-full"
          error={errors.subject}
          {...register("subject", { required: "subject is required" })}
        />
      </div>
      <div>
        <TextArea
          label="Tell us about your project"
          className="w-full min-h-36"
          placeholder="Confidentiality of your project is our top priority. The information you provide is protected through our standard NDA"
          error={errors.description}
          {...register("description", { required: "description is required" })}
        />
      </div>
      <SingleImageDropzone
        className="w-full h-28 rounded-md"
        value={file}
        onChange={(file) => {
          setFile(file);
        }}
      />
      <div className="flex flex-row gap-1">
        <Checkbox
          labelText="You agree to our friendly"
          labelClassName="text-white font-light"
          checked={hasAgreed}
          onChange={(event) => setHasAgreed(event.target.checked)}
        />
        <Link
          href="/privacy-policy"
          className="text-white font-light underline underline-offset-2"
        >
          privacy policy.
        </Link>
      </div>
      <Button
        disabled={!hasAgreed || isLoading}
        isLoading={isLoading}
        className="w-full lg:w-full xl:w-full h-12 lg:h-12 mt-8 hover:bg-white hover:text-sona-blue bg-sona-blue text-white disabled:hover:bg-sona-blue disabled:hover:text-white disabled:opacity-80"
      >
        Send Message
      </Button>
    </form>
  );
};
export default QuoteForm;
