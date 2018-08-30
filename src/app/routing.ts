import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { RegisterComponent } from './register/register.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './footer/home/home.component';
export const AppRoutes: Routes = [
    { path: '', component: DashbordComponent },
    { path: 'login', component: LoginComponent },
    { path: 'dashbord', component: DashbordComponent},
    { path: 'home', component: HomeComponent},
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
