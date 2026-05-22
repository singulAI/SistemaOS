# TopBus OS — Plataforma Operacional Modular Inteligente

Projeto paralelo, evolutivo e estratégico ao fluxo atual em Websheet/AppSheet.

## Estrutura

```txt
/apps
  /web      -> Frontend Next.js (PWA-ready)
  /api      -> Backend NestJS (REST + JWT + RBAC)
/packages
  /shared   -> Tipos, contratos e schemas reutilizáveis
  /ui       -> Componentes de design system corporativo
/docs       -> Arquitetura, roadmap e decisões
/docker     -> Containers e orquestração local
/nginx      -> Reverse proxy e publicação
```

## Princípios

- Modular e setorizado por RBAC.
- Preparado para BI, IA local e importação de planilhas/relatórios.
- UX limpa (mobile-first) e baixo atrito para operação real.
- Não substitui o AppSheet imediatamente; atua como plataforma paralela.

## Como iniciar (blueprint)

1. `apps/web`: interface com dashboard, módulos e criador dinâmico.
2. `apps/api`: domínio e APIs para autenticação, módulos, registros e insights.
3. `packages/shared`: entidades e enums comuns (status de frota, perfis, campos).
4. `packages/ui`: sidebar, cards operacionais, badges e formulários reutilizáveis.

## Rodapé padrão

DEV - [rodrigo.run](https://rodrigo.run) © 2026 TopBus OS - Todos os direitos reservados
