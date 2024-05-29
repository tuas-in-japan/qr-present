import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { RouterOutlet } from '@angular/router';

const ngrokUrl = environment.ngrokUrl;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [RouterOutlet]
})
export class AppComponent {
  title = 'qr-present';
}
