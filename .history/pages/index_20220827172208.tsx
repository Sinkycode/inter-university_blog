import React from 'react'
import Form from "../components/Form";

export default function Index({ page }) {
  const { form } = page;

  return <Form {...form} />;
}
