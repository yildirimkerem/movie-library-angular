import { Component } from '@angular/core';
import {MoviesService} from "../../services/movies.service";
import {delay} from "rxjs";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {
  topRated: any;
  responsiveOptions;
  loader = true;
  totalResults: any;
  totalResultsTemp: any;
  total_results: any;
  searchRes: any;
  searchStr: string;

  constructor(private movieService: MoviesService) {
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
    this.getTopRatedMovies(1);
  }
  getTopRatedMovies(page: number) {
    this.movieService.getTopRated(page).pipe(delay(1000)).subscribe((res: any) => {
        this.topRated = res.results;
        this.totalResults = res.total_results;
        this.loader = false;
      },
      error => console.log(error));
  }

  changePage(event) {
    this.loader = true;
    this.getTopRatedMovies(event.pageIndex + 1);
  }

  searchMovies() {
    if (this.searchStr == "") {
      this.getTopRatedMovies(1);
    }
    this.movieService.getSearch(this.searchStr).subscribe(res => {
      this.topRated = res.results;
    });
  }

}
