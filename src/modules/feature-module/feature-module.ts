import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepresentDataComponent } from 'src/components/represent-data/represent-data.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [{ path: '', component: RepresentDataComponent }];

@NgModule({
  declarations: [RepresentDataComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class FeatureModule {}
