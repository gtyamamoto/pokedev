export class Pokemon {
  id: string;
  name: string;
  imageUrl?: string;
  imageUrlHiRes: string;
  types: Array<string>;
  attacks?: Array<IAttack>;
  weaknesses?: Array<IWeakness>;
  resistances?: Array<IResistance>;
}

export interface IAttack {
  cost: string[];
  name: string;
  text: string;
  damage: string;
}

export interface IResistance {
  type: string;
  value: string;
}

export interface IWeakness {
  type: string;
  value: string;
}
