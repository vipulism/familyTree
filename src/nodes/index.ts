import type { Node, NodeTypes } from "reactflow";
import { PositionLoggerNode } from "./PositionLoggerNode";
import { CustomNode } from "./custom";
import { FAMILY_TREE, FAMILY_TREE2 } from "./node-data";
import { createNodes } from "./utills";


export const initialNodes = [
  {
    id: '4',
    data: { label: 'Group B' },
    position: { x: -10, y: 280 },
    className: 'light',
    style: { backgroundColor: 'rgba(255, 0, 0, 0.2)', width: 350, height: 150 },
    type: 'group',
  },
  ...FAMILY_TREE.map((p) => createNodes(p).flat()).flat(Infinity)] as Node[];

const old = [
  {
    id: "a",
    position: { x: -18.52233676975945, y: -454.63058419243987 },
    data: { label: "JWALA NATH" },
    type: "input",
  },
  {
    id: "aa",
    position: { x: -17.596219931271463, y: -378.14776632302403 },
    data: { label: "Ghasi Ram", name: 'Ghasi Ram', job: '', emoji: '🤴' },
    type:'custom'
  },
  {
    id: "aaa",
    position: { x: -576.9707903780069, y: -206.52405498281786 },
    data: { label: "Buddh Ram" },
  },
  {
    id:'gp1',
    position: { x: -17.596219931271463, y: -203.7457044673539 },
    type:'group',
    data:{ label:'group A', backgroundColor: 'rgba(255, 0, 0, 0.2)', width: 200, height: 200 }
  },
  {
    id: "aab",
    position: { x: -17.596219931271463, y: -203.7457044673539 },
    data: { label: "Pyare Lal" },
  },
  {
    id: "aac",
    position: { x: 492.6941580756014, y: -199.1151202749141 },
    data: { label: "Babu Ram" },
  },
  {
    id: "aab1",
    position: { x: -191.70618556701035, y: -203.74570446735393 },
    data: { label: "Munni" },
  },
  {
    id: "aab2",
    position: { x: 167.62714776632305, y: -199.11512027491406 },
    data: { label: "Tara" },
  },
  {
    id: "aab1a",
    position: { x: -411.19587628865975, y: 38.89690721649479 },
    data: { label: "Shyam Sundar" },
  },
  {
    id: "aab1b",
    position: { x: -237.085910652921, y: 40.74914089347078 },
    data: { label: "Prem Chander" },
  },
  {
    id: "aab1c",
    position: { x: -597.3453608247423, y: 38.89690721649485 },
    data: { label: "Shanti" },
  },
  {
    id: "aab1d",
    position: { x: -237.085910652921, y: 40.74914089347078 },
    data: { label: "Ratan Lal" },
  },

  // {
  //   id: "b",
  //   type: "position-logger",
  //   position: { x: -100, y: 100 },
  //   data: { label: "drag me!" },
  // },
  // { id: "c",
  //   position: { x: 100, y: 100 },
  //   data: { label: "your ideas" }
  // },
  // {
  //   id: "d",
  //   position: { x: 0, y: 200 },
  //   data: { label: "with React Flow" },
  // },
  // {
  //   id: "e",
  //   type:'Vipul',
  //   position: { x: 100, y: 350 },
  //   data: { label: "Vipul" },
  // },
] satisfies Node[];

export const nodeTypes = {
  "position-logger": PositionLoggerNode,
  "custom": CustomNode,
  // Add any of your custom nodes here!
} satisfies NodeTypes;
