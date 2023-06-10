import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordComponentComponent } from './record-component.component';

describe('RecordComponentComponent', () => {
  let component: RecordComponentComponent;
  let fixture: ComponentFixture<RecordComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecordComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
