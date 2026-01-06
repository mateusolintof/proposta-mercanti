# Proposta Comercial — Mercante Distribuidora

Apresentacao interativa horizontal para Proposta Comercial da Convert.AI, personalizada para **Mercante Distribuidora** — automacao inteligente de vendas e atendimento com integracoes ERP e API oficial da Meta.

## Contexto do Cliente

| Dado | Valor |
|------|-------|
| Time de televendas | 18 vendedores |
| Volume mensal | 12-15 mil mensagens |
| Sistema atual | Fortics (~R$2.000/mes) |
| Custo operacao | R$83.000/mes (18 vendedores + Fortics) |
| Eventos | Follow-up leva ~60 dias |
| Cobranca | Risco de perda de numero WhatsApp |

## Stack

| Tecnologia | Versao | Uso |
|------------|--------|-----|
| Next.js | 16.1.1 | App Router com Webpack (Turbopack opcional) |
| React | 19.2.3 | UI Library |
| TypeScript | 5.x | Tipagem estatica |
| Tailwind CSS | v4 | Estilizacao com `@theme inline` |
| Framer Motion | 12.x | Animacoes de slides e modais |
| React Three Fiber | 9.x | Background 3D |
| HeroUI | 2.8.7 | Componentes base |
| Recharts | 3.6.0 | Graficos nos modais |
| XYFlow React | 12.10 | Diagramas de fluxo dos agentes |
| Lucide | 0.562 | Icones |

## Execucao

```bash
# Requisitos: Node >= 20.9.0
npm install
npm run dev             # dev with webpack on http://localhost:3001
npm run dev:turbo       # dev with Turbopack (optional)
npm run build           # production build (webpack)
npm run build:turbo     # production build with Turbopack
npm start -p 3001       # serve prod build on 3001
```

## Guia de padronizacao visual

Antes de alterar layout, tipografia, cores ou hierarquia de conteudo, consulte `STYLE_GUIDE.md`.

## Rotas

| Rota | Descricao | Layout |
|------|-----------|--------|
| `/` | Apresentacao interativa | Scroll horizontal com CSS snap |
| `/proposta` | Proposta tecnica (SPA) | Scroll vertical (documento) |

## Estrutura do Projeto

