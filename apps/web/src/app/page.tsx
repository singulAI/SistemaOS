import { ModuleBuilderMock } from '../components/ModuleBuilderMock';
import { mockDamage, mockDriver, mockLine, mockService, mockVehicles } from '../data/mock';
import { getInsights, suggestOperationalScale } from '../lib/api/topbusApi';

export default async function Page() {
  const [suggestion, insights] = await Promise.all([
    suggestOperationalScale({ chapa: '9718482', dateTimeISO: new Date().toISOString() }),
    getInsights(),
  ]);

  return (
    <main className="min-h-screen bg-slate-100 p-4 md:p-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <header className="rounded-2xl bg-slate-900 p-6 text-white shadow-lg">
          <h1 className="text-2xl font-bold">TopBus OS</h1>
          <p className="text-sm text-slate-200">Projeto paralelo e evolutivo para operação urbana.</p>
        </header>

        <section className="grid gap-4 md:grid-cols-4">
          {['Ativo', 'Em manutenção', 'Parado', 'Aguardando peça'].map((status) => (
            <article key={status} className="rounded-2xl bg-white p-4 shadow-sm">
              <p className="text-xs uppercase text-slate-500">Status de Frota</p>
              <h2 className="text-lg font-semibold">{status}</h2>
            </article>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl bg-white p-5 shadow-sm">
            <h3 className="text-lg font-semibold">Módulos iniciais</h3>
            <ul className="mt-2 text-sm text-slate-700">
              <li>• Serviço Terceirizado: {mockService}</li>
              <li>
                • Avaria / Portaria: {mockDamage.title} ({mockDamage.value})
              </li>
              <li>• Status de Frota</li>
              <li>• Escala Operacional</li>
              <li>• Upload de Relatórios</li>
            </ul>
            <p className="mt-3 text-sm">
              Veículos mock: {mockVehicles.join(', ')} | Motorista: {mockDriver.name} (chapa {mockDriver.chapa}) | Linha: {mockLine}
            </p>
          </article>

          <article className="rounded-2xl bg-white p-5 shadow-sm">
            <h3 className="text-lg font-semibold">Escala Operacional (sugestão)</h3>
            <p className="mt-2 text-sm">Chapa: 9718482</p>
            <p className="text-sm">Veículo sugerido: {suggestion.vehicle}</p>
            <p className="text-sm">Linha: {suggestion.line}</p>
            <p className="text-sm">Rota: {suggestion.route}</p>
          </article>
        </section>

        <ModuleBuilderMock />

        <section className="rounded-2xl bg-white p-5 shadow-sm">
          <h3 className="text-lg font-semibold">IA / Insights</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {insights.map((insight) => (
              <li key={insight.id}>• {insight.text}</li>
            ))}
          </ul>
        </section>

        <footer className="pt-2 text-center text-xs text-slate-500">
          DEV -{' '}
          <a className="underline" href="https://rodrigo.run" target="_blank">
            rodrigo.run
          </a>{' '}
          © 2026 TopBus OS - Todos os direitos reservados
        </footer>
      </div>
    </main>
  );
}
