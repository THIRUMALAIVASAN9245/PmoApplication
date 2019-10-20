import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CitiesComponent } from './cities/cities.component';
import { CountriesComponent } from './countries/countries.component';
import { HomeComponent } from './home/home.component';
import { CourseListComponent } from './course-details/course-list.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseDetailService } from './course-details/service/courseDetail.service';

@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent,
    CountriesComponent,
    HomeComponent,
    CourseListComponent,
    CourseDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'cities', component: CitiesComponent },
      { path: 'countries', component: CountriesComponent },
      { path: 'course-detail', component: CourseListComponent },
      { path: 'course-detail/add', component: CourseDetailsComponent }
    ])
  ],
  providers: [
    CourseDetailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
