interface Input {
  chapa: string;
  dateTimeISO: string;
}

interface Suggestion {
  vehicle: string;
  line: string;
  route: string;
  confidence: number;
}

export function suggestOperationalScale(input: Input): Suggestion {
  const hour = new Date(input.dateTimeISO).getHours();
  const isMorning = hour >= 4 && hour < 12;

  if (input.chapa === '9718482') {
    return {
      vehicle: isMorning ? '97021' : '21052',
      line: '7840',
      route: isMorning ? 'Bairro > Centro' : 'Centro > Bairro',
      confidence: 0.82,
    };
  }

  return {
    vehicle: '74226',
    line: '7840',
    route: 'Circular Operacional',
    confidence: 0.64,
  };
}
