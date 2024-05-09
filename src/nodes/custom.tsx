import  { memo } from 'react';
import { Handle, Position } from 'reactflow';

interface Data {
    emoji:string;
    name:string;
    job:string;
}

interface MainData {
    data:Data
}
const box = {width:120, height:42};
const lineH10 = {lineHeight:'10px'};
const fSize8 = {fontSize:'8px'};
const fSize12 = {fontSize:'9px'}
export function CustomNode({ data }:MainData) {
  return (
    <div style={box} className="px-2 py-2 shadow-md rounded-md bg-white border-2 border-stone-400">
      <div className="flex">
        <div className="rounded-full w-6 h-6 flex justify-center items-center bg-gray-100">
          {data.emoji}
        </div>
        <div className="ml-2">
          <div className="font-bold" style={{...lineH10, ...fSize12}}>{data.name}</div>
          <div className="text-gray-500 text-xs"  style={{...lineH10,...fSize8}}>{data.job}</div>
        </div>
      </div>

      <Handle type="target" position={Position.Top} className="w-16 !bg-teal-500" />
      <Handle type="source" position={Position.Bottom} className="w-16 !bg-teal-500" />
    </div>
  );
}

export default memo(CustomNode);