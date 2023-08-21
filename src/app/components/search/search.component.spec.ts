import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from 'app/core/services/http.service';
import { MaterialModule } from 'app/shared/material_ui/material.module';
import { of } from 'rxjs';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let testHttpService: Partial<HttpService>;

  beforeEach(() => {
    testHttpService = {
      getBooks: () => of([
        {
          "title": "Happy Place",
          "id": 1,
          "price": 200,
          "thumbnailUrl": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTMtIHKz6P5NlEdwV3Mt1lL_fkoqXTj57c8hf-xXO06O6fIE3Gr",
          "longDescription": "Harriet and Wyn have been the perfect couple since they met in college—they go together like salt and pepper, honey and tea, lobster and rolls. They broke up six months ago. And still haven't told their best friends. Which is how they find themselves sharing the largest bedroom at the Maine cottage that has been their friend group’s yearly getaway for the last decade. Their annual respite from the world, where for one vibrant, blue week they leave behind their daily lives; have copious amounts of cheese, wine, and seafood; and soak up the salty coastal air with the people who understand them most. Only this year, Harriet and Wyn are lying through their teeth while trying not to notice how desperately they still want each other. Because the cottage is for sale and this is the last week they’ll all have together in this place. They can’t stand to break their friends’ hearts, and so they’ll play their parts. Harriet will be the driven surgical resident who never starts a fight, and Wyn will be the laid-back charmer who never lets the cracks show. It’s a flawless plan (if you look at it from a great distance and through a pair of sunscreen-smeared sunglasses). After years of being in love, how hard can it be to fake it for one week… in front of those who know you best?",
          "status": "PUBLISH",
          "authors": [
            "Emily Henry"
          ],
          "categories": [
            "Trending"
          ]
        },
        {
          "title": "Fourth Wing",
          "id": 2,
          "price": 300,
          "thumbnailUrl": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTMGygN6vmJYLi9nkL769kQfNDg3kt-zfrb1AQRkAnvtiUysGdh",
          "longDescription": "Twenty-year-old Violet Sorrengail was supposed to enter the Scribe Quadrant, living a quiet life among books and history. Now, the commanding general—also known as her tough-as-talons mother—has ordered Violet to join the hundreds of candidates striving to become the elite of Navarre: dragon riders. But when you’re smaller than everyone else and your body is brittle, death is only a heartbeat away...because dragons don’t bond to “fragile” humans. They incinerate them. With fewer dragons willing to bond than cadets, most would kill Violet to better their own chances of success. The rest would kill her just for being her mother’s daughter—like Xaden Riorson, the most powerful and ruthless wingleader in the Riders Quadrant. Yet, with every day that passes, the war outside grows more deadly, the kingdom's protective wards are failing, and the death toll continues to rise. Even worse, Violet begins to suspect leadership is hiding a terrible secret.",
          "status": "PUBLISH",
          "authors": [
            "Rebecca Yarros"
          ],
          "categories": [
            "Trending"
          ]
        },
      ]),
    };

    TestBed.configureTestingModule({
      imports:[RouterTestingModule,HttpClientTestingModule,MaterialModule],
      declarations: [SearchComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of(convertToParamMap({ search: 'book' })),
          },
        },
        { provide: HttpService, useValue: testHttpService },
      ],
    });
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update grid columns on window resize', () => {
    spyOnProperty(window, 'innerWidth').and.returnValue(1200);
    component.onWindowResize({});
    expect(component.cols).toBe(4);
  });

  it('should display book details in grid', () => {
    const bookTiles = fixture.debugElement.queryAll(By.css('.mat-grid-tile'));
    expect(bookTiles.length).toBe(2);

    const firstBookTitle = bookTiles[0].query(By.css('b')).nativeElement.textContent;
    expect(firstBookTitle).toContain('Happy Place');
  });

 
});