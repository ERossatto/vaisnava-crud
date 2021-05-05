export interface IPokemon {
  name: string;
  atk: number;
  def: number;
  element: string;
}

export interface IItemToUpdate {
  index: number;
  item: IPokemon;
}
