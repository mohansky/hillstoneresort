// "use client"; 
import { motion } from "framer-motion"; 
// import { AuroraBackground } from "../ui/aurora-background"; 
import { ChevronDown } from "lucide-react";

export default function HeroSection({
  title,
  link,
  btnText,
  id,
}: {
  title: string;
  link: string;
  btnText: string;
  id?: number;
}) {
  return (  
      <motion.div
        initial={{ opacity: 0.0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-6xl font-bold dark:text-neutral-200 text-center">
          {title}
        </div>
        <a href={link} title={btnText} aria-label={btnText}>
          <ChevronDown className="h-20 w-20 animate-[bounce_3s_ease-in-out_infinite] mt-14 mx-auto dark:text-neutral-200"  />
          <span className="sr-only">{btnText}</span>
        </a>
      </motion.div> 
  );
}

 