import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MyDataService {
  private proxy_url;
  constructor(private http: Http) {
    this.proxy_url = 'http://127.0.0.1:7777';
   }

  private _handleUrl(type){
    let data = {
      'file': `${type}article.json`
    };
    let json_data = JSON.stringify(data);
    return json_data;
  }
  
  /* 请求文章数据 */
  getArticleData(type){
    let json_data = this._handleUrl(type);
    let _res = this.http.post(this.proxy_url, json_data)
    .map((res) => res.json());
    return _res;
  }

}
