
import {Component, OnChanges, OnInit, SimpleChanges,Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';
import { Location } from '@angular/common';
@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css']
})
export class FoodItemComponent implements OnInit {
  food: any;
  constructor(public activatedRoute: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
    this.food = window.history.state;
    console.log(this.food.product);
  }
  Share() {
    window.open(this.food.food.link);
  }
  goBack(): void {
    this.location.back();
  }
  

}
