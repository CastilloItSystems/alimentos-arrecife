import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden hero-bg">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-black/35"></div>
      </div>
      <motion.div
        className="relative z-10 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="font-serif text-5xl sm:text-6xl md:text-8xl font-black text-white leading-tight mb-6 drop-shadow-lg">
          Alimentos Arrecife
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-100 mb-10 drop-shadow-md">
          Descubra la pureza en nuestras líneas de sal, la frescura en nuestros
          atunes y el aroma en nuestras infusiones.
        </p>
        <motion.a
          href="#productos"
          className="bg-accent text-white font-bold py-3 px-10 rounded-full text-lg transition-all duration-300 hover:opacity-90 btn-hover"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Nuestros Productos
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
