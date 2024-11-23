import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import { HttpClientModule } from '@angular/common/http';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import {environment} from "../environments/environment";
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import {getAuth,provideAuth} from '@angular/fire/auth'
import {getStorage, provideStorage} from '@angular/fire/storage'


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, 
  provideFirebaseApp(() => initializeApp(environment.firebase)),
  provideAuth(()=>getAuth()),
  provideStorage(()=>getStorage()),
  provideFirestore(() => getFirestore()),
  provideHttpClient(withInterceptorsFromDi())],
  // ], 
 bootstrap: [AppComponent],
})
export class AppModule {}
