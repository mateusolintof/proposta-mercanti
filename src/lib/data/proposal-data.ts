import {
  MessageSquareMore,
  ShoppingCart,
  Calendar,
  Receipt,
  Handshake,
  Code,
  CheckCircle,
  Rocket,
  Zap,
  Clock,
  TrendingUp,
  Users,
  Shield,
  HelpCircle,
  Lock,
  MessageSquare,
  Bot,
  Link2,
  LayoutDashboard,
  DollarSign,
} from "lucide-react";
import type { AgentType } from "@/types/modal";

// =============================================================================
// AGENT DATA (from AgentModal.tsx)
// =============================================================================

export interface AgentDataType {
  name: string;
  fullName: string;
  description: string;
  iconName: string;
  color: string;
  benefits: string[];
}

export const agentData: Record<AgentType, AgentDataType> = {
  omnichannel: {
    name: "Solucao Omnichannel",
    fullName: "API Oficial Meta + Inbox Unificado",
    description:
      "Plataforma completa de atendimento com API oficial da Meta para WhatsApp, roteamento inteligente de numeros e inbox unificado para toda a equipe de vendas. Historico centralizado e metricas por vendedor.",
    iconName: "MessageSquareMore",
    color: "#00E5FF",
    benefits: [
      "API Oficial Meta - Compliance total, sem risco de bloqueio de numero",
      "Inbox Unificado - Todos os vendedores em uma unica interface",
      "Roteamento de Numeros - Mesma logica atual com balanceamento inteligente",
      "Historico Centralizado - Busca, auditoria e continuidade de conversas",
      "Metricas por Vendedor - Tempo de resposta, volume e conversao",
    ],
  },
  vendas: {
    name: "Agente de Vendas",
    fullName: "Automacao de Vendas com Integracao ERP",
    description:
      "Agente inteligente que identifica clientes (cadastrados ou novos), consulta produtos, precos e estoque no ERP via RAG, e cria ordens de venda automaticamente. Human-in-loop para casos especiais.",
    iconName: "ShoppingCart",
    color: "#00FF94",
    benefits: [
      "Identificacao de Cliente - Busca por CPF/CNPJ, historico de compras",
      "Consulta ao ERP - Produtos, precos e disponibilidade em tempo real",
      "RAG de Produtos - Conhece categorias, especificacoes e condicoes",
      "Criacao de Pedidos - Gera ordem de venda diretamente no ERP",
      "Cross-sell Inteligente - Sugestoes baseadas no historico do cliente",
    ],
  },
  evento: {
    name: "Agente de Eventos",
    fullName: "Confirmacao de Presenca e Coleta de Dados",
    description:
      "Especializado em contatar participantes de feiras e eventos para confirmar presenca, coletar dados cadastrais e validar informacoes. Multiplas tentativas (mensagem + ligacao) ate conseguir contato.",
    iconName: "Calendar",
    color: "#FFD700",
    benefits: [
      "Confirmacao de Presenca - Contato proativo pre-evento",
      "Multiplas Tentativas - WhatsApp + ligacao ate conseguir contato",
      "Coleta de Dados - Valida e atualiza informacoes cadastrais",
      "Cadencia Automatizada - Sequencia de 3-5 toques otimizada",
      "Metricas por Evento - Taxa de confirmacao e ROI mensuravel",
    ],
  },
  cobranca: {
    name: "Agente de Cobranca",
    fullName: "Regua de Cobranca com Governanca WhatsApp",
    description:
      "Automatiza cobranca de inadimplentes com regua inteligente (pre e pos-vencimento), multiplos canais e governanca para evitar perda de numero. Human-in-loop para negociacoes sensiveis.",
    iconName: "Receipt",
    color: "#FF6B6B",
    benefits: [
      "Regua Inteligente - Sequencia pre-vencimento (D-3) e pos-vencimento (D+1, D+7)",
      "Governanca WhatsApp - Limites de envio, opt-out e qualidade controlados",
      "Multiplos Canais - WhatsApp, SMS, e-mail conforme preferencia do cliente",
      "Human-in-loop - Escala para humano em negociacoes ou valores altos",
      "Dashboard de Inadimplencia - Visao de aging, recovery e motivos",
    ],
  },
};

// Icon mapping for client-side rendering
export const agentIcons = {
  MessageSquareMore,
  ShoppingCart,
  Calendar,
  Receipt,
};

// =============================================================================
// PRICING DATA (from InvestimentoSlide.tsx)
// =============================================================================

export interface Plan {
  name: string;
  subtitle: string;
  setup: string;
  monthly: string;
  duration?: string;
  bullets: string[];
  badge?: string;
  featured?: boolean;
  iconName: string;
  color: string;
}

