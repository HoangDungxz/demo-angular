import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IProfile } from '../../shared/interface/profile';
import { ProfileService } from '../../shared/services/profile.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  studentForm: FormGroup = new FormGroup({});
  constructor(
    private formBuilder: FormBuilder,
    private profileService: ProfileService
  ) {}
  @Output() getFormValue = new EventEmitter<IProfile>();
  ngOnInit(): void {
    this.profileService.buttonObservable.subscribe((e) => {
      console.log('GET api', e);
    });

    this.studentForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      dob: [''],
      phoneNumber: ['', []],
    });
  }

  handleFormSubmit() {
    if (this.studentForm.invalid) {
      return;
    }

    this.profileService
      .create(this.studentForm.getRawValue())
      .subscribe((e) => {});

    this.getFormValue.emit(this.studentForm.getRawValue());
  }
}
