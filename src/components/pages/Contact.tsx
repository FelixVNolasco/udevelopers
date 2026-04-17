import { MdLocationCity, MdMail } from "react-icons/md";
import { FaClock, FaWhatsapp } from "react-icons/fa";
import { Button } from "../ui/button";

function Contact() {
  return (
    <section
      id="contact"
      className="contact-area after-none contact-bg pt-120 pb-120 p-relative fix"
    >
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-4 order-1">
            <div className="contact-info">
              <div
                className="single-cta pb-30 mb-30 wow fadeInUp animated"
                data-animation="fadeInDown animated"
                data-delay=".2s"
              >
                <div className="f-cta-icon">
                  <i className="far flex items-center justify-center">
                    <MdLocationCity className="h-8 w-8" />
                  </i>
                </div>
                <h5>Dirección</h5>
                <p>
                  C. Guillermo Gonzalez Camarena 1600-INT. 3B, Santa Fe, Sta Fé,
                  Álvaro Obregón, 01210 Ciudad de México, CDMX
                </p>
              </div>
              <div
                className="single-cta pb-30 mb-30 wow fadeInUp animated"
                data-animation="fadeInDown animated"
                data-delay=".2s"
              >
                <div className="f-cta-icon">
                  <i className="far flex items-center justify-center">
                    <FaClock />
                  </i>
                </div>
                <h5>Horario</h5>
                <p>Lunes a Viernes de 9:00 a 18:00 hrs.</p>
              </div>
              <div
                className="single-cta wow fadeInUp animated"
                data-animation="fadeInDown animated"
                data-delay=".2s"
              >
                <div className="f-cta-icon">
                  <i className="far flex items-center justify-center">
                    <MdMail />
                  </i>
                </div>
                <h5>Contáctanos</h5>
                <div className="">
                  <a
                    className="flex items-center gap-2"
                    href="https://api.whatsapp.com/send/?phone=525519306671"
                    data-action="share/whatsapp/share"
                    title="Share on WhatsApp"
                    target="_blank"
                    rel="noopener"
                  >
                    <FaWhatsapp />
                    <span>525519306671</span>
                  </a>
                  {/* <a href="mailto:info@epiavontuur.mx">
                        <MdEmail />
                        <span className="pl-5">info@epiavontuur.mx</span>
                      </a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 order-2">
            <div className="contact-bg02">
              <div className="section-title center-align">
                <h2>Agendar una reunión</h2>
              </div>
              <form
                action="mail.php"
                method="POST"
                className="contact-form mt-30"
              >
                <div className="row">
                  <div className="col-lg-6">
                    <div className="contact-field p-relative c-name mb-20">
                      <input
                        type="text"
                        id="firstn"
                        name="firstn"
                        placeholder="Nombre"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="contact-field p-relative c-subject mb-20">
                      <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Correo"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="contact-field p-relative c-subject mb-20">
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        placeholder="Número de Teléfono"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="contact-field p-relative c-subject mb-20">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="Asunto"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="contact-field p-relative c-message mb-30">
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Mensaje"
                      ></textarea>
                    </div>
                    <div className="slider-btn">
                      <Button
                        type="submit"
                        className="w-full bg-[#00173C]"
                        size={"lg"}
                        variant={"default"}
                      >
                        Enviar
                      </Button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
