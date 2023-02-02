import { Component } from '@angular/core';
import {MoviesService} from "../../services/movies.service";
import {ActivatedRoute, Params} from "@angular/router";
import {CastsService} from "../../services/casts.service";
import {delay} from "rxjs";


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent {
  public id: number;
  public video: boolean;
  baseUrl = 'https://www.youtube.com/embed/';
  autoplay = '?rel=0;&autoplay=1&mute=0';
  movie: any;
  casts: any ;
  crews: any ;
  loader = true;
  relatedvideo: any;
  backdrops: any = [];
  recomendMovies: any = [];
  responsiveOptions;
  constructor(
    private movieService: MoviesService,
    private castsService: CastsService,
    private router: ActivatedRoute,

  ){
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
    this.router.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.getMoviesDetails(this.id);
      this.getCastsMovies(this.id);
      this.getSingleMoviesVideos(this.id);
      this.getBackropsImages(this.id);
      this.getRecomendMovie(this.id);
    });
  }

  getSingleMoviesVideos(id) {
    this.movieService.getVideos(id).subscribe((res: any) => {
      if (res.results.length) {
        this.video = res.results[0];
        this.relatedvideo = res.results;
      }
    });
  }


  getMoviesDetails(id){
    this.movieService.getById(id).pipe(delay(1000)).subscribe((res: any) => {
      this.movie = res;

    });
  }

  getCastsMovies(id){
    this.castsService.getMovies(id).pipe(delay(1000)).subscribe((res: any) => {
      this.casts = res.cast;
      this.crews = res.crew;
      this.loader = false;

    });
  }

  getBackropsImages(id) {
    this.movieService.getBackdropsImages(id).subscribe((res: any) => {
      this.backdrops = res.backdrops;
      console.log(this.backdrops);

    });
  }

  getRecomendMovie(id) {
    this.movieService.getRecommendations(id).subscribe((res: any) => {
      this.recomendMovies = res.results;
    });
  }

}
