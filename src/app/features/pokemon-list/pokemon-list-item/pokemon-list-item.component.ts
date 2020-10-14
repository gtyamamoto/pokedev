import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../../model/pokemon.model';

@Component({
  selector: 'app-pokemon-list-item',
  templateUrl: './pokemon-list-item.component.html',
  styleUrls: ['./pokemon-list-item.component.scss']
})
export class PokemonListItemComponent implements OnInit {

  @Input() pokemon : Pokemon;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onNavigateToPokemon() {
    this.router.navigate(['/pokemon',this.pokemon.id]);
  }

}
