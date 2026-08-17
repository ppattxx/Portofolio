"use client";
import { IconArrowUp } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.9 }}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.94 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="glass fixed bottom-5 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-full text-white/70 hover:text-white md:bottom-8 md:right-8"
        >
          <IconArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
