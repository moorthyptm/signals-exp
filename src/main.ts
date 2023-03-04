import { NgZone } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
// import { AppModule } from './app/app.module';
import { ROUTES } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(ROUTES)],
});

// platformBrowserDynamic()
//   .bootstrapModule(AppModule, { ngZone: 'noop' })
//   .catch((err) => console.error(err));
