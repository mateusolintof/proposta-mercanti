import { Metadata } from "next";
import PropostaPage from "@/components/proposta/PropostaPage";

export const metadata: Metadata = {
  title: "Proposta Tecnica | Mercante Distribuidora | Convert.AI",
  description:
    "Proposta tecnica detalhada para automacao de vendas e atendimento da Mercante Distribuidora com agentes de IA especializados.",
};

export default function PropostaRoute() {
  return <PropostaPage />;
}
