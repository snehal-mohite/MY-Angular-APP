import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
onPersonCreated(name:string) {
this.persons.push(name)
}
  title = 'MY-Angular-APP';
  persons:string[]=['Smyth','John','Roy'];
}
