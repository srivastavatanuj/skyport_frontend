import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import MaxWidthWrapper from "./ui/MaxWidthWrapper";
import Image from "next/image";



export default function Footer() {
  return (
    <footer className="bg-[#071d3d] text-white relative">
      <div className="absolute inset-0">
        <Image
          src="/images/footer/footer-bg.png"
          alt="World Map"
          fill
          className="object-cover opacity-25"
        />
      </div>
      <MaxWidthWrapper>
        <div className="relative">
          <div className="mx-auto flex  flex-col items-center justify-between gap-8 px-6 py-5 lg:flex-row">
            <div>
              <p className="mb-2 text-sm uppercase tracking-widest text-amber-400 font-bold">
                Ready To Start Your
                <br />
                Global Trade Journey?
              </p>

              <h2 className="max-w-xl text-2xl font-bold leading-tight !text-white">
                Let's Build Strong Business Partnerships Together.
              </h2>
            </div>

            <div className="flex gap-4">

              <Link
                href="/request-a-quote"
                className="rounded-md bg-amber-500 px-8 py-4 font-semibold hover:bg-amber-600"
              >
                GET A QUOTE
              </Link>
              <Link
                href="/contact"
                className="rounded-md border border-white/30 px-8 py-4 hover:bg-white/10"
              >
                CONTACT US
              </Link>

            </div>
          </div>
        </div>
      </MaxWidthWrapper>
      <span className="border-b absolute w-[99vw] border-[#1f3451]">

      </span>

      {/* Footer */}
      <MaxWidthWrapper className="mx-auto grid gap-10 px-6 py-5 md:grid-cols-2 lg:grid-cols-5 bg-[#061B3D] opacity-[99%]">

        {/* Company */}
        <div>
          <div className="flex">

            <Image
              src="/logo4.png" // Path relative to /public
              alt="Skyport Logo"
              width={80}
              height={40}
              className="h-15 w-25"
            />
            <div>
              <h2 className="text-3xl font-bold !text-white">SKYPORT</h2>

              <p className="mb-6 text-sm uppercase tracking-widest text-amber-400">
                Exim Corp
              </p>
            </div>

          </div>


          <p className="text-sm leading-7 text-gray-300">
            Your trusted partner in global trade excellence. We connect markets,
            deliver quality and build long-term partnerships.
          </p>

          {/* <div className="mt-6 flex gap-4">
            <Facebook size={18} />
            <Linkedin size={18} />
            <Instagram size={18} />
          </div> */}
        </div>

        {/* Company */}
        <div>
          <h3 className="mb-3 text-lg font-semibold">Company</h3>

          <ul className="space-y-1 text-gray-300">
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/mission">Our Mission</Link></li>
            <li><Link href="/vision">Our Vision</Link></li>
            <li><Link href="/values">Our Values</Link></li>
            <li><Link href="/careers">Careers</Link></li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="mb-3 text-lg font-semibold">Products</h3>

          <ul className="space-y-1 text-gray-300">
            <li>Energy</li>
            <li>Metal Scraps</li>
            <li>Plywood</li>
            <li>Decorative Laminates</li>
            <li>Dry Fruits</li>
            <li>Agri Commodities</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-3 text-lg font-semibold">Quick Links</h3>

          <ul className="space-y-1 text-gray-300">
            <li>Global Markets</li>
            <li>Industries Served</li>
            <li>Trade Process</li>
            <li>News & Updates</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-3 text-lg font-semibold">Contact</h3>

          <div className="space-y-4 text-sm text-gray-300">
            <div className="flex gap-3">
              <MapPin className="mt-1" size={18} />
              <p>
                Atria Tower, Chennai,
                <br />
                Tamil Nadu, India
              </p>
            </div>

            <div className="flex gap-3">
              <Phone size={18} />
              +91 9876543210
            </div>

            <div className="flex gap-3">
              <Mail size={18} />
              info@skyportexim.com
            </div>
          </div>
        </div>
      </MaxWidthWrapper>

      <div className="border-t border-white/10 py-1 text-center text-xs text-gray-400 flex justify-between px-6 opacity-[99%]">
        <span>© {new Date().getFullYear()} Skyport Exim Corp. All Rights Reserved.</span>
        <span className="flex gap-1 s">
          <a className="cursor-pointer" href="/privacy-policy">Privacy Policy</a>
          <p>|</p>
          <a className="cursor-pointer" href="/terms-and-conditions">Terms and Conditions</a>
        </span>

      </div>
    </footer>
  );
}