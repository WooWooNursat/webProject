import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CategoryComponent } from './category/category.component';
import { FoodItemComponent } from './food-item/food-item.component';
import { FoodAlertsComponent } from './food-alerts/food-alerts.component';
import { FoodListComponent } from './food-list/food-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CategoryComponent,
    FoodItemComponent,
    FoodAlertsComponent,
    FoodListComponent,
    TopBarComponent,
   //
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
