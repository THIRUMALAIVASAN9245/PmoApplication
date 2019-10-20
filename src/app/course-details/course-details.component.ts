import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ICourseDetail } from './model/courseDetail';
import { CourseDetailService } from './service/courseDetail.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html'
})
export class CourseDetailsComponent implements OnInit {
  courseId: string;
  mode: string;
  courseDetail: ICourseDetail;
  courseForm: FormGroup;
  submitted = false;

  courseType: Array<string> = ['RLG', 'common', 'Technology', 'UI'];
  documentType: Array<string> = ['txt', 'pdf', 'xml', 'json'];

  constructor(private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private courseDetailService: CourseDetailService) { }

  ngOnInit() {
    this.createForm();
    this.route.params.subscribe(params => { this.courseId = params["id"] });
    if (this.courseId != "" && this.courseId != undefined && this.courseId != null) {
      this.courseDetailService.getCourse(this.courseId)
        .subscribe(model => {
          this.courseDetail = model;
          this.mode = "Update";
          this.bindData();
        });
    }
    else {
      this.mode = "Add";
    }
  }

  createForm() {
    this.courseForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      url: ['', [Validators.required]],
      description: ['', [Validators.required]],
      docType: ['', [Validators.required]],
      courseName: ['', [Validators.required]]
    });
  }

  get f() { return this.courseForm.controls; }

  private bindData() {
    const result = Object.assign({}, this.courseDetail);
    this.courseForm.setValue({
      title: result.title,
      url: result.url,
      description: result.description,
      docType: result.documentType,
      courseName: result.courseType
    });
  }

  onSubmit(formData: any) {
    this.submitted = true;
    if (this.courseForm.invalid) {
      return;
    }

    if (this.mode == "Update") {
      this.courseDetailService.put(formData)
        .subscribe(model => {
          alert("Course Details Updated Successfully.");
        });
    }
    else {
      this.courseDetailService.post(formData)
        .subscribe(model => {
          alert("Course Details Added Successfully.");
        });
    }
  }
}