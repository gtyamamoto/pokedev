import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Pokemon } from '../model/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonListService {
  private pokemonListSubject: BehaviorSubject<Array<Pokemon>> = new BehaviorSubject([]);
  public pokemonList$ = this.pokemonListSubject.asObservable();
  constructor() { }
  public updatePokemonList (response: any) {
    const list = this.parsePokemonList(response);
    this.pokemonListSubject.next(list);
  }

  public parsePokemonList (response: any) : Array<Pokemon>{
    return response.map(card=>({
      id:card.id,
      name:card.name,
      imageUrl:card.imageUrl,
      types:card.types,
    })).sort((a, b) => a.name.localeCompare(b.name))
  }
}
