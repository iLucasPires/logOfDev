"use client";

import clsx from "clsx";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoMail, IoNewspaperSharp } from "react-icons/io5";
import { IconType } from "react-icons/lib";

function InputGrup(props: {
  label: string;
  name: string;
  type: string;
  icon: IconType;
  register: any;
}) {
  const [isFocused, setIsFodcused] = useState(false);

  return (
    <div
      className={clsx(
        "gap2 flex h-10 w-full items-center",
        "bg-neutral-900 text-neutral-100 ",
        "focus:border-neutral-400 focus:ring-1 focus:ring-neutral-700"
      )}
    >
      <props.icon
        className={clsx("ml-2 text-neutral-400", isFocused && "hidden")}
      />
      <input
        {...props.register(props.name)}
        onFocus={() => setIsFodcused(true)}
        onBlur={(e: any) => e.target.value === "" && setIsFodcused(false)}
        onChange={(e: any) => e.target.value !== "" && setIsFodcused(true)}
        className="h-full w-full flex-grow bg-transparent p-2 text-neutral-100"
        placeholder={`Your ${props.label}`}
        type={props.type}
        name={props.name}
        id={props.name}
        required
      />
    </div>
  );
}

function TextAreaGrup(props: { label: string; name: string; register: any }) {
  return (
    <div className="flex flex-col gap-1">
      <textarea
        placeholder="Send me a message and I will answer you as soon as possible"
        className=" rounded-md bg-neutral-900 p-2 text-neutral-100"
        name={props.name}
        id={props.name}
        cols={30}
        rows={10}
        {...props.register(props.name)}
      />
    </div>
  );
}

export default function ContactPage() {
  const { register, handleSubmit, reset } = useForm();

  async function sendEmail(data: any) {
    reset();
    const [name, email, message] = [data.name, data.email, data.message];
    if (message === "" || email === "" || name === "") {
      alert("Please fill all the fields");
      return;
    }

    const url = "https://formsubmit.co/pireslucas440@gmail.com";
    try {
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main className="flex h-full w-full flex-col gap-5">
      <h1 className="text-4xl font-bold">Contact</h1>
      <p className="text-neutral-400">
        You can contact me by email or using the form below.
      </p>
      <form
        className="flex flex-col gap-2"
        onSubmit={handleSubmit((data) => sendEmail(data))}
      >
        <div className="flex w-full gap-2">
          <InputGrup
            label="Name"
            name="name"
            type="text"
            icon={IoNewspaperSharp}
            register={register}
          />
          <InputGrup
            label="Email"
            name="email"
            type="email"
            icon={IoMail}
            register={register}
          />
        </div>
        <TextAreaGrup label="Message" name="message" register={register} />
        <button className="rounded-md bg-neutral-900 p-2 text-neutral-100">
          Send
        </button>
      </form>
    </main>
  );
}
