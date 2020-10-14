import { PokemonDetailComponent } from './features/pokemon-detail/pokemon-detail.component';
import { HomeComponent } from './features/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '',   component: HomeComponent, pathMatch: 'full' },
  { path: 'pokemon/:id',   component: PokemonDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
