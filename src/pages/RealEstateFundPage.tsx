import { realEstateFundContent, siteInfo } from "../data/siteContent";
import PageBanner from "../components/PageBanner";
import ContactForm from "../components/ContactForm";
import { Phone, MapPin, Mail } from "lucide-react";

export default function RealEstateFundPage() {
  return (
    <div className="mb-16">
      <PageBanner title={realEstateFundContent.title} />

      <div className="max-w-6xl mx-auto px-6 py-12">

        <div className="grid lg:grid-cols-2 lg:gap-8">        
          <section className="mb-8 lg:mb-12 space-y-8">
            <img
              src={realEstateFundContent.images.ddGraphic}
              alt="DD Graphic"
              className="w-full lg:w-11/12 rounded-lg shadow-sm"
            />
          </section>

          <section id="real-estate-fund-500" className="mb-8 lg:mb-12">
            <h2 className="text-xl text-[#335264] font-semibold mb-4">
              {realEstateFundContent.opportunity.title}
            </h2>
            {realEstateFundContent.opportunity.description
              .split("\n\n")
              .map((p, i) => (
                <p
                  key={i}
                  className="text-sm text-[#555] leading-relaxed mb-4"
                >
                  {p}
                </p>
              ))}
          </section>
        </div>

        <img
          src={realEstateFundContent.images.land}
          alt="Land"
          className="w-full rounded-lg shadow-sm"
        />


        <section id="contactus" className="mb-12 lg:mt-12 mt-4">
          <h2 className="text-xl text-[#335264] font-semibold mb-6">
            Contact Us
          </h2>

          <div className="grid md:grid-cols-2 gap-12 ">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-[#335264]/10 text-[#335264]">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#335264] mb-1">
                    Call us
                  </h3>
                  <p className="text-sm text-[#555]">T. {siteInfo.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-[#335264]/10 text-[#335264]">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#335264] mb-1">
                    Address
                  </h3>
                  <p className="text-sm text-[#555]">{siteInfo.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-[#335264]/10 text-[#335264]">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#335264] mb-1">
                    E-mail
                  </h3>
                  <p className="text-sm text-[#555]">{siteInfo.email}</p>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </section>
      </div>
    </div>
  );
}
