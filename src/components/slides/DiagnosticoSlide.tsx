"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Clock, Users, Calendar, Receipt, MessageSquareMore, ShoppingCart, DollarSign } from "lucide-react";
import SlideShell from "@/components/ui/SlideShell";

export default function DiagnosticoSlide() {
  return (
    <SlideShell
      eyebrow="Diagnóstico & Cenário"
      eyebrowColor="warning"
      title="Onde a Operação Pode Melhorar"
      subtitle="Diagnóstico da operação de televendas com 18 vendedores."
      size="compact"
      background={
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/10 via-transparent to-transparent pointer-events-none" />
      }
    >
      <div className="w-full space-y-8">
        {/* Seção 01 - Gargalos por Área */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-[0.3em] text-amber-300/70">
              01
            </span>
            <h3 className="text-lg font-semibold text-white">
              Gargalos por Área
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Atendimento e Vendas */}
            <motion.div
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="rounded-lg bg-[#00FF94]/10 p-2 text-[#00FF94]">
                  <ShoppingCart className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Atendimento e Vendas</p>
                  <p className="text-xs text-white/50">Gargalos operacionais</p>
                </div>
              </div>
              <ul className="space-y-2 text-xs text-white/60">
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-0.5">•</span>
                  <span>Atendimento restrito ao horário comercial</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-0.5">•</span>
                  <span>Sem gestão de filas e priorização</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-0.5">•</span>
                  <span>Tempo de resposta elevado</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-0.5">•</span>
                  <span>Consultas manuais ao ERP</span>
                </li>
              </ul>
            </motion.div>

            {/* Eventos */}
            <motion.div
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="rounded-lg bg-[#FFD700]/10 p-2 text-[#FFD700]">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Eventos</p>
                  <p className="text-xs text-white/50">Follow-up lento</p>
                </div>
              </div>
              <ul className="space-y-2 text-xs text-white/60">
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-0.5">•</span>
                  <span>Follow-up leva ~60 dias</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-0.5">•</span>
                  <span>Leads quentes esfriam</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-0.5">•</span>
                  <span>ROI difícil de medir</span>
                </li>
              </ul>
            </motion.div>

            {/* Cobrança */}
            <motion.div
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="rounded-lg bg-[#FF6B6B]/10 p-2 text-[#FF6B6B]">
                  <Receipt className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Cobrança</p>
                  <p className="text-xs text-white/50">Risco de número</p>
                </div>
              </div>
              <ul className="space-y-2 text-xs text-white/60">
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-0.5">•</span>
                  <span>Processo manual</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-0.5">•</span>
                  <span>Risco de perda do número WhatsApp</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-0.5">•</span>
                  <span>Sem governança de limites</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Seção 02 - Custo da Operação */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-[0.3em] text-amber-300/70">
              02
            </span>
            <h3 className="text-lg font-semibold text-white">
              Custo da Operação Atual
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div
              className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="w-12 h-12 mx-auto rounded-lg bg-amber-500/10 flex items-center justify-center mb-3">
                <Users className="h-6 w-6 text-amber-400" />
              </div>
              <p className="text-2xl font-bold text-white">18 vendedores</p>
              <p className="text-xs text-white/50 mt-1">× R$4.500/mês (com 13º e férias)</p>
              <p className="text-lg font-semibold text-amber-400 mt-2">R$ 81.000/mês</p>
            </motion.div>

            <motion.div
              className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-12 h-12 mx-auto rounded-lg bg-amber-500/10 flex items-center justify-center mb-3">
                <MessageSquareMore className="h-6 w-6 text-amber-400" />
              </div>
              <p className="text-2xl font-bold text-white">Fortics</p>
              <p className="text-xs text-white/50 mt-1">Custo atual da plataforma</p>
              <p className="text-lg font-semibold text-amber-400 mt-2">~R$ 2.000/mês</p>
            </motion.div>

            <motion.div
              className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-5 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="w-12 h-12 mx-auto rounded-lg bg-amber-500/20 flex items-center justify-center mb-3">
                <DollarSign className="h-6 w-6 text-amber-300" />
              </div>
              <p className="text-2xl font-bold text-white">Total</p>
              <p className="text-xs text-white/50 mt-1">Operação de televendas</p>
              <p className="text-xl font-bold text-amber-300 mt-2">R$ 83.000/mês</p>
            </motion.div>
          </div>
        </div>

        {/* Seção 03 - O que as soluções resolvem */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-[0.3em] text-amber-300/70">
              03
            </span>
            <h3 className="text-lg font-semibold text-white">
              O que as Soluções Resolvem
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.div
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <ul className="space-y-3 text-sm text-white/70">
                <li className="flex items-start gap-3">
                  <span className="text-[#00E5FF] mt-1">→</span>
                  <span><strong className="text-white">Inbox unificado</strong> — fim da alternância entre sistemas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00FF94] mt-1">→</span>
                  <span><strong className="text-white">Agente de Vendas</strong> — automação do processo, acesso a ERP</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FFD700] mt-1">→</span>
                  <span><strong className="text-white">Agente de Eventos</strong> — follow-up em dias, não meses</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FF6B6B] mt-1">→</span>
                  <span><strong className="text-white">Agente de Cobrança</strong> — automação com governança</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-red-500/10 border border-red-500/20 rounded-2xl p-5"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-red-400 text-xs uppercase tracking-wider font-semibold mb-3">
                CUSTO DE NÃO AGIR
              </p>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Vendedores gastam tempo em tarefas repetitivas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Leads de eventos viram lista fria (~60 dias)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Cobrança em alto volume desgasta o canal</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Sem escalabilidade: crescer = contratar</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-white/80 text-sm leading-relaxed">
            <strong className="text-[#00FF94]">Diagnóstico:</strong> o gargalo
            é falta de automação e ferramentas integradas.{" "}
            <strong className="text-[#00FF94]">
              As 4 soluções propostas
            </strong>{" "}
            eliminam tarefas repetitivas, aumentam capacidade e protegem a operação de cobrança.
          </p>
        </motion.div>
      </div>
    </SlideShell>
  );
}
