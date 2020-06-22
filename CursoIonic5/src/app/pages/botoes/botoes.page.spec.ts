import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BotoesPage } from './botoes.page';

describe('BotoesPage', () => {
  let component: BotoesPage;
  let fixture: ComponentFixture<BotoesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotoesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BotoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
