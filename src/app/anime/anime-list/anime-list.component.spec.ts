import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { AnimeListComponent } from './anime-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Anime } from '../anime';
import { AnimeService } from '../anime.service';

describe('AnimeListComponent', () => {
 let component: AnimeListComponent;
 let fixture: ComponentFixture<AnimeListComponent>;
 let debug: DebugElement;

 beforeEach(async(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientModule],
     declarations: [ AnimeListComponent ],
     providers: [ AnimeService ]
   })
   .compileComponents();
 }));

 beforeEach(() => {
   fixture = TestBed.createComponent(AnimeListComponent);
   component = fixture.componentInstance;

   for(let i = 0; i < 10; i++) {
     const anime = new Anime(
       faker.number.int(),
       faker.lorem.sentence(),
       faker.lorem.sentence(),
       faker.number.int(),
       faker.lorem.sentence(),
       faker.lorem.sentence(),
       faker.lorem.sentence(),
       faker.image.url(),
     );
     component.animes.push(anime);
   }
   fixture.detectChanges();
   debug = fixture.debugElement;
 });

 it('should create', () => {
   expect(component).toBeTruthy();
 });

 it('should have 10 <div.col.mb-2> elements', () => {
   expect(debug.queryAll(By.css('div.col.mb-2'))).toHaveSize(10)
 });

 it('should have 10 <card.p-2> elements', () => {
   expect(debug.queryAll(By.css('div.card.p-2'))).toHaveSize(10)
 });

 it('should have 10 <img> elements', () => {
   expect(debug.queryAll(By.css('img'))).toHaveSize(10)
 });

 it('should have 10 <div.card-body> elements', () => {
   expect(debug.queryAll(By.css('div.card-body'))).toHaveSize(10)
 });

 it('should have the corresponding src to the book image and alt to the book name', () => {
   debug.queryAll(By.css('img')).forEach((img, i)=>{
     expect(img.attributes['src']).toEqual(
       component.animes[i].image)

     expect(img.attributes['alt']).toEqual(
       component.animes[i].name)
   })
 });

 it('should have h5 tag with the book.name', () => {
   debug.queryAll(By.css('h5.card-title')).forEach((h5, i)=>{
     expect(h5.nativeElement.textContent).toContain(component.animes[i].name)
   });
 });

});