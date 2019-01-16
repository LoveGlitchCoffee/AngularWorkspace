import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkbarComponent } from './linkbar.component';

describe('LinkbarComponent', () => {
  let component: LinkbarComponent;
  let fixture: ComponentFixture<LinkbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
