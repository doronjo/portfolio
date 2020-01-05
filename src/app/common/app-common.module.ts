import { ImageLoaderService } from "./services/image-loader.servcies";
import { AppLoader } from "./components/loader/loader.component"
import { VioxAnimationDirective } from "./directives/viox-animation.directive";
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppLoader,
    VioxAnimationDirective
  ],
  imports: [
  ],
  providers: [ ImageLoaderService ],
  exports:[
    AppLoader,
    VioxAnimationDirective
  ]
})
export class AppCommonModule { }
