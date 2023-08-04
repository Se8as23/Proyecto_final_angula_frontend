import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarclienteComponent } from './listarcliente.component';

describe('ListarclienteComponent', () => {
  let component: ListarclienteComponent;
  let fixture: ComponentFixture<ListarclienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarclienteComponent]
    });
    fixture = TestBed.createComponent(ListarclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
