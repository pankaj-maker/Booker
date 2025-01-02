import SingleBook from "@/components/SingleBook";

// Define the Book interface
interface Book {
  id: string; // Or number, depending on how your books are identified
  title: string;
  author: string;
  rating: number; // Assuming you want to display ratings
}

// Define the Action type
interface Action {
  type: "add" | "sort" | "remove" | "like" | "unlike" | "delete"; // Updated with like, unlike, delete
  payload?: { id: string; title?: string; author?: string }; // Payload includes only id for like/unlike/delete actions
}

interface ListBookProps {
  books: Book[];
  dispatch: React.Dispatch<Action>;
}

const ListBook = ({ books, dispatch }: ListBookProps) => {
  console.log(books);
  return (
    <div className="flex gap-2 container mx-auto flex-wrap items-center justify-center mb-10">
      {books.map((book) => (
        <SingleBook key={book.id} book={book} dispatch={dispatch} />
      ))}
    </div>
  );
};

export default ListBook;
