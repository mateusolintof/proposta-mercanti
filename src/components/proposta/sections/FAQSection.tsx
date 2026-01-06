"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Zap,
  Shield,
  Lock,
  HelpCircle,
  MessageSquare,
  Clock,
} from "lucide-react";
import SectionWrapper from "../SectionWrapper";
import { faqItems } from "@/lib/data/proposal-data";
import { cn } from "@/lib/utils";

const iconComponents = {
  Zap,
  Shield,
  Lock,
  HelpCircle,
  MessageSquare,
  Clock,
};

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <SectionWrapper
      id="faq"
      eyebrow="FAQ"
      eyebrowColor="default"
      title="Perguntas Frequentes"
      subtitle="Duvidas sobre integracao, governanca, LGPD e implementacao."
    >
      <div className="space-y-3">
        {faqItems.map((item, index) => {
          const IconComponent =
            iconComponents[item.iconName as keyof typeof iconComponents];
          const isOpen = openIndex === index;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={cn(
                "rounded-2xl border border-white/10 bg-white/5 overflow-hidden transition-colors",
                isOpen && "border-[#00E5FF]/30"
              )}
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-5 py-4 flex items-center gap-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF] focus-visible:ring-inset"
                aria-expanded={isOpen}
              >
                <div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors",
                    isOpen
                      ? "bg-[#00E5FF] text-[#02040A]"
                      : "bg-[#00E5FF]/20 text-[#00E5FF]"
                  )}
                >
                  {IconComponent && <IconComponent className="w-5 h-5" />}
                </div>
                <span className="flex-1 text-white font-medium">
                  {item.question}
                </span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-white/50 transition-transform",
                    isOpen && "rotate-180"
                  )}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 pl-[4.5rem]">
                      <p className="text-white/70 text-sm leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
