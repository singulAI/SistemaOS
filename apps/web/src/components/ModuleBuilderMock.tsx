import { useMemo } from 'react';

const fieldTypes = [
  'texto curto','texto longo','número','valor','data','data/hora','veículo','motorista','prestador','linha','rota','foto','assinatura','upload de arquivo','status','observação',
];

export function ModuleBuilderMock() {
  const preview = useMemo(
    () => [
      { label: 'veículo', required: true },
      { label: 'prestador', required: true },
      { label: 'serviço realizado', required: true },
      { label: 'fotos antes', required: true },
      { label: 'fotos depois', required: true },
      { label: 'assinatura', required: true },
    ],
    [],
  );

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-semibold">Criador de Módulos (MASTER)</h3>
      <p className="text-sm text-slate-500">Estrutura simulada com publicação de módulo dinâmico.</p>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        <input className="rounded-xl border p-2" placeholder="Nome do módulo" defaultValue="Serviço Terceirizado" />
        <select className="rounded-xl border p-2"><option>Gestor Manutenção</option></select>
      </div>
      <div className="mt-4">
        <p className="text-sm font-medium">Tipos de campo disponíveis</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {fieldTypes.map((f) => <span key={f} className="rounded-full bg-slate-100 px-3 py-1 text-xs">{f}</span>)}
        </div>
      </div>
      <div className="mt-4 rounded-xl bg-slate-50 p-3">
        <p className="text-sm font-medium">Prévia do schema publicado</p>
        <ul className="mt-2 space-y-1 text-sm">
          {preview.map((p) => <li key={p.label}>• {p.label} {p.required ? '(obrigatório)' : ''}</li>)}
        </ul>
      </div>
    </section>
  );
}
