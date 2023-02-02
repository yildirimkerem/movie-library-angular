import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {CategoryListComponent} from "./pages/category-list/category-list.component";
import {MoviesComponent} from "./pages/movies/movies.component";
import {MovieDetailsComponent} from "./pages/movie-details/movie-details.component";
import {CategoriesComponent} from "./pages/categories/categories.component";
import {CastsComponent} from "./pages/casts/casts.component";
import {TvCategoriesComponent} from "./pages/tv-categories/tv-categories.component";
import {TvShowDetailComponent} from "./pages/tv-show-detail/tv-show-detail.component";
import {TvShowsComponent} from "./pages/tv-shows/tv-shows.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
    path: 'movies/:id',
    component: MovieDetailsComponent
  },
  {
    path: 'movie-detail/:id',
    component: MovieDetailsComponent
  },
  {
    path: 'categories',
    component: CategoriesComponent
  },
  {
    path: 'category-movies/:id',
    component: CategoryListComponent
  },
  {
    path: 'casts/:id',
    component: CastsComponent
  },
  {
    path: 'tv-categories/:id',
    component: TvCategoriesComponent
  },
  {
    path: 'tv-shows',
    component: TvShowsComponent
  },
  {
    path: 'tv-show-detail/:id',
    component: TvShowDetailComponent
  },
  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
