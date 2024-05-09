import type { Edge, EdgeTypes } from "reactflow";
import { FAMILY_TREE } from "../nodes/node-data";
import { createEdges } from "../nodes/utills";

export const initialEdges = FAMILY_TREE.map((p) => createEdges(p)).flat(Infinity) as Edge[]; 


export const edgeTypes = {
  // Add your custom edge types here!
} satisfies EdgeTypes;
