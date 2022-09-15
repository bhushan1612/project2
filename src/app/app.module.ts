import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { Ngif1Component } from './ngif1/ngif1.component';
import { PipesComponent } from './pipes/pipes.component';
import { MaxlengthPipe } from './maxlength.pipe';
import { NummaxlengthPipe } from './nummaxlength.pipe';
import { BackgroundcolorDirective } from './backgroundcolor.directive';


@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    NgclassComponent,
    TwowaybindingComponent,
    Ngif1Component,
    PipesComponent,
    MaxlengthPipe,
    NummaxlengthPipe,
    BackgroundcolorDirective,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
