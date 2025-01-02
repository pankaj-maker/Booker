import { Crown } from "lucide-react";
import { ModeToggle } from "@/components/ModeToggle";

const Header = () => {
  return (
    <header className="flex justify-between px-4 py-2 border-b border-forground items-center">
      <Crown />
      <ModeToggle />
    </header>
  );
};

export default Header;