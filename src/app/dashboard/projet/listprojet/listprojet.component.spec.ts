import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListprojetComponent } from './listprojet.component';

describe('ListprojetComponent', () => {
  let component: ListprojetComponent;
  let fixture: ComponentFixture<ListprojetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListprojetComponent]
    });
    fixture = TestBed.createComponent(ListprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
