"use client";

import React from "react";

const Footer: React.FC = () => (
  <footer className="bg-slate-800 text-slate-300 py-16">
    <div className="container mx-auto px-4 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
      <div className="md:col-span-1">
        <h4 className="font-serif font-bold text-2xl text-white mb-2">
          Arrecife
        </h4>
        <p className="text-sm text-slate-400">
          Calidad y sabor para Venezuela.
        </p>
      </div>
      <div>
        <h4 className="font-bold text-lg text-white mb-4">Navegación</h4>
        <ul className="space-y-3 text-sm">
          <li>
            <a href="#home" className="hover:text-sky-400 transition-colors">
              Inicio
            </a>
          </li>
          <li>
            <a
              href="#nosotros"
              className="hover:text-sky-400 transition-colors"
            >
              Nosotros
            </a>
          </li>
          <li>
            <a
              href="#productos"
              className="hover:text-sky-400 transition-colors"
            >
              Productos
            </a>
          </li>
          <li>
            <a
              href="#clientes"
              className="hover:text-sky-400 transition-colors"
            >
              Clientes
            </a>
          </li>
          <li>
            <a
              href="#contacto"
              className="hover:text-sky-400 transition-colors"
            >
              Contacto
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-lg text-white mb-4">Legal</h4>
        <ul className="space-y-3 text-sm">
          <li>
            <a href="#" className="hover:text-sky-400 transition-colors">
              Términos y Condiciones
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-sky-400 transition-colors">
              Política de Privacidad
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-lg text-white mb-4">Contacto Directo</h4>
        <address className="not-italic text-sm space-y-3">
          <p>Anzoátegui, Venezuela</p>
          <a
            href="tel:+584149872360"
            className="block hover:text-sky-400 transition-colors"
          >
            Tel: +58 414-9872360
          </a>
          <a
            href="mailto:ventas@alimentosarrecife.com.ve"
            className="block hover:text-sky-400 transition-colors"
          >
            ventas@alimentosarrecife.com.ve
          </a>
        </address>
      </div>
    </div>
    <div className="container mx-auto px-4 mt-12 border-t border-slate-700 pt-8 text-center text-sm text-slate-400">
      <p>
        &copy; {new Date().getFullYear()} Alimentos Arrecife. Todos los derechos
        reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
