import { Component } from '@angular/core';

@Component({
  selector: 'app-menssage',
  standalone: true,
  imports: [],
  templateUrl: './menssage.component.html',
  styleUrl: './menssage.component.css'
})

export class MenssageComponent { welcomeMessage: string = 'Bienvenido a tu perfil de Angular!';

}