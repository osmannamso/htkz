import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { SearchFormComponent } from './components/search-page/search-form/search-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { TourObjectComponent } from './components/search-page/tour-object/tour-object.component';
import {registerLocaleData} from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import { SearchPageComponent } from './components/search-page/search-page.component';
registerLocaleData(localeRu);

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    TourObjectComponent,
    SearchPageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'ru-RU'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
