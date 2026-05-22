# TopBus OS + Typebot (conceito)

## Fluxos por botões

- Registrar avaria
- Serviço terceirizado
- Enviar documento
- Enviar relatório

## Estratégia

Typebot atua como camada de entrada simplificada para equipes operacionais, enviando payloads para API TopBus OS.

## Exemplo de payload

```json
{
  "flow": "registrar_avaria",
  "vehicle": "97021",
  "driver": "DEVAIR MENDES DE SOUSA",
  "chapa": "9718482",
  "damageType": "VIDRO DO LETREIRO QUEBRADO",
  "estimatedValue": 315.0,
  "attachments": ["photo://1", "photo://2"],
  "signature": "base64-signature"
}
```
