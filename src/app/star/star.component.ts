import { Component, Input, OnChanges, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'shoes-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges {
  starWidth = 0;

  @Input() rating = 0;
  constructor() {}

  ngOnInit(): void {

  }

  @Output() eventClick  = new EventEmitter()

  onClick(){
    this.eventClick.emit(`The clicked event has a rating of ${this.rating}`)
  }


  ngOnChanges(){

    this.starWidth = this.rating * 75/5;

  }

}
