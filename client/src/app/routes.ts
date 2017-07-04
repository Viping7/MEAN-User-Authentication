
import { Routes} from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './guard/auth.guard';
export const routes:Routes=[
    {
        path:'',
        component:HomeComponent
        
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'register',
        component:RegisterComponent
    },
    {
        path:'profile',
        component:ProfileComponent,
        canActivate:[AuthGuard]
    },
    {
        path:'dashboard',
        component:DashboardComponent,
        canActivate:[AuthGuard]
    }
    
]