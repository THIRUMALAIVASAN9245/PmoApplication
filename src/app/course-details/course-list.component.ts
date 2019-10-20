import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseDetailService } from './service/courseDetail.service';
import { ICourseDetail } from './model/courseDetail';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courseDetail: ICourseDetail[];
  id: any;
  constructor(private courseDetailService: CourseDetailService,
              private router: Router) { }

  ngOnInit() {
      this.getCourseListDetails();
  }

    private getCourseListDetails() {
        this.courseDetailService.getCourses(this.id).subscribe(model => {
          debugger;
          this.courseDetail = model
        });
   }
}