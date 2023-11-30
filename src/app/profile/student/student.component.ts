import { Component, OnInit } from '@angular/core';
import { IProfile } from '../shared/interface/profile';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  profile: IProfile = {
    name: '',
    dob: '',
    phoneNumber: '',
  };
  constructor() {}

  ngOnInit(): void {}

  getFormValue(data: IProfile) {
    this.profile = data;
  }
}
