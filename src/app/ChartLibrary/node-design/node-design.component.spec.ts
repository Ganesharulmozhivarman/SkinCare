import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeDesignComponent } from './node-design.component';

describe('NodeDesignComponent', () => {
  let component: NodeDesignComponent;
  let fixture: ComponentFixture<NodeDesignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NodeDesignComponent]
    });
    fixture = TestBed.createComponent(NodeDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
