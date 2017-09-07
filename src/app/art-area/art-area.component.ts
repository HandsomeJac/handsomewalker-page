import { Component, OnInit } from '@angular/core';
import { Broadcaster } from '../shared/broadcaster.service';
import { MyDataService } from '../services/my-data.service';

@Component({
  selector: 'app-art-area',
  templateUrl: './art-area.component.html',
  styleUrls: ['./art-area.component.css'],
  providers: [MyDataService],
})

export class ArtAreaComponent implements OnInit {
  articles;
  is_collapsed_arr = [];
  constructor(private _myDataService: MyDataService, private _broadcaster: Broadcaster) {
  }
  ngOnInit() {
    this.getData('art');
  }
  /* 处理collapse数组 */
  handleCollapse(data): void {
    for (let i = 0, len = data.length; i < len; i++) {
      this.is_collapsed_arr.push(true);
    }
  }
  /* 获取数据 */
  getData(type: string): void {
    this._myDataService.getArticleData(type).subscribe(res => {
      if (res['status'] === 200) {
        this.articles = res['data'];
        this.handleCollapse(this.articles);
      }
    }, error => console.debug(error));
  }

}
