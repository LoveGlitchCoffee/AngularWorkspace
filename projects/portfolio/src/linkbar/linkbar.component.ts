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
        // jquery
        $(document).ready(function () {
            // custom scrollbar for fixed sidebar
            // https://bootstrapious.com/p/bootstrap-sidebar - tutorial for fixed sidebar
            $('#sidebar').mCustomScrollbar({
                theme: "minimal"
            });

            // change class to hidden for both block,
            // so css styling can take effect
            $('#sidebarCollapse').on('click', function () {
                // open or close navbar
                $('#sidebar, #content').toggleClass('hidden');
            });
        });
    }

}
