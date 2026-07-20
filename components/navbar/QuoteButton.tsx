import Link from "next/link";

export default function QuoteButton() {
  return (
    <Link
      href="/request-a-quote"
      className="rounded-lg bg-amber-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:bg-amber-600 hover:shadow-lg"
    >
      Get A Quote
    </Link>
  );
}