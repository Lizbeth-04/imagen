import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WindowComponent } from './components/window/window.component';
import { MenssageComponent } from './components/menssage/menssage.component';
import { HeadComponent } from './components/head/head.component';
import { TrunkComponent } from './components/trunk/trunk.component';
import { LegsComponent } from './components/legs/legs.component';
import { FeetComponent } from './components/feet/feet.component';
import { ImageWendigoComponent } from './components/image-wendigo/image-wendigo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,WindowComponent,MenssageComponent,ImageWendigoComponent,HeadComponent,TrunkComponent,LegsComponent,FeetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'imagen';
}
