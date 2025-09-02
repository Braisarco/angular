import { NgModule, Optional, SkipSelf } from "@angular/core";

// core/core.module.ts
@NgModule({
  providers: [
    // Servicios singleton aquí
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule ya está cargado. Impórtalo solo en AppModule.');
    }
  }
}