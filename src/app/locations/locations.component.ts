import { Component, OnInit } from '@angular/core';
import {LocationService} from '../location.service';
import {Locationsobjects} from '../locationsobjects';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  displayedColumns: string[] = ['code', 'type', 'name', 'description', 'latitude', 'longitude', 'parentCode', 'parentType'];
  dataSource: Locationsobjects[];
  message: string;
  type: string;
  code: string;
  airportCountryCode: string;
  constructor(private locationService: LocationService) { }

  ngOnInit() {
    console.log('calling ngOnInit()::::');
    this.getLocations();
  }
  getLocations(): void {
    console.log('getting All locatins from API');
    this.code = null;
    this.airportCountryCode = null;
    this.type = null;
    this.message = null;
    this.locationService.getLocations()
      .subscribe((locationData) => this.dataSource = locationData,
        (error) => {
          console.log(error);
          this.message = 'Problem with service. Please try again later!';
        }
    );
  }
  search(): void {
    console.log('getting location based on type and ISO Code');
    this.message = null;
    this.airportCountryCode = null;
    this.locationService.getLocationsByCodeAndType(this.code, this.type)
      .subscribe((locationData) => {
        console.log(locationData);
        this.dataSource = [locationData];
      },
        (error) => {
          this.dataSource = [];
          console.log(error);
          this.message = 'There are no records available';
        }
      );
  }

  getAirports() {
    this.message = null;
    this.code= null;
    this.locationService.getAirportsByCoutryCode(this.airportCountryCode)
      .subscribe((locationData) => {
          console.log(locationData);
          this.dataSource = locationData;
        },
        (error) => {
          this.dataSource = [];
          console.log(error);
          this.message = 'There are no records available';
        }
      );
  }
}
