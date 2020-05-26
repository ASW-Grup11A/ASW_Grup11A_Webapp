import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent} from "./profile/profile.component";
import { MainPageComponent} from "./main-page/main-page.component";
import { NotImplementedComponent} from "./not-implemented/not-implemented.component";
import { ThreadsComponent } from "./threads/threads.component";

const routes: Routes = [
  { path: '', component: MainPageComponent},
  { path: 'user_page/:username', component: ProfileComponent},
  { path: 'threads/:username', component: ThreadsComponent},
  { path: '**', component: NotImplementedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
