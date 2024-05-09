import {PERSON, PersonTypes } from './utills';

export const FAMILY_TREE: PERSON[] = [
  {
    name: "Jwala Nath",
    type: PersonTypes.CUSTOM,
    children: [
      {
        name: "Ghasi Ram",
        children: [
          {
            name: "Buddh Ram",
            children:[],
            position:{
              x:400
            }
          },
          {
            name: "Pyare Lal",
            children: [
              {
                name: "Prem Chand",
                data:{ job:'Acharye'},
                position:{
                  x:-100,
                  y:440
                },
                children:[
                  {
                    name:"Ravi Shanker",
                    children:[
                      {
                        name:"Vipul Sharma",
                        children:[]
                      }
                    ]
                  },
                  {
                    name:"Om Prakash",
                    children:[],
                    position:{
                      x:-150
                    }
                  }
                ]
              },
            ],
          },
          {
            name: "Babu Ram",
            children:[],
            position:{
              x:-200
            }
          },
        ],
      },
    ],
  },
]; 

export const FAMILY_TREE2: PERSON[] = [
    {
      name: "Jwala Nath",
      type: PersonTypes.CUSTOM,
      children: [
        {
          name: "Ghasi Ram",
          children:[]
        },
      ],
    },
  ]; 