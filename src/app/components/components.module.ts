import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroModule } from '../shared/ng-zorro.module';
import { GlobalModule } from '../modules/module-global/global.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    NgZorroModule,
    GlobalModule
  ]
})
export class ComponentsModule { }
