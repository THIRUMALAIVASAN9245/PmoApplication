import { Injectable } from '@angular/core';
import { ICourseDetail, CourseDetail } from '../model/courseDetail';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import { map } from 'rxjs/operators';

@Injectable()
export class CourseDetailService {

    private baseUrl: string;

    constructor(private httpClient: HttpClient) {
        this.baseUrl = "CourseDetails";
    }

    getCourses(courseId?: string): Observable<ICourseDetail[]> {
        let httpHeaders = new HttpHeaders({
            'Content-Type': 'application/json;charset=UTF-8;odata=verbose',
            'Cache-Control': 'no-cache',
            'accept': 'application/json;odata=verbose'
        });
        let options = {
            headers: httpHeaders
        };
        var apiURL = "https://cognizantonline.sharepoint.com/sites/TestWeb/_api/lists/getbytitle('EmployeeList')/items";
        return this.httpClient.get(apiURL, options)
            .pipe(map((resspone: any) => {
                debugger;
                return resspone.d.results.map(item => {
                    return new CourseDetail(
                        item.GUID,
                        item.Title,
                        item.UserName,
                        null,
                        null,
                        null
                    );
                });
            }));
        // return of(this.getResonse());
    }

    getCourse(courseId?: string): Observable<ICourseDetail> {
        return of(this.getSingleResponse());
    }

    post(model: ICourseDetail): Observable<ICourseDetail> {
        return of(this.getSingleResponse());
    }


    put(model: ICourseDetail): Observable<ICourseDetail> {
        return of(this.getSingleResponse());
    }

    private handleError(error: any) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server Error');
    }

    private getResonse(): ICourseDetail[] {

        const first = {
            courseId: "1",
            title: "Angular",
            url: "https://angular.io/tutorial",
            description: "Basic concepts",
            courseType: "common",
            documentType: "txt"
        };
        const second = {
            courseId: "12",
            title: "Cucumber",
            url: "https://Cucumber.io/tutorial",
            description: "Advanced concepts in Automation Testing",
            courseType: "RLG",
            documentType: "pdf"
        };
        const third = {
            courseId: "123",
            title: "Typescript",
            url: "https://Typescript.io/tutorial",
            description: "basics of TSC",
            courseType: "common",
            documentType: "txt"
        };
        const fourth = {
            courseId: "1234",
            title: "Typescript",
            url: "https://Typescript.io/tutorial",
            description: "basics of TSC",
            courseType: "Technology",
            documentType: "txt"
        };
        const fifth = {
            courseId: "1234",
            title: "Typescript",
            url: "https://Typescript.io/tutorial",
            description: "basics of TSC",
            courseType: "Technology",
            documentType: "txt"
        };
        const sixth = {
            courseId: "12346",
            title: "Typescript",
            url: "https://Typescript.io/tutorial",
            description: "basics of TSC",
            courseType: "RLG",
            documentType: "txt"
        };

        return [first, second, third, fourth, fifth, sixth] as ICourseDetail[];
    }

    private getSingleResponse(): ICourseDetail {
        const first = {
            courseId: "1",
            title: "Angular",
            url: "https://angular.io/tutorial",
            description: "Basic concepts",
            courseType: "Service Integration",
            documentType: "pdf"
        };
        return first as ICourseDetail;
    }
}