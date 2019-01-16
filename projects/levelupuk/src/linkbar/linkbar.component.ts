import { Component, OnInit, HostListener } from '@angular/core';
declare var $: any;

@Component({
    selector: 'app-linkbar',
    templateUrl: './linkbar.component.html',
    styleUrls: ['./linkbar.component.css']
})
export class LinkbarComponent implements OnInit {

    sidebarShow: boolean = false;    
    clickDocCounter = 0

    @HostListener('document:click', ['$event'])
    documentClick(event: MouseEvent) {
        // this essentially is called after sidebarShow is toggled
        // so first call needs this counting logic      
        if (this.clickDocCounter < 2 && this.sidebarShow)
            this.clickDocCounter++;
        else
        {
            this.sidebarShow = false;
            this.clickDocCounter = 0;
        }
    }

    sidebarCollapse() {
        this.sidebarShow = !this.sidebarShow;        
        this.clickDocCounter++;
    }

    constructor() { }

    ngOnInit() {
        // jquery
        $(document).ready(function () {
            // custom scrollbar for fixed sidebar
            // https://bootstrapious.com/p/bootstrap-sidebar - tutorial for fixed sidebar
            $('#sidebar').mCustomScrollbar({
                theme: "minimal"
            });
        });


    }

}
