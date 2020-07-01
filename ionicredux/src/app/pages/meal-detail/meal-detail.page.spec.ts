import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MealDetailPage } from './meal-detail.page';

describe('MealDetailPage', () => {
  let component: MealDetailPage;
  let fixture: ComponentFixture<MealDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MealDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
