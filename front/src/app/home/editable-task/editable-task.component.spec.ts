import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableTaskComponent } from './editable-task.component';

describe('EditableTaskComponent', () => {
  let component: EditableTaskComponent;
  let fixture: ComponentFixture<EditableTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditableTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditableTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
