
import { contactInfo } from "@/data/contact";

export default function ContactInfo() {
  return (
    <div>
      {/* Heading */}
      <h2 className="text-4xl font-bold text-slate-900">
        Get in Touch
      </h2>

      <div className="mt-4 h-1 w-20 rounded-full bg-amber-500" />

      <p className="mt-6 text-lg leading-8 text-slate-600">
        Reach out to us through any of the following channels or fill the form
        and we'll get back to you shortly.
      </p>

      {/* Contact Cards */}
      <div className="mt-12 space-y-8">
        {contactInfo.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="flex items-start gap-5 border-b border-slate-200 pb-8 last:border-none"
            >
              {/* Icon */}
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#071D3D] text-white">
                <Icon size={28} />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>

                <div className="mt-2 space-y-1">
                  {item.details.map((detail) => (
                    <p
                      key={detail}
                      className="text-slate-600"
                    >
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}