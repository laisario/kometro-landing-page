import config from "@config/config.json";
import { markdownify } from "@lib/utils/textConverter";

const titlePage = "Fale conosco"
const title = "Por que você deve entrar em contato com a nossa equipe!"
const description = "Somos especialistas em calibrações metrológicas, garantindo precisão e confiabilidade para seus equipamentos. Nossa equipe qualificada oferece serviços rápidos, eficientes e certificados. Contate-nos para soluções personalizadas e suporte técnico especializado, assegurando a conformidade e a qualidade que sua empresa merece.";
const contacts = ["Telefone: 24 98809 5115", "Email: contato@rkp.com.br", "Endereço: Rod. Benjamim Constanti, 4703, Lote 06 – km 05 – Pinheiral – RJ – CEP 27197-000"]

const Contact = () => {
  const { contact_form_action } = config.params;

  return (
    <section className="section">
      <div className="container">
        {markdownify(titlePage, "h1", "text-center font-normal")}
        <div className="section row pb-0">
          <div className="col-12 md:col-6 lg:col-7">
            <form
              className="contact-form"
              method="POST"
              action={contact_form_action}
            >
              <div className="mb-3">
                <input
                  className="form-input w-full rounded"
                  name="name"
                  type="text"
                  placeholder="Nome"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-input w-full rounded"
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-input w-full rounded"
                  name="subject"
                  type="text"
                  placeholder="Assunto"
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-textarea w-full rounded-md"
                  rows="7"
                  placeholder="Sua mensagem"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Mandar agora
              </button>
            </form>
          </div>
          <div className="content col-12 md:col-6 lg:col-5">
            {markdownify(title, "h4")}
            {markdownify(description, "p", "mt-4")}
            <ul className="contact-list mt-5">
              {contacts?.map((contact, index) => (
                <li key={index}>
                  {markdownify(contact, "strong", "text-dark")}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
