import { GithubService } from './services/github.service';
import { PostComponent } from './components/post/post.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { BorderDataComponent } from './components/border-data/border-data.component';
import { FeedComponent } from './components/feed/feed.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { ApresentacaoCarousselComponent } from './components/apresentacao-caroussel/apresentacao-caroussel.component';
import { HobbieComponent } from './components/hobbie/hobbie.component';
import { ApresentacaoCardsComponent } from './components/apresentacao-cards/apresentacao-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    BorderDataComponent,
    FeedComponent,
    SocialMediaComponent,
    PostComponent,
    HobbieComponent,
    ApresentacaoCarousselComponent,
    ApresentacaoCardsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  exports: [RouterModule],
  providers: [GithubService,{provide: APP_INITIALIZER, useFactory: initFunction, deps: [GithubService], multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function initFunction(config: GithubService)
{
  return () => config.load();
}
