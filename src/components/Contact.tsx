"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real app, you'd handle form submission here.
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="py-20 sm:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-4 header-font">
            Contáctenos
          </h2>
          <p className="text-gray-600 mb-12">
            ¿Listo para llevar la calidad de Alimentos Arrecife a su negocio o
            hogar? Complete el formulario y nuestro equipo se pondrá en contacto
            a la brevedad.
          </p>
        </div>

        <motion.div
          className="max-w-xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {submitted ? (
            <div className="text-center bg-secondary/10 border border-secondary/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-secondary mb-2">
                ¡Gracias!
              </h3>
              <p className="text-gray-700">
                Hemos recibido su mensaje. Nos pondremos en contacto con usted
                pronto.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-600 mb-2"
                  >
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-gray-100 border-gray-300 rounded-md py-2 px-4 text-gray-800 focus:ring-2 focus:ring-secondary focus:border-secondary transition"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-600 mb-2"
                  >
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-gray-100 border-gray-300 rounded-md py-2 px-4 text-gray-800 focus:ring-2 focus:ring-secondary focus:border-secondary transition"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-600 mb-2"
                >
                  Teléfono (Opcional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full bg-gray-100 border-gray-300 rounded-md py-2 px-4 text-gray-800 focus:ring-2 focus:ring-secondary focus:border-secondary transition"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-600 mb-2"
                >
                  Mensaje (Indique producto de interés)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full bg-gray-100 border-gray-300 rounded-md py-2 px-4 text-gray-800 focus:ring-2 focus:ring-secondary focus:border-secondary transition"
                ></textarea>
              </div>
              <div className="text-center pt-4">
                <motion.button
                  type="submit"
                  className="bg-secondary text-white font-bold py-3 px-10 rounded-full text-lg transition-all duration-300 hover:bg-secondary/80 inline-flex items-center gap-2 btn-hover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Enviar Solicitud <Send className="w-5 h-5" />
                </motion.button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
