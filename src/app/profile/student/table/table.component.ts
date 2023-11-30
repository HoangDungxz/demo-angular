import { Component, OnInit } from '@angular/core';
import { IProfile } from '../../shared/interface/profile';
import { ProfileService } from '../../shared/services/profile.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  constructor(private profileService: ProfileService) {}
  students: IProfile[] = [];

  ngOnInit(): void {
    this.profileService.getAll().subscribe((e) => {
      this.students = e;
    });
  }
}
