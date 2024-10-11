import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[] = 
  [
    {
      name: 'Trunks',
      power: 10
    }
  ];

  //onDelete= Index value: number  
  @Output()
  public onDeleteId: EventEmitter <string> = new EventEmitter();
  
  //METODO
  onDeleteCharacter(id?: string): void {
    this.onDeleteId.emit(id);
  }

}












//  onDelete(index: number):void
//  {
//   console.log({index});
//  }
  