import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  products = [
    {
      name:'laptop',
      price:1000,
      id:1
    },
    {
      name:'mobile',
      price:2000,
      id:2
    },
    {
      name: 'tablet', 
      price:3000,
      id:3
    }
  ]

}
