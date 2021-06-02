import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatcherStringTestComponent } from './matcher-string-test/matcher-string-test.component';
import { MatcherArrayTestComponent } from './matcher-array-test/matcher-array-test.component';
import { EmployeeComponent } from './employee/employee.component';
import { EventTestComponent } from './event-test/event-test.component';

@NgModule({
  declarations: [
    AppComponent,
    MatcherStringTestComponent,
    MatcherArrayTestComponent,
    EmployeeComponent,
    EventTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
