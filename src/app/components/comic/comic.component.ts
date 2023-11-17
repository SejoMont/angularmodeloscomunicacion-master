import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Comic } from 'src/app/models/Comic';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css'],
})
export class ComicComponent {
  @Input() comic!: Comic;
  @Output() seleccionarComicFavorito: EventEmitter<Comic> = new EventEmitter();
  @Output() eliminarComic: EventEmitter<Comic> = new EventEmitter();
  @Output() modificarComic: EventEmitter<Comic> = new EventEmitter();

  seleccionarComic() {
    this.seleccionarComicFavorito.emit(this.comic);
  }
  eliminarComicBtn() {
    this.eliminarComic.emit(this.comic);
  }
  modificarComicClick() {
    this.modificarComic.emit(this.comic);
  }
}
