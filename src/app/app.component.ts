import { Component } from '@angular/core';
import { Broadcaster } from './shared/broadcaster.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  loading: boolean;
  constructor(private _broadcaster: Broadcaster) {
    this._broadcaster.on<boolean>('loading')
      .subscribe(message => {
        this.loading = message;
      });
  }

}
