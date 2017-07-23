import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-art-area',
  templateUrl: './art-area.component.html',
  styleUrls: ['./art-area.component.css'],
  providers: [],
})

export class ArtAreaComponent implements OnInit {
  public is_collapsed_arr = [];
  articles: FirebaseListObservable<any[]>;
  item: FirebaseObjectObservable<any>;
  constructor(db: AngularFireDatabase) {
    this.articles = db.list('/artarticle');
    this.articles.subscribe(snapshot => {
      snapshot.forEach(ele => {
        this.is_collapsed_arr.push(true);
      });
    });
    this.item = db.object('/techarticle');
  }

  ngOnInit() {
    
  }

  save(newName: string) {
    this.item.set({ name: newName });
  }
  update(newSize: string) {
    this.item.update({ size: newSize });
  }
  delete() {
    this.item.remove();
  }

}
