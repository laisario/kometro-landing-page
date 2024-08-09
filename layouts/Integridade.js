import { markdownify } from "@lib/utils/textConverter";
import Cta from "./components/Cta";
import Image from "next/image";
import { useState } from "react";

const pillarsTitle = {
  mission: "Missão",
  vission: "Visão e valores",
  esg: "ESG"
}

const pillarsText = {
  mission: "Texto completo sobre a Missão",
  vission: "Texto completo sobre a Visão e valores",
  esg: "Texto completo sobre a ESG"
}


function Integridade({ data }) {
  const [selectedOption, setSelectedOption] = useState('')
  const {
    frontmatter: { title, plans, call_to_action },
  } = data;
  return (
    <>
      <div className="container">
        <section className="section pb-0">
          <h1 className="text-center font-normal">{title}</h1>
          <div className="section row -mt-10 justify-center md:mt-0">
            {plans.map((plan, index) => (
              <div
                className="col-12 md:col-4 lg:px-0"
                key={plan.title + index}
              >
                <div className="card text-center bg-white border border-gray-300 hover:scale-105 transform transition-transform duration-300 p-4">
                  <h4>{plan.title}</h4>
                  <div className="mt-5 flex justify-center items-center">
                    <Image src={plan.image} alt={plan.title} width={100} height={50} />
                  </div>
                  {/* <h5 className="mt-2 font-normal text-text">
                    {plan?.subtitle}
                  </h5> */}
                  <button
                    className={"mt-5 bg-primary hover:bg-[#8F2807] text-white font-bold py-2 px-4 rounded transition-colors duration-300"}
                    onClick={() => setSelectedOption(plan.option)}
                  >
                    Leia mais
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
        {!!selectedOption && (
          <div className="relative bg-gray-200 p-6 rounded-lg shadow-2xl w-full  mx-auto">
            <h2 className="text-xl font-bold mb-4">
              {selectedOption === 'mission' ? 'Missão' : selectedOption === 'vision' ? 'Visão' : 'Valores e ESG'}
            </h2>
            <p>
              {selectedOption === 'mission' && 'Texto completo sobre a missão.'}
              {selectedOption === 'vision' && 'Texto completo sobre a visão.'}
              {selectedOption === 'esg' && 'Texto completo sobre os valores e ESG.'}
            </p>
          </div>
        )}
        {!!selectedOption && (
          <div className="col-12 mt-6 md:col-8 center">
            <div className="p-12 shadow-2xl">
              <button
                // className="absolute top-2 right-2 p-2 rounded"
                onClick={() => setSelectedOption('')}
              >
                X
              </button>
              <div className="faq-head relative">
                {markdownify(pillarsTitle[selectedOption], "h4")}
              </div>
              {markdownify(pillarsText[selectedOption], "p", "faq-body mt-4")}
            </div>
          </div>
        )}
        <Cta cta={call_to_action} />
      </div>
    </>
  );
}

export default Integridade;
