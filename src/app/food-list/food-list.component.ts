import { Component, OnInit } from '@angular/core';
import { foods} from '../foods';
@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods=foods;
  constructor() { }
  share(food) {
    const url: string = window.location.href;
    window.alert(`The food ${ food.name } has been shared!`);
    window.open(`https://telegram.me/share/url?url=${ food.link }&text=Hey, check out this cool ${ food.name }`);

  }
  onNotify() {
    window.alert(`You will be notified when the item goes on sale`);
  }
  ngOnInit(): void {
  }

}
