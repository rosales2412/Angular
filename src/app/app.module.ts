import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }import { from } from 'rxjs';
import { LoaderComponent } from './components/loader/loader.component';
import { ButtonComponent } from './components/button/button.component';

