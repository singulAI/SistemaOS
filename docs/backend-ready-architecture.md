# TopBus OS — Backend-Ready Architecture

## Objetivo
Preparar a evolução segura entre frontend premium e backend operacional orientado a eventos, sem acoplamento rígido e sem backend definitivo nesta fase.

## Arquitetura de integração proposta
Frontend
↓
`topbusApi` (facade pública)
↓
`mockApi` (temporário)
↓
`client.ts` (futuro)
↓
Backend real (futuro)

## Fluxo operacional orientado a eventos
Eventos modelados:
- DAMAGE_REGISTERED
- DAMAGE_ASSIGNED
- PART_REQUESTED
- THIRD_PARTY_CALLED
- SERVICE_STARTED
- SERVICE_COMPLETED
- VEHICLE_STOPPED
- VEHICLE_RELEASED

## Workflow Engine (mockado)
Status:
- REGISTERED
- UNDER_ANALYSIS
- WAITING_PART
- WAITING_THIRD_PARTY
- WAITING_APPROVAL
- IN_PROGRESS
- VALIDATION
- COMPLETED
- ARCHIVED

Setores:
- PORTARIA
- MANUTENCAO
- FROTA
- ALMOXARIFADO
- TERCEIRIZADO
- FINANCEIRO
- OPERACAO
- RH
- GESTAO
- AUDITORIA

Transições simuladas:
PORTARIA → MANUTENCAO → ALMOXARIFADO/TERCEIRIZADO → FINANCEIRO → GESTAO → FINALIZAÇÃO.

## Timeline Engine (mockado)
Timeline operacional simulada:
- 08:10 — Avaria registrada
- 08:12 — Encaminhada para manutenção
- 08:40 — Peça solicitada
- 09:10 — Terceirizado acionado

## Notification Engine (mockado)
Tipos base de notificação:
- nova ocorrência
- SLA vencido
- aguardando aprovação
- veículo parado
- tarefa atribuída

## Task Engine (mockado)
Estrutura da Central Operacional simulada com:
- tarefas
- aprovações
- comunicação interna
- delegações
- notificações

## Intelligence Center (mockado)
Inclui:
- visão geral operacional
- KPIs mockados
- SWOT mockada (forças, fraquezas, oportunidades, ameaças)

## Contratos de API futuros
Foram preparados contratos para respostas padronizadas:
- WorkflowOccurrenceResponse
- WorkflowTransitionResponse
- WorkflowTimelineResponse
- NotificationResponse
- TaskResponse
- IntelligenceOverviewResponse
- SWOTResponse

## Estratégia mock → backend real
1. Manter frontend consumindo apenas `topbusApi`.
2. Substituir implementação interna do `topbusApi` de `mockApi` para `client.ts`.
3. Versionar contratos em `contracts.ts` e ajustar serialização no backend.
4. Evoluir persistência real sem reescrever componentes de UI.

## Validação Operacional Antes do Backend Definitivo
O workflow permanece mockado propositalmente para evitar congelar regras prematuramente.

Razões:
- processos operacionais ainda precisam validação com usuários reais;
- exceções de campo (manutenção, portaria, terceiros, aprovação) variam por cenário;
- observação operacional permite calibrar SLA, prioridade, severidade e automações;
- backend definitivo deve nascer com regras testadas na prática, evitando retrabalho estrutural.

Esta etapa reduz risco de acoplamento incorreto e prepara uma implementação final orientada por evidências operacionais.
