"use client";

import clsx from "clsx";
import { useRef, useState } from "react";
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
    <div className="flex px-2 h-10 rounded-md bg-neutral-800 text-neutral-100 gap-2 items-center">
      <label
        className={clsx("text-neutral-400", isFocused && "hidden")}
        htmlFor={props.name}
      >
        {props.label}
      </label>
      <input
        {...props.register(props.name)}
        onFocus={() => setIsFodcused(!isFocused)}
        className="flex-grow bg-transparent text-neutral-100 h-full p-2"
        type={props.type}
        name={props.name}
        id={props.name}
      />
      <props.icon className={clsx("text-neutral-400", isFocused && "hidden")} />
    </div>
  );
}

function TextAreaGrup(props: { label: string; name: string }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-neutral-400" htmlFor={props.name}>
        {props.label}
      </label>
      <textarea
        className=" p-2 rounded-md bg-neutral-800 text-neutral-100"
        name={props.name}
        id={props.name}
        cols={30}
        rows={10}
      />
    </div>
  );
}

export default function ContactPage() {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <main className="flex flex-col h-full w-full gap-10">
      <h1 className="text-4xl font-bold">Contact</h1>
      <p className="text-xl">
        If you want to contact me, you can send me an email at
      </p>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit(console.log)}>
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
        <TextAreaGrup label="Message" name="message" />
        <button
          className="bg-neutral-700 text-neutral-100 p-2 rounded-md"
          type="submit"
        >
          Send
        </button>
      </form>
    </main>
  );
}
