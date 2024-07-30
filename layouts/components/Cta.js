import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";
import inmetro from "public/images/marca_inmetro.png"

function Cta({ cta }) {
  return (
    <section className="section px-4">
      <div className="section container rounded-xl shadow">
        <div className="row  mx-auto items-center justify-center">
          <div className="md:col-5 lg:col-4">
            <Image
              src={inmetro}
              alt="call to action image"
              width={150}
              height={50}
            />
          </div>
          <div className="mt-5 text-center md:mt-0 md:text-left md:col-6 lg:col-5">
            <h2>Está com alguma dúvida?</h2>
            <p className="mt-6">{markdownify("Acesse o link do inmetro")}</p>
            <Link
              className="btn btn-primary mt-4"
              href="https://www.gov.br/inmetro/pt-br"
              target="_blank"
            >
                Acesse INMETRO
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
