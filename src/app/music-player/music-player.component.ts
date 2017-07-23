import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { SharedModule } from '../shared/shared.module';
import { Broadcaster } from '../shared/broadcaster.service';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.css'],
  providers: [DataService],
})

export class MusicPlayerComponent implements OnInit, AfterViewInit {
  @ViewChild('audio') audio: ElementRef;
  image_url: string;
  song_url: string;
  name: string;
  artist: string;
  album: string;
  click_animation: boolean[];
  cover_rotate: boolean;
  toogle_play: boolean;
  is_stop: boolean;
  play_state: string = 'play';
  rotate_up: boolean;
  rotate_down: boolean;
  slideIn: boolean;
  slideOut: boolean;
  song_info_arr: object[];
  search_box_obj: Object = {
    show: false,
    fadeInDown: false,
    search_content: '',
    active: false,
    index: null,
  };
  constructor(private _dataService: DataService, private _broadcaster: Broadcaster) {
    this.song_info_arr = [];
    this.click_animation = [false, false, false, false];
    this.cover_rotate = true;
    this.toogle_play = true;
    this.is_stop = false;
    this.rotate_up = false;
    this.rotate_down = false;
  }

  ngOnInit() {
    this.slideIn = true;
    const fade = {
      image_id: '929547',
      song_id: '101800569',
      name: 'Fade',
      artist: 'Alan Walker',
      album: 'Fade',
    };
    this.playMusic(fade);
    this._broadcaster.on<string>('mouseEvent')
      .subscribe(message => {
        switch (message) {
          case 'over':
            this.playControll('pause');
            break;
          case 'out':
            this.play_state === 'play' && this.playControll('play');
            break;
        }
      });
  }
  ngAfterViewInit() {

  }
  download(event): void {
    this.click_animation[3] = true;
    event.target.addEventListener('webkitAnimationEnd', () => {
      this.click_animation[3] = false;
    });
  }
  /* 搜索音乐 */
  searchMusic(name: string, e) {
    let doSearch = () => {
      let song_info_arr = [];
      if (name) {
        this._dataService.searchMusic(5, name).subscribe(
          data => {
            this.search_box_obj['index'] = null;
            let song_arr = data.data.song.list;
            song_arr.forEach(element => {
              let song_obj = {};
              let temp = element.f.split('|');
              song_obj['song_id'] = temp[0];
              song_obj['name'] = temp[1];
              song_obj['artist'] = temp[3];
              song_obj['image_id'] = temp[4];
              song_obj['album'] = temp[5];
              song_info_arr.push(song_obj);
            });
            this.song_info_arr = song_info_arr;
          },
          error => console.debug('ERROR', error)
        );
      }
    };
    e.keyCode == 13 && doSearch();
  }
  /* 播放音乐 */
  playMusic(song_info) {
    this.image_url = this._dataService.getImageUrl(song_info['image_id']);
    this.song_url = this._dataService.getMusicUrl(song_info['song_id']);
    this.name = song_info['name'];
    this.artist = song_info['artist'];
    this.album = song_info['album'];
    console.log(this.song_url);
  }
  /* 播放控制 */
  playControll(type, event?) {
    let play_obj = {
      'play': true,
      'pause': false,
      'stop': false,
    };
    this.cover_rotate = play_obj[type];
    this.toogle_play = play_obj[type];
    if (play_obj[type]) {
      this.audio.nativeElement.play();
      this.click_animation[0] = true;
      event && (this.play_state = 'play');
    } else {
      if (type === 'pause') {
        this.audio.nativeElement.pause();
        this.click_animation[0] = true;
        event && (this.play_state = 'pause');
      } else {
        this.is_stop = true;
        this.click_animation[1] = true;
        this.audio.nativeElement.load();
        this.audio.nativeElement.pause();
        event && (this.play_state = 'stop');
      }
    }
    if(event){
      event.target.addEventListener('webkitAnimationEnd', () => {
        if (type === 'stop') {
          this.toogle_play = false;
          this.is_stop = false;
          this.click_animation[1] = false;
        } else {
          this.toogle_play = play_obj[type];
          this.click_animation[0] = false;
        }
      });
    }
  }

  clickSearch(event) {
    !this.search_box_obj['show'] && (this.search_box_obj['index'] = null);
    this.song_info_arr['length'] && (this.song_info_arr = []);
    this.search_box_obj['search_content'] && (this.search_box_obj['search_content'] = '');
    this.click_animation[2] = true;
    event.target.addEventListener('webkitAnimationEnd', () => {
      this.click_animation[2] = false;
    });
    this.search_box_obj['active'] = !this.search_box_obj['active'];
    this.search_box_obj['show'] = !this.search_box_obj['show'];
    this.search_box_obj['fadeInDown'] = true;
  }
  selectMusic(song_info, index) {
    this.search_box_obj['index'] = index;
    this.playMusic(song_info);
    this.audio.nativeElement.load();
  }

  tooglePlayer(type) {
    switch (type) {
      case 'player_slide_out':
        this.slideIn = false;
        this.slideOut = true;
        break;
      case 'mini_slide_out':
        this.slideIn = true;
        this.slideOut = false;
        break;
    }
  }
}
