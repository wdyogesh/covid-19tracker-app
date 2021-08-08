import { Component, OnInit } from '@angular/core';
import { DataServcieService } from 'src/app/service/data-servcie.service';
import { GlobalDataSummary } from 'src/app/service/data-service.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  totalConfirmed = 0;
  totalActive = 0;
  totalDeath = 0;
  totalRecovred = 0;
  globalData: GlobalDataSummary[] = [];
  constructor(private dataService: DataServcieService) { }

  ngOnInit(): void {
    this.dataService.getGlobalData()
      .subscribe(
        {
          next: (result: any) => {
            this.globalData = result;
            result.forEach(cs => {
              if (!Number.isNaN(cs.confirmed)) {
                this.totalActive += cs.active;
                this.totalRecovred += cs.recovered;
                this.totalDeath += cs.death;
                this.totalConfirmed += cs.confirmed;
              }
            })
          }
        })
  }

}
