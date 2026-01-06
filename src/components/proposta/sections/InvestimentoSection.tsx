"use client";

import { motion } from "framer-motion";
import {
  MessageSquareMore,
  Receipt,
  Calendar,
  Check,
  Bot,
  Link2,
  LayoutDashboard,
  CheckCircle,
  AlertCircle,
  Server,
  Database,
  Wrench,
  Headphones,
  Sparkles,
  Cpu,
} from "lucide-react";
import SectionWrapper from "../SectionWrapper";
import {
  mainPackage,
  additionalPackages,
  deliverables,
} from "@/lib/data/proposal-data";

const iconComponents = {
  MessageSquareMore,
  Receipt,
  Calendar,
  Bot,
  Link2,
  LayoutDashboard,
};

export default function InvestimentoSection() {
  return (
    <SectionWrapper
      id="investimento"
      eyebrow="Investimento"
      eyebrowColor="success"
      title="Investimento"
      subtitle="Estrutura de precos modular com pacote principal e agentes complementares."
    >
      <div className="space-y-8">
        {/* Main Package */}
        <motion.div
          className="rounded-2xl border-2 border-[#00E5FF]/40 bg-[#00E5FF]/5 p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div className="flex items-start gap-4">
              <div
                className="p-3 rounded-xl"
                style={{ backgroundColor: `${mainPackage.color}20` }}
              >
                <MessageSquareMore
                  className="w-6 h-6"
                  style={{ color: mainPackage.color }}
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {mainPackage.name}
                </h3>
                <p className="text-white/50 text-sm mt-1">
                  {mainPackage.subtitle}
                </p>
              </div>
            </div>
            {mainPackage.badge && (
              <span className="inline-flex items-center gap-1 rounded-full px-4 py-1.5 text-xs font-semibold bg-[#00E5FF] text-black">
                {mainPackage.badge}
              </span>
            )}
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="rounded-xl border border-white/10 bg-black/20 p-4 text-center">
              <p className="text-xs uppercase tracking-wider text-white/40">
                Setup
              </p>
              <span className="text-xl font-bold text-white">
                {mainPackage.setup}
              </span>
            </div>
            <div className="rounded-xl border border-[#00FF94]/30 bg-[#00FF94]/10 p-4 text-center">
              <p className="text-xs uppercase tracking-wider text-white/40">
                Mensal
              </p>
              <span className="text-xl font-bold text-[#00FF94]">
                {mainPackage.monthly}
              </span>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/20 p-4 text-center">
              <p className="text-xs uppercase tracking-wider text-white/40">
                Contrato
              </p>
              <span className="text-xl font-bold text-white">
                {mainPackage.duration}
              </span>
            </div>
          </div>

          {/* Bullets */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {mainPackage.bullets.map((bullet, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-[#00E5FF] flex-shrink-0" />
                <span className="text-white/70">{bullet}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Additional Packages */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Pacotes Complementares
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {additionalPackages.map((pkg, index) => {
              const IconComponent =
                iconComponents[pkg.iconName as keyof typeof iconComponents];
              return (
                <motion.div
                  key={pkg.name}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div
                      className="p-2 rounded-lg"
                      style={{ backgroundColor: `${pkg.color}20` }}
                    >
                      {IconComponent && (
                        <IconComponent
                          className="w-5 h-5"
                          style={{ color: pkg.color }}
                        />
                      )}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{pkg.name}</h4>
                      <p className="text-xs text-white/50">{pkg.subtitle}</p>
                    </div>
                  </div>

                  <div className="flex gap-3 mb-4">
                    <div className="flex-1 rounded-lg border border-white/10 bg-black/20 p-2 text-center">
                      <p className="text-[10px] uppercase text-white/40">
                        Setup
                      </p>
                      <span className="text-sm font-semibold text-white">
                        {pkg.setup}
                      </span>
                    </div>
                    <div className="flex-1 rounded-lg border border-white/10 bg-black/20 p-2 text-center">
                      <p className="text-[10px] uppercase text-white/40">
                        Mensal
                      </p>
                      <span className="text-sm font-semibold text-white">
                        {pkg.monthly}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    {pkg.bullets.map((bullet, bulletIndex) => (
                      <div
                        key={bulletIndex}
                        className="flex items-center gap-2 text-xs"
                      >
                        <Check
                          className="w-3 h-3 flex-shrink-0"
                          style={{ color: pkg.color }}
                        />
                        <span className="text-white/60">{bullet}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Deliverables */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Entregaveis</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {deliverables.map((deliverable, index) => {
              const IconComponent =
                iconComponents[
                  deliverable.iconName as keyof typeof iconComponents
                ];
              return (
                <motion.div
                  key={deliverable.title}
                  className="rounded-xl border border-white/10 bg-white/5 p-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-[#00E5FF]/10">
                      {IconComponent && (
                        <IconComponent className="w-5 h-5 text-[#00E5FF]" />
                      )}
                    </div>
                    <h4 className="font-medium text-white text-sm">
                      {deliverable.title}
                    </h4>
                  </div>
                  <ul className="space-y-1.5">
                    {deliverable.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="text-xs text-white/60 flex items-center gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-white/30" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* What's Included - Cost Transparency */}
        <motion.div
          className="rounded-2xl border-2 border-[#00FF94]/30 bg-[#00FF94]/5 p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-[#00FF94]/20">
              <CheckCircle className="w-6 h-6 text-[#00FF94]" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">
                O que esta incluso no valor mensal
              </h3>
              <p className="text-white/50 text-sm">
                Transparencia total - sem custos ocultos
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Included */}
            <div>
              <p className="text-xs uppercase tracking-wider text-[#00FF94] mb-4 font-semibold">
                Incluso no mensal
              </p>
              <div className="space-y-3">
                {[
                  {
                    icon: Cpu,
                    title: "Tokens de IA",
                    desc: "Claude, OpenAI e outros LLMs",
                  },
                  {
                    icon: Database,
                    title: "Banco de Dados",
                    desc: "PostgreSQL + Redis hospedados",
                  },
                  {
                    icon: Server,
                    title: "Infraestrutura",
                    desc: "Servidores, CDN e monitoramento",
                  },
                  {
                    icon: Wrench,
                    title: "Manutencao",
                    desc: "Correcoes e atualizacoes de seguranca",
                  },
                  {
                    icon: Sparkles,
                    title: "Melhorias Continuas",
                    desc: "Novas features e otimizacoes",
                  },
                  {
                    icon: Headphones,
                    title: "Suporte Tecnico",
                    desc: "Atendimento dedicado",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-black/20 rounded-lg p-3"
                  >
                    <div className="p-1.5 rounded-lg bg-[#00FF94]/10">
                      <item.icon className="w-4 h-4 text-[#00FF94]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">
                        {item.title}
                      </p>
                      <p className="text-xs text-white/50">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Client's Additional Cost */}
            <div>
              <p className="text-xs uppercase tracking-wider text-[#FFD700] mb-4 font-semibold">
                Custo adicional do cliente
              </p>
              <div className="rounded-xl border border-[#FFD700]/30 bg-[#FFD700]/5 p-5">
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-[#FFD700]/20">
                    <AlertCircle className="w-5 h-5 text-[#FFD700]" />
                  </div>
                  <div>
                    <p className="text-base font-semibold text-white">
                      API Oficial da Meta
                    </p>
                    <p className="text-sm text-white/60 mt-1">
                      Contratacao direta com a Meta ou via BSP
                    </p>
                  </div>
                </div>

                <div className="bg-black/30 rounded-lg p-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Custo estimado:</span>
                    <span className="text-white font-medium">
                      ~R$ 0,30 - 0,50 / conversa
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Modelo:</span>
                    <span className="text-white font-medium">Pay-per-use</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Faturamento:</span>
                    <span className="text-white font-medium">
                      Direto pela Meta
                    </span>
                  </div>
                </div>

                <p className="text-xs text-white/40 mt-4">
                  * A Convert.AI auxilia na configuracao e integracao com a API
                  da Meta sem custo adicional.
                </p>
              </div>

              {/* Summary */}
              <div className="mt-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-sm text-white/70">
                  <span className="text-[#00FF94] font-semibold">Resumo:</span>{" "}
                  Seu unico custo variavel e o consumo da API da Meta. Todos os
                  outros custos (tokens, infra, suporte) estao inclusos no valor
                  mensal fixo.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
