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
    QRCode.toDataURL(JSON.stringify(data))
      .then((url: string) => {
        console.log(url);
        // You can set this url to an img src to display the QR code
        this.qrCodeUrl = url;
      })
      .catch((err: Error) => {
        console.error(err);
      });
  }
}
