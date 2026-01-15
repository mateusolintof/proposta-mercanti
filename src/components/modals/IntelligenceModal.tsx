"use client";

import type { ReactNode } from "react";
import { BarChart3, Link2, Sparkles } from "lucide-react";
import { Bar, BarChart, CartesianGrid, Cell, Pie, PieChart, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import ModalWrapper from "./ModalWrapper";

interface IntelligenceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const channelData = [
  { key: "whatsapp", label: "WhatsApp", value: 48 },
  { key: "fortix", label: "Fortix/Site", value: 28 },
  { key: "eventos", label: "Eventos/Feiras", value: 16 },
  { key: "indicacao", label: "Indicação", value: 8 },
] as { key: string; label: string; value: number }[];

const channelChartConfig = {
  whatsapp: { label: "WhatsApp", color: "#00E5FF" },
  fortix: { label: "Fortix/Site", color: "#1a5a6a" },
  eventos: { label: "Eventos/Feiras", color: "#FFD700" },
  indicacao: { label: "Indicação", color: "#7ad4e8" },
} satisfies ChartConfig;

const abandonReasonData = [
  { label: "Sem resposta a tempo", value: 35 },
  { label: "Vendedor ocupado", value: 22 },
  { label: "Preço/condições", value: 18 },
  { label: "Frete/prazo", value: 15 },
  { label: "Outros", value: 10 },
] as { label: string; value: number }[];

const abandonChartConfig = {
  value: { label: "Incidência", color: "#00E5FF" },
} satisfies ChartConfig;

function Bullet({ children }: { children: ReactNode }) {
  return (
    <div className="flex gap-3 text-body text-white/70">
      <span
        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00E5FF]"
        aria-hidden="true"
      />
      <div className="min-w-0">{children}</div>
    </div>
  );
}

export default function IntelligenceModal({
  isOpen,
  onClose,
}: IntelligenceModalProps) {
  return (
    <ModalWrapper
      isOpen={isOpen}
      onClose={onClose}
      title="Inteligência de Dados"
      subtitle="Visão unificada da operação de televendas"
    >
      <div className="space-y-6">
        <div className="text-body text-white/70">
          Transforme conversas e funil em visão única: origem do lead, qual vendedor
          atende, tempo de resposta, motivo de perda e onde está o gargalo.
        </div>

        {/* Feature Cards Row */}
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              icon: <Sparkles className="h-5 w-5" />,
              title: "Classificação automática",
              desc: "Canal de origem, vendedor responsável, etapa do funil — sem digitação manual.",
            },
            {
              icon: <Link2 className="h-5 w-5" />,
              title: "Integração Fortix",
              desc: "Sincronização com sistema atual. Leads, status e histórico sem retrabalho.",
            },
            {
              icon: <BarChart3 className="h-5 w-5" />,
              title: "SLA e distribuição",
              desc: "Quem está sobrecarregado, quem está ocioso, onde estão os gargalos.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#00E5FF]/20 text-[#00E5FF]">
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-white">{item.title}</div>
                  <div className="mt-1 text-body text-white/60">{item.desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid gap-4 lg:grid-cols-2">
          {/* Channel Distribution - Pie Chart */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="text-body font-semibold text-white">
                    Distribuição por canal (exemplo)
                  </div>
                  <div className="mt-1 text-xs text-white/50">
                    Ajuda a priorizar investimento por lead que vira pedido.
                  </div>
                </div>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-[160px_1fr] sm:items-center">
              <ChartContainer
                config={channelChartConfig}
                className="h-40 w-full"
              >
                <PieChart>
                  <Pie
                    data={channelData}
                    dataKey="value"
                    nameKey="label"
                    innerRadius={44}
                    outerRadius={72}
                    paddingAngle={4}
                  >
                    {channelData.map((entry) => (
                      <Cell
                        key={entry.key}
                        fill={`var(--color-${entry.key})`}
                      />
                    ))}
                  </Pie>
                  <ChartTooltip
                    content={<ChartTooltipContent nameKey="label" />}
                  />
                </PieChart>
              </ChartContainer>

              <div className="space-y-2 text-body">
                {channelData.map((entry) => (
                  <div
                    key={entry.key}
                    className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2"
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className="h-2 w-2 rounded-full"
                        style={{ backgroundColor: `var(--color-${entry.key})` }}
                      />
                      <span className="font-medium text-white">
                        {entry.label}
                      </span>
                    </div>
                    <span className="text-white/60">{entry.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Abandono Reasons - Bar Chart */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <div className="text-body font-semibold text-white">
                  Motivos de abandono (exemplo)
                </div>
                <div className="mt-1 text-xs text-white/50">
                  Direciona ajustes de mensagem, oferta e processos.
                </div>
              </div>
            </div>

            <div className="mt-4">
              <ChartContainer
                config={abandonChartConfig}
                className="h-56 w-full"
              >
                <BarChart
                  data={abandonReasonData}
                  layout="vertical"
                  margin={{ left: 0, right: 18, top: 0, bottom: 0 }}
                >
                  <CartesianGrid
                    horizontal={false}
                    strokeDasharray="3 3"
                    stroke="rgba(255, 255, 255, 0.1)"
                  />
                  <XAxis type="number" hide />
                  <YAxis
                    type="category"
                    dataKey="label"
                    width={130}
                    tickLine={false}
                    axisLine={false}
                    tick={{ fill: "rgba(255, 255, 255, 0.6)", fontSize: 12 }}
                  />
                  <ChartTooltip
                    content={<ChartTooltipContent nameKey="label" />}
                  />
                  <Bar dataKey="value" fill="var(--color-value)" radius={10} />
                </BarChart>
              </ChartContainer>
            </div>
          </div>
        </div>

        {/* Questions Section */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-body font-semibold text-white">
              Perguntas que passam a ter resposta rápida
            </div>
            <div className="mt-3 space-y-2">
              <Bullet>
                Qual vendedor está sobrecarregado? Qual está ocioso?
              </Bullet>
              <Bullet>
                Quantos leads perdemos por falta de resposta em tempo?
              </Bullet>
              <Bullet>
                Qual o SLA médio de primeira resposta por vendedor?
              </Bullet>
              <Bullet>
                Eventos: quantos leads do último evento viraram pedido?
              </Bullet>
            </div>
          </div>

        <div className="text-xs text-white/40">
          Dados e exemplos são ilustrativos. Métricas e painéis serão ajustados
          após imersão e análise dos dados reais da operação da Mercante.
        </div>
      </div>
    </ModalWrapper>
  );
}
