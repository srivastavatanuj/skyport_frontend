import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image
        src="/logo4.png" // Path relative to /public
        alt="Skyport Logo"
        width={80}
        height={40}
        className="h-15 w-25"
      />
      <div>
        <h1 className="text-xl font-bold tracking-wide text-white">SKYPORT</h1>
        <p className="-mt-1 text-[11px] uppercase tracking-[3px] text-amber-500">
          EXIM CORP
        </p>
      </div>
    </Link>
  );
}