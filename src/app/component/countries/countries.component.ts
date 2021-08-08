import { Component, OnInit } from '@angular/core';
import { DataServcieService } from 'src/app/service/data-servcie.service';
import { GlobalDataSummary } from 'src/app/service/data-service.model';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  data: GlobalDataSummary[] = [];
  countries: string[] = [];
  totalConfirmed;
  totalActive;
  totalRecovred;
  totalDeath;
  constructor(private dataService: DataServcieService) { }

  ngOnInit(): void {
    this.getCountries();
  }

  /**
   * @description - function used to get the countries from the lists
   * @return {void}
   */
  public getCountries(): void {
    this.dataService.getGlobalData().subscribe(result => {
      this.data = result;
      this.data.forEach(cs => {
        if (cs.country) {
          this.countries.push(cs.country);
        }
      });
    });
  }

  /**
   * @description - this function used to get the country data when user change values
   * @return {void}
   */
  public changeWebsite(e): void {
    // get the value onchange event
    console.log(e.target.value);
    const searchCountry: string = e.target.value;
    this.data.forEach(search => {
      if (search.country === searchCountry) {
        this.totalConfirmed = search.confirmed;
        this.totalActive = search.active;
        this.totalRecovred = search.recovered;
        this.totalDeath = search.death;
      }
    });

  }

}
