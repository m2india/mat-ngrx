import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { appRoutes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from "@ngrx/store-devtools";
import { studentsReducer } from './state/students-reducer';



export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideAnimationsAsync(),
    provideStore(),
    provideState({
        name: 'StudentsRecords',
        reducer: studentsReducer
    }),
    provideStoreDevtools({ maxAge: 25, logOnly: false }),
  ]
};
