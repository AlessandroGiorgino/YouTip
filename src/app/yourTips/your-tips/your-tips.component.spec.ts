import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourTipsComponent } from './your-tips.component';

describe('YourTipsComponent', () => {
  let component: YourTipsComponent;
  let fixture: ComponentFixture<YourTipsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YourTipsComponent]
    });
    fixture = TestBed.createComponent(YourTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
