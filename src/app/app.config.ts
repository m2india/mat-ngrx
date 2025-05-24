import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { appRoutes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from "@ngrx/store-devtools";
import { studentsReducer } from './state/students-reducer';
import { provideEffects } from '@ngrx/effects';
import { StudentsRecordsEffects } from './state/students-records-effects';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';
import { MatNativeDateModule } from '@angular/material/core';





export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideHttpClient(),
    provideAnimationsAsync(),
    provideEffects(StudentsRecordsEffects),
    provideStore(routerReducer),
    provideState({
        name: 'students', // selectors
        reducer: studentsReducer // reducer
    }),
    provideStoreDevtools({ maxAge: 25, logOnly: false }),
    provideRouterStore(),
    importProvidersFrom(MatNativeDateModule),
  ]
};
