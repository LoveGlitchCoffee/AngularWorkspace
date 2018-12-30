import { Injectable } from '@angular/core';
import { Piece } from "./piece";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PieceService {

    mockpiece: Piece;
    mockpiece2: Piece;
    mockpiece3: Piece;
    mockpieces: Piece[];

    constructor() { 
        this.mockpiece = <Piece>({
            name: "something",
            imagePath: "./assets/img/avatar.png"
        });
        
        this.mockpiece2 = <Piece>({
            name: "something else",
            imagePath: "./assets/img/youthere.png"
        })
        this.mockpiece3 = <Piece>({
            name: "something more",
            imagePath: "./assets/img/uni.png"
        })

        this.mockpieces = [this.mockpiece, this.mockpiece2, this.mockpiece3];
    }
    
    getPieces(): Observable<Piece[]> {
        return of(this.mockpieces);
    }
}
