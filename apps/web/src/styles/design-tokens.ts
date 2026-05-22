export const designTokens = {
  colors: {
    petroBlue: '#0B3A53',
    darkBlue: '#102A43',
    white: '#FFFFFF',
    lightGray: '#E5E7EB',
    graphite: '#2F3A45',
    subtleGreen: '#2E8B57',
    subtleYellow: '#C99700',
    subtleRed: '#B84A4A',
  },
  spacing: { xs: 4, sm: 8, md: 16, lg: 24, xl: 32, xxl: 48 },
  radius: { sm: 6, md: 10, lg: 14, xl: 20 },
  shadows: {
    sm: '0 1px 2px rgba(16, 42, 67, 0.08)',
    md: '0 6px 18px rgba(16, 42, 67, 0.12)',
    lg: '0 12px 30px rgba(16, 42, 67, 0.16)',
  },
  typography: {
    fontFamily: 'Inter, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
    size: { xs: 12, sm: 14, md: 16, lg: 20, xl: 28 },
    weight: { regular: 400, medium: 500, semibold: 600, bold: 700 },
  },
  statusColors: {
    ativo: '#2E8B57',
    emManutencao: '#C99700',
    parado: '#B84A4A',
    aguardandoPeca: '#C99700',
    aguardandoTerceiro: '#0B3A53',
    liberado: '#2E8B57',
    inativo: '#2F3A45',
  },
} as const;
