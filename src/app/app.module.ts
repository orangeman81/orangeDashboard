import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// child modules
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
// services
import { Api } from './services/api.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { ModaeService } from './services/modae.service';
import { UploadsService } from './services/uploads.service';
// root components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    Api,
    AuthService,
    AuthGuard,
    ModaeService,
    UploadsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
