import {Component} from '@angular/core';
import {CategoriesService} from "../../services/categories.service";
import {MoviesService} from "../../services/movies.service";
import {TvService} from "../../services/tv.service";
import {delay} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  categoriesList: any;
  moviesTrendingList: any;
  tvOnTheAirList: any;
  responsiveOptions;
  loader = true;

  constructor(
    private categoriesService: CategoriesService,
    private moviesService: MoviesService,
    private tvService: TvService,
  ) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit() {

    this.getCategoriesList();
    this.getMoviesTrending(1);
    this.getTvOnTheAir(1);
  }

  getCategoriesList() {
    this.categoriesService.getList().pipe(   delay(1000)).subscribe((res: any) => {
      this.categoriesList = res.genres;
      this.loader = false;
    });
  }

  getMoviesTrending(page: number) {
    this.moviesService.getTrending(page).pipe(delay(1000)).subscribe((res: any) => {
      this.moviesTrendingList = res.results;
      this.loader = false;
    });
  }

  getTvOnTheAir(page: number) {
    this.tvService.getOnTheAir(page).pipe(delay(1000)).subscribe((res: any) => {
      this.tvOnTheAirList = res.results;
      this.loader = false;
    });
  }

}
