// import React, { useState, useEffect } from "react";
// import Navbar from "./navbar";
// import HamburgerMenu from "./hamburger-menu";
// import {
//   motion,
//   AnimatePresence,
//   useScroll,
//   useMotionValueEvent,
// } from "framer-motion";
// import { cn } from "@/lib/utils";
// import type { MenuProps } from "@/types";

// export default function Menu({ links }: MenuProps) {
//   // Initialize state with false to match server-side rendering
//   const [mounted, setMounted] = useState(false);
//   const [visible, setVisible] = useState(false);
//   const { scrollYProgress } = useScroll();

//   // Only start tracking scroll after component mounts
//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   useMotionValueEvent(scrollYProgress, "change", (current) => {
//     if (!mounted) return;

//     const previous = scrollYProgress.getPrevious();

//     if (current === undefined || previous === undefined) return;

//     const direction = current - previous;

//     if (current < 0.05) {
//       setVisible(false);
//     } else {
//       setVisible(direction < 0);
//     }
//   });

//   return (
//     <AnimatePresence mode="wait">
//       <motion.div
//         initial={{
//           opacity: 1,
//           y: -100,
//         }}
//         animate={{
//           y: visible ? 0 : -100,
//           opacity: visible ? 1 : 0,
//         }}
//         transition={{
//           duration: 0.2,
//         }}
//         className={cn(
//           "fixed py-5 top-0 left-0 right-0 bg-transparent backdrop-blur z-50",
//         )}
//       >
//         <div className="sm:max-w-xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl px-2 md:px-0 mx-auto">
//           <div className="flex justify-between items-center">
//             <a
//               href="/"
//               className="flex text-secondary text-2xl"
//               title="Hillstone Resort"
//             >
//               Hillstone Resort 
//             </a>

//             {/* Mobile Menu */}
//             <div className="lg:hidden">
//               <HamburgerMenu links={links} />
//             </div>

//             {/* Desktop Menu */}
//             <div className="hidden lg:block">
//               <Navbar links={links} />
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </AnimatePresence>
//   );
// }

import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import HamburgerMenu from "./hamburger-menu";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import type { MenuProps } from "@/types";

export default function Menu({ links }: MenuProps) {
  const [mounted, setMounted] = useState(false);
  // const [visible, setVisible] = useState(false);
  const [scrolledBelowFold, setScrolledBelowFold] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    setMounted(true);
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (!mounted) return;

    const previous = scrollYProgress.getPrevious();

    if (current === undefined || previous === undefined) return;

    const direction = current - previous;

    // Determine if scrolled below the fold (adjust 0.05 as needed)
    // setScrolledBelowFold(current > 0.05);

    if (current < 0.05) {
      setScrolledBelowFold(false);
    } else {
      setScrolledBelowFold(direction < 0);
    }


    // if (current < 0.05) {
    //   setVisible(false);
    // } else {
    //   setVisible(direction < 0);
    // }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          // y: -100,
        }}
        // animate={{
        //   y: visible ? 0 : -100,
        //   opacity: visible ? 1 : 0,
        // }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "fixed py-1 top-0 left-0 right-0 backdrop-blur-sm z-50",
          scrolledBelowFold ? "bg-black" : "bg-transparent",
        )}
      >
        <div className="sm:max-w-xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl px-2 md:px-0 mx-auto">
          <div className="flex justify-between items-center">
            <a
              href="/"
              // className="flex text-secondary text-2xl"
              className={cn(
                "flex text-secondary text-2xl",
                scrolledBelowFold ? "text-muted" : "text-white",
              )}
              title="Hillstone Resort"
            >
              <img src="/images/hsr-logo-black.svg" alt="hillstone-logo" className="w-24 h-auto" />
              {/* Hillstone Resort  */}
            </a>

            <div className="lg:hidden">
              <HamburgerMenu links={links} />
            </div>

            <div className="hidden lg:block">
              <Navbar links={links} />
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}