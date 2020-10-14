import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class PokemonRepository {
    constructor(private httpClient: HttpClient) {
     }

    public getAllPokemons(page:number = 1) : Observable<any> {
        return this.httpClient.get(`https://api.pokemontcg.io/v1/cards?pageSize=500&supertype=Pokémon&page=${page}`);
    }

    public getPokemonsByNmae(page:number = 1,name:string): Observable<any>{
        return this.httpClient.get(`https://api.pokemontcg.io/v1/cards?pageSize=500&supertype=Pokémon&page=${page}&name=${name}`);
    }

    public getPokemonById(id:string){
        return this.httpClient.get(`https://api.pokemontcg.io/v1/cards/${id}`);
    }
    
}