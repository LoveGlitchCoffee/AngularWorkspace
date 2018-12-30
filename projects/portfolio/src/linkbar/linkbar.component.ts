import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
    selector: 'app-linkbar',
    templateUrl: './linkbar.component.html',
    styleUrls: ['./linkbar.component.css']
})
export class LinkbarComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        $(document).ready(function () {            
            $('#sidebar').mCustomScrollbar({
                theme: "minimal"
            });

            $('#sidebarCollapse').on('click', function () {
                // open or close navbar
                $('#sidebar, #content').toggleClass('active');
            });
        });
    }

}
