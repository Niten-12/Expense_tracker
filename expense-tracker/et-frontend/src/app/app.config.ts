import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations'; // Required for Material animations
import { importProvidersFrom } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { routes } from './app.routes'; // Import routes configuration
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), // Enable zone-less change detection with event coalescing
    provideRouter(routes), // Provide your routing setup (ensure 'routes' is correctly defined in 'app.routes.ts')
    provideAnimations(), // Provide animations for Material components
    importProvidersFrom(MatButtonModule, MatCardModule), // Import Material modules using 'importProvidersFrom'
    provideHttpClient(), // Provide HTTP client if needed
  ],
};
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { appRoutingProviders } from './app.routes';

bootstrapApplication(AppComponent, {
  providers: [appRoutingProviders],
});
