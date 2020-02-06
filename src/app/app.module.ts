import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SlidebarComponent } from './slidebar/slidebar.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { FooterComponent } from './footer/footer.component';
import { SigninComponent } from './signin/signin.component';
import { InfoService } from './info.service';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from './../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule,MatMenu, MatButtonModule,MatTabsModule } from '@angular/material';
import { ContactComponent } from './contact/contact.component';
import { BookComponent } from './book/book.component';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SlidebarComponent,
    ProductComponent,
    CartComponent,
    FooterComponent,
    SigninComponent,
    ContactComponent,
    BookComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // for connecting firebase 
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    // firebase connected
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatTabsModule,
    MatButtonModule,
  ],
  providers: [InfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
