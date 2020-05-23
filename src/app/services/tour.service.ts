import { Injectable } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {SearchResult} from '../interfaces/search-result';
import {HttpClient} from '@angular/common/http';
import {ENV} from '../variables/env';
import {CustomValidators} from '../shared/custom-validators';

@Injectable({
  providedIn: 'root'
})
export class TourService {

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) { }

  // FormGroups for <form>

  getSearchForm(): FormGroup {
    return this.fb.group({
      departCity: ['', Validators.required],
      country: ['', Validators.required],
      date: ['', [Validators.required, CustomValidators.dateRange(90)]],
      nights: ['', [Validators.required, Validators.min(5), Validators.max(15)]],
      nightsTo: ['', [Validators.required, Validators.min(5), Validators.max(15)]]
    }, {validators: [CustomValidators.compareNights()]});
  }

  // Request to API methods

  searchTours(form: FormGroup): Observable<SearchResult> {
    return this.http.get<SearchResult>(`${ENV.apiUrl}/searchPartner1`, {params: form.getRawValue()});
  }
}
