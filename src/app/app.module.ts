import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material'




import { UserService } from './services/user/user.service'
import { AppComponent } from './app.component';
import { ListComponent } from './componentes/user/list/list.component';
import { CreateComponent } from './componentes/user/create/create.component';
import { EditComponent } from './componentes/user/edit/edit.component';
import { DeleteComponent } from './componentes/user/delete/delete.component';
import { HttpModule } from '../../node_modules/@angular/http';

const ROUTES: Routes = [
  {path: 'list/create', component: CreateComponent},
  {path: 'list/delete/:id', component: DeleteComponent},
  {path: 'list/edit/:id', component: EditComponent},
  {path: 'list', component: ListComponent},
  {path: '', redirectTo: 'list', pathMatch: 'full'}
];



@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateComponent,
    EditComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    MatToolbarModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
