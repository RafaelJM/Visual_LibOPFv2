// src/ts/GraphViwer.tsx
import React, { useEffect, useRef } from 'react';
import '../css/graph-viwer.css';
// Não é necessário importar o worker diretamente

const GraphViwer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sigmaInstanceRef = useRef<Sigma | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      // Criar um grafo usando Graphology
      const graph = new Graph();

      // Adicionar nós
      graph.addNode('n0', { label: 'Node 0', x: 0, y: 0, size: 10, color: '#ff0000' });
      graph.addNode('n1', { label: 'Node 1', x: 3, y: 1, size: 10, color: '#00ff00' });
      graph.addNode('n2', { label: 'Node 2', x: 1, y: 3, size: 10, color: '#0000ff' });
      graph.addNode('n3', { label: 'Node 3', x: 4, y: 3, size: 10, color: '#ffff00' });

      // Adicionar arestas
      graph.addEdge('n0', 'n1');
      graph.addEdge('n1', 'n2');
      graph.addEdge('n2', 'n3');
      graph.addEdge('n3', 'n0');

      // Inicializar o layout ForceAtlas2
      forceAtlas2.assign(graph, { iterations: 100 });

      // Criar uma instância do Sigma
      sigmaInstanceRef.current = new Sigma(graph, containerRef.current);

      // Opcional: Configurar interações ou personalizações adicionais aqui

      // Cleanup ao desmontar o componente
      return () => {
        if (sigmaInstanceRef.current) {
          sigmaInstanceRef.current.kill();
          sigmaInstanceRef.current = null;
        }
      };
    }
  }, []);

  return (
    <div id="graph-viwer" ref={containerRef} >
      {/* O Sigma.js irá renderizar o grafo dentro deste div */}
    </div>
  );
};

export default GraphViwer;
