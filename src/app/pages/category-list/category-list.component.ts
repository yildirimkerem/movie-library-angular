import {Component} from '@angular/core';
import {MoviesService} from "../../services/movies.service";
import {delay} from "rxjs";
import {ActivatedRoute, Params} from "@angular/router";
import {CategoriesService} from "../../services/categories.service";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent {

  public id: number;
  topRated: any;
  loader = true;
  totalResults: any;
  total_results: any;

  constructor(
    private categoriesService: CategoriesService,
    private router: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.router.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.getCategoryMovies(this.id);

    });
  }

  getCategoryMovies(id) {
    this.categoriesService.getMovies(id).pipe(delay(1000)).subscribe((res: any) => {
        this.topRated = res.results;
        console.log(this.topRated);
        this.totalResults = res.total_results;
        this.loader = false;
      },
      error => console.log(error));
  }

}
