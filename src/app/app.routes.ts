import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';

export const routes: Routes = [
    {path:'', component:LoginComponent},
    {path:'register', component:RegisterComponent},
    {path:'home', component: DashboardComponent}

];