export const mainPackage: Plan = {
  name: "Solucao Omnichannel + Agente de Vendas",
  subtitle: "API Meta + Inbox + Automacao de Vendas com ERP",
  setup: "R$ 35.000,00",
  monthly: "R$ 6.000,00",
  duration: "12 meses",
  bullets: [
    "API Oficial Meta para WhatsApp",
    "Inbox Unificado para vendedores",
    "Agente de Vendas com RAG",
    "Integracao ERP (consulta + criacao de pedidos)",
    "Guardrails e Human-in-loop",
    "Dashboard executivo incluso",
  ],
  badge: "Pacote Principal",
  featured: true,
  iconName: "MessageSquareMore",
  color: "#00E5FF",
};

export const additionalPackages: Plan[] = [
  {
    name: "Agente de Cobranca",
    subtitle: "Cobrancas automatizadas com governanca",
    setup: "R$ 8.000,00",
    monthly: "R$ 1.000,00",
    bullets: [
      "Regua de cobranca inteligente",
      "Governanca WhatsApp",
      "Multiplos canais de contato",
      "Human-in-loop para negociacoes",
    ],
    iconName: "Receipt",
    color: "#FF6B6B",
  },
  {
    name: "Agente de Eventos",
    subtitle: "Confirmacao de presenca e coleta de dados",
    setup: "R$ 8.000,00",
    monthly: "R$ 1.500,00",
    bullets: [
      "Confirmacao de presenca automatizada",
      "Multiplas tentativas (mensagem + ligacao)",
      "Coleta e validacao de dados",
      "Metricas por evento",
    ],
    iconName: "Calendar",
    color: "#FFD700",
  },
];

export interface Deliverable {
  iconName: string;
  title: string;
  items: string[];
}

export const deliverables: Deliverable[] = [
  {
    iconName: "Bot",
    title: "4 Solucoes Especializadas",
    items: [
      "Omnichannel (API Meta + Inbox)",
      "Agente de Vendas (ERP + RAG)",
      "Agente de Eventos",
      "Agente de Cobranca",
    ],
  },
  {
    iconName: "Link2",
    title: "Integracoes",
    items: [
      "WhatsApp Business API",
      "ERP (consulta e pedidos)",
      "Base de conhecimento (RAG)",
    ],
  },
  {
    iconName: "LayoutDashboard",
    title: "CRM & Dashboard",
    items: [
      "Inbox unificado",
      "Metricas por vendedor",
      "KPIs de eventos e cobranca",
    ],
  },
];

export const deliverableIcons = {
  Bot,
  Link2,
  LayoutDashboard,
};

// =============================================================================
// FAQ DATA (from FAQSlide.tsx)
// =============================================================================

export interface FAQItem {
  iconName: string;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    iconName: "DollarSign",
    question: "O que esta incluso no valor mensal de R$ 6.000?",
    answer:
      "O valor mensal inclui 100% dos custos operacionais: tokens de IA (Claude, OpenAI), banco de dados PostgreSQL e Redis, infraestrutura em nuvem, manutencao, atualizacoes de seguranca, melhorias continuas e suporte tecnico dedicado. Tambem esta incluso o custo da API Oficial da Meta para vendas e mensagens de relacionamento com o cliente.",
  },
  {
    iconName: "MessageSquare",
    question: "Como funciona o custo da API Oficial da Meta?",
    answer:
      "Para vendas e mensagens de relacionamento com o cliente, o custo da API da Meta ja esta embutido no valor mensal. Porem, para campanhas de marketing, promocoes e disparos em massa, o custo da API e repassado separadamente conforme consumo (~R$ 0,30 a 0,50 por conversa).",
  },
  {
    iconName: "Code",
    question: "Qual a stack tecnologica utilizada?",
    answer:
      "A solucao e construida com tecnologias modernas e escalaveis: Backend em Python com FastAPI, banco de dados PostgreSQL para persistencia e Redis para cache e filas, RAG (Retrieval-Augmented Generation) para consulta inteligente ao ERP, Claude API (Anthropic) como LLM principal, e frontend em React/TypeScript. Toda infraestrutura roda em nuvem com alta disponibilidade.",
  },
  {
    iconName: "Shield",
    question: "Como garantem a seguranca e controle das respostas da IA?",
    answer:
      "A solucao possui multiplas camadas de seguranca: Guardrails que limitam o escopo de atuacao do agente e bloqueiam respostas inadequadas; Human-in-the-loop para escalar automaticamente casos sensiveis ou fora do escopo para um atendente humano; Handoffs inteligentes que transferem a conversa mantendo todo o contexto; e logs completos para auditoria. O agente nunca toma decisoes criticas sozinho.",
  },
  {
    iconName: "Clock",
    question: "Qual o prazo de implementacao?",
    answer:
      "Em geral, 4 a 8 semanas dependendo da complexidade das integracoes com o ERP. O projeto segue 4 fases: Imersao (diagnostico e mapeamento), Desenvolvimento (construcao dos agentes e integracoes), Testes e Validacao (ambiente controlado), e Go-Live (lancamento com acompanhamento). Trabalhamos de forma iterativa para entregas rapidas.",
  },
];

