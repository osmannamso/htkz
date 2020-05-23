import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {City} from '../../../models/city';
import {CITIES, VALIDATION_ERROR_MESSAGES} from '../../../variables/variables';
import {FormGroup, ValidationErrors} from '@angular/forms';
import {TourService} from '../../../services/tour.service';
import {SearchResult} from '../../../interfaces/search-result';
import {Tour} from '../../../interfaces/tour';
import {formatDate} from '@angular/common';
import {Subject, Subscription} from 'rxjs';
import {Country} from '../../../models/country';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit, OnDestroy {
  @Input() searchForm: FormGroup;
  @Output() searchResult: EventEmitter<{searchResult: SearchResult, message: string}> = new EventEmitter();
  cities: Array<City> = CITIES;
  selectedCityIndex = 0;
  validationMessage: string;

  searchResultSubscription: Subscription;

  constructor(
    private tourService: TourService
  ) { }

  cityChanged(id: number): void {
    this.selectedCityIndex = this.cities.findIndex((c: City) => {
      return c.id == id;
    });
  }

  search(): void {
    this.validationMessage = null;

    if (this.searchForm.valid) {
      this.searchResultSubscription = this.tourService.searchTours(this.searchForm).subscribe((searchResult: SearchResult) => {
        const city: City = this.cities.find((city: City) => {
          return city.id == this.searchForm.get('departCity').value;
        });
        const country: Country = city.directions.find((country: City) => {
          return country.id == this.searchForm.get('country').value;
        });
        const foundMessage: string = `${city.name} - ${country.name},
                                    ${formatDate(this.searchForm.get('date').value, 'dd MMM yyyy', 'ru')},
                                    ${this.searchForm.get('nights').value}-${this.searchForm.get('nightsTo').value}н.`;

        searchResult.tours.sort((a: Tour, b: Tour) => {
          return a.price > b.price ? 1 : -1;
        });
        this.searchResult.emit({searchResult: searchResult, message: foundMessage});
      });
    } else {
      this.checkSearchFormValidation();
    }
  }

  checkSearchFormValidation(): void {
    this.validationMessage = '';
    Object.keys(this.searchForm.controls).forEach(key => {
      const controlErrors: ValidationErrors = this.searchForm.get(key).errors;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach(keyError => {
          this.validationMessage += VALIDATION_ERROR_MESSAGES[`${key}_${keyError}`] + '<br>';
        });
      }
    });
  }

  ngOnInit(): void {
    this.searchForm = this.tourService.getSearchForm();
    if (this.cities.length) {
      this.searchForm.get('departCity').setValue(this.cities[this.selectedCityIndex].id);
      this.searchForm.get('country').setValue(this.cities[this.selectedCityIndex].directions[0].id);
    }
  }

  ngOnDestroy() {
    if (this.searchResultSubscription) {
      this.searchResultSubscription.unsubscribe();
    }
  }
}
