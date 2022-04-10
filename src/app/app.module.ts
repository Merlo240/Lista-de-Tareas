import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import{ HttpClientModule}from '@angular/common/http';
import{FormsModule} from '@angular/forms'
import { RouterModule,Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { ButtonComponent } from './Components/button/button.component';
import { TasksComponent } from './Components/tasks/tasks.component';
import { TasksItemComponent } from './Components/tasks-item/tasks-item.component';
import { AddTaskComponent } from './Components/add-task/add-task.component';
import { AboutComponent } from './Components/about/about.component';
import { FooterComponent } from './Components/footer/footer.component';

const appRoutes:Routes=[
  {path: '',component:TasksComponent},
  {path: 'about',component:AboutComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TasksItemComponent,
    AddTaskComponent,
    AboutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes,{enableTracing:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
