import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutprojetComponent } from './ajoutprojet.component';

describe('AjoutprojetComponent', () => {
  let component: AjoutprojetComponent;
  let fixture: ComponentFixture<AjoutprojetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutprojetComponent]
    });
    fixture = TestBed.createComponent(AjoutprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
