import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { Broadcaster } from '../shared/broadcaster.service';
import 'rxjs/add/operator/map';

@Injectable()
export class MyDataService {
  private proxy_url;
  constructor(private http: Http, private broadcaster: Broadcaster) {
    this.proxy_url = 'http://127.0.0.1:7777';
  }

  private _handleUrl(type) {
    const data = {
      'file': `${type}article.json`
    };
    const json_data = JSON.stringify(data);
    return json_data;
  }

  /* 请求文章数据 */
  getArticleData(type) {
    this.broadcaster.broadcast('loading', true);
    const param = new URLSearchParams();
    param.set('db', 'article_db');
    param.set('collection', type);
    const _res = this.http.get(this.proxy_url, { search: param })
      .map((res) => {
        this.broadcaster.broadcast('loading', false);
        return res.json();
      });
    return _res;
  }

}
