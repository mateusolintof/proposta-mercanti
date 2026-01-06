"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Clock,
  Users,
  Calendar,
  Zap,
  DollarSign,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import SlideShell from "@/components/ui/SlideShell";
import type { ModalKind } from "@/types/modal";

const projectionData = [
  { mes: 1, leads: "1.000", capacidade: "12%", vendedores: "2", economia: "R$ 9.000" },
  { mes: 2, leads: "1.800", capacidade: "20%", vendedores: "3.5", economia: "R$ 15.750" },
  { mes: 3, leads: "2.700", capacidade: "30%", vendedores: "5", economia: "R$ 22.500" },
  { mes: 4, leads: "3.400", capacidade: "38%", vendedores: "6.5", economia: "R$ 29.250" },
  { mes: 5, leads: "4.000", capacidade: "44%", vendedores: "7.5", economia: "R$ 33.750" },
  { mes: 6, leads: "4.500", capacidade: "50%", vendedores: "8+", economia: "R$ 36.000" },
];

const benefits = [
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Eficiência de Atendimento",
    desc: "Respostas ágeis, informações consistentes, atendimento personalizado com histórico",
    color: "#00FF94",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: "Atendimento 24/7",
    desc: "Conversões fora do horário comercial, não perde leads noturnos/finais de semana",
    color: "#00E5FF",
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: "Aumento de Conversão",
    desc: "Follow-up automatizado, campanhas de recompra, cross-sell inteligente",
    color: "#00FF94",
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Escalabilidade Total",
    desc: "Cresce sem contratar, absorve picos de demanda sem gargalos",
    color: "#00E5FF",
  },
  {
    icon: <Calendar className="w-5 h-5" />,
    title: "Automação de Eventos",
    desc: "Atual: ~60 dias para follow-up. Com agente: dias. ROI por evento mensurável",
    color: "#FFD700",
  },
];

interface GanhosSlideProps {
  onOpenModal?: (modal: ModalKind) => void;
}

export default function GanhosSlide({ onOpenModal }: GanhosSlideProps) {
  return (
    <SlideShell
      eyebrow="Resultados"
      eyebrowColor="success"
      title="Projeção de Resultados"
      subtitle="Projeção agressiva: 50% da capacidade em 6 meses"
      align="center"
      background={
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#00FF94]/5 via-transparent to-transparent pointer-events-none" />
      }
    >
      <div className="w-full space-y-8">
        {/* Seção 1: Projeção de Economia */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-[#00FF94] rounded-full" />
            <h3 className="text-lg font-semibold text-white">
              Projeção de Economia (6 meses)
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-white/50 text-xs uppercase tracking-wider">
                  <th className="text-left py-3 px-4">Mês</th>
                  <th className="text-left py-3 px-4">Leads/Agente</th>
                  <th className="text-left py-3 px-4">% Capacidade</th>
                  <th className="text-left py-3 px-4">Vendedores Substituídos</th>
                  <th className="text-right py-3 px-4">Economia Mensal</th>
                </tr>
              </thead>
              <tbody>
                {projectionData.map((row, index) => (
                  <motion.tr
                    key={row.mes}
                    className={`border-t border-white/5 ${index === projectionData.length - 1 ? 'bg-[#00FF94]/10' : ''}`}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <td className="py-3 px-4 text-white font-medium">Mês {row.mes}</td>
                    <td className="py-3 px-4 text-white/70">{row.leads}</td>
                    <td className="py-3 px-4 text-white/70">{row.capacidade}</td>
                    <td className="py-3 px-4 text-white/70">{row.vendedores}</td>
                    <td className={`py-3 px-4 text-right font-semibold ${index === projectionData.length - 1 ? 'text-[#00FF94]' : 'text-white'}`}>
                      {row.economia}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Resumo financeiro */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <motion.div
              className="rounded-xl border border-white/10 bg-white/5 p-4 text-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <p className="text-xs text-white/50 uppercase tracking-wider">Vendedores Substituídos</p>
              <p className="text-2xl font-bold text-white mt-1">8</p>
              <p className="text-xs text-white/40">× R$4.500 = R$36.000/mês</p>
            </motion.div>

            <motion.div
              className="rounded-xl border border-white/10 bg-white/5 p-4 text-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <p className="text-xs text-white/50 uppercase tracking-wider">Eliminação Fortics</p>
              <p className="text-2xl font-bold text-white mt-1">R$ 2.000</p>
              <p className="text-xs text-white/40">/mês</p>
            </motion.div>

            <motion.div
              className="rounded-xl border border-white/10 bg-white/5 p-4 text-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-xs text-white/50 uppercase tracking-wider">Custo Solução</p>
              <p className="text-2xl font-bold text-white mt-1">-R$ 6.000</p>
              <p className="text-xs text-white/40">/mês (Omnichannel + Vendas)</p>
            </motion.div>

            <motion.div
              className="rounded-xl border border-[#00FF94]/30 bg-[#00FF94]/10 p-4 text-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
            >
              <p className="text-xs text-white/50 uppercase tracking-wider">Economia Líquida</p>
              <p className="text-2xl font-bold text-[#00FF94] mt-1">R$ 32.000</p>
              <p className="text-xs text-white/40">/mês ao final do mês 6</p>
            </motion.div>
          </div>

          {/* ROI */}
          <motion.div
            className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-wrap items-center justify-center gap-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="text-center">
              <p className="text-xs text-white/50 uppercase tracking-wider">Setup Inicial</p>
              <p className="text-xl font-bold text-white">R$ 35.000</p>
            </div>
            <ArrowRight className="w-5 h-5 text-white/30" />
            <div className="text-center">
              <p className="text-xs text-white/50 uppercase tracking-wider">Economia Acumulada (6 meses)</p>
              <p className="text-xl font-bold text-[#00FF94]">~R$ 145.000</p>
            </div>
            <ArrowRight className="w-5 h-5 text-white/30" />
            <div className="text-center">
              <p className="text-xs text-white/50 uppercase tracking-wider">Payback</p>
              <p className="text-xl font-bold text-[#00E5FF]">~1.5 meses</p>
            </div>
          </motion.div>
        </div>

        {/* Seção 2: Outros Ganhos */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-[#00E5FF] rounded-full" />
            <h3 className="text-lg font-semibold text-white">
              Outros Ganhos Operacionais
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="rounded-xl border border-white/10 bg-white/5 p-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + index * 0.05 }}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="p-2 rounded-lg"
                    style={{ backgroundColor: `${benefit.color}20` }}
                  >
                    <div style={{ color: benefit.color }}>{benefit.icon}</div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{benefit.title}</p>
                    <p className="text-xs text-white/60 mt-1">{benefit.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <motion.p
          className="text-white/40 text-xs text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          * Projeção baseada em premissas definidas durante a imersão. Valores podem variar conforme a realidade operacional.
        </motion.p>
      </div>
    </SlideShell>
  );
}
