import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './features/users/users.component';

const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  {
    path: 'users/add',
    loadChildren: () =>
      import('./features/users-add/users-add.module').then(
        (m) => m.UsersAddModule
      ),
  },
  {
    path: 'users/:id',
    loadChildren: () =>
      import('./features/user-details/user-details.module').then(
        (m) => m.UserDetailsModule
      ),
  },
  // { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
  // { path: 'tutorials', component: TutorialsListComponent },
  // { path: 'tutorials/:id', component: TutorialDetailsComponent },
  // { path: 'add', component: AddTutorialComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
