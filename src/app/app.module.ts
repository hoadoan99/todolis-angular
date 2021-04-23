import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ListComponent } from './list/list.component';
import { AddListComponent } from './add-list/add-list.component';
import {MatButtonModule} from '@angular/material/button';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { MaterialTutorialComponent } from './material-tutorial/material-tutorial.component';
// import { NgRedux, NgReduxModule} from 'ng2-redux'
// import {IAppState, rootReducer} from './material-tutorial/store'
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddListComponent,
    MaterialTutorialComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    DragDropModule,
    FormsModule,
    // NoopAnimationsModule,
    // NgRedux,
    // NgReduxModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
    // constructor(NgRedux: NgRedux<IAppState>){
    //   NgRedux.configureStore(rootReducer,{});
    // }
 }
