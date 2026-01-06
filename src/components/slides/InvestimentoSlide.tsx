"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Link2,
  LayoutDashboard,
  Check,
} from "lucide-react";
import SlideShell from "@/components/ui/SlideShell";

type Plan = {
  name: string;
  subtitle: string;
  setup: string;
  monthly: string;
  bullets: string[];
  badge?: string;
  featured?: boolean;
};

// 2 agentes principais (linha de cima - cards maiores)
const mainAgents: Plan[] = [
  {
    name: "Agente Atendimento",
    subtitle: "Orquestrador inteligente com qualificação 24/7",
    setup: "R$ 25.000,00",
    monthly: "R$ 5.000,00",
    bullets: [
      "Distribuição inteligente entre vendedores",
      "Qualificação automática de leads",
      "Handoff com contexto completo",
      "Atendimento fora do horário comercial",
    ],
    badge: "Core",
    featured: true,
  },
  {
    name: "Agente Eventos",
    subtitle: "Confirmação de presença e dados para feiras e eventos",
    setup: "R$ 8.000,00",
    monthly: "R$ 1.000,00",
    bullets: [
      "Múltiplas tentativas de contato (mensagem + ligação)",
      "Confirmação de presença no evento",
      "Validação e atualização de dados cadastrais",
      "Métricas de confirmação e ROI por evento",
    ],
  },
];

// 3 agentes complementares (linha de baixo)
const additionalAgents: Plan[] = [
  {
    name: "Agente Cobrança",
    subtitle: "Régua de cobrança com governança WhatsApp",
    setup: "R$ 8.000,00",
    monthly: "R$ 1.000,00",
    bullets: [
      "Régua pré e pós-vencimento",
      "Governança e limites WhatsApp",
      "Múltiplos canais de contato",
      "Human-in-loop para negociações",
    ],
  },
  {
    name: "Agente Follow-Up e Recompra",
    subtitle: "Reativação de clientes e cadência de recompra",
    setup: "R$ 8.000,00",
    monthly: "R$ 1.000,00",
    bullets: [
      "Identificação de clientes inativos",
      "Cadência automatizada de recompra",
      "Ofertas personalizadas por histórico",
      "Métricas de reativação e LTV",
    ],
  },
  {
    name: "Agente Copiloto + POP",
    subtitle: "Assistente de bolso para vendedores e sistema de disparo POP",
    setup: "Sob consulta",
    monthly: "Sob consulta",
    bullets: [
      "Assistente para dúvidas de produto",
      "Consulta de estoque e preços",
      "Disparo de promoções (POP)",
      "Sugestões de venda cruzada",
    ],
  },
];

const deliverables = [
  {
    icon: <Bot className="w-6 h-6" />,
    title: "5 Agentes Especializados",
    items: [
      "Atendimento, Evento, Cobrança",
      "Follow-Up e Recompra",
      "Copiloto + POP",
    ],
  },
  {
    icon: <Link2 className="w-6 h-6" />,
    title: "Integrações",
    items: [
      "Fortix (sistema atual)",
      "WhatsApp Business API",
      "ERP e base de dados",
    ],
  },
  {
    icon: <LayoutDashboard className="w-6 h-6" />,
    title: "CRM & Dashboard",
    items: [
      "Visão de funil e métricas",
      "Distribuição por vendedor",
      "KPIs de eventos e cobrança",
    ],
  },
];

function PlanCard({ plan, index }: { plan: Plan; index: number }) {
  const isFeatured = plan.featured;
  return (
    <motion.div
      className={`relative rounded-2xl border bg-white/5 p-5 flex flex-col gap-3 h-full ${
        isFeatured
          ? "border-[#00E5FF]/40 bg-[#00E5FF]/5"
          : "border-white/10"
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="space-y-1">
          <h3 className="text-base font-semibold text-white">{plan.name}</h3>
          <p className="text-white/60 text-xs leading-relaxed">
            {plan.subtitle}
          </p>
        </div>
        {plan.badge ? (
          <span
            className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold ${
              isFeatured ? "bg-[#00E5FF] text-black" : "bg-white/10 text-white"
            }`}
          >
            {plan.badge}
          </span>
        ) : null}
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-lg border border-white/10 bg-black/20 p-2.5">
          <p className="text-[10px] uppercase tracking-wider text-white/40">
            Setup
          </p>
          <span className="text-sm font-semibold text-white">
            {plan.setup}
          </span>
        </div>
        <div className="rounded-lg border border-[#00FF94]/30 bg-[#00FF94]/10 p-2.5">
          <p className="text-[10px] uppercase tracking-wider text-white/40">
            Mensal
          </p>
          <span className="text-sm font-semibold text-[#00FF94]">
            {plan.monthly}
          </span>
        </div>
      </div>

      <div className="pt-2 border-t border-white/10 space-y-1.5">
        {plan.bullets.map((item) => (
          <div
            key={item}
            className="flex items-start gap-2 text-white/70 text-xs leading-relaxed"
          >
            <Check className="w-3 h-3 text-[#00FF94] mt-0.5 flex-shrink-0" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function InvestimentoSlide() {
  return (
    <SlideShell
      eyebrow="Investimento"
      eyebrowColor="success"
      title="Investimento"
      subtitle="Escolha modular de agentes especializados"
      align="center"
      background={
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#00FF94]/5 via-transparent to-transparent pointer-events-none" />
      }
    >
      <div className="w-full space-y-6">
        {/* 2 agentes principais (em cima) */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-6 bg-[#00E5FF] rounded-full" />
              <h3 className="text-lg font-semibold text-white">
                Agentes Principais
              </h3>
            </div>
            <p className="text-xs text-white/40 uppercase tracking-[0.2em]">
              Escolha modular
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {mainAgents.map((plan, index) => (
              <PlanCard key={plan.name} plan={plan} index={index} />
            ))}
          </div>
        </div>

        {/* 3 agentes complementares (em baixo) */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-6 bg-[#00FF94] rounded-full" />
              <h3 className="text-lg font-semibold text-white">
                Agentes Complementares
              </h3>
            </div>
            <p className="text-xs text-white/40 uppercase tracking-[0.2em]">
              Expansão modular
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {additionalAgents.map((plan, index) => (
              <PlanCard key={plan.name} plan={plan} index={index + 2} />
            ))}
          </div>
        </div>

        <div className="pt-2">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-1.5 h-6 bg-[#00E5FF] rounded-full" />
            <h3 className="text-lg font-semibold text-white">
              Entregáveis Inclusos
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            {deliverables.map((item, index) => (
              <motion.div
                key={item.title}
                className="relative bg-white/5 border border-white/10 rounded-2xl p-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.08 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-2 bg-[#00E5FF]/10 rounded-lg text-[#00E5FF]">
                    {item.icon}
                  </div>
                  <h4 className="text-sm font-semibold text-white">
                    {item.title}
                  </h4>
                </div>
                <ul className="space-y-1.5">
                  {item.items.map((subItem) => (
                    <li
                      key={subItem}
                      className="flex items-center gap-2 text-white/60 text-xs"
                    >
                      <Check className="w-3 h-3 text-[#00FF94]" />
                      <span>{subItem}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
