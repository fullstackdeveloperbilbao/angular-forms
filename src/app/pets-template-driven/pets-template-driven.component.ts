import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Pet } from './pet.model';

@Component({
  selector: 'app-pets-template-driven',
  templateUrl: './pets-template-driven.component.html',
  styleUrls: ['./pets-template-driven.component.scss'],
})
export class PetsTemplateDrivenComponent implements OnInit {
  actualPet: Pet;
  toys: string[];
  constructor() {
    const pet = new Pet('Toby', ['ball', 'teddy'], 'Tom');
    this.actualPet = pet;
    this.toys = ['ball', 'teddy', 'cord', 'bone']
  }

  ngOnInit(): void {}

  onSubmit(petForm: FormGroup) {
    if (petForm.valid) {
      // Two ways of getting form values

      // First one passing as parameter from html. Property names coincide with name attribute of html tags.
      // Check that name property name appears as passedName con console
      console.log(petForm.value);

      // Second one getting the binded model to the form
      console.log(this.actualPet)

      // Property values must coincide but property names can vary depending on the name attributes
    }
  }
}
