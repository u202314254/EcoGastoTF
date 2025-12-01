import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Misseguridades } from './misseguridades';

describe('Misseguridades', () => {
  let component: Misseguridades;
  let fixture: ComponentFixture<Misseguridades>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Misseguridades]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Misseguridades);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
