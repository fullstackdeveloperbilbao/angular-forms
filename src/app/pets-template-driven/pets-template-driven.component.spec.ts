import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsTemplateDrivenComponent } from './pets-template-driven.component';

describe('PetsTemplateDrivenComponent', () => {
  let component: PetsTemplateDrivenComponent;
  let fixture: ComponentFixture<PetsTemplateDrivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetsTemplateDrivenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetsTemplateDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
