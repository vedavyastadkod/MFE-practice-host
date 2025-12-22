import { loadRemoteModule } from '@angular-architects/module-federation';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => loadRemoteModule({
            type: 'module',
            remoteEntry: 'http://localhost:8081/remoteEntry.js',
            exposedModule: './routes'
        }).then(m => m.routes)
    },
    {
        path: 'standalone',
        loadComponent: () => loadRemoteModule({
            type: 'module',
            remoteEntry: 'http://localhost:8081/remoteEntry.js',
            exposedModule: './StandaloneComponent'
        }).then(m => m.StandaloneComponent),
        providers: [
            provideHttpClient(),
            importProvidersFrom([
                // Other modules if needed like tranlasteModule.forRoot(...)
            ])
        ]
    }
];
