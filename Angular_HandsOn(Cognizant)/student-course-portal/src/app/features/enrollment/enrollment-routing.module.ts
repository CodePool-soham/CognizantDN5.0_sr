import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReactiveEnrollmentForm } from '../../pages/reactive-enrollment-form/reactive-enrollment-form';
import { NotFound } from '../../pages/not-found/not-found';
import { unsavedChangesGuard } from '../../guards/unsaved-changes-guard';


const routes: Routes = [

  {
    path: 'reactive',
    component: ReactiveEnrollmentForm,
    canDeactivate: [unsavedChangesGuard]
  },

  {
    path: '',
    component: NotFound
  }

];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class EnrollmentRoutingModule {}