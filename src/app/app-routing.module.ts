import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            {
                path: '', pathMatch: 'full', redirectTo: 'presentation'
            },
            {
                path: 'presentation', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
            },
            {
                path: 'certifications',
                loadChildren: () => import('./certifications/certifications.module').then(m => m.CertificationsModule)
            },
            {
                path: 'detail/:id', loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule)
            }
        ]
    },
    {
        path: '**', component: LayoutComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
