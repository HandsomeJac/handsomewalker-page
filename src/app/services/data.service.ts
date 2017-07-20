import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  private proxy_url;
  constructor(private http: Http) {
    this.proxy_url = 'http://127.0.0.1:7777';
   }

  private _handleUrl(url){
    let data = {
      'url': url,
      'method': 'GET',
    };
    let json_data = JSON.stringify(data);
    return json_data;
  }
  /* 搜索音乐 */
  searchMusic(number, keyword) {
    let search_url = `http://s.music.qq.com/fcgi-bin/music_search_new_platform?t=0&n=${number}&aggr=1&cr=1&loginUin=0&format=json&inCharset=GB2312&outCharset=utf-8&notice=0&platform=jqminiframe.json&needNewCode=0&p=1&catZhida=0&remoteplace=sizer.newclient.next_song&w=${keyword}`;
    let json_data = this._handleUrl(search_url);
    let _res = this.http.post(this.proxy_url, json_data)
    .map((res) => res.json());
    return _res;
  }
  
  /* 播放音乐 */
  getMusicUrl(song_id){
    let play_url = `http://ws.stream.qqmusic.qq.com/${song_id}.m4a?fromtag=46`;
    return play_url;
  }

  /* 获取音乐封面 */
  getImageUrl(image_id){
    let width = 300;
    let image_url = `http://imgcache.qq.com/music/photo/album_${width}/${image_id%100}/${width}_albumpic_${image_id}_0.jpg`;
    return image_url;
  }

}
