"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

type CatalogModalProps = {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
};

const CatalogModal: React.FC<CatalogModalProps> = ({
  isOpen,
  onClose,
  images,
}) => {
  const [[page, direction], setPage] = useState([0, 0]);

  if (!isOpen) {
    return null;
  }

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center"
          onClick={onClose}
        >
          <div
            className="relative w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.button
              className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-30"
              onClick={onClose}
              whileHover={{ scale: 1.2 }}
            >
              <X size={40} />
            </motion.button>

            <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/80 bg-black/30 px-3 py-1 rounded-full text-sm z-30">
              {imageIndex + 1} / {images.length}
            </div>

            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                key={page}
                src={images[imageIndex]}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute max-h-[90vh] max-w-[90vw] object-contain"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = Math.abs(offset.x);
                  if (swipe > 50) {
                    paginate(offset.x < 0 ? 1 : -1);
                  }
                }}
              />
            </AnimatePresence>

            <motion.button
              className="absolute left-4 sm:left-8 text-white/70 hover:text-white transition-colors z-20 bg-black/20 rounded-full p-2"
              onClick={() => paginate(-1)}
              whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.4)" }}
            >
              <ChevronLeft size={40} />
            </motion.button>

            <motion.button
              className="absolute right-4 sm:right-8 text-white/70 hover:text-white transition-colors z-20 bg-black/20 rounded-full p-2"
              onClick={() => paginate(1)}
              whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.4)" }}
            >
              <ChevronRight size={40} />
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CatalogModal;
