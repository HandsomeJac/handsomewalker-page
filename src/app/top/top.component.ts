import { Component, OnInit, OnChanges } from '@angular/core';
import {Router} from"@angular/router";
import {Broadcaster} from '../shared/broadcaster.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css'],
  providers: [],
})
export class TopComponent implements OnInit {
  name: string;
  constructor(private _broadcaster: Broadcaster, private _router: Router) {
    this.name = `Handsome\nWalker`;
   }

  ngOnInit() {
  }
  route(area){
    this._router.navigate([`/${area}`]);
  }
  play(event){
    event.target.play();
    this._broadcaster.broadcast('mouseEvent', 'over');
  }
  stop(event){
    event.target.load();
    this._broadcaster.broadcast('mouseEvent', 'out');
  }
}
