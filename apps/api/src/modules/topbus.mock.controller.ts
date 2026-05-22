import { Controller, Get, Query } from '@nestjs/common';

@Controller('topbus')
export class TopBusMockController {
  @Get('insights')
  insights() {
    return [
      'Existem veículos aguardando peça há mais de 5 dias.',
      'O veículo 97021 possui recorrência de avarias.',
      'Há registros sem fotos obrigatórias.',
      'O custo de manutenção aumentou no período.',
    ];
  }

  @Get('operational-scale/suggest')
  suggest(@Query('chapa') chapa: string, @Query('dateTimeISO') dateTimeISO: string) {
    const hour = new Date(dateTimeISO).getHours();
    const vehicle = chapa === '9718482' && hour < 12 ? '97021' : '21052';

    return {
      chapa,
      vehicle,
      line: '7840',
      route: hour < 12 ? 'Bairro > Centro' : 'Centro > Bairro',
      confidence: 0.82,
    };
  }
}
