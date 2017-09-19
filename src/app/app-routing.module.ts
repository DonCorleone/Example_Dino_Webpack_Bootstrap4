import { NgModule } from '@angular/core';
import { DinoListComponent } from './dino-list/dino-list.component';
import { BasicComponent } from './basic/basic.component';
import { RandomDinoComponent } from './random-dino/random-dino.component';
import { CalendarComponent } from './calendar/calendar.component';
import { LinksComponent } from './links/links.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    component: DinoListComponent,
    data: { title: 'home' }
  },
  {
    path: 'basic',
    component: BasicComponent,
    data: { title: 'basic' }
  },
  {
    path: 'random',
    component: RandomDinoComponent,
    data: { title: 'random' }
  },
  {
    path: 'calendar',
    component: CalendarComponent,
    data: { title: 'calendario' }
  },
  {
    path: 'links',
    component: LinksComponent,
    data: { title: 'links' }
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
