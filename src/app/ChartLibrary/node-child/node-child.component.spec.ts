import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeChildComponent } from './node-child.component';

describe('NodeChildComponent', () => {
  let component: NodeChildComponent;
  let fixture: ComponentFixture<NodeChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NodeChildComponent]
    });
    fixture = TestBed.createComponent(NodeChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
