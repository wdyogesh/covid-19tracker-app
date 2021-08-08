import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.css']
})
export class DashboardCardComponent implements OnInit {

  @Input() totalConfirmed = 0;
  @Input() totalActive = 0;
  @Input() totalRecovred = 0;
  @Input() totalDeath = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
