import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-food-alerts',
  templateUrl: './food-alerts.component.html',
  styleUrls: ['./food-alerts.component.css']
})
export class FoodAlertsComponent implements OnInit {
  @Input() food;
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
