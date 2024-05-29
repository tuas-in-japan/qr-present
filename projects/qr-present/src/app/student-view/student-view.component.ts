import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-student-view',
    templateUrl: './student-view.component.html',
    styleUrls: ['./student-view.component.css'],
    standalone: true,
    imports: [NgIf, RouterModule]
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
