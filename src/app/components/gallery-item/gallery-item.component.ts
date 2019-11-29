import { Component } from "@angular/core";

@Component({
    selector:"app-gallery-item",
    templateUrl: "./gallery-item.component.html",
    styleUrls:["./gallery-item.component.scss"]
})
export class GalleryItemComponent{

    public isVisible = false;
    public isGalleryVisible = false;
    public array = [1, 2, 3, 4];
    public effect = 'scrollx';
    constructor(){}

    public openItemGallery(){
        this.isVisible= true;
        setTimeout(()=>{ 
            this.isGalleryVisible = true;
            console.log(this.isGalleryVisible);
       }, 2000);
    }
    public closeItemGallery(){
        this.isVisible= false;
        this.isGalleryVisible = false;
    }
}