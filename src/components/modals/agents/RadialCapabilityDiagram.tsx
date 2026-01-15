"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Clock,
  Users,
  MessageSquare,
  Target,
  Calendar,
  Send,
  Receipt,
  Shield,
  Phone,
  Bell,
  Search,
  BarChart3,
  MessageSquareMore,
  Inbox,
  History,
  ShoppingCart,
  Database,
  FileText,
  CheckCircle,
  Handshake,
} from "lucide-react";
import { AgentType } from "@/types/modal";

interface CapabilityItem {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  items: string[];
}

interface CapabilityGroup {
  id: string;
  title: string;
  subtitle: string;
  items: CapabilityItem[];
}

interface AgentCapabilities {
  centerTitle: string;
  centerSubtitle: string;
  summary: string;
  groups: CapabilityGroup[];
}

const capabilitiesByAgent: Record<AgentType, AgentCapabilities> = {
  omnichannel: {
    centerTitle: "Solução Omnichannel",
    centerSubtitle: "API Meta + Inbox",
    summary: "Plataforma unificada de atendimento com API oficial.",
    groups: [
      {
        id: "canais",
        title: "Canais",
        subtitle: "API Oficial Meta",
        items: [
          {
            id: "whatsapp",
            title: "WhatsApp Business API",
            subtitle: "Compliance Meta",
            icon: MessageSquareMore,
            items: ["API oficial", "Sem risco de bloqueio"],
          },
          {
            id: "roteamento",
            title: "Roteamento de Números",
            subtitle: "Balanceamento inteligente",
            icon: Phone,
            items: ["Mesma lógica atual", "Multi-número"],
          },
        ],
      },
      {
        id: "inbox",
        title: "Inbox",
        subtitle: "Interface unificada",
        items: [
          {
            id: "unificado",
            title: "Inbox Unificado",
            subtitle: "Todos os vendedores",
            icon: Inbox,
            items: ["Interface única", "Atribuição de conversas"],
          },
          {
            id: "metricas",
            title: "Métricas por Vendedor",
            subtitle: "Performance individual",
            icon: BarChart3,
            items: ["Tempo de resposta", "Volume e conversão"],
          },
        ],
      },
      {
        id: "historico",
        title: "Histórico",
        subtitle: "Centralização de dados",
        items: [
          {
            id: "central",
            title: "Histórico Centralizado",
            subtitle: "Todas as conversas",
            icon: History,
            items: ["Busca completa", "Continuidade"],
          },
          {
            id: "auditoria",
            title: "Auditoria",
            subtitle: "Compliance e rastreio",
            icon: Search,
            items: ["Logs completos", "Exportação"],
          },
        ],
      },
    ],
  },
  vendas: {
    centerTitle: "Agente de Vendas",
    centerSubtitle: "ERP + RAG",
    summary: "Automação de vendas com acesso ao ERP em tempo real.",
    groups: [
      {
        id: "identificacao",
        title: "Identificação",
        subtitle: "Reconhece o cliente",
        items: [
          {
            id: "cliente",
            title: "Identifica Cliente",
            subtitle: "CPF/CNPJ",
            icon: Users,
            items: ["Cadastrado vs Novo", "Histórico de compras"],
          },
          {
            id: "perfil",
            title: "Perfil do Cliente",
            subtitle: "Dados completos",
            icon: Target,
            items: ["Preferências", "Ticket médio"],
          },
        ],
      },
      {
        id: "consulta",
        title: "Consulta ERP",
        subtitle: "Dados em tempo real",
        items: [
          {
            id: "produtos",
            title: "Catálogo de Produtos",
            subtitle: "RAG integrado",
            icon: ShoppingCart,
            items: ["Categorias", "Especificações"],
          },
          {
            id: "estoque",
            title: "Preços e Estoque",
            subtitle: "Disponibilidade",
            icon: Database,
            items: ["Preços atualizados", "Estoque real"],
          },
        ],
      },
      {
        id: "pedido",
        title: "Pedido",
        subtitle: "Criação automática",
        items: [
          {
            id: "ov",
            title: "Ordem de Venda",
            subtitle: "Direto no ERP",
            icon: FileText,
            items: ["Criação automática", "Validação"],
          },
          {
            id: "crosssell",
            title: "Cross-sell",
            subtitle: "Sugestões inteligentes",
            icon: Target,
            items: ["Baseado em histórico", "Produtos relacionados"],
          },
        ],
      },
    ],
  },
  evento: {
    centerTitle: "Agente de Eventos",
    centerSubtitle: "Confirmação + Dados",
    summary: "Contato proativo para confirmação de presença em eventos.",
    groups: [
      {
        id: "contato",
        title: "Contato",
        subtitle: "Múltiplas tentativas",
        items: [
          {
            id: "whatsapp",
            title: "1º Contato (WhatsApp)",
            subtitle: "Mensagem inicial",
            icon: MessageSquare,
            items: ["Convite personalizado", "Link de confirmação"],
          },
          {
            id: "ligacao",
            title: "2º/3º Tentativa",
            subtitle: "Ligação se necessário",
            icon: Phone,
            items: ["Fallback para ligação", "Múltiplas tentativas"],
          },
        ],
      },
      {
        id: "coleta",
        title: "Coleta de Dados",
        subtitle: "Validação cadastral",
        items: [
          {
            id: "dados",
            title: "Dados Cadastrais",
            subtitle: "Completa e valida",
            icon: FileText,
            items: ["Nome, empresa, cargo", "Contatos atualizados"],
          },
          {
            id: "interesse",
            title: "Interesse",
            subtitle: "Qualificação",
            icon: Target,
            items: ["Produtos de interesse", "Urgência de compra"],
          },
        ],
      },
      {
        id: "confirmacao",
        title: "Confirmação",
        subtitle: "Presença validada",
        items: [
          {
            id: "status",
            title: "Status de Presença",
            subtitle: "Confirmado / Não confirmado",
            icon: CheckCircle,
            items: ["Confirmação formal", "Motivo de ausência"],
          },
          {
            id: "metricas",
            title: "Métricas do Evento",
            subtitle: "ROI mensurável",
            icon: BarChart3,
            items: ["Taxa de confirmação", "Custo por lead"],
          },
        ],
      },
    ],
  },
  cobranca: {
    centerTitle: "Agente de Cobrança",
    centerSubtitle: "Régua + Governança",
    summary: "Cobrança automatizada com limites e human-in-loop.",
    groups: [
      {
        id: "regua",
        title: "Régua",
        subtitle: "Sequência de cobrança",
        items: [
          {
            id: "prevenc",
            title: "Pré-vencimento",
            subtitle: "Lembrete amigável",
            icon: Bell,
            items: ["3 dias antes", "Boleto anexo"],
          },
          {
            id: "posvenc",
            title: "Pós-vencimento",
            subtitle: "Cobrança graduada",
            icon: Receipt,
            items: ["D+1, D+7, D+15", "Urgência crescente"],
          },
        ],
      },
      {
        id: "governanca",
        title: "Governança",
        subtitle: "Controle e segurança",
        items: [
          {
            id: "limites",
            title: "Limites WhatsApp",
            subtitle: "Evita perda de número",
            icon: Shield,
            items: ["Volume controlado", "Opt-out respeitado"],
          },
          {
            id: "canais",
            title: "Múltiplos Canais",
            subtitle: "Não depende só de um",
            icon: Phone,
            items: ["WhatsApp, SMS, e-mail", "Preferência do cliente"],
          },
        ],
      },
      {
        id: "negociacao",
        title: "Negociação",
        subtitle: "Human-in-loop",
        items: [
          {
            id: "escala",
            title: "Escala Humana",
            subtitle: "Casos sensíveis",
            icon: Users,
            items: ["Valores altos", "Clientes especiais"],
          },
          {
            id: "acordo",
            title: "Acordo",
            subtitle: "Parcelamento guiado",
            icon: Handshake,
            items: ["Opções de pagamento", "Registro no sistema"],
          },
        ],
      },
    ],
  },
};

