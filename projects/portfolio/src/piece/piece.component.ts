import { Component, OnInit } from '@angular/core';
import { Piece } from "../piece";
import { PieceService } from "../piece.service";

@Component({
    selector: 'app-piece',
    templateUrl: './piece.component.html',
    styleUrls: ['./piece.component.css']
})
export class PieceComponent implements OnInit {

    // test
    pieces: Piece[];

    constructor(private pieceService: PieceService) { }

    ngOnInit() {
        this.getPieces();
    }

    getPieces(): void {
        this.pieceService.getPieces().subscribe(pieces => this.pieces = pieces)
    }

}
