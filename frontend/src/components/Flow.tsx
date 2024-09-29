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

import FlowEditorComponent from "./FlowEditorComponent";

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState<CustomNodeType>(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState<CustomEdgeType>(initialEdges);

  const onConnect: OnConnect = useCallback(
    (connection) => setEdges((edges) => addEdge(connection, edges)),
    [setEdges]
  );

  // node create button is pressed
  const onCreateNode = useCallback(() => {
    const newNode = {
      id: (nodes.length + 1).toString(), // Generate new unique id
      data: { label: `Node ${nodes.length + 1}` }, // Set label
      position: { x: Math.random() * 300, y: Math.random() * 300 }, // Random position
      type: 'default', // Default node type or custom type if needed
    };

    setNodes((prevNodes) => [...prevNodes, newNode]); // Add new node to the list
  }, [nodes, setNodes]);

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
        >
          <Background color="#334155" gap={16} />
          <MiniMap nodeColor={() => "#f8fafc"} />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
}
