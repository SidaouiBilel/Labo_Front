import {Routes} from "@angular/router";
import {ArticleComponent} from "./article/article.component";
import {ArticleResolver} from "../../article.resolver";

export const articleroute: Routes = [
  {path: 'article/:id', component: ArticleComponent,resolve: {articles:ArticleResolver}}
  ];
