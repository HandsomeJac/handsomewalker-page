import { Component, OnInit } from '@angular/core';
import { MyDataService } from '../services/my-data.service';

@Component({
  selector: 'app-tech-area',
  templateUrl: './tech-area.component.html',
  styleUrls: ['./tech-area.component.css'],
  providers: [MyDataService],
})
export class TechAreaComponent implements OnInit {
  articles: any;
  public is_collapsed_arr = [];
  constructor(private _myDataService: MyDataService) { }

  ngOnInit() {
    this.getArticle('tech');
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
