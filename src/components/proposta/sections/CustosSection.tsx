"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, Clock, TrendingUp, Users, Calendar } from "lucide-react";
import SectionWrapper from "../SectionWrapper";
import {
  projectionData,
  economySummary,
  currentOperationCosts,
  benefits,
} from "@/lib/data/proposal-data";

const benefitIcons = {
  Zap,
  Clock,
  TrendingUp,
  Users,
  Calendar,
};

export default function CustosSection() {
  return (
    <SectionWrapper
      id="custos"
      eyebrow="Custos"
      eyebrowColor="success"
      title="Analise de Custos e ROI"
      subtitle="Projecao agressiva: 50% da capacidade em 6 meses com economia liquida de R$32.000/mes."
    >
      <div className="space-y-10">
        {/* Current Operation Costs */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-3">
            <div className="w-1.5 h-6 bg-[#FF6B6B] rounded-full" />
            Custo Atual da Operacao
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div
              className="rounded-xl border border-white/10 bg-white/5 p-5 text-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xs text-white/50 uppercase tracking-wider">
                Vendedores
              </p>
              <p className="text-3xl font-bold text-white mt-2">
                {currentOperationCosts.vendedores}
              </p>
              <p className="text-xs text-white/40 mt-1">
                x R$ {currentOperationCosts.custoVendedor.toLocaleString()}/mes
              </p>
            </motion.div>
            <motion.div
              className="rounded-xl border border-white/10 bg-white/5 p-5 text-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <p className="text-xs text-white/50 uppercase tracking-wider">
                Sistema Fortics
              </p>
              <p className="text-3xl font-bold text-white mt-2">
                R$ {currentOperationCosts.custoFortics.toLocaleString()}
              </p>
              <p className="text-xs text-white/40 mt-1">/mes</p>
            </motion.div>
            <motion.div
              className="rounded-xl border border-[#FF6B6B]/30 bg-[#FF6B6B]/10 p-5 text-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-xs text-white/50 uppercase tracking-wider">
                Total Mensal
              </p>
              <p className="text-3xl font-bold text-[#FF6B6B] mt-2">
                R$ {currentOperationCosts.totalMensal.toLocaleString()}
              </p>
              <p className="text-xs text-white/40 mt-1">/mes em operacao</p>
            </motion.div>
          </div>
        </div>

        {/* Projection Table */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-3">
            <div className="w-1.5 h-6 bg-[#00FF94] rounded-full" />
            Projecao de Economia (6 meses)
          </h3>
          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/5 text-white/50 text-xs uppercase tracking-wider">
                  <th className="text-left py-3 px-4">Mes</th>
                  <th className="text-left py-3 px-4">Leads/Agente</th>
                  <th className="text-left py-3 px-4">% Capacidade</th>
                  <th className="text-left py-3 px-4">Vendedores Substituidos</th>
                  <th className="text-right py-3 px-4">Economia Mensal</th>
                </tr>
              </thead>
              <tbody>
                {projectionData.map((row, index) => (
                  <motion.tr
                    key={row.mes}
                    className={`border-t border-white/5 ${
                      index === projectionData.length - 1 ? "bg-[#00FF94]/10" : ""
                    }`}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <td className="py-3 px-4 text-white font-medium">
                      Mes {row.mes}
                    </td>
                    <td className="py-3 px-4 text-white/70">{row.leads}</td>
                    <td className="py-3 px-4 text-white/70">{row.capacidade}</td>
                    <td className="py-3 px-4 text-white/70">{row.vendedores}</td>
                    <td
                      className={`py-3 px-4 text-right font-semibold ${
                        index === projectionData.length - 1
                          ? "text-[#00FF94]"
                          : "text-white"
                      }`}
                    >
                      {row.economia}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Economy Summary */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-3">
            <div className="w-1.5 h-6 bg-[#00E5FF] rounded-full" />
            Economia ao Final do Mes 6
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <motion.div
              className="rounded-xl border border-white/10 bg-white/5 p-4 text-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xs text-white/50 uppercase tracking-wider">
                Vendedores Substituidos
              </p>
              <p className="text-2xl font-bold text-white mt-2">
                {economySummary.vendedoresSubstituidos}
              </p>
              <p className="text-xs text-white/40">
                x {economySummary.custoVendedor} = {economySummary.economiaVendedores}/mes
              </p>
            </motion.div>
            <motion.div
              className="rounded-xl border border-white/10 bg-white/5 p-4 text-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <p className="text-xs text-white/50 uppercase tracking-wider">
                Eliminacao Fortics
              </p>
              <p className="text-2xl font-bold text-white mt-2">
                {economySummary.eliminacaoFortics}
              </p>
              <p className="text-xs text-white/40">/mes</p>
            </motion.div>
            <motion.div
              className="rounded-xl border border-white/10 bg-white/5 p-4 text-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-xs text-white/50 uppercase tracking-wider">
                Custo Solucao
              </p>
              <p className="text-2xl font-bold text-white mt-2">
                -R$ {economySummary.custoSolucao}
              </p>
              <p className="text-xs text-white/40">/mes (Omnichannel + Vendas)</p>
            </motion.div>
            <motion.div
              className="rounded-xl border border-[#00FF94]/30 bg-[#00FF94]/10 p-4 text-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-xs text-white/50 uppercase tracking-wider">
                Economia Liquida
              </p>
              <p className="text-2xl font-bold text-[#00FF94] mt-2">
                R$ {economySummary.economiaLiquida}
              </p>
              <p className="text-xs text-white/40">/mes ao final do mes 6</p>
            </motion.div>
          </div>
        </div>

        {/* ROI Summary */}
        <motion.div
          className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-wrap items-center justify-center gap-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <p className="text-xs text-white/50 uppercase tracking-wider">
              Setup Inicial
            </p>
            <p className="text-2xl font-bold text-white">
              {economySummary.setupInicial}
            </p>
          </div>
          <ArrowRight className="w-6 h-6 text-white/30" />
          <div className="text-center">
            <p className="text-xs text-white/50 uppercase tracking-wider">
              Economia Acumulada (6 meses)
            </p>
            <p className="text-2xl font-bold text-[#00FF94]">
              {economySummary.economiaAcumulada6Meses}
            </p>
          </div>
          <ArrowRight className="w-6 h-6 text-white/30" />
          <div className="text-center">
            <p className="text-xs text-white/50 uppercase tracking-wider">
              Payback
            </p>
            <p className="text-2xl font-bold text-[#00E5FF]">
              {economySummary.payback}
            </p>
          </div>
        </motion.div>

        {/* Other Benefits */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Outros Ganhos Operacionais
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => {
              const IconComponent =
                benefitIcons[benefit.iconName as keyof typeof benefitIcons];
              return (
                <motion.div
                  key={benefit.title}
                  className="rounded-xl border border-white/10 bg-white/5 p-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="p-2 rounded-lg"
                      style={{ backgroundColor: `${benefit.color}20` }}
                    >
                      {IconComponent && (
                        <IconComponent
                          className="w-5 h-5"
                          style={{ color: benefit.color }}
                        />
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {benefit.title}
                      </p>
                      <p className="text-xs text-white/60 mt-1">{benefit.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-white/40 text-xs text-center">
          * Projecao baseada em premissas definidas durante a imersao. Valores
          podem variar conforme a realidade operacional.
        </p>
      </div>
    </SectionWrapper>
  );
}
