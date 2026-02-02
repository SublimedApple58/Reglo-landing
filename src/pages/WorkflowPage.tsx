import { useMemo } from 'react';
import { CheckCircle, ShieldCheck, UserX } from 'lucide-react';
import ReactFlow, { Background, MiniMap, useEdgesState, useNodesState } from 'reactflow';
import 'reactflow/dist/style.css';

export default function WorkflowPage() {
  const baseNodeStyle = {
    borderRadius: 16,
    border: '1px solid var(--color-border)',
    color: 'var(--color-ink)',
    fontSize: 12,
    fontWeight: 600,
    padding: 12,
    width: 210,
    textAlign: 'left' as const,
    whiteSpace: 'pre-line' as const,
  };

  const initialNodes = useMemo(
    () => [
      {
        id: 'trigger',
        data: { label: 'Trigger\nArrivo documento cliente' },
        position: { x: 0, y: 140 },
        style: {
          ...baseNodeStyle,
          background: 'rgba(169, 217, 209, 0.6)',
          boxShadow: '0 16px 28px rgba(50, 78, 122, 0.16)',
        },
      },
      {
        id: 'step-1',
        data: { label: 'Azione 1\nVerifica e protocolla' },
        position: { x: 240, y: 40 },
        style: {
          ...baseNodeStyle,
          background: 'rgba(50, 78, 122, 0.12)',
          boxShadow: '0 16px 28px rgba(50, 78, 122, 0.16)',
        },
      },
      {
        id: 'step-2',
        data: { label: 'Azione 2\nRegistrazione contabile' },
        position: { x: 520, y: 210 },
        style: {
          ...baseNodeStyle,
          background: 'rgba(169, 217, 209, 0.45)',
          boxShadow: '0 16px 28px rgba(50, 78, 122, 0.16)',
        },
      },
      {
        id: 'step-3',
        data: { label: 'Azione 3\nGenera F24/adempimenti' },
        position: { x: 800, y: 70 },
        style: {
          ...baseNodeStyle,
          background: 'rgba(50, 78, 122, 0.18)',
          boxShadow: '0 16px 28px rgba(50, 78, 122, 0.16)',
        },
      },
      {
        id: 'step-4',
        data: { label: 'Azione 4\nCondivisione e approvazione' },
        position: { x: 1080, y: 230 },
        style: {
          ...baseNodeStyle,
          background: 'rgba(169, 217, 209, 0.5)',
          boxShadow: '0 16px 28px rgba(50, 78, 122, 0.16)',
        },
      },
      {
        id: 'step-5',
        data: { label: 'Azione 5\nInvio telematico' },
        position: { x: 1360, y: 90 },
        style: {
          ...baseNodeStyle,
          background: 'rgba(50, 78, 122, 0.12)',
          boxShadow: '0 16px 28px rgba(50, 78, 122, 0.16)',
        },
      },
      {
        id: 'output',
        data: { label: 'Output\nArchiviazione e report' },
        position: { x: 1640, y: 200 },
        style: {
          ...baseNodeStyle,
          background: 'rgba(169, 217, 209, 0.7)',
          boxShadow: '0 16px 28px rgba(50, 78, 122, 0.16)',
        },
      },
    ],
    [baseNodeStyle]
  );

  const initialEdges = useMemo(
    () => [
      {
        id: 'e1',
        source: 'trigger',
        target: 'step-1',
        type: 'bezier',
        animated: true,
        style: { stroke: 'rgba(50, 78, 122, 0.55)', strokeWidth: 2 },
      },
      {
        id: 'e2',
        source: 'step-1',
        target: 'step-2',
        type: 'bezier',
        animated: true,
        style: { stroke: 'rgba(50, 78, 122, 0.45)', strokeWidth: 2 },
      },
      {
        id: 'e3',
        source: 'step-2',
        target: 'step-3',
        type: 'bezier',
        animated: true,
        style: { stroke: 'rgba(50, 78, 122, 0.55)', strokeWidth: 2 },
      },
      {
        id: 'e4',
        source: 'step-3',
        target: 'step-4',
        type: 'bezier',
        animated: true,
        style: { stroke: 'rgba(50, 78, 122, 0.45)', strokeWidth: 2 },
      },
      {
        id: 'e5',
        source: 'step-4',
        target: 'step-5',
        type: 'bezier',
        animated: true,
        style: { stroke: 'rgba(50, 78, 122, 0.55)', strokeWidth: 2 },
      },
      {
        id: 'e6',
        source: 'step-5',
        target: 'output',
        type: 'bezier',
        animated: true,
        style: { stroke: 'rgba(50, 78, 122, 0.45)', strokeWidth: 2 },
      },
    ],
    []
  );

  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div className="min-h-screen">
      <div className="max-w-[1536px] mx-auto px-6 py-12">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--color-ink-muted)]">
            Workflow
          </p>
          <h1 className="text-3xl sm:text-4xl font-semibold mt-3 mb-3 text-[color:var(--color-ink)]">
            Workflow in azione
          </h1>
          <p className="text-base text-[color:var(--color-ink-muted)]">
            Visualizza l'automazione end-to-end direttamente su canvas.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.35fr_0.65fr] gap-6">
          <div className="glass-panel rounded-3xl p-3 sm:p-4">
            <div className="h-[420px] rounded-2xl overflow-hidden bg-white">
              <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                fitView
                fitViewOptions={{ padding: 0.22 }}
                nodesDraggable
                nodesConnectable={false}
                zoomOnScroll={false}
                panOnScroll
                preventScrolling={false}
              >
                <Background color="rgba(50, 78, 122, 0.12)" gap={24} />
                <MiniMap zoomable pannable nodeColor="rgba(50, 78, 122, 0.35)" />
              </ReactFlow>
            </div>
          </div>

          <div className="glass-panel rounded-3xl px-6 py-6 sm:px-8 sm:py-8">
            <div className="flex flex-col gap-5">
              <div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-[color:var(--color-ink)]">
                  Risultato
                </h3>
                <p className="text-sm sm:text-base text-[color:var(--color-ink-muted)] mt-2">
                  Automazione end-to-end completata in tempo reale.
                </p>
              </div>

              <div className="h-px w-full bg-[color:var(--color-border)] opacity-40" />

              <div>
                <div className="flex flex-wrap items-end gap-3">
                  <span className="text-4xl sm:text-5xl font-semibold text-[color:var(--color-ink)]">30 min</span>
                  <span className="text-2xl sm:text-3xl text-[color:var(--color-ink-muted)]">&rarr;</span>
                  <span className="text-4xl sm:text-5xl font-semibold text-[color:var(--color-ink)]">2 s</span>
                </div>
                <p className="text-sm text-[color:var(--color-ink-muted)] mt-2">Tempo di completamento</p>
              </div>

              <div className="h-px w-full bg-[color:var(--color-border)] opacity-40" />

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--color-accent)] text-[color:var(--color-ink)]">
                    <CheckCircle className="h-4 w-4" />
                  </span>
                  <p className="text-sm sm:text-base text-[color:var(--color-ink)]">
                    <span className="font-semibold">5</span> &rarr; <span className="font-semibold">0</span> passaggi manuali
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--color-accent)] text-[color:var(--color-ink)]">
                    <ShieldCheck className="h-4 w-4" />
                  </span>
                  <p className="text-sm sm:text-base text-[color:var(--color-ink)]">
                    <span className="font-semibold">0</span> errori operativi
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--color-accent)] text-[color:var(--color-ink)]">
                    <UserX className="h-4 w-4" />
                  </span>
                  <p className="text-sm sm:text-base text-[color:var(--color-ink)]">
                    <span className="font-semibold">0</span> intervento umano richiesto
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[color:var(--color-ink-muted)]">
                Valori medi su un flusso standard di gestione documenti.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
