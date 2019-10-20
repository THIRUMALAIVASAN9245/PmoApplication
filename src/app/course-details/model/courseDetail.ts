export interface ICourseDetail {
    title:string,
    url:string,
    description:string,
    courseType:string,
    documentType:string,
    courseId:string
}

export class CourseDetail implements ICourseDetail {

    constructor(
        public title: string,
        public url: string,
        public description: string,
        public courseType: string,
        public documentType: string,
        public courseId: string) {
    }
}