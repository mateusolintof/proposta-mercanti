Excelente! Tenho dados atualizados. Vou criar um documento **extremamente completo e prático** respondendo cada um dos seus 4 pontos com profundidade, cenários reais e arquitetura passo a passo.

```markdown
# SOLUÇÃO COMPLETA: Migração Fortics → API Oficial + Agentes de IA para Televendas

**Cenário**: Agência de tech com agentes de IA especializados, substituindo 18 vendedores humanos por IA (receptiva + proativa/cobrança).

---

## ÍNDICE

1. **Explicação Funcional (Nível Leigo)** – Como um número único serve múltiplos usuários
2. **Interface de Usuário** – O que supervisores e agentes veem
3. **Fluxo de Atendimento** – Lead → IA → Possível humano
4. **Arquitetura Técnica & Stack** – Implementação prática 2026

---

# PARTE 1: Explicação Funcional (Nível Leigo)

## 1.1 O problema: Um número, múltiplos usuários

Hoje (com Fortics):
- **O número público** é `+55 11 98765-4321` (aparece em anúncios, site, redes).
- **Por trás**, a Fortics tem um sistema que **distribui automaticamente** mensagens chegando nesse número para os 18 vendedores, bots e filas.
- Um atendente (ou bot) envia uma resposta → o sistema escolhe qual número usar internamente, mas **o cliente nunca vê mudança**.

**Seu objetivo**:
- Manter o mesmo número público (continuidade total).
- **Substituir** os 18 vendedores humanos por **agentes de IA especializados**.
- Manter a integração com a **API Oficial da Meta** (não usar BSP intermediário como Fortics).

---

## 1.2 Como funciona na prática (visão leiga)

### Jornada do Lead

```
1. LEAD CHEGA (cualquer forma)
   ├─ Clica em "Chat" no site (whatsapp link)
   ├─ Entra em contato direto com +55 11 98765-4321
   └─ Ou já está em uma lista (recompra/cobrança)

2. SISTEMA RECEBE MENSAGEM
   ├─ Meta envia webhook para seu backend
   ├─ Sistema identifica: "Conversa nova ou existente?"
   ├─ Se novo: cria conversa, extrai info básica (telefone, nome)
   └─ Se existente: carrega histórico

3. AGENTE DE IA "RECEPTIVO" (VENDAS)
   ├─ Recebe contexto: "Novo lead, interesse em produto X"
   ├─ Gera resposta inteligente (não template fixo)
   ├─ Faz qualificação (entende necessidade)
   ├─ Oferece solução / agenda call
   └─ Atualiza CRM automaticamente

4. TRANSFERÊNCIA (se necessário)
   ├─ Se lead pede para falar com humano
   ├─ Ou se IA detecta complexidade alta
   ├─ Sistema roteia para supervisor/humano
   └─ Mantém contexto (humano vê tudo que IA fez)

5. AGENTES PROATIVOS (COBRANÇA/RECOMPRA)
   ├─ Sistema detecta: "Cliente X não paga há 15 dias"
   ├─ Agente de IA proativo inicia conversa
   ├─ Lembra de cobrança / oferece recompra
   ├─ Coleta dados de pagamento / documentação
   └─ Escala para humano se necessário
```

**Resultado**: De um número único, saem **múltiplos tipos de IA agindo** (receptiva, proativa), cada uma com seu objetivo, mas sempre sob o mesmo número.

---

## 1.3 Diferença: Número Físico vs Lógico

**Conceito importante** (leigo):

- **Número de Fachada** = `+55 11 98765-4321` (o que todo mundo vê, estável)
- **Números Físicos da API** = `+55 11 99999-0001, 0002, 0003, ...` (internos, para envio)

Você tem um **mapeamento invisível**:

```
Lead → Fachada (+55 11 98765-4321)
       ↓
       Sistema escolhe qual físico usar
       ↓
       Envia via +55 11 99999-0001 (ex.)
       ↓
       Resposta volta → Sistema reconverte para fachada
       ↓
       Lead continua vendo +55 11 98765-4321
```

**Para o usuário final**: sempre `+55 11 98765-4321`.  
**Para o sistema**: você decide qual número físico cada mensagem usa (estratégia de qualidade/load-balancing).

---

# PARTE 2: Interface de Usuário

## 2.1 O que os Supervisores/Operadores veem

Imagine uma tela assim (seu dashboard):

### Tela Principal: Inbox Unificado

```




