import Social from "@components/Social";
import config from "@config/config.json";
import social from "@config/social.json";
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const { copyright, footer_content } = config.params;
  return (
    <footer className="section bg-theme-light pb-0">
      <div className="container">
        {/* footer menu */}
        <div className="md-12 sm:col-6 lg:col-3">
          <Link href="/" aria-label="Bigspring">
            <Image
              src={config.site.logo}
              width={config.site.logo_width}
              height={config.site.logo_height}
              alt=""
            />
          </Link>
          {markdownify(footer_content, "p", "mt-3 mb-6")}
          <Social source={social} className="social-icons mb-8" />
        </div>
        {/* copyright */}
        <div className="border-t border-border py-6">
          {markdownify(copyright, "p", "text-sm text-center")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
