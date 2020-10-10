import { GithubService } from './services/github.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
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
