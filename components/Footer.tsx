import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100  mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src={"/logo.svg"}
            alt="car hub logo"
            width={118}
            height={118}
            className="object-contain"
            loading="lazy"
            decoding="async"
            style={{ color: "transparent" }}
          />
          <p className="text-base text-gray-700">
            Carhub 2023
            <br />
            All Rights Reserved ©
          </p>
        </div>
        <div className="footer__links">
          {footerLinks.map(({ title, links }) => {
            return (
              <div key={title} className="footer__link">
                <h3 className="font-bold">{title}</h3>
                <div className="flex flex-col gap-5">
                  {links.map(({ title, url }) => {
                    return (
                      <Link key={title} href={url} className="text-gray-500">
                        {title}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <p>@2023 CarHub. All rights reserved</p>
        <div className="footer__copyrights-link">
          <Link className="text-gray-500" href="/">
            Privacy &amp; Policy
          </Link>
          <Link className="text-gray-500" href="/">
            Terms &amp; Condition
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
