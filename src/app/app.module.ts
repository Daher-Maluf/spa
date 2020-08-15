import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Servicios
import { HeroesService } from './servicios/heroes.service';

//ROUTES
import {  APP_ROUTING  } from './app.routes';
// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/compartidos/navbar/navbar.component';
import { HomeComponent } from './componentes/home/home.component';
import { AboutComponent } from './componentes/about/about.component';
import { HeroesComponent } from './componentes/heroes/heroes.component';
import { compileNgModuleFromRender2 } from '@angular/compiler/src/render3/r3_module_compiler';
import { HeroeComponent } from './componentes/heroe/heroe.component';
import { BuscadorComponent } from './componentes/buscador/buscador.component';
import { TarjetaComponent } from './componentes/tarjeta/tarjeta.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    BuscadorComponent,
    TarjetaComponent,
   
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    HeroesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
