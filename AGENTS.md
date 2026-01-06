# Proposta Comercial Mercante Distribuidora — Guia de Desenvolvimento

## Visao Geral

Apresentacao horizontal interativa para Proposta Comercial da Convert.AI, personalizada para **Mercante Distribuidora** — focada em automacao de vendas e atendimento com integracoes ERP e API oficial da Meta.

**Cliente:** Mercante Distribuidora
**Documento de negocio:** `public/docs/CONTEUDO.md`
**Porta de desenvolvimento:** 3001

## Contexto do Cliente

| Dado | Valor |
|------|-------|
| Time de televendas | 18 vendedores |
| Volume mensal | 12-15 mil mensagens |
| Sistema atual | Fortics (~R$2.000/mes) |
| Custo operacao | R$83.000/mes (18 vendedores + Fortics) |
| Eventos | Follow-up leva ~60 dias |
| Cobranca | Risco de perda de numero WhatsApp |

## Stack Tecnica

| Tecnologia | Versao | Uso |
|------------|--------|-----|
| Next.js | 16.1.1 | App Router com Webpack (Turbopack opcional) |
| React | 19.2.3 | UI Library |
| TypeScript | 5.x | Tipagem estatica |
| Tailwind CSS | v4 | `@theme inline` |
| Framer Motion | 12.x | Animacoes |
| React Three Fiber | 9.x | Background 3D |
| HeroUI | 2.8.7 | Componentes base |
| Recharts | 3.6.0 | Graficos |
| XYFlow React | 12.10 | Diagramas de fluxo |
| Lucide | 0.562 | Icones |

## Execucao

```bash
npm install
npm run dev             # webpack dev (http://localhost:3001)
npm run dev:turbo       # turbopack dev (opcional, requer acesso)
npm run build           # producao (webpack)
npm run build:turbo     # producao (turbopack, rede requerida)
npm start -p 3001       # Servir build final
```

## Arquitetura de Componentes

### Container Principal (`src/app/page.tsx`)

- Scroll horizontal com CSS snap
- Gerenciamento de estado para modais (`useState<ModalKind>`)
- Navegacao por teclado (←, →, Space, Home, End)
- Conversao de mouse wheel para scroll horizontal
- Progress bar animada com Framer Motion

### Slides (8 total)

```
src/components/slides/
├── IntroSlide.tsx           # Hero principal
├── DiagnosticoSlide.tsx     # Gargalos por area + custo operacional
├── SolucaoSlide.tsx         # 4 solucoes orbitais (abre AgentModal)
├── FerramentasSlide.tsx     # CRM + Dashboard (abre modais de preview)
├── GanhosSlide.tsx          # Projecao financeira (50% em 6 meses)
├── InvestimentoSlide.tsx    # 3 pacotes modulares
├── FAQSlide.tsx             # Perguntas frequentes
└── CronogramaSlide.tsx      # 4 fases de implementacao
```

### SlideShell Props

```tsx
interface SlideShellProps {
  eyebrow?: string;        // Label superior (ex: "Solucao")
  eyebrowColor?: "default" | "success" | "warning" | "danger";
  title: string;           // Titulo principal
  subtitle?: string;       // Subtitulo
  align?: "left" | "center";
  size?: "default" | "compact";
  background?: ReactNode;  // Background customizado
  children?: ReactNode;    // Conteudo do slide
}
```

### Sistema de Modais

#### Tipos (`src/types/modal.ts`)

```typescript
export type AgentType = "omnichannel" | "vendas" | "evento" | "cobranca";

export type ModalKind =
  | { type: "agent"; agent: AgentType }
  | { type: "crm" }
  | { type: "dashboard" }
  | { type: "roi" }
  | { type: "costs" }
  | { type: "gains" }
  | { type: "intelligence" }
  | null;
```

#### Modais Disponiveis

| Modal | Arquivo | Aberto por | Descricao |
|-------|---------|------------|-----------|
| AgentModal | `AgentModal.tsx` | SolucaoSlide | Detalhes das 4 solucoes |
| CRMPreviewModal | `CRMPreviewModal.tsx` | FerramentasSlide | Preview interativo do CRM |
| DashboardPreviewModal | `DashboardPreviewModal.tsx` | FerramentasSlide | Preview do Dashboard |

#### Sub-componentes de Modais

```
src/components/modals/
├── ModalWrapper.tsx              # Base wrapper com overlay e animacoes
├── agents/
│   ├── RadialCapabilityDiagram.tsx  # Infografico em etapas por agente (4 agentes)
│   └── AgentFlowDiagram.tsx         # Fluxograma interativo (XYFlow, 4 agentes)
├── crm/
│   ├── CRMDashboardView.tsx      # Visao geral do CRM
│   ├── CRMContactsView.tsx       # Lista de contatos/leads
│   ├── CRMPipelineView.tsx       # Pipeline de vendas (kanban)
│   └── CRMInboxView.tsx          # Caixa de mensagens
└── dashboard/
    ├── DashVisaoGeralView.tsx    # KPIs principais
    ├── DashGestaoIAView.tsx      # Metricas dos agentes
    ├── DashClientesView.tsx      # Base de clientes
    └── DashInsightsView.tsx      # Insights e recomendacoes
```

### Solucoes/Agentes IA

#### 4 Solucoes (com modal detalhado)

