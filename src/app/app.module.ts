import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common'; 
 

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { InicioComponent } from './inicio/inicio.component';
import { ArticulosFamiliasComponent } from './articulos-familias/articulos-familias.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  imports:      [ BrowserModule, 
    FormsModule, 
    HttpClientModule,  
    RouterModule.forRoot([
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    { path: 'inicio', component: InicioComponent },
    { path: 'articulosfamilias', component: ArticulosFamiliasComponent }
  ]) ],
  declarations: [ AppComponent, HelloComponent, InicioComponent, ArticulosFamiliasComponent, MenuComponent ],
  providers: [  { provide: APP_BASE_HREF, useValue: "/" } ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
