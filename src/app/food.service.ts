import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { foods } from './foods';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FoodService {
  [x: string]: any;

  constructor(private http: HttpClient,) { }
  private foodsUrl = 'api/foods';  // URL to web api
  getFood(id: number): Observable<any> {
    return of(foods.find(food => food.id === id));
  }

  getFoods (): Observable<any> {
    return this.http.get<any>(this.foodsUrl)
      .pipe(
        tap(_ => this.log('fetched foods')),
        catchError(this.handleError<any>('getFoods', []))
      );
  }

  getFoodsByCategoryId(id: number): Observable<any> {
    return of(foods.filter(food => food.category_id === id));
  }
  

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}
