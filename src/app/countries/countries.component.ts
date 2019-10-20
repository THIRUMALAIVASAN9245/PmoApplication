import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  countryList = [
    { country_name: 'Afghanistan', code: 'AF' },
    { country_name: 'Åland Islands', code: 'AX' },
    { country_name: 'Albania', code: 'AL' },
    { country_name: 'Algeria', code: 'DZ' },
    { country_name: 'American Samoa', code: 'AS' },
    { country_name: 'AndorrA', code: 'AD' },
    { country_name: 'Angola', code: 'AO' },
    { country_name: 'Anguilla', code: 'AI' },
    { country_name: 'Antarctica', code: 'AQ' },
    { country_name: 'Antigua and Barbuda', code: 'AG' }];

  constructor() { }

  ngOnInit() {

  }

}
