import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css'],
})
export class SharedComponent implements OnInit, OnChanges {
  @Input() formName: FormGroup = new FormGroup({});
  @Input() name: string = '';
  message = '';

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit(): void {
    this.formName.get(this.name)?.valueChanges.subscribe((e) => {
      if (this.formName.get(this.name)?.invalid) {
        this.message = 'Lỗi rồi';
      }
    });
  }
}
