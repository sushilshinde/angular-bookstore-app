import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { MatIconModule } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from 'app/material_ui/material.module';
import { FooterComponent } from './footer.component';
import { MatIcon, MatIconModule } from '@angular/material/icon';
// import { MaterialModule } from 'app/material_ui/material.module';
// import { RouterTestingModule } from '@angular/router/testing';
describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, MatIconModule, RouterTestingModule],
      declarations: [FooterComponent],
    });
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
