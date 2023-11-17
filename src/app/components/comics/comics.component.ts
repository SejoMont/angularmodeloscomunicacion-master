import { Component, OnInit } from '@angular/core';
import { Comic } from 'src/app/models/Comic';
import { ComicComponent } from '../comic/comic.component';
import { ServiceComics } from 'src/app/services/service.comics';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css'],
  // Debemos usar providers dentro del comoponent para poder inyectar nuestro servicio
  providers: [ServiceComics],
})
export class ComicsComponent {
  public comics!: Array<Comic>;
  public favorito!: Comic;
  public nuevoComic: Comic = new Comic('', '', '');

  // En los contructires normalmente solamentt¡e se utliza la inyeccion,
  // no los objetos que recibe, las acciones se suelen realizar dentro de ngOnInit
  constructor(private _service: ServiceComics) {}
  ngOnInit(): void {
    this.comics = this._service.getComics();
  }

  seleccionarComicFavorito(comic: Comic): void {
    console.log(comic);
    this.favorito = comic;
  }
  eliminarComic(comic: Comic): void {
    var index = this.comics.indexOf(comic);
    if (index !== -1) {
      this.comics.splice(index, 1);
    }
  }
  modificarComic(comic: Comic): void {
    console.log('Modificar cómic:', comic);
  }
  agregarComic(): void {
    this.nuevoComic.nombre &&
      this.nuevoComic.imagen &&
      this.nuevoComic.personaje;
    this.comics.push(this.nuevoComic);
  }
}
