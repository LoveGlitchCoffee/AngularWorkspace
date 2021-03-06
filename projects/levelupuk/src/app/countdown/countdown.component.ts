import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Config } from "ngx-countdown";
import datacfg from "../../assets/config.json";


@Component({
    selector: 'app-countdown',
    templateUrl: './countdown.component.html',
    styleUrls: ['./countdown.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class CountdownComponent implements OnInit {    

    showCountdown: boolean;
    eventName: string;
    eventLink: string;

    config: Config = {        
        leftTime: (+(new Date(Date.UTC(datacfg.CountTo.Year, datacfg.CountTo.Month, datacfg.CountTo.Day))).getTime() - Date.now()) / 1000,
        repaint: function () {        
            const me: any = this;
            let content: string;

            me.hands.forEach((hand: any) => {
                if (hand.lastValue !== hand.value) {
                    content = '';
                    const cur = me.toDigitals(hand.value + 1, hand.bits).join(''),
                        next = me.toDigitals(hand.value, hand.bits).join('');

                    hand.node.innerHTML = `
                <span class="count curr top">${cur}</span>
                <span class="count next top">${next}</span>
                <span class="count next bottom">${next}</span>
                <span class="count curr bottom">${cur}</span>
              `;
                    hand.node.parentElement.className = 'time';
                    setTimeout(() => {
                        hand.node.parentElement.className = 'time flip';
                    });
                }
            });
        },
    };
    
    constructor() { }

    ngOnInit() {                
        this.showCountdown = datacfg.Countdown;
        this.eventName = datacfg.CountEvent.Name;
        this.eventLink = datacfg.CountEvent.Link;
    }

}
