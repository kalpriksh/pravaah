import { useCallback, useState } from "react";
import {
  Background,
  Controls,
  MiniMap,
  ReactFlow,
  addEdge,
  useNodesState,
  useEdgesState,
  type OnConnect,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

import { initialNodes, nodeTypes, type CustomNodeType } from "./nodes";
import { initialEdges, edgeTypes, type CustomEdgeType } from "./edges";

import  FlowEditorComponent  from "./FlowEditorComponent"

export default function App() {
  const [nodes, , onNodesChange] = useNodesState<CustomNodeType>(initialNodes);
  
  const [edges, setEdges, onEdgesChange] =
    useEdgesState<CustomEdgeType>(initialEdges);
  
  const onConnect: OnConnect = useCallback((connection) => setEdges((edges) => addEdge(connection, edges)),[setEdges]);

  // node create button is pressed
  const onCreateNode = () => {
    console.log('reached');
  }

  return (
    <div className="grid grid-cols-5">
      <div>
        <FlowEditorComponent onCreateNode={onCreateNode}></FlowEditorComponent>
      </div>
      <div className="h-screen col-span-4">
        <ReactFlow<CustomNodeType, CustomEdgeType>
          nodes={nodes}
          nodeTypes={nodeTypes}
          onNodesChange={onNodesChange}
          edges={edges}
          edgeTypes={edgeTypes}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
          // style={{
          //   backgroundColor: '#1e293b', // Tailwind's slate-800 for dark background
          //   color: '#f8fafc',            // Tailwind's slate-100 for text
          // }}
        >
          <Background color="#334155" gap={16} />
          <MiniMap nodeColor={() => '#f8fafc'} />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
}
