# Proposta Comercial
## Soluções de Automação para Mercante Distribuidora

**Cliente:** Mercante Distribuidora
**Preparado por:** Convert A.I — Arquitetura de Agentes de IA

---

## 1) Diagnóstico Atual

### Cenário da Operação

- **18 vendedores** em televendas.
- **Custo mensal:** R$81.000 (18 × R$4.500 com 13º e férias) + R$2.000 (Fortics) = **R$83.000/mês**.
- **Sistema atual:** Fortics (~R$2.000/mês).
- **Eventos:** Follow-up leva ~60 dias.
- **Cobrança:** Risco de perda de número WhatsApp.

### Gargalos Identificados por Área

| Área | Problema | Impacto |
|------|----------|---------|
| **Atendimento** | Sem inbox unificado, vendedores alternam entre sistemas | Histórico fragmentado, perda de contexto |
| **Vendas** | Processo manual, sem acesso rápido a preços/estoque | Erros em pedidos, sem cross-sell |
| **Eventos** | Follow-up leva ~60 dias | Leads quentes esfriam, ROI difícil de medir |
| **Cobrança** | Processo manual, sem governança | Risco de perda do número WhatsApp |

### Custo de Não Agir

- Vendedores gastam tempo em tarefas repetitivas.
- Leads de eventos viram lista fria (~60 dias).
- Cobrança em alto volume desgasta o canal.
- Sem escalabilidade: crescer = contratar.

---

## 2) Soluções Propostas — 4 Soluções Especializadas

### Proposta de Valor

> Transformar a operação da Mercante com automação inteligente: API oficial da Meta com inbox unificado, agente de vendas integrado ao ERP, automação de eventos e cobrança com governança.

### Arquitetura (alto nível)

- **Solução Omnichannel** com API oficial Meta e inbox unificado.
- **Agente de Vendas** com integração ERP e RAG.
- **Agente de Eventos** para confirmação de presença.
- **Agente de Cobrança** com régua inteligente e governança.
- **Dashboard executivo** com métricas por vendedor.
- **Governança WhatsApp** (limites, qualidade, opt-out).
- **Guardrails**: Human-in-loop para casos especiais.

---

## 3) Soluções Especializadas

### 3.1) Solução Omnichannel

**O que faz**
- API Oficial da Meta para WhatsApp.
- Roteamento de números (mesma lógica atual com balanceamento).
- Inbox Unificado para todos os vendedores.
- Histórico centralizado de conversas.

**Benefícios**
- API Oficial Meta — Compliance total, sem risco de bloqueio.
- Inbox Unificado — Todos os vendedores em uma única interface.
- Roteamento de Números — Mesma lógica atual com balanceamento inteligente.
- Histórico Centralizado — Busca, auditoria e continuidade de conversas.
- Métricas por Vendedor — Tempo de resposta, volume e conversão.

### 3.2) Agente de Vendas

**O que faz**
- Identifica cliente (CPF/CNPJ) — cadastrado vs novo.
- Consulta ERP via RAG (produtos, preços, estoque).
- Cria Ordem de Venda diretamente no ERP.
- Human-in-loop para casos especiais.

**Benefícios**
- Identificação de Cliente — Busca por CPF/CNPJ, histórico de compras.
- Consulta ao ERP — Produtos, preços e disponibilidade em tempo real.
- RAG de Produtos — Conhece categorias, especificações e condições.
- Criação de Pedidos — Gera ordem de venda diretamente no ERP.
- Cross-sell Inteligente — Sugestões baseadas no histórico do cliente.

### 3.3) Agente de Eventos

**O que faz**
- Contato para confirmação de presença em feiras e eventos.
- Coleta de dados dos participantes.
- Múltiplas tentativas (mensagem + ligação).

**Benefícios**
- Confirmação de Presença — Contato proativo pré-evento.
- Múltiplas Tentativas — WhatsApp + ligação até conseguir contato.
- Coleta de Dados — Valida e atualiza informações cadastrais.
- Cadência Automatizada — Sequência de 3-5 toques otimizada.
- Métricas por Evento — Taxa de confirmação e ROI mensurável.

### 3.4) Agente de Cobrança

**O que faz**
- Régua de cobrança inteligente (pré e pós-vencimento).
- Governança WhatsApp (limites e qualidade).
- Human-in-loop para negociações.

**Benefícios**
- Régua Inteligente — Sequência pré-vencimento (D-3) e pós-vencimento (D+1, D+7).
- Governança WhatsApp — Limites de envio, opt-out e qualidade controlados.
- Múltiplos Canais — WhatsApp, SMS, e-mail conforme preferência do cliente.
- Human-in-loop — Escala para humano em negociações ou valores altos.
- Dashboard de Inadimplência — Visão de aging, recovery e motivos.

---

## 4) Ferramentas

### CRM Integrado (operacional)

- Inbox unificado (multicanal).
- Pipeline de vendas (etapas, responsáveis).
- Histórico de conversas e auditoria.

### Dashboard Executivo (gestão)

