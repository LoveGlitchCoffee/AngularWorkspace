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
    overgem: Piece;
    fancycats: Piece;
    pieces: Piece[];
    gameSymbol: string = "fas fa-gamepad";
    videoSymbol: string = "fas fa-video";

    constructor() {

        this.dedlok = <Piece>({
            name: "Ded-lok",
            imagePath: "assets/img/dedlok-gameplay.png",
            video: "",
            hasVideo: false,
            desc: "Programmed in Chip8 assembly.\nClassic shooting game against AI.\nMade in Octo-Jam 2015.\n",
            links: [
                {
                    linkname: "Play In Browser",
                    hyperlink: "http://johnearnest.github.io/Octo/index.html?gist=3355987134d5c4c94713",
                    symbol: this.gameSymbol
                },
                {
                    linkname: "Jam Review",
                    hyperlink: "https://youtu.be/fxPoscaB8aE?t=3270",
                    symbol: this.videoSymbol
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
            hasVideo: false,
            desc: "Uses G(oal) O(oriented) A(ction) P(lanning) and Q-Learning.\n A mod for Don't Starve written in Lua.",
            links: [
                {
                    linkname: "Steam Marketplace",
                    hyperlink: "https://steamcommunity.com/sharedfiles/filedetails/?id=1326647188",
                    symbol: this.gameSymbol
                },
                {
                    linkname: "Gameplay",
                    hyperlink: "https://www.youtube.com/watch?v=8uVbGPcr2Vo",
                    symbol: this.videoSymbol
                }
            ]
        })
        this.overgem = <Piece>({
            name: "OverGem",
            imagePath: "assets/img/overgem.jpg",
            video: "",
            hasVideo: false,
            desc: "PvP Platformer.\nCouch competitive party game.\nCurrently in Alpha.\nMade with Unity.",
            links: [
                {
                    linkname: "Alpha Gameplay",
                    hyperlink: "https://www.youtube.com/watch?v=LwmgkB33A_o&",
                    symbol: this.videoSymbol
                },
            ]
        })
        this.fancycats = <Piece>({
            name: "Fancy Cats",
            imagePath: "assets/img/fancycats_gameplay.png",
            video: "",
            hasVideo: false,
            desc: "Gameplay Programmer whilst at GENiX Lab.\nMade with Unity.\nCat grooming match-3.",
            links: [
                {
                    linkname: "Trailer",
                    hyperlink: "https://www.youtube.com/watch?v=mMqo3uFpjH4",
                    symbol: this.videoSymbol
                },
                {
                    linkname: "App Store",
                    hyperlink: "https://apps.apple.com/us/app/fancy-cats-puzzle-kitties/id1235375776",
                    symbol: this.gameSymbol
                }
            ]
        })
        this.pieces = [this.overgem, this.companions, this.dedlok, this.fancycats];
    }

    getPieces(): Observable<Piece[]> {
        return of(this.pieces);
    }
}
