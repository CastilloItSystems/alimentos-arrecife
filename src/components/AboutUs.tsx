"use client";

import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section id="nosotros" className="py-20 sm:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-6 header-font">
              Llevando Calidad a la Mesa Venezolana
            </h2>
            <p className="text-gray-600 mb-4 text-lg">
              Alimentos Arrecife es una empresa venezolana líder, dedicada a la
              producción y distribución de un diverso portafolio de alimentos.
              Desde nuestra estratégica ubicación en el estado Anzoátegui,
              garantizamos un suministro confiable y eficiente a todo el
              territorio nacional.
            </p>
            <p className="text-gray-600 text-lg">
              Nuestra misión es ser el socio confiable para el comercio y el
              hogar, ofreciendo productos que cumplen con los más estrictos
              estándares de calidad, impulsando el bienestar de nuestros
              clientes y del país.
            </p>
          </motion.div>
          <motion.div
            className="relative h-96 md:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <img
              src="https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Ingredientes frescos y naturales sobre una mesa"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