```
src/
├── app/
│   ├── layout.tsx          # Fontes, metadata, providers
│   ├── page.tsx            # Container principal com scroll horizontal
│   ├── proposta/
│   │   └── page.tsx        # Rota da proposta tecnica SPA
│   ├── providers.tsx       # HeroUI providers
│   ├── globals.css         # Tokens de tema e utilitarios
│   └── favicon.ico
├── components/
│   ├── 3d/
│   │   ├── Scene.tsx              # Canvas R3F com post-processing
│   │   └── ElegantNetwork.tsx     # Particulas conectadas animadas
│   ├── slides/
│   │   ├── IntroSlide.tsx         # Hero "Automacao Inteligente"
│   │   ├── DiagnosticoSlide.tsx   # Gargalos: Atendimento e Vendas, Eventos, Cobranca
│   │   ├── SolucaoSlide.tsx       # 4 solucoes com arquitetura orbital
│   │   ├── ComparativoSlide.tsx   # Atendimento IA vs Humano (screenshots reais)
│   │   ├── FerramentasSlide.tsx   # CRM e Dashboard
│   │   ├── GanhosSlide.tsx        # Projecao financeira (50% em 6 meses)
│   │   ├── InvestimentoSlide.tsx  # 3 pacotes modulares + custos
│   │   ├── FAQSlide.tsx           # 5 perguntas frequentes
│   │   └── CronogramaSlide.tsx    # 4 fases de implementacao
│   ├── modals/
│   │   ├── ModalWrapper.tsx       # Wrapper base para modais
│   │   ├── AgentModal.tsx         # Detalhes das 4 solucoes IA
│   │   ├── CRMPreviewModal.tsx    # Preview interativo do CRM
│   │   ├── DashboardPreviewModal.tsx  # Preview do Dashboard
│   │   ├── ROICalculatorModal.tsx # Simulador de impacto (SLA)
│   │   ├── CostReductionModal.tsx # Ganho de capacidade por vendedor
│   │   ├── GainsModal.tsx         # KPIs operacionais Mercante
│   │   ├── IntelligenceModal.tsx  # Inteligencia de dados
│   │   ├── agents/
│   │   │   ├── RadialCapabilityDiagram.tsx  # Infografico em etapas
│   │   │   └── AgentFlowDiagram.tsx         # Fluxograma interativo
│   │   ├── crm/
│   │   │   ├── CRMDashboardView.tsx   # Visao geral CRM
│   │   │   ├── CRMContactsView.tsx    # Lista de contatos
│   │   │   ├── CRMPipelineView.tsx    # Pipeline de vendas
│   │   │   └── CRMInboxView.tsx       # Caixa de mensagens
│   │   └── dashboard/
│   │       ├── DashVisaoGeralView.tsx # Visao geral
│   │       ├── DashGestaoIAView.tsx   # Gestao de IA
│   │       ├── DashClientesView.tsx   # Clientes
│   │       └── DashInsightsView.tsx   # Insights
│   ├── proposta/
│   │   ├── PropostaPage.tsx       # Container da SPA
│   │   ├── SectionWrapper.tsx     # Wrapper de secoes
│   │   └── sections/
│   │       ├── SolucoesSection.tsx
│   │       ├── ComparativoSection.tsx
│   │       ├── ArquiteturaSection.tsx
│   │       ├── InvestimentoSection.tsx
│   │       ├── CustosSection.tsx
│   │       ├── FAQSection.tsx
│   │       └── ProcessoSection.tsx
│   └── ui/
│       ├── SlideShell.tsx         # Wrapper padrao para slides
│       ├── card.tsx               # Card component
│       └── chart.tsx              # Chart components (Recharts)
├── types/
│   └── modal.ts                   # Tipos TypeScript para modais
└── lib/
    ├── utils.ts                   # Utilitarios (cn, etc)
    └── data/
        └── proposal-data.ts       # Dados centralizados da proposta

public/
├── branding/
│   ├── logo.svg
│   ├── logo-badge-white.svg
│   └── logo-principal-white.svg
├── comparativo/
│   ├── atendimentoIA1.png
│   ├── atendimentoIA2.png
│   ├── atendimentohumano1.png
│   └── atendimentohumano2.png
└── docs/
    └── CONTEUDO.md                # Documento de negocio Mercante
```

## Paleta de Cores

| Token | Hex | Uso |
|-------|-----|-----|
| Background | `#02040A` | Fundo principal |
| Tech Cyan | `#00E5FF` | Destaques tecnologicos, Omnichannel |
| Success Green | `#00FF94` | Metricas positivas, CTAs, Agente Vendas |
| Ouro | `#FFD700` | Agente Eventos |
| Vermelho | `#FF6B6B` | Agente Cobranca |
| White | `#FFFFFF` / `rgba` | Textos e bordas |

## Slides (9 secoes)

| # | Slide | Descricao | Modais |
|---|-------|-----------|--------|
| 1 | Intro | Automacao inteligente de vendas e atendimento | - |
| 2 | Diagnostico | Gargalos: Atendimento e Vendas, Eventos, Cobranca | - |
| 3 | Solucao | 4 solucoes IA com arquitetura orbital | AgentModal |
| 4 | Comparativo | Atendimento IA vs Humano (screenshots reais) | - |
| 5 | Ferramentas | CRM, Dashboard, integracao ERP | CRMPreviewModal, DashboardPreviewModal |
| 6 | Resultados | Projecao financeira (50% em 6 meses) | GainsModal, IntelligenceModal, ROICalculatorModal, CostReductionModal |
| 7 | Investimento | 3 pacotes modulares + custos inclusos/adicionais | - |
| 8 | FAQ | Custos, API Meta, stack, seguranca IA, prazos | - |
| 9 | Cronograma | Imersao, Desenvolvimento, Testes, Go-Live | - |

## Sistema de Modais

### Tipos de Modal

```typescript
type AgentType = "omnichannel" | "vendas" | "evento" | "cobranca";

type ModalKind =
  | { type: "agent"; agent: AgentType }
  | { type: "crm" }
  | { type: "dashboard" }
  | { type: "roi" }
  | { type: "costs" }
  | { type: "gains" }
  | { type: "intelligence" }
  | null;
```

### Solucoes IA (4 frentes)

