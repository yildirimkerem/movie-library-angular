import { Component } from '@angular/core';
import { trigger, transition, animate, style, state } from '@angular/animations';
import {MoviesService} from "../../services/movies.service";
import {delay} from "rxjs";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [style({ opacity: 0 }), animate('300ms', style({ opacity: 1 }))]),
      transition('* => void', [style({ opacity: 1 }), animate('300ms', style({ opacity: 0 }))]),
    ])
  ]
})
export class SliderComponent {
  current = 0;
  moviesList: any;
  loader = true;
  constructor(
    private movieService: MoviesService,
  ) { }

  ngOnInit() {
    this.getMoviesList(1);
    this.sliderTimer();
  }

  getMoviesList(page: number) {
    this.movieService.getNowPlaying(page).pipe(delay(1000)).subscribe((res: any) => {
      this.moviesList = res.results;
      this.loader = false;
    });
  }

  sliderTimer() {
    setInterval(() => {
      this.current = ++this.current % this.moviesList.length;
    }, 9000);
  }
}
