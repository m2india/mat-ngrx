import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { StudentsTableComponent } from './students-table/students-table.component';

export const appRoutes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: 'login', component: LoginComponent },
  // { path: 'dashboard', component: },
  { path: 'dashboard', component: StudentsTableComponent },
  // { path: '', component: AppComponent },
  // Add more routes here
];
