import { GithubService } from './services/github.service';
import { PostComponent } from './components/post/post.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BorderDataComponent } from './components/border-data/border-data.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { FeedComponent } from './components/feed/feed.component';

@NgModule({
  declarations: [
    AppComponent,
    BorderDataComponent,
    FeedComponent,
    SocialMediaComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [GithubService,{provide: APP_INITIALIZER, useFactory: initFunction, deps: [GithubService], multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function initFunction(config: GithubService)
{
  return () => config.load();
}
