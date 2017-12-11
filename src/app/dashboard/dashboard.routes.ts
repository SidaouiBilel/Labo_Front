import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { IconsComponent } from './icons/icons.component';
import { TableComponent } from './members/table.component';
import { TypographyComponent } from './forum/typography.component';
import { MapsComponent } from './maps/maps.component';
import {SigninComponent} from "./Sign in/SigninComponent";
import {articleroute} from "./maps/article.routes";
import {ArticleComponent} from "./maps/article/article.component";
import {GuardService} from "../services/guard.Component";
import {ModifierComponent} from "./modifier/modifier.component";
import {PublicationsComponent} from "./forum/Publications/publications/publications.component";
import {ArticleResolver} from "../article.resolver";
import {PostsComponent} from "./forum/Publications/posts/posts.component";
import {EditorComponent} from "./editor/editor.component";
import {MessageComponent} from "./message/message.component";
import {AddEmailComponent} from "./Addemail/AddEmailComponent";

export const MODULE_ROUTES: Route[] =[
    { path: 'profile', component:ModifierComponent, canActivate:[GuardService]},
    { path: 'dashboard', component: HomeComponent },
  { path: 'pub/:id',component: PublicationsComponent,pathMatch: 'full'},
  { path: 'post/:id',component: PostsComponent,pathMatch: 'full'},
    { path: 'user', component: UserComponent },
    { path: 'table', component: TableComponent},
    { path: 'icons', component: IconsComponent},
     { path: 'msg', component: MessageComponent,canActivate:[GuardService] },
    { path: 'signin', component: SigninComponent },
    { path: 'forum', component: TypographyComponent },
    { path: 'maps', component: MapsComponent, children: articleroute },
    { path: 'editor' , component: EditorComponent, canActivate:[GuardService]},
    { path: 'addemail', component: AddEmailComponent, canActivate:[GuardService]},
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
]

export const MODULE_COMPONENTS = [
    HomeComponent,
    UserComponent,
    TableComponent,
    IconsComponent,
    TypographyComponent,
    MapsComponent,
    SigninComponent,
    ArticleComponent,
    ModifierComponent,
    PublicationsComponent,
    PostsComponent,
    EditorComponent,
    MessageComponent,
    AddEmailComponent
]
