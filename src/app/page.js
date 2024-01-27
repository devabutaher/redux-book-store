"use client";

import Card from "@/component/Card";
import Form from "@/component/Form";
import { useState } from "react";

export default function Home() {
  const [editBook, setEditBook] = useState(null);

  return (
    <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
      <Card setEditBook={setEditBook} />
      <Form editBook={editBook} setEditBook={setEditBook} />
    </div>
  );
}
