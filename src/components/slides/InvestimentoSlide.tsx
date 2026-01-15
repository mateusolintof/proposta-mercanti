"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Link2,
  LayoutDashboard,
  Check,
  MessageSquareMore,
  ShoppingCart,
  Calendar,
  Receipt,
  CheckCircle,
  AlertCircle,
  Cpu,
  Database,
  Server,
  Wrench,
} from "lucide-react";
import SlideShell from "@/components/ui/SlideShell";

type Plan = {
  name: string;
  subtitle: string;
  setup: string;
  monthly: string;
  duration?: string;
  bullets: string[];
  badge?: string;
  featured?: boolean;
  icon: React.ReactNode;
  color: string;
};

// Pacote principal (Omnichannel + Vendas)
const mainPackage: Plan = {
  name: "Solução Omnichannel + Agente de Vendas",
  subtitle: "API Meta + Inbox + Automação de Vendas com ERP",
  setup: "R$ 35.000,00",
  monthly: "R$ 6.000,00",
  duration: "12 meses",
  bullets: [
    "API Oficial Meta para WhatsApp",
    "Inbox Unificado para vendedores",
    "Agente de Vendas com RAG",
    "Integração ERP (consulta + criação de pedidos)",
    "Guardrails e Human-in-loop",
    "Dashboard executivo incluso",
  ],
  badge: "Pacote Principal",
  featured: true,
  icon: <MessageSquareMore className="w-6 h-6" />,
  color: "#00E5FF",
};

// Pacotes complementares
const additionalPackages: Plan[] = [
  {
    name: "Agente de Cobrança",
    subtitle: "Cobranças automatizadas com governança",
    setup: "R$ 8.000,00",
    monthly: "R$ 1.000,00",
    bullets: [
      "Régua de cobrança inteligente",
      "Governança WhatsApp",
      "Múltiplos canais de contato",
      "Human-in-loop para negociações",
    ],
    icon: <Receipt className="w-5 h-5" />,
    color: "#FF6B6B",
  },
  {
    name: "Agente de Eventos",
    subtitle: "Confirmação de presença e coleta de dados",
    setup: "R$ 8.000,00",
    monthly: "R$ 1.500,00",
    bullets: [
      "Confirmação de presença automatizada",
      "Múltiplas tentativas (mensagem + ligação)",
      "Coleta e validação de dados",
      "Métricas por evento",
    ],
    icon: <Calendar className="w-5 h-5" />,
    color: "#FFD700",
  },
];

const deliverables = [
  {
    icon: <Bot className="w-6 h-6" />,
    title: "4 Soluções Especializadas",
    items: [
      "Omnichannel (API Meta + Inbox)",
      "Agente de Vendas (ERP + RAG)",
      "Agente de Eventos",
      "Agente de Cobrança",
    ],
  },
  {
    icon: <Link2 className="w-6 h-6" />,
    title: "Integrações",
    items: [
      "WhatsApp Business API",
      "ERP (consulta e pedidos)",
      "Base de conhecimento (RAG)",
    ],
  },
  {
    icon: <LayoutDashboard className="w-6 h-6" />,
    title: "CRM & Dashboard",
    items: [
      "Inbox unificado",
      "Métricas por vendedor",
      "KPIs de eventos e cobrança",
    ],
  },
];