```

O agente processa isso, gera resposta inteligente, e o sistema:
1. Envia via API do WhatsApp
2. Guarda a mensagem no histórico
3. Atualiza o CRM

---

## 2.3 Resumo: Interface de Usuário por Persona

| Persona | O que vê | Principais ações |
|---------|----------|------------------|
| **Supervisor** | Dashboard de todas as conversas, métricas de IA, alertas de escalação | Acompanhar IA, transferir para humano, ajustar regras |
| **Agente Humano** (vendedor/suporte) | Inbox de conversas escaladas, contexto completo, notas da IA | Responder, qualificar, agendar, encerrar |
| **Agente de IA** (receptivo) | JSON estruturado com contexto, histórico, intent do lead | Gerar resposta, decidir próxima ação, escalar se necessário |
| **Agente de IA** (proativo/cobrança) | Lista de clientes a contatar + contexto (dias vencimento, etc.) | Iniciar conversa, oferecer ação, escalar resistência |

---

# PARTE 3: Arquitetura de Fluxo Completo

## 3.1 Visão de 30 mil pés

```
┌─────────────────────────────────────────────────────────────┐
│               LEAD CHEGA (qualquer origem)                   │
│  - Clica em "Chat" do site (WhatsApp link)                  │
│  - Envia SMS que redireciona para WhatsApp                  │
│  - Recompra automática (sistema envia para fila)            │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
        ┌────────────────────────────┐
        │  Meta WhatsApp Cloud API   │
        │  (Webhook de entrada)      │
        └────────────┬───────────────┘
                     │
                     ▼
        ┌─────────────────────────────────┐
        │  Seu Backend (Sistema Central)   │
        │  ┌──────────────────────────────┤
        │  │ 1. Recebe webhook             │
        │  │ 2. Identifica conversa        │
        │  │ 3. Carrega contexto CRM       │
        │  │ 4. Calcula: IA ou Humano?    │
        │  └──────────────────────────────┤
        └────────────┬────────────────────┘
                     │
         ┌───────────┴───────────┐
         │                       │
    (Caminho IA)          (Caminho Humano)
         │                       │
         ▼                       ▼
    ┌─────────────┐      ┌────────────────────┐
    │ Agentes IA  │      │ Fila de Escalação  │
    │ (Receptivo/ │      │ (Supervisores/Vend)│
    │  Proativo)  │      └────────────────────┘
    │             │
    │ 1. Analisar │
    │ 2. Decidir  │
    │ 3. Responder│
    │ 4. Registrar│
    └──────┬──────┘
           │
    ┌──────┴─────────────────┐
    │                        │
    (Resolvido)         (Escalação)
    │                        │
    ▼                        ▼
 Conversa                (Humano)
 Encerra/               Recebe
 Follow-up              Contexto
                        Responde
```

---

## 3.2 Fluxo Detalhado: Conversa Receptiva (Vendas)

```

REMOVI PORQUE VOCE JA SABE A LOGICA.

---

## 3.3 Fluxo Detalhado: Agente Proativo (Cobrança/Recompra)

