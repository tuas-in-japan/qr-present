import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent {
  input: string = "";
  latitude: number = 0;
  longitude: number = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.input = params['input'];
      this.latitude = Number(params['latitude']);
      this.longitude = Number(params['longitude']);
    });
  }

  onRegister(value: any) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const studentPosition = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
          // latitude: 38.26187763624792,
          // longitude: 140.85640138285245
        };
        const distanceInMeters = this.getDistanceFromLatLonInM(this.latitude, this.longitude, studentPosition.latitude, studentPosition.longitude);
        if (distanceInMeters <= 100) {
          // The positions are within 100 meters of each other
          alert(`${value.studentName} have successfully registered!`);
        }
        else {
          alert("You are not in the correct location!");
        }
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  // use the Haversine formula,
  // which calculates the distance between two points on the Earth's surface
  //specified in longitude and latitude.

  getDistanceFromLatLonInM(lat1: number, lon1: number, lat2: number, lon2: number) {
    var R = 6371; // Radius of the earth in km
    var dLat = this.deg2rad(lat2-lat1);  // deg2rad below
    var dLon = this.deg2rad(lon2-lon1);
    var a =
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c; // Distance in km
    return d * 1000; // Distance in m
  }

  deg2rad(deg: number) {
    return deg * (Math.PI/180)
  }

}
