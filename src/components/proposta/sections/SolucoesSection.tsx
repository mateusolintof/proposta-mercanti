"use client";

import { motion } from "framer-motion";
import {
  MessageSquareMore,
  ShoppingCart,
  Calendar,
  Receipt,
  CheckCircle,
} from "lucide-react";
import SectionWrapper from "../SectionWrapper";
import { agentData } from "@/lib/data/proposal-data";
import type { AgentType } from "@/types/modal";

const iconComponents = {
  MessageSquareMore,
  ShoppingCart,
  Calendar,
  Receipt,
};

const agentOrder: AgentType[] = ["omnichannel", "vendas", "evento", "cobranca"];

export default function SolucoesSection() {
  return (
    <SectionWrapper
      id="solucoes"
      eyebrow="Solucoes"
      eyebrowColor="default"
      title="Solucoes Propostas"
      subtitle="4 solucoes especializadas para transformar a operacao de vendas e atendimento da Mercante."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {agentOrder.map((agentKey, index) => {
          const agent = agentData[agentKey];
          const IconComponent =
            iconComponents[agent.iconName as keyof typeof iconComponents];

          return (
            <motion.div
              key={agentKey}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-5">
                <div
                  className="p-3 rounded-xl flex-shrink-0"
                  style={{ backgroundColor: `${agent.color}20` }}
                >
                  {IconComponent && (
                    <IconComponent
                      className="w-6 h-6"
                      style={{ color: agent.color }}
                    />
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {agent.name}
                  </h3>
                  <p className="text-sm text-white/50 mt-0.5">
                    {agent.fullName}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-white/70 text-sm leading-relaxed mb-5">
                {agent.description}
              </p>

              {/* Benefits */}
              <div className="space-y-2">
                {agent.benefits.map((benefit, benefitIndex) => (
                  <div
                    key={benefitIndex}
                    className="flex items-start gap-3 text-sm"
                  >
                    <CheckCircle
                      className="w-4 h-4 flex-shrink-0 mt-0.5"
                      style={{ color: agent.color }}
                    />
                    <span className="text-white/60">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
