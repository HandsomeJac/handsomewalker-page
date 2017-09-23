import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routes';
import { FilterPipe } from './filter.pipe';
import { TopComponent } from './top/top.component';
import { MusicPlayerComponent } from './music-player/music-player.component';
import { Broadcaster } from './shared/broadcaster.service';
import { ArtAreaComponent } from './art-area/art-area.component';
import { TechAreaComponent } from './tech-area/tech-area.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { BarrageComponent } from './shared/barrage/barrage.component';

import { MyDataService } from './services/my-data.service';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilterPipe,
    TopComponent,
    MusicPlayerComponent,
    ArtAreaComponent,
    TechAreaComponent,
    LoadingComponent,
    BarrageComponent,
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  providers: [Broadcaster, MyDataService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
