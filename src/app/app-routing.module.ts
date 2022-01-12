 import { NgModule, Component } from '@angular/core';
 import { RouterModule, Routes } from '@angular/router';
 import { QuestionComponent } from './components/question/question.component';
 import { Question3Component } from './components/question3/question3.component';
 import { Question4Component } from './components/question4/question4.component';


const routes: Routes = [
  { path: 'question', component: QuestionComponent },
  { path: 'question4', component: Question4Component },
  { path: '', component: Question3Component, pathMatch: 'full' },
  { path: '**', component: Question3Component, pathMatch: 'full' },

 ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
