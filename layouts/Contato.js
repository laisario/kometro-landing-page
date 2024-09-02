import config from "@config/config.json";
import { markdownify } from "@lib/utils/textConverter";
import { useState } from "react";

const Contato = ({ data }) => {
  const { frontmatter } = data;
  const { title, info, email } = frontmatter;
  const { contact_form_action } = config.params;
  const [emailSent, setEmailSent] = useState(false)

  return (
    <section className="section">
      <div className="container">
        {markdownify(title, "h1", "text-center font-normal")}
        <div className="section row pb-0">
          <div className="col-12 md:col-6 lg:col-7">
            <form
              className="contact-form"
              method="POST"
              action={contact_form_action}
              onSubmit={() => setEmailSent(true)}
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
                  name="message"
                  className="form-textarea w-full rounded-md"
                  rows="7"
                  placeholder="Sua mensagem"
                />
              </div>
          
              {emailSent ? <p className="text-white bg-lime-500 p-3 rounded">{email?.success} ✔️ </p> : <button type="submit" className="btn btn-primary">
                Enviar mensagem
              </button>}
            </form>
          </div>
          <div className="content col-12 md:col-6 lg:col-5">
            {markdownify(info.title, "h4")}
            {markdownify(info.description, "p", "mt-4")}
            <ul className="contact-list mt-5">
              {info?.contacts?.map((contact, index) => (
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

export default Contato;
