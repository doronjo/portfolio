import { ImageLoaderService } from "./services/image-loader.servcies";
import { AppLoader } from "./components/loader/loader.component"
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppLoader
  ],
  imports: [

  ],
  providers: [ ImageLoaderService ],
  exports:[
    AppLoader
  ]
})
export class AppCommonModule { }
