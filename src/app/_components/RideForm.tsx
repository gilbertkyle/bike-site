"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { addPermission } from "@/server/actions";

const rideFormSchema = z.object({
  email: z.string().email(),
  phoneNumber: z.string(),
  signature: z.string(),
});

export default function RideForm() {
  const [hasPermission, setHasPermission] = useState<boolean>(false);
  const { register, handleSubmit, reset } = useForm<
    z.infer<typeof rideFormSchema>
  >({
    resolver: zodResolver(rideFormSchema),
    defaultValues: {
      email: "",
      phoneNumber: "",
      signature: "",
    },
  });

  const onHandleSubmit = async (data: z.infer<typeof rideFormSchema>) => {
    if (!hasPermission) {
      alert("no permission?");
      return;
    }
    console.log("data: ", data);
    await addPermission(data);
  };

  const handleCheck = () => setHasPermission(!hasPermission);

  return (
    <form
      className="mx-auto w-full max-w-sm"
      onSubmit={handleSubmit((data) => onHandleSubmit(data))}
    >
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
          Email address
        </label>
        <input
          type="email"
          id="email"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter email"
          required
          {...register("email")}
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="telephone"
          className="block mb-2 font-medium text-gray-700"
        >
          Telephone number
        </label>
        <input
          type="tel"
          id="phoneNumber"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter telephone number"
          required
          {...register("phoneNumber")}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="confirmation" className="inline-flex items-center mr-2">
          <input
            type="checkbox"
            id="confirmation"
            name="confirmation"
            className="form-checkbox h-5 w-5 text-blue-500 focus:ring-2 focus:ring-blue-500"
            required
            checked={hasPermission}
            onChange={handleCheck}
          />
          <span className="ml-2 text-gray-700">
            I confirm the information provided
          </span>
        </label>
      </div>

      <div className="mb-4">
        <label
          htmlFor="signature"
          className="block mb-2 font-medium text-gray-700"
        >
          Electronic signature
        </label>
        <textarea
          id="signature"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={3}
          required
          {...register("signature")}
        />
      </div>

      <button
        type="submit"
        className="w-full px-4 py-2 font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Submit
      </button>
    </form>
  );
}
