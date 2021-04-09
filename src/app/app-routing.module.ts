import { PrestasComponent } from './componentes/prestas/prestas.component';
import { GraficasComponent } from './componentes/graficas/graficas.component';
import { AguaComponent } from './componentes/agua/agua.component';
import { CroquetasComponent } from './componentes/croquetas/croquetas.component';
import { ErrorComponent } from './componentes/rutaNoValida/error/error.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/auth/login/login.component';
import { RegisterComponent } from './componentes/auth/register/register.component';
import { HomeComponent } from './componentes/main/home/home.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'croquetas', component: CroquetasComponent},
  {path:'agua', component: AguaComponent},
  {path:'prestas', component: PrestasComponent},
  {path:'graficas', component: GraficasComponent},
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
