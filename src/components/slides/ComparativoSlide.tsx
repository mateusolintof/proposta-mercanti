"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, User, X, ZoomIn } from "lucide-react";
import SlideShell from "@/components/ui/SlideShell";

interface ImageData {
  src: string;
  alt: string;
}

const iaImages: ImageData[] = [
  { src: "/comparativo/atendimentoIA1.png", alt: "Atendimento IA - Parte 1" },
  { src: "/comparativo/atendimentoIA2.png", alt: "Atendimento IA - Parte 2" },
];

const humanImages: ImageData[] = [
  { src: "/comparativo/atendimentohumano1.png", alt: "Atendimento Humano - Parte 1" },
  { src: "/comparativo/atendimentohumano2.png", alt: "Atendimento Humano - Parte 2" },
];

export default function ComparativoSlide() {
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);

  return (
    <>
      <SlideShell
        eyebrow="Comparativo"
        eyebrowColor="success"
        title="Atendimento IA vs Humano"
        subtitle="Exemplos reais de conversas mostrando a qualidade do atendimento automatizado."
        align="center"
        size="compact"
      >
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* IA Column */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 justify-center">
                <div className="p-2 rounded-lg bg-[#00FF94]/20">
                  <Bot className="w-5 h-5 text-[#00FF94]" />
                </div>
                <h3 className="text-base font-semibold text-white">
                  Atendimento por IA
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {iaImages.map((image, index) => (
                  <motion.button
                    key={index}
                    type="button"
                    className="relative rounded-xl overflow-hidden border border-white/10 bg-white/5 cursor-pointer group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => setSelectedImage(image)}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                      <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Human Column */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 justify-center">
                <div className="p-2 rounded-lg bg-[#00E5FF]/20">
                  <User className="w-5 h-5 text-[#00E5FF]" />
                </div>
                <h3 className="text-base font-semibold text-white">
                  Atendimento Humano
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {humanImages.map((image, index) => (
                  <motion.button
                    key={index}
                    type="button"
                    className="relative rounded-xl overflow-hidden border border-white/10 bg-white/5 cursor-pointer group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => setSelectedImage(image)}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                      <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </SlideShell>

      {/* Fullscreen Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              type="button"
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              onClick={() => setSelectedImage(null)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <X className="w-6 h-6 text-white" />
            </motion.button>

            <motion.img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
