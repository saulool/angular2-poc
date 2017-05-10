import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GameControlComponent } from './game-control/game-control/game-control.component';
import { EvenComponent } from './game-control/even/even.component';
import { OddComponent } from './game-control/odd/odd.component';
import { GameControlService } from './game-control/game-control.service';
import { HistoryComponent } from './game-control/history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    GameControlComponent,
    EvenComponent,
    OddComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [GameControlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
