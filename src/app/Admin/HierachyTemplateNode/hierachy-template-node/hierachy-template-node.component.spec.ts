import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HierachyTemplateNodeComponent } from './hierachy-template-node.component';

describe('HierachyTemplateNodeComponent', () => {
  let component: HierachyTemplateNodeComponent;
  let fixture: ComponentFixture<HierachyTemplateNodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HierachyTemplateNodeComponent]
    });
    fixture = TestBed.createComponent(HierachyTemplateNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
