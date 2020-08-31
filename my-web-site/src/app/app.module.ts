import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BorderDataComponent } from './components/border-data/border-data.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { FeedComponent } from './components/feed/feed.component';

@NgModule({
  declarations: [
    AppComponent,
    BorderDataComponent,
    FeedComponent,
    SocialMediaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
