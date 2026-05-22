# TopBus OS — Frontend Premium Handoff

## Visão visual
Frontend SaaS corporativo premium, com foco em operação urbana, clareza de dados e baixa fricção para times de campo e gestão.

## Diretriz de estilo
- Referência de qualidade: Figma/Behance.
- Sem emojis.
- Apenas ícones lineares.
- Contraste alto, leitura rápida e componentes consistentes.

## Responsividade esperada
- Desktop: visão analítica completa com múltiplos painéis.
- Tablet: prioridade para tarefas operacionais e formulários.
- Mobile: fluxo rápido de registro com mínimo de toques.

## Componentes obrigatórios
- Sidebar RBAC
- Topbar contextual
- Cards de métricas
- Tabelas operacionais
- Formulários dinâmicos por módulo
- Timeline/histórico de registros
- Área de insights IA/BI
- Entrada simplificada via Typebot

## Estrutura de layout
- Shell principal (`app + layout + navegação`)
- Páginas por domínio (veículos, motoristas, escala, avarias, serviços)
- Componentes compartilhados em `components/*`
- Features desacopladas em `features/*`
- Dados e integração em `lib/api/*`

## Rotas principais
Definidas em `apps/web/src/lib/navigation.ts`, com `label`, `href`, `iconName`, `rolesAllowed`.

## Integração futura com backend
- Fonte de dados atual: `mockApi.ts`.
- Etapa futura: substituir internamente por `httpClient` em `lib/api/client.ts`.
- Objetivo: trocar mock por API real sem quebrar componentes.

## Critérios de aceite
- SaaS corporativo premium.
- Sem emojis.
- Somente ícones lineares.
- Dados via `mockApi`.
- Sem arrays espalhados nos componentes.
- Responsividade desktop/tablet/mobile.
- Pronto para backend real.
- Compatível com RBAC.
- Compatível com Typebot.
- Compatível com IA/BI.
