# EtFrontend

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.7.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
src/
├── app/
│ ├── app.component.css // Styles for the AppComponent
│ ├── app.component.html // Template for the AppComponent
│ ├── app.component.spec.ts // Unit tests for AppComponent
│ ├── app.component.ts // Main component (root) for the application
│ ├── app.config.ts // Configuration for the application (zone change detection, router setup)
│ ├── app.routes.ts // Defines routes for the application
│ ├── main.ts // Main entry point for Angular application
│ ├── index.html // HTML template for the application
│
├── assets/ // Folder for static files like images, fonts, etc.
├── environments/ // Environment configuration files (e.g., development, production)
│ ├── environment.ts // Development environment config
│ ├── environment.prod.ts // Production environment config
└── styles.css // Global styles for the application (optional)
