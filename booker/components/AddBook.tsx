import { FormEvent, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowDown10, Cross } from "lucide-react";

// Define the Action type
interface Action {
  type: "add" | "sort";
  payload?: { title: string; author: string };
}

// Define the props for the AddBook component
interface AddBookProps {
  dispatch: React.Dispatch<Action>;
}

function AddBook({ dispatch }: AddBookProps) {
  const bookRef = useRef<HTMLInputElement>(null);
  const authorRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const bookValue = bookRef.current?.value.trim();
    const authorValue = authorRef.current?.value.trim();

    if (!bookValue || !authorValue) return; // Check for empty values

    console.log(bookValue, authorValue);

    dispatch({
      type: "add",
      payload: { title: bookValue, author: authorValue },
    });

    if (bookRef.current?.value && authorRef.current?.value) {
      bookRef.current.value = "";
      authorRef.current.value = "";
    }
  };

  const handleSort = () => {
    dispatch({ type: "sort" });
  };

  return (
    <form
      className="max-w-96 mx-auto flex flex-col gap-2 mb-10"
      onSubmit={handleSubmit}
    >
      <Input type="text" placeholder="Book title" required ref={bookRef} />
      <Input type="text" placeholder="Author name" required ref={authorRef} />
      <div className="flex gap-2">
        <Button type="submit">
          <Cross />
          Add
        </Button>
        <Button variant="outline" type="button" onClick={handleSort}>
          <ArrowDown10 />
          Sort
        </Button>
      </div>
    </form>
  );
}

export default AddBook;
