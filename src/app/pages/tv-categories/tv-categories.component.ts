import { Component } from '@angular/core';
import {CategoriesService} from "../../services/categories.service";
import {ActivatedRoute, Params} from "@angular/router";
import {delay} from "rxjs";
import {TvService} from "../../services/tv.service";

@Component({
  selector: 'app-tv-categories',
  templateUrl: './tv-categories.component.html',
  styleUrls: ['./tv-categories.component.css']
})
export class TvCategoriesComponent {

  public id: number;
  topRated: any;
  loader = true;
  totalResults: any;
  total_results: any;

  constructor(
    private tvService: TvService,
    private router: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.router.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.getCategoryMovies(this.id);

    });
  }

  getCategoryMovies(id) {
    this.tvService.getByCategory(id).pipe(delay(1000)).subscribe((res: any) => {
        this.topRated = res.results;
        console.log(this.topRated);
        this.totalResults = res.total_results;
        this.loader = false;
      },
      error => console.log(error));
  }

}
