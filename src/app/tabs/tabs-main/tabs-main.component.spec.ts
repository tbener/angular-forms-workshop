import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsMainComponent } from './tabs-main.component';

describe('TabsMainComponent', () => {
  let component: TabsMainComponent;
  let fixture: ComponentFixture<TabsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
