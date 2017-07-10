import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule} from '@angular/router';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FormService } from './services/form.service';
import { AuthGuard } from './guard/auth.guard';
import {routes} from './routes';
import { UploadComponent } from './components/upload/upload.component';
import { CodeformatterDirective } from './directives/codeformatter.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    UploadComponent,
    CodeformatterDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,   
    FlashMessagesModule,  
    ReactiveFormsModule,
    RouterModule.forRoot(routes)  
  ],
  providers: [FormService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
