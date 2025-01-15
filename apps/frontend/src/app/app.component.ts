import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HttpClient } from '@angular/common/http';

@Component({
  imports: [NxWelcomeComponent, RouterModule],
  providers: [HttpClient],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'frontend';

  constructor(private http: HttpClient,) {
    this.http.get('/hello').subscribe((data: any) => {
      this.title = data;
    });
  }
}
