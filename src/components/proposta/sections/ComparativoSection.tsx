"use client";

import { motion } from "framer-motion";
import { Bot, User, Clock, Zap } from "lucide-react";
import SectionWrapper from "../SectionWrapper";

interface Message {
  sender: "bot" | "user";
  text: string;
  time?: string;
}

const iaConversation: Message[] = [
  {
    sender: "bot",
    text: "Entendi, Vitoria. E você já tentou emagrecer de outras formas antes? Foi com dieta, academia, ou chegou a buscar algum acompanhamento médico? Quero entender um pouco do seu histórico pra ver como podemos te ajudar melhor.",
    time: "09:41",
  },
  {
    sender: "user",
    text: "Tomando chá",
    time: "09:43",
  },
  {
    sender: "bot",
    text: "Entendi, Vitoria. Muita gente chega aqui contando que já tentou vários métodos caseiros, como tomar chá, mas sente dificuldade de manter o resultado ou até de ver diferença real no corpo.",
    time: "09:44",
  },
  {
    sender: "bot",
    text: "Posso te explicar rapidinho como funciona o nosso método de acompanhamento pra emagrecimento?",
    time: "09:44",
  },
  {
    sender: "user",
    text: "Sim",
    time: "09:44",
  },
  {
    sender: "bot",
    text: "O Dr. Igor não passa apenas uma dieta, Vitoria. Ele faz uma análise profunda do seu histórico de saúde. A consulta tem cerca de 1h30 pra ouvir toda sua história e entender o seu metabolismo.",
    time: "09:45",
  },
];

const humanConversation: Message[] = [
  {
    sender: "bot",
    text: "Me conta, o que mais te incomoda hoje?",
    time: "09:09",
  },
  {
    sender: "user",
    text: "Gostaria de ganhar massa",
    time: "09:36",
  },
  {
    sender: "bot",
    text: "Ótimo, verão tá logo ali é o momento perfeito de um acompanhamento pra ganho de massa. 💪",
    time: "09:43",
  },
  {
    sender: "bot",
    text: "Dr.Igor consegue te ajudar, ele é especialista em ganho de massa, reposição hormonal e emagrecimento.",
    time: "09:43",
  },
  {
    sender: "bot",
    text: "Vai amar o acompanhamento.",
    time: "09:43",
  },
  {
    sender: "user",
    text: "Que bom",
    time: "09:44",
  },
];

function ChatBubble({
  message,
  isIA,
}: {
  message: Message;
  isIA: boolean;
}) {
  const isBot = message.sender === "bot";
  const botColor = isIA ? "#00FF94" : "#00E5FF";

  return (
    <div
      className={`flex ${isBot ? "justify-start" : "justify-end"} mb-2`}
    >
      <div
        className={`max-w-[85%] rounded-2xl px-3 py-2 ${
          isBot
            ? "bg-white/10 rounded-tl-sm"
            : "bg-[#00E5FF]/20 rounded-tr-sm"
        }`}
      >
        {isBot && (
          <div className="flex items-center gap-1.5 mb-1">
            {isIA ? (
              <Bot className="w-3 h-3" style={{ color: botColor }} />
            ) : (
              <User className="w-3 h-3" style={{ color: botColor }} />
            )}
            <span
              className="text-[10px] font-medium"
              style={{ color: botColor }}
            >
              {isIA ? "Agente IA" : "Atendente"}
            </span>
            {message.time && (
              <span className="text-[9px] text-white/30">{message.time}</span>
            )}
          </div>
        )}
        <p className="text-xs text-white/80 leading-relaxed">{message.text}</p>
        {!isBot && message.time && (
          <p className="text-[9px] text-white/30 text-right mt-1">
            {message.time}
          </p>
        )}
      </div>
    </div>
  );
}

function ConversationCard({
  title,
  subtitle,
  messages,
  isIA,
  highlight,
  highlightColor,
}: {
  title: string;
  subtitle: string;
  messages: Message[];
  isIA: boolean;
  highlight: string;
  highlightColor: string;
}) {
  return (
    <motion.div
      className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Header */}
      <div
        className="px-4 py-3 border-b border-white/10"
        style={{ backgroundColor: `${highlightColor}10` }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {isIA ? (
              <Bot className="w-5 h-5" style={{ color: highlightColor }} />
            ) : (
              <User className="w-5 h-5" style={{ color: highlightColor }} />
            )}
            <div>
              <h4 className="text-sm font-semibold text-white">{title}</h4>
              <p className="text-[10px] text-white/50">{subtitle}</p>
            </div>
          </div>
          <span
            className="text-[10px] px-2 py-1 rounded-full font-medium"
            style={{
              backgroundColor: `${highlightColor}20`,
              color: highlightColor,
            }}
          >
            {highlight}
          </span>
        </div>
      </div>

      {/* Chat */}
      <div className="p-4 h-[320px] overflow-y-auto">
        {messages.map((message, index) => (
          <ChatBubble key={index} message={message} isIA={isIA} />
        ))}
      </div>
    </motion.div>
  );
}

export default function ComparativoSection() {
  return (
    <SectionWrapper
      id="comparativo"
      eyebrow="Comparativo"
      eyebrowColor="default"
      title="Atendimento IA vs Humano"
      subtitle="Exemplos reais de conversas mostrando a qualidade do atendimento automatizado."
    >
      <div className="space-y-6">
        {/* Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ConversationCard
            title="Atendimento por IA"
            subtitle="Agente de Vendas automatizado"
            messages={iaConversation}
            isIA={true}
            highlight="Resposta em segundos"
            highlightColor="#00FF94"
          />
          <ConversationCard
            title="Atendimento Humano"
            subtitle="Vendedor tradicional"
            messages={humanConversation}
            isIA={false}
            highlight="Resposta em minutos"
            highlightColor="#00E5FF"
          />
        </div>

        {/* Key Differences */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="rounded-xl border border-[#00FF94]/30 bg-[#00FF94]/5 p-4">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-4 h-4 text-[#00FF94]" />
              <span className="text-xs font-semibold text-[#00FF94]">
                Velocidade
              </span>
            </div>
            <p className="text-xs text-white/60">
              IA responde instantaneamente, mesmo fora do horário comercial.
              Humano depende de disponibilidade.
            </p>
          </div>
          <div className="rounded-xl border border-[#00FF94]/30 bg-[#00FF94]/5 p-4">
            <div className="flex items-center gap-2 mb-2">
              <Bot className="w-4 h-4 text-[#00FF94]" />
              <span className="text-xs font-semibold text-[#00FF94]">
                Contexto
              </span>
            </div>
            <p className="text-xs text-white/60">
              IA faz perguntas de qualificação e adapta a conversa ao perfil do
              lead automaticamente.
            </p>
          </div>
          <div className="rounded-xl border border-[#00FF94]/30 bg-[#00FF94]/5 p-4">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-4 h-4 text-[#00FF94]" />
              <span className="text-xs font-semibold text-[#00FF94]">
                Consistência
              </span>
            </div>
            <p className="text-xs text-white/60">
              IA mantém o padrão de qualidade em 100% das conversas, sem
              variação de humor ou cansaço.
            </p>
          </div>
        </motion.div>

        <p className="text-white/40 text-xs text-center">
          * Conversas reais de clientes da Convert.AI (nomes alterados para
          privacidade)
        </p>
      </div>
    </SectionWrapper>
  );
}
