import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

import { AppComponent } from './app.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { SampleDirective } from './customDirective/sample.directive';
import { ParentForInputOutputComponent } from './parent-for-input-output/parent-for-input-output.component';
import { ChildForInputOutputComponent } from './child-for-input-output/child-for-input-output.component';
import { NgIfThenElseComponent } from './ng-if-then-else/ng-if-then-else.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { TestViewChildComponent } from './test-view-child/test-view-child.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgClassAndNgStyleComponent } from './ng-class-and-ng-style/ng-class-and-ng-style.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { TestsampledirectiveComponent } from './testsampledirective/testsampledirective.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RichTextEditorComponent } from './rich-text-editor/rich-text-editor.component';

const appRoutes: Routes=[
  {path:'',component:DataBindingComponent},
  {path:'ngSwitch',component: NgSwitchComponent},
  {path:'ngIfThenElse',component: NgIfThenElseComponent},
  {path:'ngFor',component: NgForComponent},
  {path:'ngClassAndNgStyle',component: NgClassAndNgStyleComponent},
  {path:'dataBinding',component: DataBindingComponent},
  {path:'viewChild',component:ViewChildComponent},
  {path:'sampleDirective',component:TestsampledirectiveComponent},
  {path:'inputOutputDecorator',component: ParentForInputOutputComponent},
  {path:'richTextEditor',component: RichTextEditorComponent},
  {path:'**',component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NgSwitchComponent,
    SampleDirective,
    ParentForInputOutputComponent,
    ChildForInputOutputComponent,
    NgIfThenElseComponent,
    ViewChildComponent,
    TestViewChildComponent,
    NgForComponent,
    NgClassAndNgStyleComponent,
    DataBindingComponent,
    RichTextEditorComponent,
    TestsampledirectiveComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FroalaEditorModule,
    FroalaViewModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
