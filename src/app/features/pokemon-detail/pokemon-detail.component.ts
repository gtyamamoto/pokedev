import { PokemonRepository } from './../../repository/pokemon.repository';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Pokemon } from '../model/pokemon.model';
@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  constructor(private pokemonRepository: PokemonRepository,private route:ActivatedRoute) { }
  pokemon: Pokemon;
  ngOnInit(): void {
    this.pokemonRepository.getPokemonById(this.route.snapshot.params['id']
    ).subscribe((resp:any)=>{
      this.pokemon = resp.card;
    });
  }

}
