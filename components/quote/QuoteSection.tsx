import QuoteForm from "./QuoteForm";
import QuoteSidebar from "./QuoteSidebar";

export default function QuoteSection() {
  return (
    <section className="bg-slate-50 !py-10">
      <div className="mx-auto  px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
          <QuoteForm />

          <QuoteSidebar />
        </div>
      </div>
    </section>
  );
}