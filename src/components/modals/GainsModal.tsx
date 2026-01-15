"use client";

import type { ReactNode } from "react";
import { CalendarCheck2, Gauge, TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import ModalWrapper from "./ModalWrapper";

interface GainsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const workloadData = [
  { name: "Pico (9-11h)", ia: 82, humano: 38 },
  { name: "Almoço", ia: 65, humano: 15 },
  { name: "Tarde (14-17h)", ia: 78, humano: 42 },
  { name: "Fora horário", ia: 58, humano: 5 },
  { name: "Finais semana", ia: 45, humano: 8 },
];

const workloadChartConfig = {
  ia: { label: "Orquestrador", color: "#00E5FF" },
  humano: { label: "Vendedor", color: "#1a3a4a" },
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

export default function GainsModal({ isOpen, onClose }: GainsModalProps) {
  return (
    <ModalWrapper
      isOpen={isOpen}
      onClose={onClose}
      title="Ganhos Operacionais"
      subtitle="Impacto direto na operação da Mercante"
    >
      <div className="space-y-6">
        <div className="text-body text-white/70">
          Esta é uma visão do que muda quando a fila inteligente absorve o volume
          repetitivo, com SLA controlado e distribuição equilibrada entre os 18 vendedores.
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left Column - Benefit Cards */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#00E5FF]/20 text-[#00E5FF]">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-base font-bold text-white">
                    SLA Controlado (&lt;3 min)
                  </h4>
                  <p className="mt-1 text-body text-white/60">
                    Lead nunca fica preso. Fila inteligente com rotação automática
                    se vendedor não responder em 5 minutos.
                  </p>
                  <div className="mt-4 space-y-2">
                    <Bullet>
                      Resposta imediata 24/7 — lead não &quot;esfria&quot;.
                    </Bullet>
                    <Bullet>
                      Rotação automática entre os 18 vendedores.
                    </Bullet>
                    <Bullet>
                      Handoff com contexto preservado.
                    </Bullet>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#00E5FF]/20 text-[#00E5FF]">
                  <Gauge className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-base font-bold text-white">
                    Distribuição Equilibrada
                  </h4>
                  <p className="mt-1 text-body text-white/60">
                    Fim do vendedor sobrecarregado. Balanceamento de carga inteligente
                    com fallback e priorização por disponibilidade.
                  </p>
                  <div className="mt-4 space-y-2">
                    <Bullet>
                      Carga balanceada entre os 18 vendedores.
                    </Bullet>
                    <Bullet>Priorização por disponibilidade e skills.</Bullet>
                    <Bullet>
                      Métricas de distribuição por vendedor em tempo real.
                    </Bullet>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#00E5FF]/20 text-[#00E5FF]">
                  <CalendarCheck2 className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-base font-bold text-white">
                    Eventos em 24h (não 30 dias)
                  </h4>
                  <p className="mt-1 text-body text-white/60">
                    Follow-up automatizado para ~1000 leads por evento.
                    Cadência que converte, não planilha que esquece.
                  </p>
                  <div className="mt-4 space-y-2">
                    <Bullet>
                      Follow-up em 24h pós-evento.
                    </Bullet>
                    <Bullet>
                      Cadência automatizada com múltiplos touchpoints.
                    </Bullet>
                    <Bullet>
                      Métricas de ROI por evento.
                    </Bullet>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Chart and Reports */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="text-body font-semibold text-white">
                    Distribuição por horário (exemplo)
                  </div>
                  <div className="mt-1 text-xs text-white/50">
                    Orquestrador absorve picos e fora do horário; vendedor foca em fechamento.
                  </div>
                </div>
                <div className="flex shrink-0 items-center gap-2 text-xs text-white/60">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: "#00E5FF" }}
                    />
                    Orq.
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: "#1a3a4a" }}
                    />
                    Vendedor
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <ChartContainer
                  config={workloadChartConfig}
                  className="h-56 w-full"
                >
                  <BarChart
                    data={workloadData}
                    margin={{ left: 8, right: 8, top: 8, bottom: 0 }}
                  >
                    <CartesianGrid
                      vertical={false}
                      strokeDasharray="3 3"
                      stroke="rgba(255, 255, 255, 0.1)"
                    />
                    <XAxis
                      dataKey="name"
                      tickLine={false}
                      axisLine={false}
                      tick={{ fill: "rgba(255, 255, 255, 0.6)", fontSize: 12 }}
                    />
                    <YAxis hide tickLine={false} axisLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar
                      dataKey="ia"
                      stackId="workload"
                      fill="var(--color-ia)"
                      radius={[10, 10, 0, 0]}
                    />
                    <Bar
                      dataKey="humano"
                      stackId="workload"
                      fill="var(--color-humano)"
                      radius={[0, 0, 10, 10]}
                    />
                  </BarChart>
                </ChartContainer>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-body font-semibold text-white">
                KPIs do Dashboard
              </div>
              <div className="mt-3 space-y-2">
                <Bullet>
                  SLA de primeira resposta por vendedor e por período.
                </Bullet>
                <Bullet>
                  Distribuição de carga entre os 18 vendedores (balanceamento).
                </Bullet>
                <Bullet>
                  Taxa de abandono: leads que &quot;esfriaram&quot; por falta de resposta.
                </Bullet>
                <Bullet>
                  Recovery de eventos: % de leads de feiras que entraram no funil.
                </Bullet>
              </div>
              <div className="mt-4 text-xs text-white/40">
                Dados e metas são ilustrativos nesta proposta. Ajustamos após a
                imersão e leitura dos dados reais da Mercante.
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
}
