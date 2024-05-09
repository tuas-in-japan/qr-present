import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css']
})
export class DisplayDataComponent implements OnInit {
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
}
