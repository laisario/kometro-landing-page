import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

function Cta({ cta }) {
  return (
    <section className="section mb-28 rounded-xl shadow-2xl">
      <div className="row mx-auto items-center justify-center flex-col md:flex-row">
        <div className="md:col-5 lg:col-4 flex justify-center">
          <Image
            src={cta?.image}
            alt="call to action image"
            width={150}
            height={50}
          />
        </div>
        <div className="mt-5 text-center md:mt-0 md:text-left md:col-6 lg:col-5">
          <h2>{cta?.title}</h2>
          <p className="mt-6">{markdownify(cta?.content)}</p>
          <Link
            className="btn btn-primary mt-4"
            href={cta?.button?.link}
            target="_blank"
          >
            {cta?.button?.label}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Cta;
