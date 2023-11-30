import { Component, Input, OnInit } from '@angular/core';
import { IProfile } from '../../shared/interface/profile';
import { phoneFormat } from '../../shared/ulti/phone';
import { ProfileService } from '../../shared/services/profile.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  phoneFormat: any;
  @Input() profile: IProfile = {
    name: '',
    dob: '',
    phoneNumber: '',
  };
  constructor(private profileService: ProfileService) {
    this.phoneFormat = phoneFormat;
  }

  ngOnInit(): void {}

  changeValue() {
    this.profileService.buttonSubject.next(Math.random());
  }
}
