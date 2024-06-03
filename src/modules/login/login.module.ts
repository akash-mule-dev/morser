import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { LoginComponent } from 'src/components/login/login.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [{ path: '', component: LoginComponent }];

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, ButtonModule, RouterModule.forChild(routes)],
})
export class LoginModule {}
