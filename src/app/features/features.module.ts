import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PokemonListItemComponent } from './pokemon-list/pokemon-list-item/pokemon-list-item.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [SearchBarComponent,PokemonListComponent,PokemonListItemComponent, NavbarComponent],
  exports: [SearchBarComponent,PokemonListComponent,PokemonListItemComponent, NavbarComponent],
  imports: [
    CommonModule,
    NgxPaginationModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class FeaturesModule { }