| ID | Nome | Funcao | Cor |
|----|------|--------|-----|
| omnichannel | Solucao Omnichannel | API Oficial Meta + Inbox Unificado | Cyan (#00E5FF) |
| vendas | Agente de Vendas | Automacao de Vendas com ERP + RAG | Verde (#00FF94) |
| evento | Agente de Eventos | Confirmacao de presenca e coleta de dados | Ouro (#FFD700) |
| cobranca | Agente de Cobranca | Regua de cobranca com governanca WhatsApp | Vermelho (#FF6B6B) |

Cada solucao possui:
- Infografico em etapas (RadialCapabilityDiagram)
- Fluxograma interativo (AgentFlowDiagram com XYFlow)
- Metricas e beneficios especificos

### Precos

| Pacote | Setup | Mensal |
|--------|-------|--------|
| Omnichannel + Agente de Vendas | R$ 35.000,00 | R$ 6.000,00 |
| Agente de Cobranca | R$ 8.000,00 | R$ 1.000,00 |
| Agente de Eventos | R$ 8.000,00 | R$ 1.500,00 |

### Custos Inclusos vs Adicionais

**Incluso no R$ 6.000/mes:**
- Infraestrutura cloud (AWS/GCP)
- Tokens de IA (Claude API)
- API Meta (vendas e relacionamento)
- Suporte e manutencao

**Custo adicional (sob demanda):**
- API Meta — Marketing e Eventos (campanhas, promocoes, feiras)

### CRM Preview

Navegacao por abas:
- Dashboard (visao geral)
- Contatos (lista de leads)
- Pipeline (funil de vendas)
- Inbox (mensagens)

### Dashboard Preview

Navegacao por abas:
- Visao Geral (KPIs principais)
- Gestao IA (metricas dos agentes)
- Clientes (base de clientes)
- Insights (recomendacoes)

## Navegacao

- **Scroll horizontal** com CSS snap
- **Setas** `←` `→` e **Space** para navegar
- **Home** / **End** para inicio/fim
- **Mouse wheel** convertido para scroll horizontal
- **Dots** clicaveis na barra inferior
- **Barra de progresso** animada no rodape

## Background 3D

O background usa React Three Fiber com:
- 150 particulas brancas conectadas
- Movimento organico baseado em noise
- Post-processing: Bloom + Vignette
- Opacity 30% para sutileza
- Dynamic import para evitar SSR

## FAQ (5 perguntas)

1. **O que esta incluso no R$ 6.000/mes?** - Infraestrutura, tokens IA, API Meta (vendas e relacionamento), suporte
2. **A API da Meta tem custos adicionais?** - Vendas/relacionamento incluso; marketing/eventos sob demanda
3. **Qual a stack e modelo de IA?** - Claude API (Anthropic), Python/FastAPI, PostgreSQL, Redis
4. **E quanto a seguranca da IA?** - Guardrails, handoffs, human-in-loop, logs de auditoria
5. **Qual o prazo de implementacao?** - 4 semanas (Imersao, Desenvolvimento, Testes, Go-Live)

## Cronograma (4 fases)

| Fase | Nome | Descricao |
|------|------|-----------|
| 1 | Imersao | Diagnostico detalhado, mapeamento de processos |
| 2 | Desenvolvimento | Criacao dos agentes, integracoes ERP |
| 3 | Testes e Validacao | Validacao com equipe, ajustes finos |
| 4 | Go-Live | Producao completa, acompanhamento inicial |

## Projecao Financeira

### Premissas
- 18 vendedores atuais
- Custo/vendedor: R$4.500/mes
- Custo Fortics: R$2.000/mes
- Custo Solucao: R$6.000/mes
- Meta: 50% da capacidade em 6 meses

### Economia ao final do mes 6
- Vendedores substituidos: 8 × R$4.500 = R$36.000/mes
- Eliminacao Fortics: R$2.000/mes
- Custo Solucao: -R$6.000/mes
- **Economia liquida: R$32.000/mes**
- **Payback: ~1.5 meses**

## Documento de Negocio

Ver `public/docs/CONTEUDO.md` para detalhes completos sobre:
- Diagnostico: gargalos por area
- 4 solucoes especializadas
- Ferramentas: CRM + Dashboard
- Projecao financeira
- Investimento e custos
- Governanca WhatsApp
- Cronograma de implementacao
