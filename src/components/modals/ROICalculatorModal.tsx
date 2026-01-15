"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Slider } from "@heroui/react";
import {
  Calculator,
  TrendingUp,
  DollarSign,
  Calendar,
  ArrowRight,
} from "lucide-react";
import ModalWrapper from "./ModalWrapper";

interface ROICalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ROICalculatorModal({
  isOpen,
  onClose,
}: ROICalculatorModalProps) {
  const [messagesPerMonth, setMessagesPerMonth] = useState(13000);
  const [avgTicket, setAvgTicket] = useState(500);
  const [currentSLARate, setCurrentSLARate] = useState(40);

  const VENDORS = 18;
  const AI_SLA_BOOST = 1.35; // 35% improvement in response rate

  const calculations = useMemo(() => {
    const newSLARate = Math.min(currentSLARate * AI_SLA_BOOST, 75);

    // Messages that become qualified opportunities (with good response time)
    const currentQualifiedLeads = Math.round(
      (messagesPerMonth * currentSLARate) / 100
    );
    const newQualifiedLeads = Math.round(
      (messagesPerMonth * newSLARate) / 100
    );
    const additionalQualified = newQualifiedLeads - currentQualifiedLeads;

    // Conversion from qualified leads (assumed 8% base - conservative)
    const conversionRate = 0.08;
    const currentMonthlyOrders = Math.round(currentQualifiedLeads * conversionRate);
    const newMonthlyOrders = Math.round(newQualifiedLeads * conversionRate);
    const additionalOrders = newMonthlyOrders - currentMonthlyOrders;

    const currentMonthlyRevenue = currentMonthlyOrders * avgTicket;
    const newMonthlyRevenue = newMonthlyOrders * avgTicket;
    const additionalRevenue = newMonthlyRevenue - currentMonthlyRevenue;

    // Capacity per vendor
    const currentCapacityPerVendor = Math.round(currentQualifiedLeads / VENDORS);
    const newCapacityPerVendor = Math.round(newQualifiedLeads / VENDORS);

    return {
      currentMonthlyOrders,
      newMonthlyOrders,
      additionalOrders,
      currentMonthlyRevenue,
      newMonthlyRevenue,
      additionalRevenue,
      currentQualifiedLeads,
      newQualifiedLeads,
      additionalQualified,
      newSLARate,
      currentCapacityPerVendor,
      newCapacityPerVendor,
    };
  }, [messagesPerMonth, avgTicket, currentSLARate]);

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      maximumFractionDigits: 0,
    }).format(value);

  return (
    <ModalWrapper
      isOpen={isOpen}
      onClose={onClose}
      title="Simulador de Impacto"
      subtitle="Simule o impacto na operação com orquestração inteligente"
    >
      <div className="space-y-8">
        {/* Sliders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <label className="text-white/70 text-body block mb-4">
              Mensagens por mês
            </label>
            <Slider
              aria-label="Mensagens por mês"
              size="sm"
              step={500}
              minValue={5000}
              maxValue={25000}
              value={messagesPerMonth}
              onChange={(val) => setMessagesPerMonth(val as number)}
              className="max-w-full"
              classNames={{
                track: "bg-white/20",
                filler: "bg-gradient-to-r from-[#00E5FF] to-[#00FF94]",
                thumb: "bg-white",
              }}
            />
            <p className="text-2xl font-bold text-[#00E5FF] mt-3">
              {messagesPerMonth.toLocaleString()}
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <label className="text-white/70 text-body block mb-4">
              Ticket médio pedido (R$)
            </label>
            <Slider
              aria-label="Ticket médio (R$)"
              size="sm"
              step={50}
              minValue={200}
              maxValue={2000}
              value={avgTicket}
              onChange={(val) => setAvgTicket(val as number)}
              className="max-w-full"
              classNames={{
                track: "bg-white/20",
                filler: "bg-gradient-to-r from-[#00E5FF] to-[#00FF94]",
                thumb: "bg-white",
              }}
            />
            <p className="text-2xl font-bold text-[#00E5FF] mt-3">
              {formatCurrency(avgTicket)}
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <label className="text-white/70 text-body block mb-4">
              Taxa de resposta rápida (%)
            </label>
            <Slider
              aria-label="SLA atual (%)"
              size="sm"
              step={5}
              minValue={20}
              maxValue={70}
              value={currentSLARate}
              onChange={(val) => setCurrentSLARate(val as number)}
              className="max-w-full"
              classNames={{
                track: "bg-white/20",
                filler: "bg-gradient-to-r from-[#00E5FF] to-[#00FF94]",
                thumb: "bg-white",
              }}
            />
            <p className="text-2xl font-bold text-[#00E5FF] mt-3">
              {currentSLARate}%
            </p>
          </div>
        </div>

        {/* Response Rate Comparison */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-5">
          <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-[#00FF94]" />
            Projeção de Melhoria na Taxa de Resposta
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-white/50 text-sm mb-2">Taxa Atual</p>
              <p className="text-3xl font-bold text-white/70">
                {currentSLARate}%
              </p>
              <p className="text-white/40 text-sm mt-1">
                {calculations.currentQualifiedLeads.toLocaleString()} leads atendidos/mês
              </p>
            </div>
            <div className="flex items-center justify-center">
              <ArrowRight className="w-8 h-8 text-[#00FF94]" />
            </div>
            <div className="text-center">
              <p className="text-white/50 text-sm mb-2">Taxa com Orquestração</p>
              <p className="text-3xl font-bold text-[#00FF94]">
                {calculations.newSLARate.toFixed(0)}%
              </p>
              <p className="text-[#00FF94] text-sm mt-1">
                {calculations.newQualifiedLeads.toLocaleString()} leads atendidos/mês
              </p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-white/10 text-center">
            <p className="text-white/70">
              <span className="text-[#00FF94] font-bold text-xl">
                +{calculations.additionalQualified.toLocaleString()}
              </span>{" "}
              leads atendidos a tempo por mês
            </p>
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <motion.div
            className="bg-gradient-to-br from-[#00E5FF]/20 to-transparent border border-[#00E5FF]/30 rounded-xl p-5 text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <DollarSign className="w-6 h-6 text-[#00E5FF] mx-auto mb-2" />
            <p className="text-white/50 text-xs mb-1">Receita Potencial/Mês</p>
            <p className="text-2xl font-bold text-[#00E5FF]">
              {formatCurrency(calculations.additionalRevenue)}
            </p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-[#00FF94]/20 to-transparent border border-[#00FF94]/30 rounded-xl p-5 text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <TrendingUp className="w-6 h-6 text-[#00FF94] mx-auto mb-2" />
            <p className="text-white/50 text-xs mb-1">Pedidos Adicionais/Mês</p>
            <p className="text-2xl font-bold text-[#00FF94]">
              +{calculations.additionalOrders}
            </p>
            <p className="text-white/30 text-xs">
              (base: {calculations.currentMonthlyOrders} → {calculations.newMonthlyOrders})
            </p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-[#FFD700]/20 to-transparent border border-[#FFD700]/30 rounded-xl p-5 text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Calendar className="w-6 h-6 text-[#FFD700] mx-auto mb-2" />
            <p className="text-white/50 text-xs mb-1">Capacidade/Vendedor</p>
            <p className="text-2xl font-bold text-[#FFD700]">
              +{calculations.newCapacityPerVendor - calculations.currentCapacityPerVendor}
            </p>
            <p className="text-white/30 text-xs">leads qualificados/mês</p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-[#00FF94]/20 to-transparent border border-[#00FF94]/30 rounded-xl p-5 text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Calculator className="w-6 h-6 text-[#00FF94] mx-auto mb-2" />
            <p className="text-white/50 text-xs mb-1">Receita Anual Potencial</p>
            <p className="text-2xl font-bold text-[#00FF94]">
              {formatCurrency(calculations.additionalRevenue * 12)}
            </p>
            <p className="text-white/30 text-xs">
              com {VENDORS} vendedores
            </p>
          </motion.div>
        </div>

        {/* Capacity Summary */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-5">
          <h4 className="text-white font-semibold mb-3">
            Impacto na Capacidade da Equipe
          </h4>
          <div className="grid grid-cols-2 gap-4 text-body">
            <div className="flex justify-between">
              <span className="text-white/50">Vendedores</span>
              <span className="text-white">{VENDORS} pessoas</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/50">Leads qualificados atuais/vendedor</span>
              <span className="text-white">{calculations.currentCapacityPerVendor}/mês</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/50">Leads qualificados com IA/vendedor</span>
              <span className="text-[#00FF94]">{calculations.newCapacityPerVendor}/mês</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/50">Ganho de capacidade</span>
              <span className="text-[#00FF94]">
                +{Math.round(((calculations.newCapacityPerVendor - calculations.currentCapacityPerVendor) / calculations.currentCapacityPerVendor) * 100)}%
              </span>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-white/30 text-xs text-center">
          * Valores ilustrativos com base em benchmarks de mercado. Resultados
          reais serão definidos após diagnóstico da operação da Mercante.
        </p>
      </div>
    </ModalWrapper>
  );
}
