import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BandSingleComponent } from './bands/band-single/band-single.component';
import { BandsComponent } from './bands/bands.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth.guard';
import { SongsComponent } from './songs/songs.component';

const routes: Routes = [
  { path: '', redirectTo: 'bands', pathMatch: 'full' },
  { path: 'bands', component: BandsComponent},
  { path: 'band/:id', component: BandSingleComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  {path: 'songs', component: SongsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
