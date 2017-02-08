//application shell
import { Component } from '@angular/core';


@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css']
})

export class AppComponent { 
    name = 'Feelin\' It'; 
    item = '';

    searchInput(value: string){
        if (value) {
            this.item = value;
            //remove all special characters and whitespaces
            this.item = this.item.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/\s]+/g, "");
            //add a hashtag for twitter keyword
            this.item = '#' + this.item;
        }
    }
}