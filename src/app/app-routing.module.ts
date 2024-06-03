import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../modules/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'feature-module',
    loadChildren: () =>
      import('../modules/feature-module/feature-module').then(
        (m) => m.FeatureModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
