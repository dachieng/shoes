import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ShoesService } from './shoes.service';
import { map } from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class RouteResolveService implements Resolve<any> {

  constructor(private shoeService:ShoesService) { }

  resolve(){
    return this.shoeService.getShoes().pipe(map(shoes => shoes))
  }
}
