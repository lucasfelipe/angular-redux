import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveCatComponent } from './save-cat.component';

describe('SaveCatComponent', () => {
  let component: SaveCatComponent;
  let fixture: ComponentFixture<SaveCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveCatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
