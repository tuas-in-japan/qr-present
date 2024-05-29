import { Component } from '@angular/core';
import { environment } from '../environments/environment';

const ngrokUrl = environment.ngrokUrl;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'qr-present';
}
