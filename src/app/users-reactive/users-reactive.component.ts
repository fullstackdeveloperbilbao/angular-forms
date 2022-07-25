import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users-reactive',
  templateUrl: './users-reactive.component.html',
  styleUrls: ['./users-reactive.component.scss'],
})
export class UsersReactiveComponent implements OnInit {
  userForm: FormGroup;
  videogames: string[];
  constructor() {
    this.userForm = new FormGroup({
      name: new FormControl('Juanjo', Validators.required),
      father: new FormControl('Manolo'),
      videogames: new FormControl(
        ['Metroid Prime', 'Animal Crossing'],
        Validators.required
      ),
    });
    this.videogames = [
      'Metroid Prime',
      'Super Mario',
      'Animal Crossing',
      'Assasins Creed',
    ];
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
    }
  }

  onClear() {
    this.userForm.reset();
  }

  findControl(controlName: string) {
    return this.userForm.get(controlName) as FormControl;
  }
}
