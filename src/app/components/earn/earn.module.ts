import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularMaterialModule } from 'src/app/angular-material.module';

import { EarnComponent } from './earn.component';
import { Routes } from './earn.routing';

@NgModule({
  declarations: [EarnComponent],
  imports: [CommonModule, ReactiveFormsModule, AngularMaterialModule, FontAwesomeModule, FormsModule, RouterModule.forChild(Routes)],
  providers: [],
  exports: [EarnComponent],
})
export class EarnModule { }
