import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HierachyNodeComponent } from './hierachy-node.component';

describe('HierachyNodeComponent', () => {
  let component: HierachyNodeComponent;
  let fixture: ComponentFixture<HierachyNodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HierachyNodeComponent]
    });
    fixture = TestBed.createComponent(HierachyNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