function MainPackageCard({ plan }: { plan: Plan }) {
  return (
    <motion.div
      className="relative rounded-2xl border-2 border-[#00E5FF]/40 bg-[#00E5FF]/5 p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex items-start gap-4">
          <div
            className="p-3 rounded-xl"
            style={{ backgroundColor: `${plan.color}20` }}
          >
            <div style={{ color: plan.color }}>{plan.icon}</div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
            <p className="text-white/60 text-sm mt-1">{plan.subtitle}</p>
          </div>
        </div>
        {plan.badge && (
          <span className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold bg-[#00E5FF] text-black">
            {plan.badge}
          </span>
        )}
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="rounded-lg border border-white/10 bg-black/20 p-3 text-center">
          <p className="text-[10px] uppercase tracking-wider text-white/40">Setup</p>
          <span className="text-lg font-semibold text-white">{plan.setup}</span>
        </div>
        <div className="rounded-lg border border-[#00FF94]/30 bg-[#00FF94]/10 p-3 text-center">
          <p className="text-[10px] uppercase tracking-wider text-white/40">Mensal</p>
          <span className="text-lg font-semibold text-[#00FF94]">{plan.monthly}</span>
        </div>
        <div className="rounded-lg border border-white/10 bg-black/20 p-3 text-center">
          <p className="text-[10px] uppercase tracking-wider text-white/40">Contrato</p>
          <span className="text-lg font-semibold text-white">{plan.duration}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {plan.bullets.map((item) => (
          <div
            key={item}
            className="flex items-start gap-2 text-white/70 text-sm"
          >
            <Check className="w-4 h-4 text-[#00FF94] mt-0.5 flex-shrink-0" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function AdditionalPackageCard({ plan, index }: { plan: Plan; index: number }) {
  return (
    <motion.div
      className="rounded-2xl border border-white/10 bg-white/5 p-5 flex flex-col gap-3 h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="flex items-start gap-3">
        <div
          className="p-2.5 rounded-lg"
          style={{ backgroundColor: `${plan.color}20` }}
        >
          <div style={{ color: plan.color }}>{plan.icon}</div>
        </div>
        <div>
          <h3 className="text-base font-semibold text-white">{plan.name}</h3>
          <p className="text-white/60 text-xs">{plan.subtitle}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-lg border border-white/10 bg-black/20 p-2.5">
          <p className="text-[10px] uppercase tracking-wider text-white/40">Setup</p>
          <span className="text-sm font-semibold text-white">{plan.setup}</span>
        </div>
        <div className="rounded-lg border border-[#00FF94]/30 bg-[#00FF94]/10 p-2.5">
          <p className="text-[10px] uppercase tracking-wider text-white/40">Mensal</p>
          <span className="text-sm font-semibold text-[#00FF94]">{plan.monthly}</span>
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
      subtitle="Pacotes modulares para sua operação"
      align="center"
      background={
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#00FF94]/5 via-transparent to-transparent pointer-events-none" />
      }
    >
      <div className="w-full space-y-6">
        {/* Pacote Principal */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-[#00E5FF] rounded-full" />
            <h3 className="text-lg font-semibold text-white">
              Pacote Principal
            </h3>
          </div>
          <MainPackageCard plan={mainPackage} />
        </div>

        {/* Pacotes Complementares */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-6 bg-[#00FF94] rounded-full" />
              <h3 className="text-lg font-semibold text-white">
                Pacotes Complementares
              </h3>
            </div>
            <p className="text-xs text-white/40 uppercase tracking-[0.2em]">
              Contratação modular
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {additionalPackages.map((plan, index) => (
              <AdditionalPackageCard key={plan.name} plan={plan} index={index} />
            ))}
          </div>
        </div>

        {/* Entregáveis */}
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

        {/* Transparência de Custos */}
        <motion.div
          className="rounded-2xl border border-[#00FF94]/30 bg-[#00FF94]/5 p-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Incluso */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle className="w-4 h-4 text-[#00FF94]" />
                <p className="text-xs uppercase tracking-wider text-[#00FF94] font-semibold">
                  Incluso no valor mensal
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { icon: Cpu, text: "Tokens de IA" },
                  { icon: Database, text: "Banco de Dados" },
                  { icon: Server, text: "Infraestrutura" },
                  { icon: Wrench, text: "Manutenção + Suporte" },
                  { icon: MessageSquareMore, text: "API Meta (vendas e relacionamento)" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-black/20 rounded-lg p-2"
                  >
                    <item.icon className="w-3.5 h-3.5 text-[#00FF94]" />
                    <span className="text-xs text-white/70">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Custo Adicional */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <AlertCircle className="w-4 h-4 text-[#FFD700]" />
                <p className="text-xs uppercase tracking-wider text-[#FFD700] font-semibold">
                  Custo adicional do cliente
                </p>
              </div>
              <div className="bg-[#FFD700]/5 border border-[#FFD700]/20 rounded-lg p-3">
                <p className="text-sm font-medium text-white">
                  API Meta — Marketing e Eventos
                </p>
                <p className="text-xs text-white/50 mt-1">
                  Campanhas, promoções e disparos de feiras/eventos são cobrados à parte (~R$ 0,30 - 0,50/conversa)
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}
