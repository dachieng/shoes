import { Component, OnInit } from '@angular/core';
import { ShoesService } from '../shared/shoes.service';
import { IShoe } from './shoe';

@Component({
  selector: 'shoes-shoe-list',
  templateUrl: './shoe-list.component.html',
  styleUrls: ['./shoe-list.component.css']
})
export class ShoeListComponent implements OnInit {

  constructor(private shoeService:ShoesService) {
  }



imageWidth:number= 100
imageMargin:number = 5
imageHeight:number = 100
showImage:boolean=true;
title:string;
shoes:IShoe[]


filteredList:IShoe[]

_listFilter:string;

set listFilter(value){
  this._listFilter = value
  this.filteredList = this.listFilter ? this.performFilter(this.listFilter) : this.shoes
}

get listFilter():string{
  return this._listFilter
}

ngOnInit(): void {

  this.shoes = this.shoeService.getShoes()
  this.filteredList = this.shoes

}






toggleImage(){
  this.showImage = !this.showImage
}

performFilter(filterBy:string):IShoe[]{
  filterBy = filterBy.toLocaleLowerCase()
  return this.shoes.filter((shoe:IShoe)=> shoe.name.toLocaleLowerCase().indexOf(filterBy) !== -1)
}

handleEventClick(data){
  this.title = data
}

}
