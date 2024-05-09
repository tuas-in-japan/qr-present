import { Component } from '@angular/core';
import * as QRCode from 'qrcode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'qr-present';
  qrCodeUrl: string = '';
  url: string = '';

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
    const url = `http://localhost:4200/display-data?input=${data.input}&latitude=${data.latitude}&longitude=${data.longitude}`;
    QRCode.toDataURL(url)
      .then((qrCodeUrl: string) => {
        console.log(qrCodeUrl);
        // You can set this qrCodeUrl to an img src to display the QR code
        this.qrCodeUrl = qrCodeUrl;
      })
      .catch((err: Error) => {
        console.error(err);
      });
  }
}