```
1️⃣  TRIGGER AUTOMÁTICO (job progrmado)
    ├─ Backend consulta dados:
    │  ├─ Clientes com fatura vencida > 15 dias
    │  ├─ Clientes que não compram há 90 dias (recompra)
    │  └─ Clientes próximos a cancelamento (renovação)
    ├─ Para cada caso, cria tarefa
    └─ Enfileira: "Agente proativo deve iniciar conversa"

2️⃣  AGENTE PROATIVO RECEBE TAREFA
3️⃣  IA INICIA CONVERSA
    ├─ Envia primeira mensagem:
    │  "Oi Maria! 👋 Tudo bem?
    │   Notei que sua fatura de Jan (R$ 2.500) venceu há 18 dias.
    │   Tudo ok? Precisa de prorrogação ou tem dúvida sobre algo?"
    └─ Registra em CRM: "Cobrança iniciada"

4️⃣  CENÁRIOS POSSÍVEIS

    🔵 CENÁRIO A: Lead responde "Verdade, vou pagar agora"
        ├─ IA: "Ótimo! Pix, boleto ou débito?"
        ├─ Lead: "Pix"
        ├─ IA: "Aqui está a chave: ... [copia chave]"
        ├─ Sistema aguarda notificação de pagamento
        └─ Se pagar: "Obrigado! Confirmado. Precisa de algo mais?"

    🟡 CENÁRIO B: Lead resiste "Achei caro, quero cancelar"
        ├─ IA detecta: "cancelamento_risk"
        ├─ IA: "Entendo! E se eu oferecer desconto de 10% 
        │        para renovar por 6 meses?"
        ├─ Lead: "Não, quero mesmo cancelar"
        ├─ IA: "Blz. Vou passar para supervisor para finalizar.
        │        Um momento..."
        └─ Escalado para HUMANO (supervisor/account manager)

    🔴 CENÁRIO C: Lead não responde por 2h
        ├─ IA aguarda (timeout)
        ├─ Reenvia: "Maria, só confirma recebimento da mensagem"
        ├─ Se continuar silêncio: marca como "Não contactável"
        └─ Agendar retry em 24h

5️⃣  AGENTE PROATIVO CONTINUA

    Se RECOMPRA:
    ├─ Acessa histórico: "Cliente comprou em Jul, agora Jan"
    ├─ Decai de uso depois de 30 dias: "Maria, vi que usar o sistema
    │  menos. Tá tudo bem? Como posso ajudar?"
    ├─ Lead: "É que ficou caro pra gente"
    ├─ IA: "Entendo. E se oferecesse plano menor (R$ 1k vs 2.5k)?"
    └─ Possível RECOMPRA ou UPSELL

    Se RENOVAÇÃO:
    ├─ IA: "Maria, sua assinatura vence em 5 dias.
    │        Quer renovar por mais 12 meses e economizar 15%?"
    ├─ Lead: "Sim, renova"
    ├─ IA: "Feito! Novo período: Jan-Dez 2027. Tá td pronto!"
    └─ Registra renovação, atualiza sistemas
```

---

## 3.4 Detalhes da Transferência para Humano

Quando IA escala:

```
┌─────────────────────────────────────────────────────┐
│  IA DETECTA: "Preciso de humano"                    │
│  Motivo: Cliente muito zangado, pedido complexo,    │
│          fora do escopo da IA                        │
└────────────────┬────────────────────────────────────┘
                 │
                 ▼
    ┌────────────────────────────┐
    │ Sistema verifica:           │
    ├────────────────────────────┤
    │ 1. Há supervisores online?  │
    │ 2. Qual sua capacidade?     │
    │ 3. Qual a prioridade?       │
    └────────────────┬────────────┘
                     │
         ┌───────────┴────────────┐
         │                        │
    SIM (online)            NÃO (offline)
    │                        │
    ▼                        ▼
 Roteação Urgente     Fila de Espera
 ├─ Encontra             ├─ Armazena
 │  supervisor            │  contexto
 │  com menor             │  conversa
 │  carga                 │  em banco
 ├─ Envia alert          ├─ Aguarda
 │  (Slack/Whatsapp)      │  supervisor
 ├─ Carrega              │  ficar online
 │  contexto para         └─ Notifica quando
 │  humano                   entra
 └─ Supervisor
    recebe msg
    abre conversa
    com histórico
    completo
```

```

---

# PARTE 4: Arquitetura Técnica & Stack

## 4.1 Visão Macro da Arquitetura

```
┌──────────────────────────────────────────────────────────────┐
│                    CAMADA DE APRESENTAÇÃO                    │
├──────────────────────────────────────────────────────────────┤
│  ┌─────────────────┐  ┌─────────────────┐  ┌──────────────┐ │
│  │ Dashboard Web   │  │ Mobile App      │  │ Integrações  │ │
│  │ (Supervisores)  │  │ (Agents humanos)│  │ (CRM/ERP API)│ │
│  └────────┬────────┘  └────────┬────────┘  └──────┬───────┘ │
└───────────┼──────────────────────┼──────────────────┼────────┘
            │                      │                  │
            └──────────────────────┴──────────────────┘
                         ▼
