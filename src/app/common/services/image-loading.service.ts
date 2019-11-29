import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { from, forkJoin } from 'rxjs';
import { ArrayType } from '@angular/compiler/src/output/output_ast';


@Injectable()
export class DJGalleryService {

  public loadImages(pathes: string[]){
    return from(pathes)
  }  
  private loadImage(imagePath: string): void {
    var obs = new Observable((sebcriber)=>{
        var img = new Image();
        img.onload = ()=>{
            sebcriber.next(img);
            sebcriber.complete(); 
        }

    })
    
    
  }


}