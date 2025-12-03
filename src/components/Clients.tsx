"use client";

import React from "react";
import { motion } from "framer-motion";

const clientIndustries = [
  { name: "Supermercados", style: "" },
  { name: "Restaurantes", style: "font-serif" },
  { name: "Industria Alimenticia", style: "" },
  { name: "Distribuidores", style: "font-mono uppercase" },
  { name: "Sector Ganadero", style: "" },
];

const Clients = () => {
  return (
    <section id="clientes" className="py-20 sm:py-32 bg-secondary/10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-4 header-font">
          Con la Confianza de Líderes
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-16">
          Proveemos alimentos de calidad a una diversa gama de clientes clave
          para el abastecimiento de Venezuela.
        </p>
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-wrap justify-center items-center gap-x-12 sm:gap-x-16 gap-y-8">
            {clientIndustries.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`text-gray-500 text-lg md:text-xl font-medium tracking-wider ${client.style}`}
              >
                {client.name}
              </motion.div>
            ))}
          </div>
          <div className="absolute -inset-x-10 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-50"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
