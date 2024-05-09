import type { Edge, EdgeTypes } from "reactflow";
import { FAMILY_TREE } from "../nodes/node-data";
import { createEdges } from "../nodes/utills";

export const initialEdges = FAMILY_TREE.map((p) => createEdges(p)).flat(Infinity) as Edge[]; 

const old = [
  { id: "a->aa", source: "a", target: "aa", animated: true },
  { id: "aa->aaa", source: "aa", target: "aaa", animated: false },
  { id: "aa->aab", source: "aa", target: "aab", animated: true },
  { id: "aa->aac", source: "aa", target: "aac", animated: false },
  
  { id: "aab->aab1a", source: "aab", target: "aab1a" },
  { id: "aab1->aab1a", source: "aab1", target: "aab1a" },

  { id: "aab->aab1b", source: "aab", target: "aab1b", animated:true },
  { id: "aab1->aab1b", source: "aab1", target: "aab1b", animated:true },

  { id: "aab->aab1c", source: "aab", target: "aab1c" },
  { id: "aab1->aab1c", source: "aab1", target: "aab1c" },

   { id: "aab->aab1d", source: "aab", target: "aab1d" },
  { id: "aab1->aab1d", source: "aab1", target: "aab1d" },
  
  // { id: "c->d", source: "c", target: "d", animated: true },
  // { id: "d->e", source: "e", target: "d", animated: true },
] satisfies Edge[];

export const edgeTypes = {
  // Add your custom edge types here!
} satisfies EdgeTypes;
