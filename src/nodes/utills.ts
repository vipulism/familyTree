import { ConnectionLineType, Edge, Node, XYPosition } from "reactflow";
import { FAMILY_TREE } from "./node-data";

function camelize(str: string): string {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, "");
}

type StringValues<T> = {
  [K in keyof T]: T[K] extends string ? T[K] : never;
}[keyof T];

type NumberValues<T> = {
  [K in keyof T]: T[K] extends number ? T[K] : never;
}[keyof T];

/**
 * Usage : type EnumValues = EnumAsUnion<typeof anEnum>
 */
type EnumAsUnion<T> = `${StringValues<T>}` | NumberValues<T>;

export enum PersonTypes {
  CUSTOM = "custom",
  INPUT = "input",
}

type PERSON_TYPE = EnumAsUnion<typeof PersonTypes>;

export interface PERSON {
  name: string;
  id?: string;
  type?: PERSON_TYPE;
  children: PERSON[];
  wife?: [];
  data?:unknown;
  position?:Partial<XYPosition>
}

 

export function createNodes(person: PERSON, arr: Node[] = [], parentPerson?:Node): Node[] {
  const parent: Node = {
    id: person.id || camelize(person.name),
    type: person.type || PersonTypes.CUSTOM,
    data: { name: person.name, ...(person?.data || {}) },
    position: { 
      x: 100,
      y: parentPerson ? (parentPerson?.position?.y || 0) + 100 : 100,
      ...person?.position,
    },
  };

  arr.push(parent);

  if (person?.children?.length) {
    return [parent, ...person.children.map((per) => createNodes(per, arr, parent)).flat(Infinity) as Node[]];
  }

  return [parent];
}

 

export function createEdges(mainPerson:PERSON, parent?:PERSON):Edge[] {

    const mainArr:Edge[] = [];

    if(parent){
        mainArr.push( {
            id:`${camelize(parent.name)}->${camelize(mainPerson.name)}`,
            source:camelize(parent.name),
            target:camelize(mainPerson.name),
            animated:false,
            type:ConnectionLineType.Bezier,
            

        })
    }
       mainPerson.children.forEach(child => {

        if(child.children.length){

             mainArr.push(...(child.children.map(c => createEdges(c, child)).flat(Infinity) as Edge[]))
        }

        mainArr.push( {
            id:`${camelize(mainPerson.name)}->${camelize(child.name)}`,
            source:camelize(mainPerson.name),
            target:camelize(child.name),
            animated:false,
            type:ConnectionLineType.Bezier,
            
        })
      })

      return mainArr
}
