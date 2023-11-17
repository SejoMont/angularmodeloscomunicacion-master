import { Component } from '@angular/core';
import { CocheApi } from 'src/app/models/CocheApi';
import { ServiceCoches } from 'src/app/services/service.coches';

@Component({
  selector: 'app-cochesapi',
  templateUrl: './cochesapi.component.html',
  styleUrls: ['./cochesapi.component.css'],
})
export class CochesapiComponent {
  public coches!: Array<CocheApi>;

  constructor(private serviceCoches: ServiceCoches) {}
  ngOnInit(): void {
    this.serviceCoches.getCoches().subscribe(response => {
      this.coches = response;
    })
  }
}
