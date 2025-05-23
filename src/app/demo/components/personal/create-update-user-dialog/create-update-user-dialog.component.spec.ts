import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateUserDialogComponent } from './create-update-user-dialog.component';

describe('CreateUpdateUserDialogComponent', () => {
  let component: CreateUpdateUserDialogComponent;
  let fixture: ComponentFixture<CreateUpdateUserDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateUpdateUserDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateUpdateUserDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
