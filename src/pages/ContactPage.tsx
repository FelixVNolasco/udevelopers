import ContactForm from "../components/ContactForm";
import PageBanner from "../components/PageBanner";
import { siteInfo } from "../data/siteContent";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="mb-16">
      <PageBanner
        title="Contact Us"
        subtitle="For inquiries about investment opportunities or any of our projects, please fill out the form below or contact us directly."
      />

      <div className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-5 gap-12">
        {/* Contact Info */}
        <aside className="md:col-span-2 space-y-8">
          <div>
            <h2 className="text-lg font-semibold text-[#335264] mb-4">
              Get in Touch
            </h2>
            <p className="text-sm text-[#555] leading-relaxed">
              We'd love to hear from you. Reach out for investment
              opportunities, project details, or general inquiries.
            </p>
          </div>

          <div className="space-y-5">
            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-[#335264] mt-0.5 shrink-0" />
              <p className="text-sm text-[#555]">{siteInfo.address}</p>
            </div>
            <div className="flex items-start gap-3">
              <Phone size={18} className="text-[#335264] mt-0.5 shrink-0" />
              <p className="text-sm text-[#555]">{siteInfo.phone}</p>
            </div>
            <div className="flex items-start gap-3">
              <Mail size={18} className="text-[#335264] mt-0.5 shrink-0" />
              <a
                href={`mailto:${siteInfo.email}`}
                className="text-sm text-[#335264] hover:underline"
              >
                {siteInfo.email}
              </a>
            </div>
          </div>
        </aside>

        {/* Form */}
        <div className="md:col-span-3">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
