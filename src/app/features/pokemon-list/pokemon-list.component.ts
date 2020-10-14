import { LoaderService } from './../../core/loader.service';
import { PokemonListService } from './pokemon-list.service';
import { PokemonRepository } from './../../repository/pokemon.repository';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { empty, Subject } from 'rxjs';
import {expand, first, reduce, tap} from 'rxjs/operators';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonListComponent implements OnInit {
  isLoading: Subject<boolean> = this.loaderService.isLoading;
  public pokemons$ = this.pokemonListService.pokemonList$;
  p = 1;
  pokemonsForm = new FormGroup({
    name: new FormControl(''),
  });
  constructor(private pokemonRepository: PokemonRepository,
    private pokemonListService: PokemonListService,private loaderService: LoaderService) { }

  ngOnInit(): void {
   
    this.pokemonRepository.getAllPokemons()
    .pipe(
      tap(()=> this.loaderService.show()),
      first(),
      expand((data:any, i) => {
          return data.cards && data.cards.length ? this.pokemonRepository.getAllPokemons(i+2) : empty();
      }),
      reduce((acc, data:any) => {
          return acc.concat(data.cards);
        }, []),
    )
    .subscribe(response=>{
      console.log(response);
      this.loaderService.hide();
      this.pokemonListService.updatePokemonList(response);
    });
  }

  onSubmit() {
    this.loaderService.show()
    this.pokemonRepository.getPokemonsByNmae(1,this.pokemonsForm.get('name').value)
    .pipe(
      first(),
      expand((data:any, i) => {
          return data.cards && data.cards.length ? this.pokemonRepository.getPokemonsByNmae(i+2,this.pokemonsForm.get('name').value) : empty();
      }),
      reduce((acc, data:any) => {
          return acc.concat(data.cards);
        }, []),
    )
    .subscribe(response=>{
      this.loaderService.hide();
      this.pokemonListService.updatePokemonList(response);
    });
  }


}
