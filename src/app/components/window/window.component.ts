import { Component } from '@angular/core';

@Component({
  selector: 'app-window',
  standalone: true,
  imports: [],
  templateUrl: './window.component.html',
  styleUrl: './window.component.css'
})
export class WindowComponent {
 isOpen: boolean = false;
  toggleWindow() {
    this.isOpen = !this.isOpen;
    console.log(`La ventana está ahora ${this.isOpen ? 'abierta' :
'cerrada'}.`);
  }


}
