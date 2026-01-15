"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  Server,
  Database,
  Cloud,
  Bot,
  ArrowDown,
  MessageSquare,
  Link2,
} from "lucide-react";
import SectionWrapper from "../SectionWrapper";

const layers = [
  {
    id: "presentation",
    title: "Camada de Apresentacao",
    subtitle: "Interface do Usuario",
    color: "#00E5FF",
    icon: Monitor,
    items: [
      { name: "Dashboard Web", desc: "Supervisores e gestores" },
      { name: "Inbox Unificado", desc: "Vendedores e atendentes" },
      { name: "Metricas em Tempo Real", desc: "KPIs e performance" },
    ],
    tech: ["React 19", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "backend",
    title: "Camada de API",
    subtitle: "Backend & Orquestracao",
    color: "#00FF94",
    icon: Server,
    items: [
      { name: "API REST", desc: "Endpoints de conversas e metricas" },
      { name: "Webhook Receiver", desc: "Recebe mensagens da Meta" },
      { name: "Orquestrador", desc: "Roteia entre IA e humanos" },
    ],
    tech: ["Python", "FastAPI", "WebSockets"],
  },
  {
    id: "agents",
    title: "Camada de Agentes IA",
    subtitle: "Inteligencia Artificial",
    color: "#A855F7",
    icon: Bot,
    items: [
      { name: "Agente Receptivo", desc: "Qualificacao e vendas" },
      { name: "Agente Proativo", desc: "Cobranca e recompra" },
      { name: "RAG de Produtos", desc: "Consulta ERP inteligente" },
    ],
    tech: ["Claude API (Anthropic)", "LangChain", "Embeddings"],
  },
  {
    id: "data",
    title: "Camada de Dados",
    subtitle: "Persistencia & Cache",
    color: "#FFD700",
    icon: Database,
    items: [
      { name: "PostgreSQL", desc: "Conversas, contatos, historico" },
      { name: "Redis", desc: "Cache, sessoes, filas" },
      { name: "Vector Store", desc: "Embeddings para RAG" },
    ],
    tech: ["PostgreSQL 16", "Redis", "Chroma/Pinecone"],
  },
  {
    id: "external",
    title: "Servicos Externos",
    subtitle: "Integracoes",
    color: "#FF6B6B",
    icon: Cloud,
    items: [
      { name: "Meta WhatsApp API", desc: "Mensageria oficial" },
      { name: "ERP Mercante", desc: "Produtos, precos, pedidos" },
      { name: "Claude/OpenAI", desc: "Processamento de linguagem" },
    ],
    tech: ["WhatsApp Cloud API", "REST/Webhooks", "LLM APIs"],
  },
];

const stackSummary = [
  { category: "Frontend", tech: "React 19 + TypeScript" },
  { category: "Backend", tech: "Python + FastAPI" },
  { category: "Database", tech: "PostgreSQL 16 + Redis" },
  { category: "IA/LLM", tech: "Claude API (Anthropic)" },
  { category: "Mensageria", tech: "Meta WhatsApp Cloud API" },
  { category: "Infra", tech: "Docker + Cloud (AWS/GCP)" },
];

export default function ArquiteturaSection() {
  return (
    <SectionWrapper
      id="arquitetura"
      eyebrow="Arquitetura"
      eyebrowColor="default"
      title="Arquitetura Tecnica"
      subtitle="Stack moderna e escalavel para suportar a operacao de televendas da Mercante."
    >
      <div className="space-y-12">
        {/* Architecture Layers Diagram */}
        <div className="space-y-4">
          {layers.map((layer, index) => {
            const IconComponent = layer.icon;
            return (
              <div key={layer.id}>
                <motion.div
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 relative overflow-hidden"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Color accent bar */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-1"
                    style={{ backgroundColor: layer.color }}
                  />

                  <div className="flex flex-col lg:flex-row lg:items-start gap-5">
                    {/* Header */}
                    <div className="flex items-start gap-4 lg:w-64 flex-shrink-0">
                      <div
                        className="p-3 rounded-xl"
                        style={{ backgroundColor: `${layer.color}20` }}
                      >
                        <IconComponent
                          className="w-6 h-6"
                          style={{ color: layer.color }}
                        />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-white">
                          {layer.title}
                        </h3>
                        <p className="text-xs text-white/50">{layer.subtitle}</p>
                      </div>
                    </div>

                    {/* Items */}
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-3">
                      {layer.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="bg-black/20 rounded-lg p-3 border border-white/5"
                        >
                          <p className="text-sm font-medium text-white">
                            {item.name}
                          </p>
                          <p className="text-xs text-white/50">{item.desc}</p>
                        </div>
                      ))}
                    </div>

                    {/* Tech badges */}
                    <div className="flex flex-wrap gap-2 lg:w-48 lg:justify-end">
                      {layer.tech.map((t, tIndex) => (
                        <span
                          key={tIndex}
                          className="text-[10px] px-2 py-1 rounded-full border border-white/10 text-white/60"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Arrow between layers */}
                {index < layers.length - 1 && (
                  <div className="flex justify-center py-2">
                    <ArrowDown className="w-5 h-5 text-white/20" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Stack Summary Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">
            Resumo da Stack
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {stackSummary.map((item, index) => (
              <div
                key={index}
                className="rounded-xl border border-white/10 bg-white/5 p-4 text-center"
              >
                <p className="text-[10px] uppercase tracking-wider text-white/40 mb-1">
                  {item.category}
                </p>
                <p className="text-xs font-medium text-white">{item.tech}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Flow Diagram - Simplified */}
        <motion.div
          className="rounded-2xl border border-white/10 bg-white/5 p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold text-white mb-6 text-center">
            Fluxo de uma Mensagem
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-[#00E5FF]/20 flex items-center justify-center mb-2">
                <MessageSquare className="w-6 h-6 text-[#00E5FF]" />
              </div>
              <p className="text-xs font-medium text-white">Lead envia</p>
              <p className="text-[10px] text-white/50">WhatsApp</p>
            </div>

            <ArrowDown className="w-5 h-5 text-white/30 md:rotate-[-90deg]" />

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-[#FF6B6B]/20 flex items-center justify-center mb-2">
                <Cloud className="w-6 h-6 text-[#FF6B6B]" />
              </div>
              <p className="text-xs font-medium text-white">Meta API</p>
              <p className="text-[10px] text-white/50">Webhook</p>
            </div>

            <ArrowDown className="w-5 h-5 text-white/30 md:rotate-[-90deg]" />

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-[#00FF94]/20 flex items-center justify-center mb-2">
                <Server className="w-6 h-6 text-[#00FF94]" />
              </div>
              <p className="text-xs font-medium text-white">Backend</p>
              <p className="text-[10px] text-white/50">Orquestrador</p>
            </div>

            <ArrowDown className="w-5 h-5 text-white/30 md:rotate-[-90deg]" />

            {/* Step 4 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-[#A855F7]/20 flex items-center justify-center mb-2">
                <Bot className="w-6 h-6 text-[#A855F7]" />
              </div>
              <p className="text-xs font-medium text-white">Agente IA</p>
              <p className="text-[10px] text-white/50">Claude API</p>
            </div>

            <ArrowDown className="w-5 h-5 text-white/30 md:rotate-[-90deg]" />

            {/* Step 5 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-[#FFD700]/20 flex items-center justify-center mb-2">
                <Link2 className="w-6 h-6 text-[#FFD700]" />
              </div>
              <p className="text-xs font-medium text-white">ERP</p>
              <p className="text-[10px] text-white/50">Consulta/Pedido</p>
            </div>

            <ArrowDown className="w-5 h-5 text-white/30 md:rotate-[-90deg]" />

            {/* Step 6 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-[#00E5FF]/20 flex items-center justify-center mb-2">
                <MessageSquare className="w-6 h-6 text-[#00E5FF]" />
              </div>
              <p className="text-xs font-medium text-white">Resposta</p>
              <p className="text-[10px] text-white/50">Lead recebe</p>
            </div>
          </div>
        </motion.div>

        {/* Note */}
        <p className="text-white/40 text-xs text-center">
          Arquitetura projetada para escalabilidade horizontal e alta disponibilidade.
          Toda infraestrutura e custos de tokens estao inclusos no valor mensal.
        </p>
      </div>
    </SectionWrapper>
  );
}
