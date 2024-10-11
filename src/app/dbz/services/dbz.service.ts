import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
providedIn: 'root'
})
export class DbzService {

    public characters: Character [] = 
    [
        {
            id: uuid(),
            name: 'Krillin',
            power: 1000
        },
        {
            id: uuid(),
            name: 'Goku',
            power: 9500
        },
        {
            id: uuid(),
            name: 'Vegeta',
            power: 7500
        }
    ];

    // <!-- @OUTPUT -->
    addCharacter(character1: Character): void{
       
        const newCharacter: Character ={id: uuid(), ...character1}


        //AGREGAMOS UN HEROE AL LISTADO (AL FINAL EL ARREGLO CON push)
        // unshift AL INICIO DEL ARREGLO
        this.characters.push(newCharacter);
    }

    //El splice elimina elementos en un arreglo
    //onDeleteCharacter( index: number ){
    //this.characters.splice(index,1);
    deletedCharacterById( id: string ){
        this.characters = this.characters.filter(character => character.id !== id);
    } 
}

//INTENTAR QUE LA APLICACION FUNCIONE NUEVAMENTE 