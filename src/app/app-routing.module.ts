import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProgramsComponent } from './programs/programs.component';
import { SpotlightComponent } from './spotlight/spotlight.component';
import { ContactComponent } from './contact/contact.component';
import { GeneralFitnessComponent } from './general-fitness/general-fitness.component';
import { AthleticPerformanceComponent } from './athletic-performance/athletic-performance.component';

const appRoutes: Routes = [
    { path: '', component: HomepageComponent, runGuardsAndResolvers: 'always'},
    { path: 'about-us', component: AboutUsComponent, runGuardsAndResolvers: 'always' },
    { path: 'contact', component: ContactComponent, runGuardsAndResolvers: 'always' },
    { path: 'homepage', component: HomepageComponent, runGuardsAndResolvers: 'always' },
    { path: 'training', component: ProgramsComponent, runGuardsAndResolvers: 'always' },
    { path: 'spotlight', component: SpotlightComponent, runGuardsAndResolvers: 'always' },
    { path: 'general-fitness', component: GeneralFitnessComponent, runGuardsAndResolvers: 'always'},
    { path: 'athletic-performance', component: AthleticPerformanceComponent, runGuardsAndResolvers: 'always'}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
