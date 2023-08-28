import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { MatIconModule } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from 'app/shared/material_ui/material.module';
import { FooterComponent } from './footer.component';
import { MatIconModule } from '@angular/material/icon';
describe('FooterComponent', () =>
{
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(() =>
  {
    TestBed.configureTestingModule({
      imports: [MatIconModule],
      declarations: [FooterComponent],
    });
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () =>
  {
    expect(component).toBeTruthy();
  });
});
