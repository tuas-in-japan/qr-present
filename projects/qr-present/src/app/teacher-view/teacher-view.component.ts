import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import * as QRCode from 'qrcode';

const ngrokUrl = environment.ngrokUrl;

@Component({
  selector: 'app-teacher-view',
  templateUrl: './teacher-view.component.html',
  styleUrls: ['./teacher-view.component.css']
})
export class TeacherViewComponent {
  constructor(private router: Router) { }

  qrCodeUrl: string = '';
  url: string = '';

  onSubmit(value: any) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
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
    const url = `${ngrokUrl}/student-view?input=${data.input}&latitude=${data.latitude}&longitude=${data.longitude}`;
    QRCode.toDataURL(url)
      .then((qrCodeUrl: string) => {
        console.log(qrCodeUrl);
        // You can set this qrCodeUrl to an img src to display the QR code
        this.qrCodeUrl = qrCodeUrl;

        // this.router.navigate(['/student-view'], { queryParams: data });
      })
      .catch((err: Error) => {
        console.error(err);
      });
  }
}
