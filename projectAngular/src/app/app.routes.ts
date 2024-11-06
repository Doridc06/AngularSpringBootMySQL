import { Routes } from '@angular/router';
import { CenicientaComponent } from './cenicienta/cenicienta.component';
import { SirenitaComponent } from './sirenita/sirenita.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'cenicienta', component: CenicientaComponent },
  { path: 'sirenita', component: SirenitaComponent },
  { path: 'inicio', component: HomeComponent },
  { path: '**', redirectTo: '' }
];

