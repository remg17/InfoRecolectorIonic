import { NgModule } from "@angular/core";
import { LogoPreviewComponent } from "./logo-preview/logo-preview.component";

@NgModule({
    declarations: [
        LogoPreviewComponent
    ],
    exports: [
        LogoPreviewComponent
    ]
})
export class ComponentsModule {}