import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/auth/login/login.component';
import { RegisterComponent } from './componentes/auth/register/register.component';
import { HomeComponent } from './componentes/main/home/home.component';
import { ErrorComponent } from './componentes/rutaNoValida/error/error.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { CroquetasComponent } from './componentes/croquetas/croquetas.component';
import { AguaComponent } from './componentes/agua/agua.component';
import { GraficasComponent } from './componentes/graficas/graficas.component';
import { NgbModule, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { PrestasComponent } from './componentes/prestas/prestas.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthGuard } from './componentes/guards/auth.guard';
import { AuthInterceptorService } from './componentes/interceptors/auth-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ErrorComponent,
    NavbarComponent,
    FooterComponent,
    CroquetasComponent,
    AguaComponent,
    GraficasComponent,
    PrestasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [AuthGuard,
    {provide: HTTP_INTERCEPTORS, 
    useClass: AuthInterceptorService,
    multi:true}],
    bootstrap: [AppComponent]
})
export class AppModule { }
