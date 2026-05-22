# TopBus OS Frontend Handoff

## Estado atual
O scaffold atual permanece ativo e funcional em `apps/web/src/app/page.tsx`, com `ModuleBuilderMock`, mocks operacionais e sugestão de escala.

## Localização dos mocks
- Mocks legados: `apps/web/src/data/mock.ts`
- Camada centralizada de consumo: `apps/web/src/lib/api/mockApi.ts`

## Tipos do frontend
- Tipos do front: `apps/web/src/lib/types/topbus.ts`
- Compatibilidade de domínio compartilhado: `packages/shared/src/domain.ts`

## Integração com backend (futura)
1. Manter componentes consumindo funções de `mockApi.ts`.
2. Substituir implementação interna das funções por chamadas ao `httpClient`.
3. Mapear contratos para endpoints NestJS reais.
4. Preservar tipagem de retorno para evitar quebra de UI.

## Padrão visual esperado
- SaaS corporativo premium.
- Referência visual Figma/Behance.
- Sem aspecto genérico.
- Layout limpo com hierarquia operacional.

## Regras de design
- Proibido uso de emojis em navegação, títulos e ações.
- Utilizar somente nomes de ícones lineares (compatíveis com lucide-react).
- Centralizar tokens visuais em `apps/web/src/styles/design-tokens.ts`.

## Fluxo de substituição de mocks por API real
1. Criar endpoint backend.
2. Ajustar função correspondente em `mockApi.ts` para chamar `httpClient`.
3. Validar retorno com tipos de `topbus.ts`.
4. Remover fallback mock apenas após homologação.

## Módulos obrigatórios futuros
- Serviço Terceirizado
- Avaria / Portaria
- Status de Frota
- Escala Operacional
- Upload de Relatórios
- Criador de Módulos
- Insights / IA
- Typebot
