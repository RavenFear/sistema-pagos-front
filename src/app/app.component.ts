import {Component, OnInit, ViewChild} from '@angular/core';
import {PrimeNGConfig} from 'primeng/api';
import {AppConfigComponent} from "./layout/config/app.config.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    providers: [AppConfigComponent]
})
export class AppComponent implements OnInit {


    constructor(private primengConfig: PrimeNGConfig,
                private appConfig: AppConfigComponent) {
    }

    ngOnInit(): void {
        this.primengConfig.ripple = true;
        this.appConfig.changeScene({
            sceneName: 'Blue Marble',
            colorScheme: 'light',
            colorSchemeColor: '#EFEFEF',
            menuTheme: 'light',
            menuThemeColor: '#ffffff',
            componentTheme: 'blue',
            componentThemeColor: '#0d6efd',
            topbarTheme: 'blue',
            topbarThemeColor: '#1565C0',
            menuMode: 'horizontal',
            cardColor: '#ffffff',
        })

    }

}
