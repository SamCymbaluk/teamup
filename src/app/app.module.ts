import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavibarComponent } from './navibar/navibar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatDialogModule} from '@angular/material';
import { SignupComponent } from './signup/signup.component';
import {FormsModule} from '@angular/forms';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './project/project.component';
import {RouterModule, Routes} from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';

const appRoutes: Routes = [
  {path: 'ideas', component: ProjectsComponent },
  {path: '', component: HomepageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavibarComponent,
    SignupComponent,
    ProjectsComponent,
    ProjectComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    MatDialogModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes)
  ],
  entryComponents: [
    SignupComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
