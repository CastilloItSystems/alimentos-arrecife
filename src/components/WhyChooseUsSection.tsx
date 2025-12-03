"use client";
import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Truck, Users } from "lucide-react";

const pillars = [
  {
    icon: <ShieldCheck className="w-10 h-10 text-secondary" />,
    title: "Calidad Certificada",
    description:
      "Cumplimos con las más altas normativas de calidad y pureza en cada producto.",
  },
  {
    icon: <Truck className="w-10 h-10 text-secondary" />,
    title: "Suministro Confiable",
    description:
      "Capacidad logística para asegurar un abastecimiento constante a nivel nacional.",
  },
  {
    icon: <Users className="w-10 h-10 text-secondary" />,
    title: "Atención Personalizada",
    description:
      "Dedicados a entender y satisfacer las necesidades específicas de su negocio.",
  },
];

const WhyChooseUsSection: React.FC = () => (
  <section className="py-20 sm:py-32 bg-secondary/10">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary header-font">
          ¿Por Qué Elegirnos?
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Somos más que un proveedor; somos su socio estratégico en alimentos de
          calidad.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 text-center">
        {pillars.map((p) => (
          <motion.div
            key={p.title}
            className="bg-white/60 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-white/50"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4 inline-block p-4 bg-secondary/10 rounded-full">
              {p.icon}
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">{p.title}</h3>
            <p className="text-gray-600 text-sm">{p.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUsSection;
