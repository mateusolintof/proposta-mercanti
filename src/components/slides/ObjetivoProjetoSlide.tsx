"use client";

import { motion } from "framer-motion";
import {
  GitBranch,
  Clock,
  Shield,
  Users,
  BarChart3,
  Check,
  Zap,
} from "lucide-react";
import SlideShell from "@/components/ui/SlideShell";

const objetivos = [
  {
    category: "Orquestração Core",
    items: [
      "Fila inteligente com rotação automática entre 18 vendedores",
      "SLA controlado: primeira resposta em menos de 3 minutos",
      "Balanceamento de carga equilibrado (fim do vendedor sobrecarregado)",
    ],
  },
  {
    category: "Jornadas Especializadas",
    items: [
      "Qualificação 24/7 para leads de televendas",
      "Follow-up automatizado para eventos (24h, não 30 dias)",
      "Régua de cobrança com governança WhatsApp",
    ],
  },
  {
    category: "Apoio ao Vendedor",
    items: [
      "Copiloto interno com contexto e recomendações",
      "Campanhas de recompra para clientes inativos",
    ],
  },
];

const diferenciais = [
  {
    icon: GitBranch,
    title: "Roteamento Inteligente",
    desc: "Lead nunca fica preso. Fallback automático se vendedor não atender em 5 min.",
  },
  {
    icon: Clock,
    title: "SLA Garantido",
    desc: "Monitoramento de tempo de resposta com alertas e reatribuição automática.",
  },
  {
    icon: Shield,
    title: "Governança WhatsApp",
    desc: "Limites de envio, opt-out respeitado e múltiplos canais para evitar perda de número.",
  },
  {
    icon: Users,
    title: "Human-in-Loop",
    desc: "Escala para humano em negociações sensíveis, valores altos ou clientes especiais.",
  },
  {
    icon: BarChart3,
    title: "Dashboard de Auditoria",
    desc: "Visão de funil, SLA, distribuição por vendedor e motivos de perda.",
  },
];

export default function ObjetivoProjetoSlide() {
  return (
    <SlideShell
      eyebrow="Objetivo do Projeto"
      eyebrowColor="success"
      title="O Que Vamos Resolver"
      subtitle="Mapeamento das necessidades da Mercante × capacidade da solução"
      size="compact"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
        {/* Coluna Esquerda: Objetivos */}
        <div className="space-y-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1.5 h-7 bg-amber-500 rounded-full" />
            <h3 className="text-lg font-semibold text-white">
              Objetivos da Mercante
            </h3>
          </div>

          {objetivos.map((section, idx) => (
            <motion.div
              key={section.category}
              className="bg-white/5 border border-white/10 rounded-2xl p-5"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <p className="text-xs uppercase tracking-widest text-amber-400 mb-3">
                {section.category}
              </p>
              <ul className="space-y-2">
                {section.items.map((item, i) => (
                  <li
                    key={i}
                  className="flex items-start gap-2 text-white/70 text-body"
                  >
                    <Check className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Coluna Direita: Diferenciais */}
        <div className="space-y-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1.5 h-7 bg-[#00FF94] rounded-full" />
            <h3 className="text-lg font-semibold text-white">
              Diferenciais da Solução
            </h3>
          </div>

          {/* Entrega Principal */}
          <motion.div
            className="bg-[#00FF94]/10 border border-[#00FF94]/30 rounded-2xl p-5"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-3">
              <Zap className="w-5 h-5 text-[#00FF94]" />
              <p className="text-xs uppercase tracking-widest text-[#00FF94]">
                Proposta Central
              </p>
            </div>
            <p className="text-white/80 text-body leading-relaxed">
              Orquestrador de atendimento que distribui leads entre 18 vendedores
              com SLA controlado, agentes especializados por jornada e governança
              para proteger a operação de cobrança.
            </p>
          </motion.div>

          {/* 5 Cards de Diferenciais */}
          <div className="space-y-2.5">
            <p className="text-xs uppercase tracking-widest text-white/50 mb-2">
              Capacidades Integradas
            </p>
            {diferenciais.map((tool, idx) => (
              <motion.div
                key={tool.title}
                className="bg-white/5 border border-white/10 rounded-xl p-3.5 flex items-start gap-3 hover:border-[#00FF94]/30 transition-colors"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + idx * 0.05 }}
              >
                <div className="p-2 bg-[#00E5FF]/10 rounded-lg flex-shrink-0">
                  <tool.icon className="w-4 h-4 text-[#00E5FF]" />
                </div>
                <div>
                  <h4 className="text-body font-medium text-white">
                    {tool.title}
                  </h4>
                  <p className="text-xs text-white/50 mt-0.5">{tool.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
