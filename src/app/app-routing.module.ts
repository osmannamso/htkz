import {RouterModule, Routes} from '@angular/router';
import {SearchPageComponent} from './components/search-page/search-page.component';
import {NgModule} from '@angular/core';
import {TestPageComponent} from './components/test-page/test-page.component';

const routes: Routes = [
  {path: '', component: SearchPageComponent},
  {path: 'test', component: TestPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
