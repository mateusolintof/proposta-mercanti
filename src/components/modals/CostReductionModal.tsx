"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Slider } from "@heroui/react";
import {
  Users,
  TrendingDown,
  DollarSign,
  Bot,
  Clock,
  AlertCircle,
} from "lucide-react";
import ModalWrapper from "./ModalWrapper";

interface CostReductionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CostReductionModal({
  isOpen,
  onClose,
}: CostReductionModalProps) {
  const [vendorCount, setVendorCount] = useState(18);
  const [messagesPerVendor, setMessagesPerVendor] = useState(700);
  const [automationPercent, setAutomationPercent] = useState(50);

  const CAPACITY_MULTIPLIER = 0.5; // 25% more capacity with automation (conservative)

  const calculations = useMemo(() => {
    const automationRate = automationPercent / 100;

    // Current capacity
    const currentTotalCapacity = vendorCount * messagesPerVendor;

    // Time freed up per vendor (in percentage)
    const timeSaved = automationRate;

    // New capacity per vendor after automation
    const newCapacityPerVendor = Math.round(messagesPerVendor * (1 + timeSaved * CAPACITY_MULTIPLIER));
    const newTotalCapacity = vendorCount * newCapacityPerVendor;
    const additionalCapacity = newTotalCapacity - currentTotalCapacity;

    // Hours freed per vendor per month (8h/day * 22 days)
    const hoursFreedPerVendor = Math.round(8 * 22 * timeSaved);
    const totalHoursFreed = hoursFreedPerVendor * vendorCount;

    // Equivalent to X additional vendors
    const equivalentExtraVendors = Math.round(additionalCapacity / messagesPerVendor * 10) / 10;

    // Conversations per hour improvement
    const currentConversationsPerHour = Math.round(messagesPerVendor / (8 * 22));
    const newConversationsPerHour = Math.round(newCapacityPerVendor / (8 * 22));

    return {
      currentTotalCapacity,
      newTotalCapacity,
      additionalCapacity,
      newCapacityPerVendor,
      hoursFreedPerVendor,
      totalHoursFreed,
      equivalentExtraVendors,
      currentConversationsPerHour,
      newConversationsPerHour,
      timeSaved,
    };
  }, [vendorCount, messagesPerVendor, automationPercent]);

  return (
    <ModalWrapper
      isOpen={isOpen}
      onClose={onClose}
      title="Ganho de Capacidade"
      subtitle="Calcule o aumento de capacidade por vendedor com orquestração"
    >
      <div className="space-y-8">
        {/* Sliders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <label className="text-white/70 text-body block mb-4">
              Número de vendedores
            </label>
            <Slider
              aria-label="Número de vendedores"
              size="sm"
              step={1}
              minValue={5}
              maxValue={30}
              value={vendorCount}
              onChange={(val) => setVendorCount(val as number)}
              className="max-w-full"
              classNames={{
                track: "bg-white/20",
                filler: "bg-gradient-to-r from-[#00E5FF] to-[#00FF94]",
                thumb: "bg-white",
              }}
            />
            <p className="text-2xl font-bold text-[#00E5FF] mt-3">
              {vendorCount} pessoas
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <label className="text-white/70 text-body block mb-4">
              Conversas por vendedor/mês
            </label>
            <Slider
              aria-label="Conversas por vendedor/mês"
              size="sm"
              step={50}
              minValue={300}
              maxValue={1500}
              value={messagesPerVendor}
              onChange={(val) => setMessagesPerVendor(val as number)}
              className="max-w-full"
              classNames={{
                track: "bg-white/20",
                filler: "bg-gradient-to-r from-[#00E5FF] to-[#00FF94]",
                thumb: "bg-white",
              }}
            />
            <p className="text-2xl font-bold text-[#00E5FF] mt-3">
              {messagesPerVendor}
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <label className="text-white/70 text-body block mb-4">
              Tarefas automatizadas (%)
            </label>
            <Slider
              aria-label="Automação (%)"
              size="sm"
              step={5}
              minValue={30}
              maxValue={70}
              value={automationPercent}
              onChange={(val) => setAutomationPercent(val as number)}
              className="max-w-full"
              classNames={{
                track: "bg-white/20",
                filler: "bg-gradient-to-r from-[#00E5FF] to-[#00FF94]",
                thumb: "bg-white",
              }}
            />
            <p className="text-2xl font-bold text-[#00E5FF] mt-3">
              {automationPercent}%
            </p>
          </div>
        </div>

        {/* Current vs Future */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-white/70" />
              Cenário Atual
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-white/50">Vendedores</span>
                <span className="text-white">{vendorCount} pessoas</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/50">Conversas/vendedor/mês</span>
                <span className="text-white">{messagesPerVendor}</span>
              </div>
              <div className="flex justify-between pt-3 border-t border-white/10">
                <span className="text-white/70 font-medium">Capacidade total/mês</span>
                <span className="text-white font-bold">
                  {calculations.currentTotalCapacity.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#00FF94]/10 to-transparent border border-[#00FF94]/30 rounded-xl p-5">
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
              <Bot className="w-5 h-5 text-[#00FF94]" />
              Cenário com Orquestração
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-white/50">Conversas/vendedor/mês</span>
                <span className="text-[#00FF94]">
                  {calculations.newCapacityPerVendor}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/50">Equivalente a</span>
                <span className="text-[#00FF94]">
                  +{calculations.equivalentExtraVendors} vendedores
                </span>
              </div>
              <div className="flex justify-between pt-3 border-t border-white/10">
                <span className="text-white/70 font-medium">Capacidade total/mês</span>
                <span className="text-[#00FF94] font-bold">
                  {calculations.newTotalCapacity.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <motion.div
            className="bg-gradient-to-br from-[#00FF94]/20 to-transparent border border-[#00FF94]/30 rounded-xl p-5 text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <TrendingDown className="w-6 h-6 text-[#00FF94] mx-auto mb-2" />
            <p className="text-white/50 text-xs mb-1">Capacidade Adicional</p>
            <p className="text-3xl font-bold text-[#00FF94]">
              +{calculations.additionalCapacity.toLocaleString()}
            </p>
            <p className="text-white/30 text-xs">conversas/mês</p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-[#00E5FF]/20 to-transparent border border-[#00E5FF]/30 rounded-xl p-5 text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <DollarSign className="w-6 h-6 text-[#00E5FF] mx-auto mb-2" />
            <p className="text-white/50 text-xs mb-1">Ganho por Vendedor</p>
            <p className="text-3xl font-bold text-[#00E5FF]">
              +{Math.round(((calculations.newCapacityPerVendor - messagesPerVendor) / messagesPerVendor) * 100)}%
            </p>
            <p className="text-white/30 text-xs">de capacidade</p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-[#FFD700]/20 to-transparent border border-[#FFD700]/30 rounded-xl p-5 text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Clock className="w-6 h-6 text-[#FFD700] mx-auto mb-2" />
            <p className="text-white/50 text-xs mb-1">Horas Liberadas/Mês</p>
            <p className="text-3xl font-bold text-[#FFD700]">
              {calculations.totalHoursFreed}h
            </p>
            <p className="text-white/30 text-xs">({calculations.hoursFreedPerVendor}h/vendedor)</p>
          </motion.div>
        </div>

        {/* Note about automation */}
        <div className="bg-[#00E5FF]/10 border border-[#00E5FF]/20 rounded-xl p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-[#00E5FF] flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-white/80 text-sm font-medium">
              Foco em qualidade, não em corte de equipe
            </p>
            <p className="text-white/50 text-xs mt-1">
              A orquestração não substitui vendedores — ela aumenta a capacidade de cada um.
              Tarefas repetitivas (qualificação, follow-up, cadência) são automatizadas,
              liberando tempo para negociação e relacionamento.
            </p>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-5">
          <h4 className="text-white font-semibold mb-3">
            O que cada vendedor ganha
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-body">
            <div className="flex items-center gap-2 text-white/70">
              <div className="w-2 h-2 bg-[#00FF94] rounded-full" />
              Mais tempo para fechamento e negociação
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <div className="w-2 h-2 bg-[#00FF94] rounded-full" />
              Leads já qualificados e com contexto
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <div className="w-2 h-2 bg-[#00FF94] rounded-full" />
              Menos tarefas repetitivas (follow-up, lembretes)
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <div className="w-2 h-2 bg-[#00FF94] rounded-full" />
              Distribuição equilibrada sem sobrecarga
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-white/30 text-xs text-center">
          * Valores ilustrativos. Os ganhos reais dependem do volume de atendimentos
          e serão validados após diagnóstico da operação da Mercante.
        </p>
      </div>
    </ModalWrapper>
  );
}
