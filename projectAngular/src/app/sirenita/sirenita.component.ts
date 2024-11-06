import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sirenita',
  templateUrl: './sirenita.component.html',
  styleUrls: ['./sirenita.component.css']
})
export class SirenitaComponent {

  title = 'sirenita';


  constructor(private router: Router) {}

  navegarInicio() {
    this.router.navigate(['/inicio']); // Navega a la página de Cenicienta
  }
    
  navegarCenicienta() {
    this.router.navigate(['/cenicienta']); // Navega a la página de Cenicienta
  }
}
