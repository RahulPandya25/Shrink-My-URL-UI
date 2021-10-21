import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [

    // default route 1
    { path: "", component: AppComponent},
    // default route 2
    // { path: "", redirectTo: "/tutor/subjects", pathMatch: "full" },
  
    // // tutor
    // { path: "tutor", component: TutorSubjectsComponent },
    // { path: "tutor/createSubject", component: CreateSubjectComponent },
    // { path: "tutor/tests", component: TutorTestsComponent },
    // { path: "tutor/tests/uploadTest", component: UploadTestComponent },
    // { path: "tutor/tests/studentList", component: StudentListComponent },
  
    // // student
    // { path: "student", component: StudentSubjectsComponent },
    // { path: "student/tests", component: StudentTestsComponent },
    // { path: "student/tests/takeTest", component: TakeTestComponent },
  
    // // misc
    // { path: "about", component: AboutComponent },
    // { path: "report", component: ReportComponent },
  
    // // unauthorize error page
    // { path: "unauthorized", component: UnauthorizedComponent },
  
    // // page not found route ALWAYS at last
    // { path: "**", component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
