import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './carousel.component';


describe('CarouselComponent', () =>
{
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;

  beforeEach(() =>
  {
    TestBed.configureTestingModule({
      imports: [NgbModule, RouterModule],
      declarations: [CarouselComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {},
        },
      ],
    });
    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () =>
  {
    expect(component).toBeTruthy();
  });

  it('should be minimum number of images', () =>
  {
    let element = fixture.nativeElement;
    let imagesarray = element.querySelectorAll('img')
    expect(imagesarray.length).toBeGreaterThanOrEqual(2)
  })

});