| ID | Nome | Funcao | Cor |
|----|------|--------|-----|
| omnichannel | Solucao Omnichannel | API Oficial Meta + Inbox Unificado | #00E5FF (Cyan) |
| vendas | Agente de Vendas | Automacao de Vendas com ERP + RAG | #00FF94 (Verde) |
| evento | Agente de Eventos | Confirmacao de presenca e coleta de dados | #FFD700 (Ouro) |
| cobranca | Agente de Cobranca | Regua de cobranca com governanca WhatsApp | #FF6B6B (Vermelho) |

#### Precos

| Pacote | Setup | Mensal |
|--------|-------|--------|
| Omnichannel + Agente de Vendas | R$ 35.000,00 | R$ 6.000,00 |
| Agente de Cobranca | R$ 8.000,00 | R$ 1.000,00 |
| Agente de Eventos | R$ 8.000,00 | R$ 1.500,00 |

Cada solucao no AgentModal exibe:
- Infografico em etapas (3 grupos)
- Fluxograma interativo com XYFlow
- Lista de beneficios (5 itens)

## Tema e Cores

```css
/* Cores principais */
--background: #02040A      /* Fundo escuro */
--accent-tech: #00E5FF     /* Cyan tecnologico */
--accent-success: #00FF94  /* Verde sucesso */

/* Cores dos agentes */
--omnichannel: #00E5FF     /* Cyan */
--vendas: #00FF94          /* Verde */
--eventos: #FFD700         /* Ouro */
--cobranca: #FF6B6B        /* Vermelho */

/* Opacidades padrao */
bg-white/5                 /* Cards e containers */
border-white/10            /* Bordas sutis */
text-white/70              /* Texto secundario */
text-white/50              /* Texto terciario */
```

## Background 3D

```tsx
// Importacao dinamica (evita SSR)
const Scene = dynamic(() => import("@/components/3d/Scene"), { ssr: false });

// Configuracao
- 150 particulas brancas conectadas
- Movimento organico (noise-based)
- Post-processing: Bloom + Vignette
- Opacity 30% + pointer-events-none
- Z-index 0 (abaixo do conteudo)
```

## Navegacao

| Acao | Input |
|------|-------|
| Proximo slide | `→`, `Space`, scroll |
| Slide anterior | `←` |
| Primeiro slide | `Home` |
| Ultimo slide | `End` |
| Slide especifico | Clique no dot |

## Padroes de Codigo

### Guia de padronizacao visual

Consulte `STYLE_GUIDE.md` antes de alterar layout, tipografia, cores ou hierarquia de conteudo.

### Tipografia minima

- Texto legivel: minimo `text-[11px]`
- Labels: `text-xs` (12px)
- Body: `text-body`
- Headings: `text-base` a `text-5xl`

### Animacoes

```tsx
// Entrada de elementos
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ delay: index * 0.1 }}

// Hover em botoes
whileHover={{ scale: 1.02 }}
whileTap={{ scale: 0.98 }}
```

### Modais com navegacao interna

```tsx
// Estado para abas
const [activeView, setActiveView] = useState<ViewType>("dashboard");

// Tabs com HeroUI ou custom
<button
  onClick={() => setActiveView("dashboard")}
  className={activeView === "dashboard" ? "bg-white/10" : ""}
>
  Dashboard
</button>
```

## Projecao Financeira (GanhosSlide)

### Premissas
- 18 vendedores atuais
- Custo/vendedor: R$4.500/mes (com 13o e ferias)
- Custo Fortics atual: R$2.000/mes
- Custo Solucao: R$6.000/mes (Omnichannel + Vendas)
- **Meta: 50% da capacidade em 6 meses** (projecao agressiva)

### Projecao 6 meses
| Mes | % Capacidade | Vendedores Substituidos | Economia Mensal |
|-----|--------------|------------------------|-----------------|
| 1   | 12%          | 2                      | R$ 9.000        |
| 2   | 20%          | 3.5                    | R$ 15.750       |
| 3   | 30%          | 5                      | R$ 22.500       |
| 4   | 38%          | 6.5                    | R$ 29.250       |
| 5   | 44%          | 7.5                    | R$ 33.750       |
| 6   | 50%          | 8+                     | R$ 36.000       |

### Economia ao final do mes 6
- Vendedores substituidos: 8 × R$4.500 = R$36.000/mes
- Eliminacao Fortics: R$2.000/mes
- Custo Solucao: -R$6.000/mes
- **Economia liquida: R$32.000/mes**
- **Payback: ~1.5 meses**

## Checklist do Projeto

- [x] 8 slides criados e funcionando
- [x] Background 3D integrado
- [x] Navegacao horizontal com snap
- [x] 4 solucoes com modais detalhados
- [x] Infografico em etapas e fluxograma por agente
- [x] CRM Preview com 4 abas
- [x] Dashboard Preview com 4 abas
- [x] Projecao financeira com tabela e ROI
- [x] FAQSlide com perguntas frequentes
- [x] Investimento com 3 pacotes modulares
- [x] Animacoes Framer Motion
- [x] Responsivo mobile/desktop
- [x] Paleta de cores aplicada

## Conteudo de Negocio

Ver `public/docs/CONTEUDO.md` para detalhes sobre:

1. **Diagnostico:** Gargalos por area (Atendimento, Vendas, Eventos, Cobranca)
2. **Solucoes:** 4 solucoes especializadas com modais detalhados
3. **Ferramentas:** CRM + Dashboard executivo
4. **Projecao:** 50% de capacidade em 6 meses, economia de R$32.000/mes
5. **Investimento:** 3 pacotes modulares
6. **Cronograma:** 4 fases de implementacao
