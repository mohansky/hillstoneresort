import { Heading } from "../styled/heading";
import { Button } from "../ui/button";
import {
  Copyright,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";
import { links } from "@/content/data/menu";

export default function Footer({
  author,
  footnote,
  copyright,
}: {
  author: any;
  footnote: string;
  copyright: string;
}) {
  return (
    <footer className="bg-muted border-t border-secondary p-8">
      <div className="grid lg:grid-cols-3 gap-4 justify-between py-20 mx-auto">
        <div className="text-center mx-auto mb-10">
          <img
            src="./images/hsr-logo.png"
            alt="hillstone-logo"
            className="mx-auto w-56 text-center"
          /> 
        </div>

        <div className="space-y-3 mb-10">
          <Heading size="sm">Contact </Heading>
          <span className="flex items-center">
            <a
              href="https://www.google.com/maps/place/Hill+Stone+Resort/@28.1586164,91.8464716,17z/data=!3m1!4b1!4m5!3m4!1s0x373e49c5ab614a43:0x77d0e3b48fb46cfe!8m2!3d28.1586164!4d91.8464716"
              target="_blank"
            >
              <Button variant="link" className="px-0">
                <MapPin className="w-6 h-6 hover:text-muted-foreground mr-2" />
                Roing, Arunachal Pradesh, India
              </Button>
            </a>
          </span>

          <span className="flex items-center">
            <a href="tel:+919845632121">
              <Button variant="link" className="px-0">
                <Phone className="w-6 h-6 hover:text-muted-foreground mr-2" />
                +91 984 563 2121
              </Button>
            </a>
          </span>
          <span className="flex items-center">
            <a href="mailto:booking@hillstoneresort.com">
              <Button variant="link" className="px-0">
                <Mail className="w-6 h-6 hover:text-muted-foreground mr-2" />
                booking@hillstoneresort.com
              </Button>
            </a>
          </span>
        </div>

        <div className="mb-5">
          <Heading size="sm">Links</Heading>
          <ul className="my-3 ml-1 list-none [&>li]:mt-1">
            {links.map((link) => (
              <li key={link.text}>
                <a href={link.link}>
                  <Button variant="link" className="px-0">
                    {link.text}
                  </Button>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t-2 border-black flex justify-between pt-5">
        <div className="flex justify-end">
          <span className="flex items-center">
            {copyright} <Copyright className="w-4 h-4 mx-2" />{" "}
            {new Date().getFullYear()}
            <a
              className="ml-1 footer-email hover:text-mkorange transition duration-150 ease-in-out"
              href={`mailto:${author.email}`}
            ></a>
          </span>
        </div>

        <div className="hidden lg:block">
          <Heading size="md">The Hill Stone Resort</Heading>
        </div>

        <div className="flex flex-row items-center gap-4">
          <a
            href="https://www.facebook.com/hillstoneresort/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook
              name="logos:facebook-icon"
              className="w-6 h-6 hover:text-muted-foreground"
            />
          </a>
          <a
            href="https://www.instagram.com/hillstoneresort/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="w-6 h-6 hover:text-muted-foreground" />
          </a>
          <a
            href="https://www.youtube.com/channel/UC3-9-5-2-0-4-6-8-9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Youtube className="w-6 h-6 hover:text-muted-foreground" />
          </a>
        </div>
      </div>
    </footer>
  );
}
