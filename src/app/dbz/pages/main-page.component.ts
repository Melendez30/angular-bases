import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class DBZComponent{
    
    constructor( private dbzService: DbzService)
    {

    }

    get characters(): Character[]{
        return [...this.dbzService.characters];
    }
    
    onDeletedCharacter(id: string): void{
        this.dbzService.deletedCharacterById(id)
    }
    
    onNewCharacter( characters: Character): void{
        this.dbzService.addCharacter(characters);
    }
}


