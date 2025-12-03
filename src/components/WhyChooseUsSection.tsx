"use client";
import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Truck, Users } from "lucide-react";

const WhyChooseUsSection: React.FC = () => {
  const pillars = [
    {
      icon: <ShieldCheck className="w-10 h-10 text-sky-500" />,
      title: "Calidad Certificada",
      description:
        "Cumplimos con las más altas normativas de calidad y pureza en cada producto.",
    },
    {
      icon: <Truck className="w-10 h-10 text-sky-500" />,
      title: "Suministro Confiable",
      description:
        "Capacidad logística para asegurar un abastecimiento constante a nivel nacional.",
    },
    {
      icon: <Users className="w-10 h-10 text-sky-500" />,
      title: "Atención Personalizada",
      description:
        "Dedicados a entender y satisfacer las necesidades específicas de su negocio.",
    },
  ];

  return (
    <section className="py-20 sm:py-32 bg-sky-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-800">
            ¿Por Qué Elegirnos?
          </h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Somos más que un proveedor; somos su socio estratégico en alimentos
            de calidad.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              className="bg-white/60 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-white/50"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-4 inline-block p-4 bg-sky-100 rounded-full">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                {pillar.title}
              </h3>
              <p className="text-slate-600 text-sm">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
