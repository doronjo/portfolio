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
            tizerImage:"http://res.cloudinary.com/doronjo/image/upload/v1575758589/liorajo/tizer1_qtzqyj.jpg",
            gallery:["http://res.cloudinary.com/doronjo/image/upload/v1575758592/liorajo/sheet1_d3aik8.png"]
        } 
    }

}  