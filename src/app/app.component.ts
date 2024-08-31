import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HuellaHidricaComponent } from "./huella-hidrica/huella-hidrica.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HuellaHidricaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Huella Hídrica';
}
