import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DirectoryComponent } from './directory/directory.component';
import { routing } from './app.routes';
import { FilterPipe } from './filter.pipe';
import { TopComponent } from './top/top.component';
import { MusicPlayerComponent } from './music-player/music-player.component';
import { Broadcaster } from './shared/broadcaster.service';
import { ArtAreaComponent } from './art-area/art-area.component';
import { TechAreaComponent } from './tech-area/tech-area.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DirectoryComponent,
    FilterPipe,
    TopComponent,
    MusicPlayerComponent,
    ArtAreaComponent,
    TechAreaComponent,
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [Broadcaster],
  bootstrap: [AppComponent]
})
export class AppModule { }
