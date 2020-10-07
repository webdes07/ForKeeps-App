import { MatDatepickerModule } from '@angular/material/datepicker';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { BodyHeaderComponent } from './reusable-component/body-header/body-header.component';
import { MenuComponent } from './reusable-component/menu/menu.component';
import { GetStartedComponent } from './pages/get-started/get-started.component';  
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { FeatureBoxComponent } from './reusable-component/feature-box/feature-box.component';
import { FeatureSliderComponent } from './reusable-component/feature-slider/feature-slider.component'; 
import { CarouselModule } from 'ngx-owl-carousel-o'; 
 
 
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HeaderComponent,
    FooterComponent,
    BodyHeaderComponent,
    MenuComponent,
    GetStartedComponent,
    routingComponents,
    FeatureBoxComponent,
    FeatureSliderComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgSelectModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatMomentDateModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
