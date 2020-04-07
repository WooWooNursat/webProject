import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FoodItemComponent} from './food-item/food-item.component';
import {FoodListComponent} from './food-list/food-list.component';
import {CategoryComponent} from "./category/category.component";

const routes: Routes = [
  { path: 'foods', component: FoodListComponent},
  // { path: '', component: CategoryComponent},
  { path: '', component: FoodListComponent},
  { path: 'category/:id/food-id/:id', component: FoodItemComponent},
  { path: 'category/:id', component: CategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
