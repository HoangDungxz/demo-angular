import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ProfileRoutingModule } from './profile-routing.module';
import { DetailComponent } from './student/detail/detail.component';
import { FormComponent } from './student/form/form.component';
import { StudentComponent } from './student/student.component';
import { ProfileService } from './shared/services/profile.service';
import { TableComponent } from './student/table/table.component';
import { FormatForm } from './shared/pipe/phone.pipe';

@NgModule({
  declarations: [
    StudentComponent,
    FormComponent,
    DetailComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProfileRoutingModule,
    SharedModule,
    FormatForm,
  ],
  providers: [ProfileService],
})
export class ProfileModule {}
