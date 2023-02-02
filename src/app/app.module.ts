import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {HttpClientModule} from "@angular/common/http";
import {CarouselModule} from 'primeng/carousel';
import {HomeComponent} from './pages/home/home.component';
import {CategoriesComponent} from './pages/categories/categories.component';
import {MoviesComponent} from './pages/movies/movies.component';
import {CastsComponent} from './pages/casts/casts.component';
import {FooterComponent} from './template/footer/footer.component';
import {HeaderComponent} from './template/header/header.component';
import {MovieItemComponent} from './components/movie-item/movie-item.component';
import {MovieDetailsComponent} from './pages/movie-details/movie-details.component';
import {CategoryListComponent} from './pages/category-list/category-list.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import {SidebarModule} from "primeng/sidebar";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { TvCategoriesComponent } from './pages/tv-categories/tv-categories.component';
import { TvShowsComponent } from './pages/tv-shows/tv-shows.component';
import { TvShowDetailComponent } from './pages/tv-show-detail/tv-show-detail.component';
import { SkeletonComponentComponent } from './core/skeleton-component/skeleton-component.component';
import {NgxSkeletonLoaderModule} from "ngx-skeleton-loader";
import { SliderComponent } from './core/slider/slider.component';
import { NumberWithCommasPipe } from './pipe/number-with-commas.pipe';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButton, MatButtonModule} from "@angular/material/button";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatIconModule} from "@angular/material/icon";
import {MatTabGroup, MatTabsModule} from "@angular/material/tabs";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoriesComponent,
    MoviesComponent,
    CastsComponent,
    FooterComponent,
    HeaderComponent,
    MovieItemComponent,
    MovieDetailsComponent,
    CategoryListComponent,
    TvCategoriesComponent,
    TvShowsComponent,
    TvShowDetailComponent,
    SkeletonComponentComponent,
    SliderComponent,
    NumberWithCommasPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    CarouselModule,
    SidebarModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    NgxSkeletonLoaderModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatTabsModule,

  ],
  providers: [{
    provide: "APIKEY",
    useValue: "3ec1d423f49492823847ccec24a79694"
  },
    {
      provide: "BASEURL",
      useValue: "https://api.themoviedb.org/3/"
    },
    {
      provide: "LANGUAGE",
      useValue: "en-US"
    },
    {
      provide: "REGION",
      useValue: "US"
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
