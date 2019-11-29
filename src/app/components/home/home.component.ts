import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Subscriber } from 'rxjs/internal/Subscriber';

@Component({
  selector:'app-home',
  templateUrl: './home.component.html',
  styleUrls:['./home.component.scss'],

})
export class HomeComponent {

    public foo;
    constructor(){
        this.foo = new Observable(subscriber=>{
            console.log("Hello");
            //subscriber.next(42);
        })
    }

    public testme(){
        
        this.foo.subscribe(x => {
            console.log(x);
        });
        this.foo.subscribe(y => {
            console.log(y);
        });
    }


}  