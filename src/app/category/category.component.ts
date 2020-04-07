import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FoodService} from '../food.service';
import {CategoryService} from '../category.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  foods:any;
  category:any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private foodService: FoodService,
    private categoryService: CategoryService
  
  ) {
    this.router.events.subscribe((value =>{ this.getFoods(); this.getCategory(); }))
   }

  ngOnInit(): void {
    this.getFoods();
    this.getCategory();
  }
  getFoods(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.foodService.getFoodsByCategoryId(id).subscribe(foods => this.foods = foods);
  }
  getCategory(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.categoryService.getCategory(id).subscribe(category => this.category = category);
  }

}
