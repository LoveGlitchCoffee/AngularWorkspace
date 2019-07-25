import { Injectable } from '@angular/core';
import { Piece } from "./piece";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PieceService {

    dedlok: Piece;
    outside: Piece;
    companions: Piece;
    oblivion: Piece;
    pieces: Piece[];
    gameSymbol: string = "fas fa-gamepad";
    videoSymbol: string = "fas fa-video";

    constructor() {

        this.dedlok = <Piece>({
            name: "Ded-lok",
            imagePath: "assets/img/dedlok-icon.png",
            video: "",
            hasVideo: false,
            desc: "Programmed in Chip8 assembly.\nClassic shooter made in Octo-Jam 2015.\n",
            links: [
                {
                    linkname: "play in browser",
                    hyperlink: "http://johnearnest.github.io/Octo/index.html?gist=3355987134d5c4c94713",
                    symbol: this.gameSymbol
                },
                {
                    linkname: "jam review",
                    hyperlink: "https://youtu.be/fxPoscaB8aE?t=3270",
                    symbol: this.videoSymbol
                }
            ]
        })
        this.outside = <Piece>({
            name: "Outside",
            imagePath: "assets/img/outside-icon.png",
            video: "https://www.youtube.com/embed/wtVud_zwvTs",
            hasVideo: true,
            desc: "A zombie shooter where you play as an old man.\nMade in Awful Jam 2016.\nMade with Unity.",
            links: [
                {
                    linkname: "itch.io",
                    hyperlink: "https://parityb1t.itch.io/outside",
                    symbol: this.gameSymbol
                }
            ]
        })
        this.oblivion = <Piece>({
            name: "Oblivion++",
            imagePath: "assets/img/oblivion.png",
            video: "",
            hasVideo: false,
            desc: "Oblivion theme, by Palo Borelli, made specifically for C++ in VSCode.\n Made in 2018.",
            links: [
                {
                    linkname: "Marketplace",
                    hyperlink: "https://marketplace.visualstudio.com/items?itemName=parityb1t.oblivion",
                    symbol: this.gameSymbol
                }
            ]
        })
        this.companions = <Piece>({
            name: "Companionship",
            imagePath: "assets/img/dontstarve.jpg",
            video: "https://www.youtube.com/embed/8uVbGPcr2Vo",
            hasVideo: true,
            desc: "Uses G(oal) O(oriented) A(ction) P(lanning) and Q-Learning.\n A mod for Don't Starve written in Lua.",
            links: [
                {
                    linkname: "Steam Marketplace",
                    hyperlink: "https://steamcommunity.com/sharedfiles/filedetails/?id=1326647188",
                    symbol: this.gameSymbol
                }
            ]
        })
        this.pieces = [ this.oblivion, this.companions, this.dedlok, this.outside,];
    }

    getPieces(): Observable<Piece[]> {
        return of(this.pieces);
    }
}