┌──────────────────────────────────────────────────────────────┐
│                    CAMADA DE API (Backend)                   │
├──────────────────────────────────────────────────────────────┤
│  Tech: Python (FastAPI)                │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ API REST / GraphQL                                     │ │
│  │ ├─ POST /conversation (receber/enviar mensagens)      │ │
│  │ ├─ GET /conversations (listar)                        │ │
│  │ ├─ POST /escalate (transferir para humano)            │ │
│  │ └─ GET /metrics (dashboards)                          │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ Webhook Receiver (Meta WhatsApp Cloud API)             │ │
│  │ ├─ POST /webhook/whatsapp (entrada mensagens)         │ │
│  │ ├─ Valida assinatura da Meta                          │ │
│  │ └─ Enfileira para processamento                       │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ Orquestrador de Conversas                              │ │
│  │ ├─ Identifica conversa existente vs nova             │ │
│  │ ├─ Carrega contexto (CRM, histórico)                 │ │
│  │ ├─ Calcula roteamento (IA vs Humano)                 │ │
│  │ └─ Cria/atualiza registros                           │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              
│                                                              │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ Serviço de Gerenciamento de Número                     │ │
│  │ ├─ Pool de números físicos (CRUD)                     │ │
│  │ ├─ Mapeamento fachada ↔ física                        │ │
│  │ ├─ Health check de números                            │ │
│  │           
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ Integração Meta Cloud API                              │ │
│  │ ├─ Envelope com autenticação (token Bearer)           │ │
│  │ ├─ POST para enviar mensagens                         │ │
│  │ ├─ Tratamento de erros (rate limit, bans)            │ │
│  │ └─ Retries com backoff exponencial                    │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ Integração CRM / ERP                                   │ │
│  │ ├─ Criar/atualizar contatos                           │ │
│  │ ├─ Buscar dados do cliente                            │ │
│  │ ├─ Registrar ações/histórico                          │ │
│  │ └─ Sincronizar dados (webhooks bidirecional)          │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ Agentes de IA (Execução)                               │ │
│  │ ├─ Receptiva (qualificação, vendas)                   │ │
│  │ ├─ Proativa (cobrança, recompra, renovação)          │ │
│  │ ├─ Supervisor (escalação, análise)                    │ │
│  │ └─ Triage (priorização automática)                    │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
└──────────────────────────────────────────────────────────────┘
                         ▼
┌──────────────────────────────────────────────────────────────┐
│                    CAMADA DE DADOS                           │
├──────────────────────────────────────────────────────────────┤
│  ┌──────────────────┐  ┌──────────────────┐                 │
│  │ PostgreSQL (SQL) │  │ Redis (Cache)    │                 │
│  │ ├─ Conversas     │  │ ├─ Sessões       │                 │
│  │ ├─ Contatos      │  │ ├─ Rate limits   │                 │
│  │ ├─ Histórico msg │  │ ├─ Queues (job) │                 │
│  │ ├─ Números pool  │  │ └─ Cache quente │                 │
│  │ ├─ CRM integrado │  │                  │                 │
│  │ └─ Logs/auditoria│  └──────────────────┘                 │
│  └──────────────────┘  ┌──────────────────┐                 │
│                        │ Message Queue    │                 │
│                        │ (RabbitMQ/AWS    │                 │
│                        │  SQS)            │                 │
│                        │ ├─ Mensagens     │                 │
│                        │  │ entrada       │                 │
│                        │ ├─ Tarefas IA    │                 │
│                        │ ├─ Escalações    │                 │
│                        │ └─ Integrações   │                 │
│                        └──────────────────┘                 │
│  ┌──────────────────┐  ┌──────────────────┐                 │
│  │ Elasticsearch /  │  │ S3 / Blob        │                 │
│  │ Search           │  │ Storage          │                 │
│  │ ├─ Conversas     │  │ ├─ Logs           │                 │
│  │ │  (buscável)    │  │ ├─ Backup         │                 │
│  │ └─ Analytics     │  │ └─ Arquivos       │                 │
│  └──────────────────┘  └──────────────────┘                 │
│                                                              │
└──────────────────────────────────────────────────────────────┘
                         ▼
