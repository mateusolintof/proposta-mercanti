"use client";

import { motion } from "framer-motion";
import { Bot, User } from "lucide-react";
import SlideShell from "@/components/ui/SlideShell";

export default function ComparativoSlide() {
  return (
    <SlideShell
      eyebrow="Comparativo"
      eyebrowColor="success"
      title="Atendimento IA vs Humano"
      subtitle="Exemplos reais de conversas mostrando a qualidade do atendimento automatizado."
      align="center"
      size="compact"
    >
      <div className="w-full space-y-6">
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
              <span className="text-[10px] px-2 py-1 rounded-full bg-[#00FF94]/20 text-[#00FF94] font-medium">
                Resposta instantânea
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <motion.div
                className="rounded-xl overflow-hidden border border-white/10 bg-white/5"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  src="/comparativo/atendimentoIA1.png"
                  alt="Atendimento IA - Parte 1"
                  className="w-full h-auto"
                />
              </motion.div>
              <motion.div
                className="rounded-xl overflow-hidden border border-white/10 bg-white/5"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  src="/comparativo/atendimentoIA2.png"
                  alt="Atendimento IA - Parte 2"
                  className="w-full h-auto"
                />
              </motion.div>
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
              <span className="text-[10px] px-2 py-1 rounded-full bg-[#00E5FF]/20 text-[#00E5FF] font-medium">
                Depende de disponibilidade
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <motion.div
                className="rounded-xl overflow-hidden border border-white/10 bg-white/5"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  src="/comparativo/atendimentohumano1.png"
                  alt="Atendimento Humano - Parte 1"
                  className="w-full h-auto"
                />
              </motion.div>
              <motion.div
                className="rounded-xl overflow-hidden border border-white/10 bg-white/5"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  src="/comparativo/atendimentohumano2.png"
                  alt="Atendimento Humano - Parte 2"
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Note */}
        <p className="text-white/40 text-xs text-center">
          * Conversas reais de clientes da Convert.AI (nomes alterados para privacidade)
        </p>
      </div>
    </SlideShell>
  );
}
