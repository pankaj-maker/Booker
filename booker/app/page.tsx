"use client";

import { useReducer } from "react";
import { booksReducer } from "@/lib/reducer";
import AddBook from "@/components/AddBook";
import ListBook from "@/components/ListBook";
import  LampDemo  from "@/components/ui/lamp";

import { sampleData } from "@/lib/sampleData";

function Page() {
  const [books, dispatch] = useReducer(booksReducer, sampleData);

  return (
    <div>
      <LampDemo />
      <AddBook dispatch={dispatch} />
      <ListBook books={books} dispatch={dispatch} />
    </div>
  );
}

export default Page;