export const faqIcons = {
  DollarSign,
  MessageSquare,
  Code,
  Shield,
  Clock,
};

// =============================================================================
// PHASES DATA (from CronogramaSlide.tsx)
// =============================================================================

export interface Phase {
  phase: number;
  title: string;
  desc: string;
  iconName: string;
}

export const phases: Phase[] = [
  {
    phase: 1,
    title: "Imersao",
    desc: "Diagnostico da operacao, mapeamento de integracoes com ERP e definicao de fluxos de atendimento",
    iconName: "Handshake",
  },
  {
    phase: 2,
    title: "Desenvolvimento",
    desc: "Construcao dos agentes, integracoes com ERP e configuracao da plataforma de atendimento",
    iconName: "Code",
  },
  {
    phase: 3,
    title: "Testes e Validacao",
    desc: "Validacao dos fluxos em ambiente controlado com ajustes antes do lancamento",
    iconName: "CheckCircle",
  },
  {
    phase: 4,
    title: "Go-Live",
    desc: "Lancamento para a equipe de vendas com acompanhamento e otimizacoes continuas",
    iconName: "Rocket",
  },
];

export const phaseIcons = {
  Handshake,
  Code,
  CheckCircle,
  Rocket,
};

// =============================================================================
// PROJECTION DATA (from GanhosSlide.tsx)
// =============================================================================

export interface ProjectionRow {
  mes: number;
  leads: string;
  capacidade: string;
  vendedores: string;
  economia: string;
}

export const projectionData: ProjectionRow[] = [
  { mes: 1, leads: "1.000", capacidade: "12%", vendedores: "2", economia: "R$ 9.000" },
  { mes: 2, leads: "1.800", capacidade: "20%", vendedores: "3.5", economia: "R$ 15.750" },
  { mes: 3, leads: "2.700", capacidade: "30%", vendedores: "5", economia: "R$ 22.500" },
  { mes: 4, leads: "3.400", capacidade: "38%", vendedores: "6.5", economia: "R$ 29.250" },
  { mes: 5, leads: "4.000", capacidade: "44%", vendedores: "7.5", economia: "R$ 33.750" },
  { mes: 6, leads: "4.500", capacidade: "50%", vendedores: "8+", economia: "R$ 36.000" },
];

export const economySummary = {
  vendedoresSubstituidos: 8,
  custoVendedor: "R$ 4.500",
  economiaVendedores: "R$ 36.000",
  eliminacaoFortics: "R$ 2.000",
  custoSolucao: "R$ 6.000",
  economiaLiquida: "R$ 32.000",
  setupInicial: "R$ 35.000",
  economiaAcumulada6Meses: "R$ 145.000",
  payback: "~1.5 meses",
};

export interface Benefit {
  iconName: string;
  title: string;
  desc: string;
  color: string;
}

export const benefits: Benefit[] = [
  {
    iconName: "Zap",
    title: "Eficiencia de Atendimento",
    desc: "Respostas ageis, informacoes consistentes, atendimento personalizado com historico",
    color: "#00FF94",
  },
  {
    iconName: "Clock",
    title: "Atendimento 24/7",
    desc: "Conversoes fora do horario comercial, nao perde leads noturnos/finais de semana",
    color: "#00E5FF",
  },
  {
    iconName: "TrendingUp",
    title: "Aumento de Conversao",
    desc: "Follow-up automatizado, campanhas de recompra, cross-sell inteligente",
    color: "#00FF94",
  },
  {
    iconName: "Users",
    title: "Escalabilidade Total",
    desc: "Cresce sem contratar, absorve picos de demanda sem gargalos",
    color: "#00E5FF",
  },
  {
    iconName: "Calendar",
    title: "Automacao de Eventos",
    desc: "Atual: ~60 dias para follow-up. Com agente: dias. ROI por evento mensuravel",
    color: "#FFD700",
  },
];

export const benefitIcons = {
  Zap,
  Clock,
  TrendingUp,
  Users,
  Calendar,
};

// =============================================================================
// CURRENT OPERATION COSTS
// =============================================================================

export const currentOperationCosts = {
  vendedores: 18,
  custoVendedor: 4500,
  custoFortics: 2000,
  totalMensal: 83000,
};
