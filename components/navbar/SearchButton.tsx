import { Search } from "lucide-react";

export default function SearchButton() {
  return (
    <button
      aria-label="Search"
      className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/20 text-white transition-all duration-300 hover:border-amber-500 hover:bg-white/10 hover:text-amber-500"
    >
      <Search size={18} />
    </button>
  );
}