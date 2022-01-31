import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntentsDialogComponent } from './intents-dialog.component';

describe('IntentsDialogComponent', () => {
  let component: IntentsDialogComponent;
  let fixture: ComponentFixture<IntentsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntentsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntentsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
