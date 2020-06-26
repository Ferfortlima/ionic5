import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NativosPage } from './nativos.page';

describe('NativosPage', () => {
  let component: NativosPage;
  let fixture: ComponentFixture<NativosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NativosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NativosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
