"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Shield,
  Clock,
  MessageSquare,
  DollarSign,
  Code,
} from "lucide-react";
import SlideShell from "@/components/ui/SlideShell";

interface FAQItem {
  icon: React.ReactNode;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    icon: <DollarSign className="w-5 h-5" />,
    question: "O que está incluso no valor mensal de R$ 6.000?",
    answer:
      "O valor mensal inclui 100% dos custos operacionais: tokens de IA (Claude, OpenAI), banco de dados PostgreSQL e Redis, infraestrutura em nuvem, manutenção, atualizações de segurança, melhorias contínuas e suporte técnico dedicado. Também está incluso o custo da API Oficial da Meta para vendas e mensagens de relacionamento com o cliente.",
  },
  {
    icon: <MessageSquare className="w-5 h-5" />,
    question: "Como funciona o custo da API Oficial da Meta?",
    answer:
      "Para vendas e mensagens de relacionamento com o cliente, o custo da API da Meta já está embutido no valor mensal. Porém, para campanhas de marketing, promoções e disparos em massa, o custo da API é repassado separadamente conforme consumo (~R$ 0,30 a 0,50 por conversa).",
  },
  {
    icon: <Code className="w-5 h-5" />,
    question: "Qual a stack tecnológica utilizada?",
    answer:
      "A solução é construída com tecnologias modernas e escaláveis: Backend em Python com FastAPI, banco de dados PostgreSQL para persistência e Redis para cache e filas, RAG (Retrieval-Augmented Generation) para consulta inteligente ao ERP, Claude API (Anthropic) como LLM principal, e frontend em React/TypeScript. Toda infraestrutura roda em nuvem com alta disponibilidade.",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    question: "Como garantem a segurança e controle das respostas da IA?",
    answer:
      "A solução possui múltiplas camadas de segurança: Guardrails que limitam o escopo de atuação do agente e bloqueiam respostas inadequadas; Human-in-the-loop para escalar automaticamente casos sensíveis ou fora do escopo para um atendente humano; Handoffs inteligentes que transferem a conversa mantendo todo o contexto; e logs completos para auditoria. O agente nunca toma decisões críticas sozinho.",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    question: "Qual o prazo de implementação?",
    answer:
      "Em geral, 4 a 8 semanas dependendo da complexidade das integrações com o ERP. O projeto segue 4 fases: Imersão (diagnóstico e mapeamento), Desenvolvimento (construção dos agentes e integrações), Testes e Validação (ambiente controlado), e Go-Live (lançamento com acompanhamento). Trabalhamos de forma iterativa para entregas rápidas.",
  },
];

export default function FAQSlide() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <SlideShell
      eyebrow="FAQ"
      eyebrowColor="default"
      title="Perguntas Frequentes"
      subtitle="Custos, API da Meta, stack tecnológica e implementação."
      align="center"
      size="compact"
    >
      <div className="max-w-3xl mx-auto space-y-3">
        {faqItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden hover:border-[#00E5FF]/30 transition-colors"
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-5 py-4 flex items-center gap-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF] focus-visible:ring-inset"
              aria-expanded={openIndex === index}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                  openIndex === index
                    ? "bg-[#00E5FF] text-[#02040A]"
                    : "bg-[#00E5FF]/20 text-[#00E5FF]"
                }`}
              >
                {item.icon}
              </div>
              <span
                className={`flex-1 font-medium transition-colors text-body ${
                  openIndex === index ? "text-white" : "text-white/80"
                }`}
              >
                {item.question}
              </span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="shrink-0"
              >
                <ChevronDown
                  className={`w-5 h-5 transition-colors ${
                    openIndex === index ? "text-[#00E5FF]" : "text-white/40"
                  }`}
                />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-5 pb-4 pl-[4.5rem]">
                    <p className="text-white/60 text-body leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Additional help */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-6 text-center"
      >
        <p className="text-white/40 text-body">
          Ainda tem dúvidas?{" "}
          <span className="font-semibold text-[#00E5FF]">
            Estamos à disposição para esclarecer qualquer ponto.
          </span>
        </p>
      </motion.div>
    </SlideShell>
  );
}
