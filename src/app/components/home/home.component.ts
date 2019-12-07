import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber, from, pipe, of ,forkJoin } from 'rxjs';
import { concatMap, take, map, mergeMap, merge, combineAll, concatAll ,timeout } from 'rxjs/operators';
import { FormArray } from '@angular/forms';




@Component({
  selector:'app-home',
  templateUrl: './home.component.html',
  styleUrls:['./home.component.scss'],

})
export class HomeComponent implements OnInit{

    public collection:any;
    constructor(){
    }

    ngOnInit(){

        this.collection = {
            header:"Liora Collection",
            decription:"this is lioras new collection",
            tizerImage:"https://res.cloudinary.com/doronjo/image/upload/v1574975972/liorajo/4_lx3wod.jpg",
            gallery:["https://res.cloudinary.com/doronjo/image/upload/v1575719209/liorajo/Artboard_3_2x_u6rwek.png"
            ]
        } 
    }

}  