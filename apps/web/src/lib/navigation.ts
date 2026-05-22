import type { UserRole } from './types/topbus';

export interface NavigationItem {
  label: string;
  href: string;
  iconName: string;
  rolesAllowed: UserRole[];
}

const allRoles: UserRole[] = ['MASTER','GESTOR_MANUTENCAO','PORTARIA','OPERACAO','FINANCEIRO','RH','ABASTECIMENTO','FROTA'];

export const navigationItems: NavigationItem[] = [
  { label: 'Dashboard', href: '/dashboard', iconName: 'layout-dashboard', rolesAllowed: allRoles },
  { label: 'Setores', href: '/setores', iconName: 'building-2', rolesAllowed: ['MASTER'] },
  { label: 'Veículos', href: '/veiculos', iconName: 'bus', rolesAllowed: ['MASTER','GESTOR_MANUTENCAO','OPERACAO','FROTA'] },
  { label: 'Motoristas', href: '/motoristas', iconName: 'id-card', rolesAllowed: ['MASTER','OPERACAO','RH'] },
  { label: 'Prestadores', href: '/prestadores', iconName: 'briefcase-business', rolesAllowed: ['MASTER','GESTOR_MANUTENCAO','FINANCEIRO'] },
  { label: 'Linhas e Rotas', href: '/linhas-rotas', iconName: 'route', rolesAllowed: ['MASTER','OPERACAO','FROTA'] },
  { label: 'Escala Operacional', href: '/escala-operacional', iconName: 'calendar-clock', rolesAllowed: ['MASTER','OPERACAO'] },
  { label: 'Serviço Terceirizado', href: '/servico-terceirizado', iconName: 'wrench', rolesAllowed: ['MASTER','GESTOR_MANUTENCAO','FINANCEIRO'] },
  { label: 'Avaria / Portaria', href: '/avaria-portaria', iconName: 'shield-alert', rolesAllowed: ['MASTER','PORTARIA','GESTOR_MANUTENCAO'] },
  { label: 'Status de Frota', href: '/status-frota', iconName: 'activity', rolesAllowed: ['MASTER','GESTOR_MANUTENCAO','OPERACAO','FROTA'] },
  { label: 'Upload de Relatórios', href: '/upload-relatorios', iconName: 'file-up', rolesAllowed: ['MASTER','FINANCEIRO','RH','OPERACAO'] },
  { label: 'Criador de Módulos', href: '/criador-modulos', iconName: 'blocks', rolesAllowed: ['MASTER'] },
  { label: 'Insights / IA', href: '/insights-ia', iconName: 'brain-circuit', rolesAllowed: ['MASTER','GESTOR_MANUTENCAO','OPERACAO','FROTA'] },
  { label: 'Typebot', href: '/typebot', iconName: 'bot', rolesAllowed: allRoles },
  { label: 'Configurações', href: '/configuracoes', iconName: 'settings', rolesAllowed: ['MASTER'] },
];
