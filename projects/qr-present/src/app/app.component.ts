import { Component } from '@angular/core';
import * as QRCode from 'qrcode';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'qr-present';
  qrCodeUrl: string = '';
  url: string = '';

  constructor(private router: Router) { }

  onSubmit(value: any) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const data = {
          input: value.inputField,
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
    const url = `https://23ad-106-154-155-107.ngrok-free.app/display-data?input=${data.input}&latitude=${data.latitude}&longitude=${data.longitude}`;
    QRCode.toDataURL(url)
      .then((qrCodeUrl: string) => {
        console.log(qrCodeUrl);
        // You can set this qrCodeUrl to an img src to display the QR code
        this.qrCodeUrl = qrCodeUrl;

        this.router.navigate(['/display-data'], { queryParams: data });
      })
      .catch((err: Error) => {
        console.error(err);
      });
  }
}
