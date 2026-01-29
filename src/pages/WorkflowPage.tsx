import { useMemo } from 'react';
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
        position: { x: 0, y: 120 },
        style: {
          ...baseNodeStyle,
          background: 'rgba(169, 217, 209, 0.6)',
          boxShadow: '0 16px 28px rgba(50, 78, 122, 0.16)',
        },
      },
      {
        id: 'step-1',
        data: { label: 'Azione 1\nVerifica e protocolla' },
        position: { x: 260, y: 120 },
        style: {
          ...baseNodeStyle,
          background: 'rgba(50, 78, 122, 0.12)',
          boxShadow: '0 16px 28px rgba(50, 78, 122, 0.16)',
        },
      },
      {
        id: 'step-2',
        data: { label: 'Azione 2\nRegistrazione contabile' },
        position: { x: 520, y: 120 },
        style: {
          ...baseNodeStyle,
          background: 'rgba(169, 217, 209, 0.45)',
          boxShadow: '0 16px 28px rgba(50, 78, 122, 0.16)',
        },
      },
      {
        id: 'step-3',
        data: { label: 'Azione 3\nGenera F24/adempimenti' },
        position: { x: 780, y: 120 },
        style: {
          ...baseNodeStyle,
          background: 'rgba(50, 78, 122, 0.18)',
          boxShadow: '0 16px 28px rgba(50, 78, 122, 0.16)',
        },
      },
      {
        id: 'step-4',
        data: { label: 'Azione 4\nCondivisione e approvazione' },
        position: { x: 1040, y: 120 },
        style: {
          ...baseNodeStyle,
          background: 'rgba(169, 217, 209, 0.5)',
          boxShadow: '0 16px 28px rgba(50, 78, 122, 0.16)',
        },
      },
      {
        id: 'step-5',
        data: { label: 'Azione 5\nInvio telematico' },
        position: { x: 1300, y: 120 },
        style: {
          ...baseNodeStyle,
          background: 'rgba(50, 78, 122, 0.12)',
          boxShadow: '0 16px 28px rgba(50, 78, 122, 0.16)',
        },
      },
      {
        id: 'output',
        data: { label: 'Output\nArchiviazione e report' },
        position: { x: 1560, y: 120 },
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

        <div className="grid lg:grid-cols-[1.5fr_0.5fr] gap-6">
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

          <div className="glass-panel rounded-3xl px-6 py-6 sm:px-8 sm:py-7 flex items-center">
            <p className="text-sm sm:text-base text-[color:var(--color-ink-muted)] text-center lg:text-left">
              <span className="font-semibold text-[color:var(--color-ink)]">Risultato:</span> un processo che richiedeva 30 minuti e 5 passaggi manuali
              ora viene completato in <span className="font-semibold text-[color:var(--color-ink)]">meno di 2 secondi</span>, senza errori e senza intervento umano.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
