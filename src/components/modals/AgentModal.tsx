"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import {
  MessageSquareMore,
  ShoppingCart,
  Calendar,
  Receipt,
  CheckCircle,
} from "lucide-react";
import ModalWrapper from "./ModalWrapper";
import RadialCapabilityDiagram from "./agents/RadialCapabilityDiagram";
import type { AgentType } from "@/types/modal";

// Dynamic import for ReactFlow component (SSR disabled)
const AgentFlowDiagram = dynamic(
  () => import("./agents/AgentFlowDiagram"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[400px] rounded-xl border border-white/10 bg-white/5 flex items-center justify-center">
        <div className="text-white/60 text-sm">Carregando fluxograma...</div>
      </div>
    ),
  }
);

interface AgentModalProps {
  agent: AgentType;
  isOpen: boolean;
  onClose: () => void;
}

const agentData: Record<
  AgentType,
  {
    name: string;
    fullName: string;
    description: string;
    icon: React.ReactNode;
    color: string;
    benefits: string[];
  }
> = {
  omnichannel: {
    name: "Solução Omnichannel",
    fullName: "API Oficial Meta + Inbox Unificado",
    description:
      "Plataforma completa de atendimento com API oficial da Meta para WhatsApp, roteamento inteligente de números e inbox unificado para toda a equipe de vendas. Histórico centralizado e métricas por vendedor.",
    icon: <MessageSquareMore className="w-6 h-6" />,
    color: "#00E5FF",
    benefits: [
      "API Oficial Meta - Compliance total, sem risco de bloqueio de número",
      "Inbox Unificado - Todos os vendedores em uma única interface",
      "Roteamento de Números - Mesma lógica atual com balanceamento inteligente",
      "Histórico Centralizado - Busca, auditoria e continuidade de conversas",
      "Métricas por Vendedor - Tempo de resposta, volume e conversão",
    ],
  },
  vendas: {
    name: "Agente de Vendas",
    fullName: "Automação de Vendas com Integração ERP",
    description:
      "Agente inteligente que identifica clientes (cadastrados ou novos), consulta produtos, preços e estoque no ERP via RAG, e cria ordens de venda automaticamente. Human-in-loop para casos especiais.",
    icon: <ShoppingCart className="w-6 h-6" />,
    color: "#00FF94",
    benefits: [
      "Identificação de Cliente - Busca por CPF/CNPJ, histórico de compras",
      "Consulta ao ERP - Produtos, preços e disponibilidade em tempo real",
      "RAG de Produtos - Conhece categorias, especificações e condições",
      "Criação de Pedidos - Gera ordem de venda diretamente no ERP",
      "Cross-sell Inteligente - Sugestões baseadas no histórico do cliente",
    ],
  },
  evento: {
    name: "Agente de Eventos",
    fullName: "Confirmação de Presença e Coleta de Dados",
    description:
      "Especializado em contatar participantes de feiras e eventos para confirmar presença, coletar dados cadastrais e validar informações. Múltiplas tentativas (mensagem + ligação) até conseguir contato.",
    icon: <Calendar className="w-6 h-6" />,
    color: "#FFD700",
    benefits: [
      "Confirmação de Presença - Contato proativo pré-evento",
      "Múltiplas Tentativas - WhatsApp + ligação até conseguir contato",
      "Coleta de Dados - Valida e atualiza informações cadastrais",
      "Cadência Automatizada - Sequência de 3-5 toques otimizada",
      "Métricas por Evento - Taxa de confirmação e ROI mensurável",
    ],
  },
  cobranca: {
    name: "Agente de Cobrança",
    fullName: "Régua de Cobrança com Governança WhatsApp",
    description:
      "Automatiza cobrança de inadimplentes com régua inteligente (pré e pós-vencimento), múltiplos canais e governança para evitar perda de número. Human-in-loop para negociações sensíveis.",
    icon: <Receipt className="w-6 h-6" />,
    color: "#FF6B6B",
    benefits: [
      "Régua Inteligente - Sequência pré-vencimento (D-3) e pós-vencimento (D+1, D+7)",
      "Governança WhatsApp - Limites de envio, opt-out e qualidade controlados",
      "Múltiplos Canais - WhatsApp, SMS, e-mail conforme preferência do cliente",
      "Human-in-loop - Escala para humano em negociações ou valores altos",
      "Dashboard de Inadimplência - Visão de aging, recovery e motivos",
    ],
  },
};

export default function AgentModal({ agent, isOpen, onClose }: AgentModalProps) {
  const data = agentData[agent];

  return (
    <ModalWrapper
      isOpen={isOpen}
      onClose={onClose}
      title={data.name}
      subtitle={data.fullName}
    >
      <div className="h-full overflow-y-auto pr-2 -mr-2 space-y-8">
        {/* Top Section: Description + Capabilities Diagram */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left: Description + Benefits */}
          <div className="order-2 lg:order-1 lg:w-[36%] space-y-6 flex-shrink-0">
            {/* Description */}
            <div className="flex items-start gap-4">
              <div
                className="p-4 rounded-xl flex-shrink-0"
                style={{ backgroundColor: `${data.color}20` }}
              >
                <div style={{ color: data.color }}>{data.icon}</div>
              </div>
              <p className="text-white/70 text-body leading-relaxed">
                {data.description}
              </p>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#00FF94]" />
                Benefícios
              </h3>
              <div className="space-y-2">
                {data.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 bg-white/5 rounded-lg p-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <CheckCircle className="w-4 h-4 text-[#00FF94] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70 text-body">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center pt-4 border-t border-white/10">
              <p className="text-white/50 text-sm">
                Esta solução faz parte do{" "}
                <span className="text-[#00FF94] font-semibold">
                  Pacote Modular
                </span>
              </p>
            </div>
          </div>

          {/* Right: Radial Capability Diagram */}
          <div className="order-1 lg:order-2 flex-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <RadialCapabilityDiagram
                agentType={agent}
                agentColor={data.color}
              />
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10" />

        {/* Bottom Section: Interactive Flowchart */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">
              Fluxo de Operação Detalhado
            </h3>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <AgentFlowDiagram agentType={agent} agentColor={data.color} />
          </motion.div>
        </div>
      </div>
    </ModalWrapper>
  );
}
