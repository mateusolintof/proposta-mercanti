"use client";

import { motion } from "framer-motion";
import { Handshake, Code, CheckCircle, Rocket } from "lucide-react";
import SectionWrapper from "../SectionWrapper";
import { phases } from "@/lib/data/proposal-data";

const iconComponents = {
  Handshake,
  Code,
  CheckCircle,
  Rocket,
};

export default function ProcessoSection() {
  return (
    <SectionWrapper
      id="processo"
      eyebrow="Implementacao"
      eyebrowColor="default"
      title="Processo de Implementacao"
      subtitle="4 fases estruturadas ate o Go-Live completo."
    >
      <div className="space-y-8">
        {/* Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {phases.map((phase, index) => {
            const IconComponent =
              iconComponents[phase.iconName as keyof typeof iconComponents];

            return (
              <motion.div
                key={phase.phase}
                className="relative rounded-2xl border border-white/10 bg-white/5 p-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Connector line (desktop only) */}
                {index < phases.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-white/20 to-transparent" />
                )}

                {/* Phase number badge */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-[#00E5FF]/20 to-[#00FF94]/20 border border-[#00E5FF]/40 flex items-center justify-center">
                    {IconComponent && (
                      <IconComponent className="w-6 h-6 text-[#00E5FF]" />
                    )}
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#00FF94] text-[#02040A] text-xs font-bold flex items-center justify-center">
                      {phase.phase}
                    </span>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-white/40">
                      Fase {phase.phase}
                    </p>
                    <h3 className="text-base font-semibold text-white">
                      {phase.title}
                    </h3>
                  </div>
                </div>

                <p className="text-white/60 text-sm leading-relaxed">
                  {phase.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Timeline Summary */}
        <motion.div
          className="bg-white/5 border border-white/10 rounded-xl p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h4 className="font-semibold text-white mb-4">Resumo das Fases</h4>
          <div className="space-y-3">
            {phases.map((phase) => (
              <div
                key={phase.phase}
                className="flex items-start gap-4 text-sm"
              >
                <span className="w-6 h-6 rounded-full bg-[#00E5FF]/20 text-[#00E5FF] text-xs font-bold flex items-center justify-center flex-shrink-0">
                  {phase.phase}
                </span>
                <div>
                  <span className="font-medium text-white">{phase.title}:</span>{" "}
                  <span className="text-white/60">{phase.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Implementation Note */}
        <div className="text-center">
          <p className="text-white/50 text-sm">
            Prazo estimado:{" "}
            <span className="text-white font-medium">4 a 8 semanas</span>{" "}
            dependendo da complexidade das integracoes.
          </p>
          <p className="text-white/40 text-xs mt-2">
            Os primeiros ganhos de SLA aparecem nas primeiras semanas do piloto.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