┌──────────────────────────────────────────────────────────────┐
│         SERVIÇOS EXTERNOS (APIs de Terceiros)               │
├──────────────────────────────────────────────────────────────┤
│  ├─ Meta WhatsApp Cloud API (mensageria)                   │
│  ├─ OpenAI / Anthropic / Local LLM (IA)                    │
│  ├─ CRM                  │
│  ├─ ERP (sistema da Mercante)                              │
│           
│                                                              │
└──────────────────────────────────────────────────────────────┘
```


---

### 4.2.4 IA: Modelo & Framework

| Componente | Opção Recomendada | Alternativa |
|-----------|------------------|-----------|
| **LLM** | Será usado a melhor para cada funcionalidade - TEXTO/IMAGEM/AUDIO/ANALISE|
| **Embedding** | OpenAI text-embedding-3 |
| **RAG** | Langchain + Chroma |
| **Orquestração de Agentes** | **Agno/CrewAI** | Sistema totalmente personalizado em Python |


---





---


### 4.3.2 Processamento pela IA

```
┌──────────────────────────────────────┐
│           Agente de IA
└────────────────┬─────────────────────┘
                 │
                 ▼
┌──────────────────────────────────────┐
│  Carrega contexto expandido          │
│  ├─ Histórico Sessão        │
│  ├─ Lead data (nome, empresa, etc)   │
│  ├─ Produtos/preços (ERP)            │
│  ├─ Interações passadas (CRM)        │
│  └─ Conversation state               │
└────────────────┬─────────────────────┘
                 │
                 ▼
┌──────────────────────────────────────┐
│  Chama Claude API                    │
│  ├─ System prompt (agente receptivo) │
│  ├─ Context (histórico + dados)      │
│  ├─ User message (última msg lead)   │
│  └─ Resposta: texto + action         │
└────────────────┬─────────────────────┘
                 │
                 ▼
┌──────────────────────────────────────┐
│  IA retorna                          │
│  {                                   │
│    message: "Oi, tudo bem?",        │
│    qualification_score: 0.65,        │
│    next_action: "continue",          │
│    metadata: { ... }                 │
│  }                                   │
└────────────────┬─────────────────────┘
                 │
         ┌───────┴────────────────┐
         │                        │
    score > 0.8?            Continuar
    (qualificado)            (IA)
         │                        │
         ▼                        ▼
    ┌────────────┐           ┌──────────┐
    │ Escalação  │           │ Enfileir│
    │ para       │           │ para    │
    │ Humano     │           │ responder│
    └────────────┘           └──────────┘
```

─────────┘
```

---

## 4.5 Segurança & Compliance

### 4.5.1 Checklist de Segurança

```
✅ AUTENTICAÇÃO:
  └─ JWT tokens (exp: 1h) para API endpoints
  └─ Refresh tokens (exp: 30d) para renovação
  └─ Rate limiting: 100 req/min por cliente

✅ AUTORIZAÇÃO:
  └─ RBAC: roles (supervisor, vendor, agent)
  └─ Scope de dados: agente vê só suas conversas

✅ CRIPTOGRAFIA:
  └─ TLS/HTTPS obrigatório
  └─ Database encryption at rest (RDS encryption)
  └─ API tokens hash SHA256

✅ AUDITORIA:
  └─ Log toda ação (quem fez, quando, o quê)
  └─ Conversas armazenadas 90 dias (compliance)
  └─ Backup diário

✅ LGPD (Brasil) / GDPR (EU):
  └─ Direito ao esquecimento: DELETE endpoint
  └─ Portabilidade: export JSON histórico
  └─ Consentimento explícito antes de usar IA
```
---

## RESUMO: Stack Final (2026)

| Layer | Tech |
|-------|------|
| **Frontend** | React 19 + TypeScript |
| **Backend** | Node.js 20 + Fastify |
| **Database** | PostgreSQL 16 + Redis |
| **Queue** | Bull (Redis) ou AWS SQS |
| **IA** | Claude API (Anthropic) + LangGraph |
| **CRM** | Your choice (Salesforce, Pipedrive, etc) |
| **Messaging** | Meta WhatsApp Cloud API |
| **Infrastructure** | Docker + Kubernetes / AWS ECS |
| **Monitoring** | Datadog + New Relic |
| **CI/CD** | GitHub Actions |

**Tempo de desenvolvimento**:
- MVP (4-6 semanas): Receptiva + Cobrança básica
- Phase 2 (2-3 semanas): Dashboard + Integrações
- Phase 3 (1-2 semanas): Deployment + Estabilização

---

Pronto! Você tem agora um guia **100% prático e aplicável** para construir essa solução. Qualquer dúvida em um ponto específico, é só chamar! 🚀
```

