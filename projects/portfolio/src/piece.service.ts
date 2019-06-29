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
            desc: "Classic shooter.\nMade in Octo-Jam 2015.\nProgrammed in Chip8 assembly.",
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
            desc: "First Person Tower Defense Shooter.\nMade in Awful Jam 2016.\nMade with Unity.",
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
            desc: "Oblivion theme, by Palo Borelli, made specifically for C++ in VSCode. Made in 2018",
            links: [
                {
                    linkname: "Marketplace",
                    hyperlink: "https://marketplace.visualstudio.com/items?itemName=parityb1t.oblivion",
                    symbol: this.gameSymbol
                }
            ]
        })
        this.companions = <Piece>({
            name: "Oblivion++",
            imagePath: "assets/img/oblivion.png",
            desc: "Oblivion theme, by Palo Borelli, made specifically for C++ in VSCode.",
            links: [
                {
                    linkname: "Marketplace",
                    hyperlink: "https://marketplace.visualstudio.com/items?itemName=parityb1t.oblivion",
                    symbol: this.gameSymbol
                }
            ]
        })
        this.pieces = [this.dedlok, this.outside, this.oblivion];
    }

    getPieces(): Observable<Piece[]> {
        return of(this.pieces);
    }
}
