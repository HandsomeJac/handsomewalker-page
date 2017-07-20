import { Component, OnInit } from '@angular/core';
import { MyDataService } from '../services/my-data.service';

@Component({
  selector: 'app-art-area',
  templateUrl: './art-area.component.html',
  styleUrls: ['./art-area.component.css'],
  providers: [MyDataService],
})
export class ArtAreaComponent implements OnInit {
  articles: any;
  public is_collapsed_arr = [];
  constructor(private _myDataService: MyDataService) { }

  ngOnInit() {
    this.getArticle('art');
  }
  /* 获取文章数据 */
  getArticle(type) {
    this._myDataService.getArticleData(type).subscribe(res => {
      if (res['status'] == 200) {
        this.articles = res['data'];
        this.articles.forEach(item => {
          this.is_collapsed_arr.push(true);
        });
      }
    });
  }

}
