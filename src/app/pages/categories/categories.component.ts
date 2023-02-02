import { Component } from '@angular/core';
import {CategoriesService} from "../../services/categories.service";
import {delay} from "rxjs";
import {TvService} from "../../services/tv.service";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  categoriesList: any;
  tvCategoriesList: any;
  loader = true;

  constructor(
    private categoriesService: CategoriesService,
    private tvService: TvService,
  ) {

  }

  ngOnInit() {

    this.getCategoriesList();
    this.getTvCategoriesList();
  }

  getCategoriesList() {
    this.categoriesService.getList().pipe(   delay(1000)).subscribe((res: any) => {
      this.categoriesList = res.genres;
      this.loader = false;
    });
  }
  getTvCategoriesList() {
    this.tvService.getCategory().pipe(   delay(1000)).subscribe((res: any) => {
      this.tvCategoriesList = res.genres;
      this.loader = false;
    });
  }
}
