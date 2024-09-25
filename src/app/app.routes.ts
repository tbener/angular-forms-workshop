import { Routes } from '@angular/router';
import { TabsMainComponent } from './tabs/tabs-main/tabs-main.component';
import { Tab1Component } from './tabs/tab1/tab1.component';
import { Tab2Component } from './tabs/tab2/tab2.component';

export const routes: Routes = [
    {
        path: '', component: TabsMainComponent, children: [
            { path: '', redirectTo: 'tab1', pathMatch: 'full' },
            { path: 'tab1', component: Tab1Component },
            { path: 'tab2', component: Tab2Component }
        ]
    },
    { path: '**', redirectTo: '' }
];
