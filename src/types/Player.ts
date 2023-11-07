export interface Player {
  id: number;
  name: string;
  symbol: Symbol;
}

export enum Symbol {
  X = 'X',
  O = 'O',
  Y = 'Y',
}
