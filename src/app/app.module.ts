import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProvider } from './app.routing';
import { FormsModule } from '@angular/forms';
import { ServiceComics } from './services/service.comics';
import { ServicePersonas } from './services/service.persona';
import { ServiceCoches } from './services/service.coches';
import { ServicePlantillas } from './services/service.plantillas';

import { AppComponent } from './app.component';
import { ListaproductosComponent } from './components/listaproductos/listaproductos.component';
import { DetalleproductoComponent } from './components/detalleproducto/detalleproducto.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { PadrecochesComponent } from './components/padrecoches/padrecoches.component';
import { HijococheComponent } from './components/hijocoche/hijocoche.component';
import { PadredeportesComponent } from './components/padredeportes/padredeportes.component';
import { HijodeporteComponent } from './components/hijodeporte/hijodeporte.component';
import { ComicsComponent } from './components/comics/comics.component';
import { ComicComponent } from './components/comic/comic.component';

import { HttpClientModule } from '@angular/common/http';
import { PersonasapiComponent } from './components/personasapi/personasapi.component';
import { CochesapiComponent } from './components/cochesapi/cochesapi.component';
import { PlantillafuncionesComponent } from './components/plantillafunciones/plantillafunciones.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaproductosComponent,
    DetalleproductoComponent,
    HomeComponent,
    MenuComponent,
    PadrecochesComponent,
    HijococheComponent,
    PadredeportesComponent,
    HijodeporteComponent,
    ComicsComponent,
    ComicComponent,
    PersonasapiComponent,
    CochesapiComponent,
    PlantillafuncionesComponent,
  ],
  imports: [BrowserModule, routing, FormsModule, HttpClientModule],
  providers: [ServiceComics, ServicePersonas, ServiceCoches, ServicePlantillas],
  bootstrap: [AppComponent],
})
export class AppModule {}
