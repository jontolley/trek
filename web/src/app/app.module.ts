import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { StaticModule } from '@app/static';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClothingComponent } from './pages/clothing/clothing.component';
import { PackingComponent } from './pages/packing/packing.component';
import { FaqComponent } from './pages/faq/faq.component';
import { ContactComponent } from './pages/contact/contact.component';
import { InformationComponent } from './pages/information/information.component';

@NgModule({
  declarations: [
    AppComponent,
    ClothingComponent,
    PackingComponent,
    FaqComponent,
    ContactComponent,
    InformationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    CoreModule,
    SharedModule,
    StaticModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
