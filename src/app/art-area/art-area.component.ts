import { Component, OnInit } from '@angular/core';
import { Broadcaster } from '../shared/broadcaster.service';
import { MyDataService } from '../services/my-data.service';

@Component({
  selector: 'app-art-area',
  templateUrl: './art-area.component.html',
  styleUrls: ['./art-area.component.css'],
  providers: [],
})

export class ArtAreaComponent implements OnInit {
  constructor(private _myDataService: MyDataService, private _broadcaster: Broadcaster) {
  }

  ngOnInit() {
  }
  getData(type: string) {
    this._myDataService.getArticleData(type).subscribe(res => {
      console.log(res);
    }, error => console.log(error));
  }

}
