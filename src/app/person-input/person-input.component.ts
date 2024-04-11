import { Component, Output,EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrl: './person-input.component.css'
})
export class PersonInputComponent {
  @Output() personCreate = new EventEmitter<string>();
  enteredPersonName = '';
 
  onCreatePerson(personName:string){
    this.personCreate.emit(this.enteredPersonName)
   alert("Created Person "+this.enteredPersonName)
  }
}
