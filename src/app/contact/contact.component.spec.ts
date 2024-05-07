import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  function menuOnClick(): void {
    const menuBar: HTMLElement = document.getElementById("menu-bar")!;
    const nav: HTMLElement = document.getElementById("nav")!;
    const menuBg: HTMLElement = document.getElementById("menu-bg")!;

    menuBar.classList.toggle("change");
    nav.classList.toggle("change");
    menuBg.classList.toggle("change-bg");
  }

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
