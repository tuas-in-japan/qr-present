import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import * as QRCode from 'qrcode';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

const ngrokUrl = environment.ngrokUrl;

@Component({
    selector: 'app-teacher-view',
    templateUrl: './teacher-view.component.html',
    styleUrls: ['./teacher-view.component.css'],
    standalone: true,
    imports: [FormsModule, NgIf]
})
export class TeacherViewComponent {

  qrCodeUrl: string = '';
  url: string = '';

  onSubmit(value: any) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(value)
        const data = {
          courseName: value.courseName,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        };
        this.generateQRCode(data);
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  generateQRCode(data: any) {
    const url = `${ngrokUrl}/student-view?courseName=${data.courseName}&latitude=${data.latitude}&longitude=${data.longitude}`;
    QRCode.toDataURL(url)
      .then((qrCodeUrl: string) => {

        // You can set this qrCodeUrl to an img src to display the QR code
        this.qrCodeUrl = qrCodeUrl;

        // this.router.navigate(['/student-view'], { queryParams: data });
      })
      .catch((err: Error) => {
        console.error(err);
      });
  }
}
