export type UserRole =
  | 'MASTER'
  | 'GESTOR_MANUTENCAO'
  | 'PORTARIA'
  | 'OPERACAO'
  | 'FINANCEIRO'
  | 'RH'
  | 'ABASTECIMENTO'
  | 'FROTA';

export type FleetStatus =
  | 'ATIVO'
  | 'EM_MANUTENCAO'
  | 'PARADO'
  | 'AGUARDANDO_PECA'
  | 'AGUARDANDO_TERCEIRO'
  | 'LIBERADO'
  | 'INATIVO';

export type DynamicFieldType =
  | 'texto_curto'
  | 'texto_longo'
  | 'numero'
  | 'valor'
  | 'data'
  | 'data_hora'
  | 'veiculo'
  | 'motorista'
  | 'prestador'
  | 'linha'
  | 'rota'
  | 'foto'
  | 'assinatura'
  | 'upload_arquivo'
  | 'status'
  | 'observacao';

export interface DynamicField {
  key: string;
  label: string;
  type: DynamicFieldType;
  required: boolean;
  requiresPhoto?: boolean;
  requiresSignature?: boolean;
}
