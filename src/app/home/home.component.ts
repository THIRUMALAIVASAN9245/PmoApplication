import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  status: string;
  formDigestDetail: any;
  userInfo: any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.getFormDigest();
    this.getUserInfo();
  }

  public getFormDigest() {
    let options = {
      "accept": "application/json;odata=verbose",
      "contentType": "text/xml"
    };

    var siteUrl = "https://cognizantonline.sharepoint.com/sites/TestWeb/_api/contextinfo";
    this.httpClient.post(siteUrl, options).subscribe((response: Response) => {
      console.log(response);
      this.formDigestDetail = response;
    }, error => {
      console.log(error);
    });
  }

  public getUserInfo() {
    var siteUrl = "https://cognizantonline.sharepoint.com/_api/SP.UserProfiles.PeopleManager/GetMyProperties";
    this.httpClient.get(siteUrl).subscribe((response: any) => {
      debugger;
      var object = response.UserProfileProperties
        .reduce((obj, item) => Object.assign(obj, { [item.Key]: item.Value }), {});
      console.log(object);
      this.userInfo = object;
    }, error => {
      console.log(error);
    });
  }

  setStatus = message => {
    this.status = message;
  }
}
