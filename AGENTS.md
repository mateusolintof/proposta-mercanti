# Proposta Comercial Mercante Distribuidora — Guia de Desenvolvimento

## Visao Geral

Projeto com duas apresentacoes:
1. **Apresentacao Horizontal** (`/`) — Slides interativos com scroll horizontal e background 3D
2. **Proposta Tecnica SPA** (`/proposta`) — Documento vertical focado em detalhes tecnicos

**Cliente:** Mercante Distribuidora
**Documento de negocio:** `public/docs/CONTEUDO.md`
**Porta de desenvolvimento:** 3001

## Contexto do Cliente

| Dado | Valor |
|------|-------|
| Time de televendas | 18 vendedores |
| Volume mensal | 12-15 mil mensagens |
| Custo operacao | R$83.000/mes (18 vendedores) |
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

## Rotas

| Rota | Descricao |
|------|-----------|
| `/` | Apresentacao horizontal interativa (9 slides) |
| `/proposta` | Proposta tecnica SPA (scroll vertical) |

## Arquitetura de Componentes

### Apresentacao Principal (`/`)

- Scroll horizontal com CSS snap
- Gerenciamento de estado para modais (`useState<ModalKind>`)
- Navegacao por teclado (←, →, Space, Home, End)
- Conversao de mouse wheel para scroll horizontal
- Progress bar animada com Framer Motion
- Background 3D com particulas

### Slides (9 total)

```
src/components/slides/
├── IntroSlide.tsx           # Hero principal
├── DiagnosticoSlide.tsx     # Gargalos (3 areas) + custo operacional
├── SolucaoSlide.tsx         # 4 solucoes orbitais (abre AgentModal)
├── ComparativoSlide.tsx     # Comparativo IA vs Humano (prints reais)
├── FerramentasSlide.tsx     # CRM + Dashboard (abre modais de preview)
├── GanhosSlide.tsx          # Projecao financeira
├── InvestimentoSlide.tsx    # Pacotes + transparencia de custos
├── FAQSlide.tsx             # Perguntas frequentes (5 perguntas)
└── CronogramaSlide.tsx      # 4 fases de implementacao
```

### Proposta SPA (`/proposta`)

```
src/components/proposta/
├── PropostaPage.tsx         # Container principal
├── SectionWrapper.tsx       # Wrapper de secao
└── sections/
    ├── SolucoesSection.tsx      # 4 solucoes detalhadas
    ├── ComparativoSection.tsx   # Comparativo IA vs Humano
    ├── ArquiteturaSection.tsx   # Stack tecnica + fluxo
    ├── InvestimentoSection.tsx  # Precos + transparencia
    ├── CustosSection.tsx        # ROI e breakdown
    ├── FAQSection.tsx           # Accordion
    └── ProcessoSection.tsx      # Timeline
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

### Solucoes/Agentes IA (4 solucoes)

| ID | Nome | Funcao | Cor |
|----|------|--------|-----|
| omnichannel | Solucao Omnichannel | API Oficial Meta + Inbox Unificado | #00E5FF (Cyan) |
| vendas | Agente de Vendas | Automacao de Vendas com ERP + RAG | #00FF94 (Verde) |
| evento | Agente de Eventos | Confirmacao de presenca e coleta de dados | #FFD700 (Ouro) |
| cobranca | Agente de Cobranca | Regua de cobranca com governanca WhatsApp | #FF6B6B (Vermelho) |

### Precos

| Pacote | Setup | Mensal |
|--------|-------|--------|
| Omnichannel + Agente de Vendas | R$ 35.000,00 | R$ 6.000,00 |
| Agente de Cobranca | R$ 8.000,00 | R$ 1.000,00 |
| Agente de Eventos | R$ 8.000,00 | R$ 1.500,00 |

### Transparencia de Custos

**Incluso no valor mensal (R$ 6.000):**
- Tokens de IA (Claude, OpenAI)
- Banco de Dados (PostgreSQL + Redis)
- Infraestrutura em nuvem
- Manutencao + Suporte
- API Meta (vendas e relacionamento)

**Custo adicional do cliente:**
- API Meta para marketing, promocoes e eventos/feiras (~R$ 0,30-0,50/conversa)

## FAQ (5 perguntas)

1. **O que esta incluso no valor mensal de R$ 6.000?** — Tokens, infra, suporte, API Meta para vendas
2. **Como funciona o custo da API Oficial da Meta?** — Vendas incluso, marketing/promos a parte
3. **Qual a stack tecnologica utilizada?** — Python, FastAPI, PostgreSQL, Redis, RAG, Claude API
4. **Como garantem a seguranca e controle da IA?** — Guardrails, human-in-loop, handoffs, auditoria
5. **Qual o prazo de implementacao?** — 4-8 semanas (4 fases)

## Cronograma (4 fases)

| Fase | Titulo | Descricao |
|------|--------|-----------|
| 1 | Imersao | Diagnostico da operacao, mapeamento de integracoes com ERP |
| 2 | Desenvolvimento | Construcao dos agentes, integracoes e configuracao da plataforma |
| 3 | Testes e Validacao | Validacao dos fluxos em ambiente controlado |
| 4 | Go-Live | Lancamento para a equipe com acompanhamento continuo |

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

## Navegacao (Apresentacao Principal)

| Acao | Input |
|------|-------|
| Proximo slide | `→`, `Space`, scroll |
| Slide anterior | `←` |
| Primeiro slide | `Home` |
| Ultimo slide | `End` |
| Slide especifico | Clique no dot |

## Assets

```
public/
├── branding/
│   ├── logo-principal-white.svg
│   └── logo-badge-white.svg
├── comparativo/
│   ├── atendimentoIA1.png
│   ├── atendimentoIA2.png
│   ├── atendimentohumano1.png
│   └── atendimentohumano2.png
└── docs/
    └── CONTEUDO.md
```

## Checklist do Projeto

- [x] 9 slides na apresentacao principal
- [x] Slide comparativo com prints reais (IA vs Humano)
- [x] Background 3D integrado
- [x] Navegacao horizontal com snap
- [x] 4 solucoes com modais detalhados
- [x] CRM Preview com 4 abas
- [x] Dashboard Preview com 4 abas
- [x] Transparencia de custos (API Meta inclusa para vendas)
- [x] FAQ atualizado (custos, stack, seguranca)
- [x] Cronograma com 4 fases
- [x] Proposta SPA em /proposta
- [x] Responsivo mobile/desktop
