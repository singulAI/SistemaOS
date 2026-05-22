# Arquitetura de Referência — TopBus OS

## 1) Contexto de posicionamento

TopBus OS é uma **plataforma paralela** ao Websheet/AppSheet: resolve expansão, governança, auditoria e escala operacional sem interromper a operação atual.

## 2) Stack

- **Frontend:** Next.js + React + TailwindCSS + PWA
- **Backend:** Node.js + NestJS + REST + JWT + RBAC
- **Banco:** PostgreSQL
- **Cache/Fila:** Redis
- **Arquivos:** Google Drive API ou MinIO (S3 compatível)
- **PDF:** Templates HTML + Puppeteer
- **IA local:** Ollama + Mistral
- **Deploy:** Docker + Ubuntu 22.04 + NGINX

## 3) Módulos de domínio

1. Login
2. Dashboard Master
3. Setores
4. Veículos
5. Motoristas
6. Linhas e Rotas
7. Escala Operacional
8. Serviço Terceirizado
9. Avaria / Portaria
10. Status de Frota
11. Upload de Relatórios
12. Criador de Módulos
13. IA / Insights
14. Configurações

## 4) Perfis (RBAC)

- Master
- Gestor Manutenção
- Portaria
- Operação
- Financeiro
- RH
- Abastecimento
- Frota

Cada módulo possui ACL por perfil + setor.

## 5) Macrofluxo

1. Operador registra ocorrência (UI web ou Typebot).
2. API valida schema dinâmico do módulo.
3. Evidências (foto/PDF/assinatura) são enviadas para storage.
4. Registro gera trilha de auditoria e evento assíncrono (Redis stream/queue).
5. Serviço de insights consolida indicadores e expõe dashboard/alertas.

## 6) Typebot (camada de entrada simplificada)

Entradas por botões:
- Registrar avaria
- Serviço terceirizado
- Enviar documento
- Enviar relatório

Typebot faz POST em endpoints dedicados com payload validado.

## 7) IA / Insights (mock de primeira fase)

- Veículos aguardando peça > 5 dias.
- Veículo 97021 com recorrência de avarias.
- Registros sem fotos obrigatórias.
- Custo de manutenção aumentado no período.

## 8) Escala operacional (sugestão)

Entrada: chapa do motorista + data/hora.
Saída sugerida: veículo, linha e rota (baseado em histórico + regra de turnos).

## 9) Segurança

- JWT de curta duração + refresh token rotativo.
- RBAC por perfil e escopo de setor.
- Assinatura de auditoria por alteração.
- Upload com antivirus/validação MIME/limite de tamanho.

## 10) Evolução

Fase 1: MVP modular com mocks e persistência.
Fase 2: integrações planilhas/BI e relatórios avançados.
Fase 3: IA local com recomendações prescritivas.