interface RadialCapabilityDiagramProps {
  agentType: AgentType;
  agentColor: string;
}

export default function RadialCapabilityDiagram({
  agentType,
  agentColor,
}: RadialCapabilityDiagramProps) {
  const agentConfig = capabilitiesByAgent[agentType];

  return (
    <div className="relative w-full rounded-2xl border border-white/10 bg-[#0b1220]/80 p-6 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="flex flex-col items-center text-center gap-2">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/40">
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: agentColor }}
          />
          Infográfico do agente
        </div>
        <div className="flex items-center gap-2 text-white">
          <Bot className="w-5 h-5 text-white/70" />
          <span className="text-base font-semibold">
            Mapa do {agentConfig.centerTitle}
          </span>
        </div>
        <p className="text-body text-white/60">{agentConfig.summary}</p>
      </div>

      <div className="mt-6 flex justify-center">
        <div className="relative">
          <div
            className="absolute inset-0 rounded-full blur-2xl opacity-40"
            style={{ backgroundColor: agentColor }}
          />
          <div
            className="relative w-28 h-28 rounded-full border border-white/20 flex flex-col items-center justify-center text-white text-center"
            style={{ backgroundColor: agentColor }}
          >
            <Bot className="w-7 h-7 mb-1" />
            <span className="text-xs font-semibold">
              {agentConfig.centerTitle}
            </span>
            <span className="text-[11px] text-white/80">
              {agentConfig.centerSubtitle}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {agentConfig.groups.map((group, index) => (
          <motion.div
            key={group.id}
            className="rounded-2xl border border-white/10 bg-white/5 p-4 h-full"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.1 + index * 0.1 }}
          >
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-black/30 text-white/70 text-sm font-semibold">
                {index + 1}
              </div>
              <div className="min-w-0">
                <p className="text-[11px] uppercase tracking-[0.2em] text-white/40">
                  Etapa {index + 1}
                </p>
                <h4 className="text-base font-semibold text-white">
                  {group.title}
                </h4>
                <p className="text-xs text-white/50">{group.subtitle}</p>
              </div>
            </div>

            <div className="mt-4 space-y-4">
              {group.items.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.id} className="flex items-start gap-3">
                    <div
                      className="flex h-9 w-9 items-center justify-center rounded-lg"
                      style={{ backgroundColor: `${agentColor}20` }}
                    >
                      <Icon className="w-4 h-4" style={{ color: agentColor }} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-white">
                        {item.title}
                      </p>
                      <p className="text-xs text-white/50">{item.subtitle}</p>
                      <ul className="mt-2 space-y-1">
                        {item.items.map((line) => (
                          <li
                            key={line}
                            className="flex items-start gap-2 text-xs text-white/60"
                          >
                            <span className="mt-1 h-1 w-1 rounded-full bg-white/40" />
                            <span className="leading-snug">{line}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
