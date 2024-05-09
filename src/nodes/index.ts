import type { Node, NodeTypes } from "reactflow";
import { PositionLoggerNode } from "./PositionLoggerNode";
import { CustomNode } from "./custom";
import { FAMILY_TREE } from "./node-data";
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


export const nodeTypes = {
  "position-logger": PositionLoggerNode,
  "custom": CustomNode,
  // Add any of your custom nodes here!
} satisfies NodeTypes;
