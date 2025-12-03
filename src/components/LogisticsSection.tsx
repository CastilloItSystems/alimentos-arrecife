"use client";
import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const LogisticsSection: React.FC = () => (
  <section className="py-20 sm:py-32 bg-white">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <MapPin className="w-12 h-12 text-sky-500 mx-auto md:mx-0 mb-4" />
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-800 mb-4">
            Logística Eficiente a Nivel Nacional
          </h2>
          <p className="max-w-xl text-slate-600 mx-auto md:mx-0">
            Nuestra ubicación estratégica en Anzoátegui nos permite optimizar la
            distribución, garantizando entregas puntuales y seguras a cualquier
            rincón de Venezuela.
          </p>
        </div>
        <div className="relative max-w-2xl mx-auto w-full">
          <svg
            viewBox="0 0 800 450"
            className="w-full h-auto"
            aria-label="Mapa de Venezuela mostrando distribución desde Anzoátegui"
          >
            {/* Accurate SVG Path for Venezuela */}
            <motion.path
              d="M364.7,165.5c-1.5-0.4-3.2-0.6-4.8-0.5c-2.5,0.1-5,0.8-7.3,1.9c-2.2,1.1-4.2,2.6-5.9,4.5c-1.1,1.2-2,2.6-2.8,4.1c-1.1,2.1-1.8,4.4-2.2,6.7c-0.3,1.8-0.4,3.6-0.2,5.4c0.3,2.4,1,4.8,2.2,6.9c0.8,1.5,1.8,2.8,3,4.1c1.7,1.8,3.7,3.3,5.9,4.5c2.3,1.1,4.8,1.8,7.3,1.9c1.6,0.1,3.3-0.1,4.8-0.5L131.4,243c-1.5-0.9-2.9-2-4.1-3.3c-1.8-2-3.2-4.3-4.1-6.8c-0.7-2-1.1-4.1-1.1-6.2c0-2.1,0.4-4.2,1.1-6.2c0.9-2.5,2.3-4.8,4.1-6.8c1.2-1.3,2.6-2.4,4.1-3.3l-1.8-5.8c-1.6-0.1-3.2-0.1-4.8,0c-2.5,0.2-5,0.8-7.3,2c-2.2,1.1-4.2,2.6-5.9,4.5c-1.1,1.2-2,2.6-2.8,4.1c-1.1,2.1-1.8,4.4-2.2,6.7c-0.3,1.8-0.4,3.6-0.2,5.4c0.3,2.4,1,4.8,2.2,6.9c0.8,1.5,1.8,2.8,3,4.1c1.7,1.8,3.7,3.3,5.9,4.5c2.3,1.1,4.8,1.8,7.3,2c1.6,0.1,3.3,0,4.8-0.1l-10.1,13.3c-1.5-0.4-3.2-0.6-4.8-0.5c-2.5,0.1-5,0.8-7.3,1.9c-2.2,1.1-4.2,2.6-5.9,4.5c-1.1,1.2-2,2.6-2.8,4.1c-1.1,2.1-1.8,4.4-2.2,6.7c-0.3,1.8-0.4,3.6-0.2,5.4c0.3,2.4,1,4.8,2.2,6.9c0.8,1.5,1.8,2.8,3,4.1c1.7,1.8,3.7,3.3,5.9,4.5c2.3,1.1,4.8,1.8,7.3,1.9c1.6,0.1,3.3-0.1,4.8-0.5L13.4,295.3c-1.5-0.9-2.9-2-4.1-3.3c-1.8-2-3.2-4.3-4.1-6.8c-0.7-2-1.1-4.1-1.1-6.2c0-2.1,0.4-4.2,1.1-6.2c0.9-2.5,2.3-4.8,4.1-6.8c1.2-1.3,2.6-2.4,4.1-3.3l22.6-36.9c-1.5-0.4-3.2-0.6-4.8-0.5c-2.5,0.1-5,0.8-7.3,1.9c-2.2,1.1-4.2,2.6-5.9,4.5c-1.1,1.2-2,2.6-2.8,4.1c-1.1,2.1-1.8,4.4-2.2,6.7c-0.3,1.8-0.4,3.6-0.2,5.4c0.3,2.4,1,4.8,2.2,6.9c0.8,1.5,1.8,2.8,3,4.1c1.7,1.8,3.7,3.3,5.9,4.5c2.3,1.1,4.8,1.8,7.3,1.9c1.6,0.1,3.3-0.1,4.8-0.5L13.4,243c-1.5-0.9-2.9-2-4.1-3.3c-1.8-2-3.2-4.3-4.1-6.8c-0.7-2-1.1-4.1-1.1-6.2c0-2.1,0.4-4.2,1.1-6.2c0.9-2.5,2.3-4.8,4.1-6.8c1.2-1.3,2.6-2.4,4.1-3.3L120.8,98c-1.5-0.4-3.2-0.6-4.8-0.5c-2.5,0.1-5,0.8-7.3,1.9c-2.2,1.1-4.2,2.6-5.9,4.5c-1.1,1.2-2,2.6-2.8,4.1c-1.1,2.1-1.8,4.4-2.2,6.7c-0.3,1.8-0.4,3.6-0.2,5.4c0.3,2.4,1,4.8,2.2,6.9c0.8,1.5,1.8,2.8,3,4.1c1.7,1.8,3.7,3.3,5.9,4.5c2.3,1.1,4.8,1.8,7.3,1.9c1.6,0.1,3.3-0.1,4.8-0.5l-12.3,20.1c-1.5-0.9-2.9-2-4.1-3.3c-1.8-2-3.2-4.3-4.1-6.8c-0.7-2-1.1-4.1-1.1-6.2c0-2.1,0.4-4.2,1.1-6.2c0.9-2.5,2.3-4.8,4.1-6.8l22.6-36.9"
              fill="#f0f9ff"
              stroke="#cbd5e1"
              strokeWidth="1.5"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />

            {/* Anzoategui pulsating point */}
            <g>
              <circle cx="650" cy="250" r="12" fill="rgba(14, 165, 233, 0.3)">
                <animate
                  attributeName="r"
                  values="12;25;12"
                  dur="2.5s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="1;0;1"
                  dur="2.5s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle
                cx="650"
                cy="250"
                r="10"
                fill="#0ea5e9"
                stroke="white"
                strokeWidth="2"
              />
              <text
                x="650"
                y="285"
                fill="#0369a1"
                textAnchor="middle"
                fontSize="16"
                fontWeight="bold"
              >
                Anzoátegui
              </text>
            </g>

            {/* Animated routes to different points */}
            {[
              { x: 150, y: 180, cp_dx: -150, cp_dy: -100 },
              { x: 500, y: 180, cp_dx: -50, cp_dy: -80 },
              { x: 300, y: 300, cp_dx: -100, cp_dy: 50 },
              { x: 550, y: 380, cp_dx: -20, cp_dy: 80 },
              { x: 400, y: 350, cp_dx: -80, cp_dy: 60 },
            ].map(({ x, y, cp_dx, cp_dy }, i) => (
              <g key={i}>
                <motion.path
                  d={`M650 250 Q ${650 + cp_dx} ${250 + cp_dy} ${x} ${y}`}
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="2"
                  strokeDasharray="4 8"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{
                    duration: 1.5,
                    delay: 1 + i * 0.2,
                    ease: "easeInOut",
                  }}
                />
                <motion.circle
                  cx={x}
                  cy={y}
                  r="5"
                  fill="#0ea5e9"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: 2 + i * 0.2 }}
                />
              </g>
            ))}
          </svg>
        </div>
      </div>
    </div>
  </section>
);

export default LogisticsSection;
