import type { OnConnect } from "reactflow";

import { useCallback, useState } from "react";
import {
  Background,
  Controls,
  MiniMap,
  ReactFlow,
  addEdge,
  useNodesState,
  useEdgesState,
  Panel,
} from "reactflow";

import "reactflow/dist/style.css";

import { initialNodes, nodeTypes } from "./nodes";
import { initialEdges, edgeTypes } from "./edges";



export default function App() {
  // console.log('nodes', initialNodes);
  // console.log('Edges', initialEdges);

  
  const [firstName, setFirstName] = useState('');
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect: OnConnect = useCallback(
    (connection) => setEdges((edges) => addEdge(connection, edges)),
    [setEdges]
  );

 

  const updateEdges =  useCallback((val:string) => {

    const parents:string[] = [];

    const newEdges = (name:string) =>  edges.map(edge => {

     if( edge.target.includes(name)){
      edge.animated = true;
      edge.style = {
        stroke:'#FF0072'
      }
      if(!parents.includes(edge.source)){
        parents.push(edge.source);
        newEdges(edge.source);
      }else {
        edge.animated = false;
        edge.style = {
          
        }
      }

     } 
      
      return edge
    });


    
    setEdges(() => newEdges(val));

  }, [setEdges, firstName])

  

  return (
    <ReactFlow
      nodes={nodes}
      nodeTypes={nodeTypes}
      onNodesChange={onNodesChange}
      edges={edges}
      edgeTypes={edgeTypes}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
    >
      <Background />
      <MiniMap />
      <Controls />
      <Panel position="top-right">
        <input type="text" value={firstName}  onChange={e => setFirstName(e.target.value)} />
        <button onClick={() => updateEdges(firstName)} >upadte</button>
      </Panel>
    </ReactFlow>
  );
}
