import { AppComponent } from './app.component';
import { NgModule } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptHttpModule } from "nativescript-angular/http";


@NgModule({
  imports: [NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