- **Métricas por vendedor** — tempo de resposta, volume, conversão.
- **Distribuição** de carga entre vendedores.
- **KPIs de eventos** — taxa de confirmação, ROI por evento.
- **Governança WhatsApp** — qualidade do número, limites.

### Governança WhatsApp

- Controle de volume de envio (não ultrapassa limites da Meta).
- Opt-out respeitado automaticamente.
- Múltiplos canais de fallback (SMS, e-mail).
- Templates aprovados e monitoramento de qualidade.
- Alertas de risco antes que virem problemas.

---

## 5) Projeção de Resultados (6 meses)

### Premissas
- 18 vendedores atuais × R$4.500/mês = R$81.000/mês
- Custo Fortics atual: R$2.000/mês
- Custo Solução: R$6.000/mês (Omnichannel + Vendas)
- **Meta: 50% da capacidade em 6 meses** (projeção agressiva)

### Projeção Mensal

| Mês | Leads/Agente | % Capacidade | Vendedores Substituídos | Economia Mensal |
|-----|--------------|--------------|------------------------|-----------------|
| 1   | 1.000        | 12%          | 2                      | R$ 9.000        |
| 2   | 1.800        | 20%          | 3.5                    | R$ 15.750       |
| 3   | 2.700        | 30%          | 5                      | R$ 22.500       |
| 4   | 3.400        | 38%          | 6.5                    | R$ 29.250       |
| 5   | 4.000        | 44%          | 7.5                    | R$ 33.750       |
| 6   | 4.500        | 50%          | 8+                     | R$ 36.000       |

### Economia ao Final do Mês 6

| Item | Valor |
|------|-------|
| Vendedores substituídos (8 × R$4.500) | R$ 36.000/mês |
| Eliminação Fortics | R$ 2.000/mês |
| Custo Solução (Omnichannel + Vendas) | -R$ 6.000/mês |
| **Economia líquida** | **R$ 32.000/mês** |

### ROI

- **Investimento inicial (Setup):** R$ 35.000
- **Economia acumulada (6 meses):** ~R$ 145.000
- **Payback:** ~1.5 meses

### Outros Ganhos

1. **Eficiência de Atendimento** — Respostas ágeis, informações consistentes.
2. **Atendimento 24/7** — Não perde leads noturnos/finais de semana.
3. **Aumento de Conversão** — Follow-up automatizado, cross-sell inteligente.
4. **Escalabilidade Total** — Cresce sem contratar.
5. **Automação de Eventos** — Follow-up em dias, não meses.

---

## 6) Cronograma (4 fases)

| Fase | Objetivo | Entregas principais |
|------|----------|---------------------|
| 1 — Imersão | Diagnóstico detalhado | Mapeamento de processos, integração ERP |
| 2 — Piloto | Omnichannel + Vendas operando | Validação com vendedores piloto |
| 3 — Rollout | Expansão + agentes | Toda equipe, Eventos, Cobrança |
| 4 — Otimização | Análise + melhoria contínua | Métricas, ajustes, expansão |

---

## 7) Investimento

### Pacote Principal

| Solução | Setup | Mensal | Contrato |
|---------|-------|--------|----------|
| **Omnichannel + Agente de Vendas** | R$ 35.000,00 | R$ 6.000,00 | 12 meses |

**Inclui:**
- API Oficial Meta para WhatsApp
- Inbox Unificado para vendedores
- Agente de Vendas com RAG
- Integração ERP (consulta + criação de pedidos)
- Guardrails e Human-in-loop
- Dashboard executivo

### Pacotes Complementares

| Agente | Setup | Mensal |
|--------|-------|--------|
| Agente de Cobrança | R$ 8.000,00 | R$ 1.000,00 |
| Agente de Eventos | R$ 8.000,00 | R$ 1.500,00 |

**Notas**
- Valores podem ser ajustados após diagnóstico e imersão.
- Detalhes de integração são definidos na fase 1 (Imersão).

---

## 8) Perguntas Frequentes

### Como integra com o ERP?
A integração é feita via API. O agente consulta produtos, preços e estoque, e cria ordens de venda diretamente no sistema.

### Como evitamos perda de número/limite no WhatsApp?
Governança de WhatsApp com: controle de volume de envio, opt-out respeitado automaticamente, múltiplos canais de fallback (SMS, e-mail), e templates aprovados.

### Como fica LGPD e auditoria?
Solução desenhada com boas práticas de privacidade: criptografia em trânsito e em repouso, controle de acesso por perfil, trilhas de auditoria completas e políticas de retenção configuráveis.

### Quem aprova pedidos e negociações?
Human-in-loop configurável. O agente identifica casos que precisam de aprovação humana (pedidos acima de valor X, negociações de cobrança, etc.).

### Preciso trocar o sistema atual?
Não necessariamente. O Fortics pode ser substituído pela nova plataforma, gerando economia de R$2.000/mês.

### Qual o prazo de implementação?
Depende da complexidade das integrações. Começamos com um piloto para validação rápida.

---

**Próximo passo:** Agendar imersão para diagnóstico detalhado e definição de integrações.
