import { Component, OnInit } from '@angular/core';

import { MyDataService } from '../../services/my-data.service';

@Component({
  selector: 'app-barrage',
  templateUrl: './barrage.component.html',
  styleUrls: ['./barrage.component.css']
})
export class BarrageComponent implements OnInit {

  constructor(private myDataService: MyDataService) { }

  ngOnInit() {
  }

}
