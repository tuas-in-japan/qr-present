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
}
