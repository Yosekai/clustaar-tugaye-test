import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleIntentsDialogComponent } from './simple-intents-dialog.component';

describe('SimpleIntentsDialogComponent', () => {
  let component: SimpleIntentsDialogComponent;
  let fixture: ComponentFixture<SimpleIntentsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleIntentsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleIntentsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
