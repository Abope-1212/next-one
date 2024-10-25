"use client";

import { useActionState } from "react";

export default function FormSubmit() {
  const status = useActionState();

  console.log(status);
  if (status.pending) {
    return <>Creating Post...</>;
  }

  return (
    <>
      <button type="reset">Reset</button>
      <button>Create Post</button>
    </>
  );
}
