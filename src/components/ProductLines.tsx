"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Sparkles,
  Factory,
  Beef,
  Waves,
  Gem,
  ChefHat,
  Fish,
  Droplets,
  Salad,
  Flower,
  Leaf,
  Coffee,
  BookOpen,
} from "lucide-react";

const productLines = [
  {
    name: "Línea de Sal",
    description:
      "Nuestra línea fundacional. Sal de alta pureza para consumo humano, uso industrial y alimentación animal, extraída y procesada con los más altos estándares.",
    imageUrl:
      "https://images.pexels.com/photos/2893635/pexels-photo-2893635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Montículos de sal marina pura",
    subProducts: [
      { name: "Sal para Consumo Humano", icon: <Sparkles size={20} /> },
      { name: "Sal Industrial", icon: <Factory size={20} /> },
      { name: "Sal para Alimentación Animal", icon: <Beef size={20} /> },
      { name: "Sal de Mar Sostenible", icon: <Waves size={20} /> },
      { name: "Sal Refinada", icon: <Gem size={20} /> },
      { name: "Sal Gourmet", icon: <ChefHat size={20} /> },
    ],
    catalog: [
      "https://i.imgur.com/s2Jp5sC.png", // Simulates the user's provided image
      "https://placehold.co/800x1200/0c4a6e/ffffff?text=Sal+Arrecife\nIndustrial\n\nFicha+Técnica",
    ],
  },
  {
    name: "Línea de Atunes",
    description:
      "El mejor sabor del mar en su mesa. Atún de primera calidad, envasado para preservar su frescura, textura y valor nutricional.",
    imageUrl:
      "https://images.pexels.com/photos/1005693/pexels-photo-1005693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Lomos de atún fresco en un plato",
    subProducts: [
      { name: "Lomos de Atún en Aceite", icon: <Fish size={20} /> },
      { name: "Trozos de Atún en Agua", icon: <Droplets size={20} /> },
      { name: "Ensalada de Atún con Vegetales", icon: <Salad size={20} /> },
    ],
    catalog: [
      "https://placehold.co/800x1200/0c4a6e/ffffff?text=Atún+Arrecife\nLomos+en+Aceite\n\nFicha+Técnica",
    ],
  },
  {
    name: "Línea de Infusiones",
    description:
      "Una selección de tés e infusiones aromáticas para cada momento del día. Sabores que reconfortan el alma y despiertan los sentidos.",
    imageUrl:
      "https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Taza de té humeante rodeada de hierbas secas",
    subProducts: [
      { name: "Té de Jamaica", icon: <Flower size={20} /> },
      { name: "Té de Manzanilla", icon: <Leaf size={20} /> },
      { name: "Té Verde Clásico", icon: <Coffee size={20} /> },
    ],
    catalog: [
      "https://placehold.co/800x1200/0c4a6e/ffffff?text=Infusiones+Arrecife\nTé+de+Manzanilla\n\nFicha+Técnica",
    ],
  },
];

const listVariants = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  hidden: {
    opacity: 0,
  },
};

const itemVariants = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -20 },
};

type SubProduct = { name: string; icon: React.ReactNode };

type ProductCardProps = {
  name: string;
  description: string;
  imageUrl: string;
  alt: string;
  subProducts: SubProduct[];
  catalog: string[];
  onOpenCatalog: (images: string[]) => void;
};

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  description,
  imageUrl,
  alt,
  subProducts,
  catalog,
  onOpenCatalog,
}) => (
  <div className="relative w-screen h-screen flex-shrink-0 flex items-center justify-center p-4 sm:p-8">
    <img
      src={imageUrl}
      alt={alt}
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/30"></div>
    <motion.div
      className="relative w-full max-w-md bg-white/70 backdrop-blur-xl rounded-2xl p-6 sm:p-8 shadow-2xl border border-white/50 flex flex-col"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
    >
      <div>
        <h3 className="font-serif text-3xl font-bold text-primary mb-3 header-font">
          {name}
        </h3>
        <p className="text-gray-600 mb-5">{description}</p>

        <div className="h-px bg-gray-400/30 my-5"></div>

        <motion.ul variants={listVariants} className="space-y-3 text-gray-700">
          {subProducts.map((item) => (
            <motion.li
              key={item.name}
              variants={itemVariants}
              className="flex items-center gap-3"
            >
              <span className="text-secondary">{item.icon}</span>
              <span className="font-medium text-sm">{item.name}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
      <div className="mt-8 text-center">
        <motion.button
          onClick={() => onOpenCatalog(catalog)}
          className="bg-secondary text-white font-bold py-2 px-6 rounded-full text-base transition-all duration-300 hover:bg-secondary/80 inline-flex items-center gap-2 btn-hover"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <BookOpen size={18} />
          Ver Catálogo
        </motion.button>
      </div>
    </motion.div>
  </div>
);

const ProductLines: React.FC<{ onOpenCatalog: (images: string[]) => void }> = ({
  onOpenCatalog,
}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.66%"]);

  return (
    <section
      id="productos"
      ref={targetRef}
      className="relative h-[300vh] bg-white"
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-0 px-4">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary/30 drop-shadow-md header-font">
            Nuestras Líneas de Productos
          </h2>
          <p className="text-gray-400 mt-2 drop-shadow-sm">
            Tres pilares de calidad que definen a Alimentos Arrecife.
          </p>
        </div>
        <motion.div style={{ x }} className="flex">
          {productLines.map((line) => (
            <ProductCard
              key={line.name}
              {...line}
              onOpenCatalog={onOpenCatalog}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductLines;
