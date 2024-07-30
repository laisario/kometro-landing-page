import Link from "next/link";
import Cta from "./components/Cta";
import mission from "public/images/mission.png"
import vision from "public/images/vision.png"
import esg from "public/images/values.png"
import Image from "next/image";
import { markdownify } from "@lib/utils/textConverter";
import { useState } from "react";

const topics = [
  {
    title: 'Missão',
    image: mission,
    option: 'missao'
  },
  {
    title: 'Visão e valores',
    image: vision,
    option: 'visao_valores'
  },
  {
    title: 'ESG',
    image: esg,
    option: 'esg'
  }
]

const readMore = {
  "visao_valores": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  "missao": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  "esg": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
}

function Pricing({ data }) {
  const [selectedOption, setSelectedOpion] = useState('')
  const {
    frontmatter: { title, plans, call_to_action },
  } = data;
  return (
    <>
      <section className="section pb-0">
        <div className="container">
          <h1 className="text-center font-normal">Nossos pilares</h1>
          <div className="section row -mt-10 justify-center md:mt-0">
            {topics.map((topic, index) => (
              <div
                className={`col-12 md:col-4 ${!topic.recommended ? "lg:px-0" : "col-recommended"
                  }`}
                key={topic.title + index}
              >
                <div className="card text-center bg-white border border-gray-300 hover:scale-105 transform transition-transform duration-300 p-4">
                  <h4>{topic.title}</h4>
                  <div className="mt-5 flex justify-center items-center">
                    <Image src={topic.image} alt={topic.title} width={100} height={50} />
                  </div>
                  <h5 className="mt-2 font-normal text-text">
                    Lorem yljdfsflbfejkbakjbflaf
                    dsjhfksdhfgs
                    ajkdfkbhaljfbhlah
                  </h5>
                  <button
                    className={"mt-5 bg-primary hover:bg-[#8F2807] text-white font-bold py-2 px-4 rounded transition-colors duration-300"}
                    onClick={() => setSelectedOpion(topic.option)}
                  >
                    Leia mais
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <div className="flex justify-center items-center">
        <div className="bg-gray-100 p-6 rounded-lg text-center">
          {markdownify(readMore[selectedOption], "p", "mx-auto max-w-lg")}
        </div>
      </div> */}
      <div>
      </div>
      <Cta cta={call_to_action} />
    </>
  );
}

export default Pricing;
