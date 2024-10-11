import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-add-dbz-character',
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})
export class CharacterComponent {

  //[(ngModel)]
  public character: Character = {
    name: 'ABC',
    power: 0
  };

  //[(ngModel)]
  emitCharacter(): void{ 

    console.log(this.character)

    //ES DE OUTPUT
    if(this.character.name.length === 0) return;
    this.onNewCharacter.emit(this.character)

    //AL DAR AGREGAR AL BOTON LOS INPUTS SE LIMPIAN 
    this.character = {name: '', power: 0}
    
  }



  @Output()
  public onNewCharacter: EventEmitter <Character> = new EventEmitter();
  
  
}
