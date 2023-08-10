
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { CardsService } from 'src/app/pages/cards/cardsService.service';
import { HttpClient } from '@angular/common/http';

const DEFAULT_IMAGE = "https://robohash.org/quibeataesunt.png?size=50x50&set=set1";

@Component({
    selector: 'app-addCardForm',
    templateUrl: './addCardForm.component.html',
    styleUrls: ['./addCardForm.component.css'],
})

export class AddCardFormComponent implements OnInit {
    addCardForm: FormGroup | any;
    cardsService: CardsService;
    @Output() close = new EventEmitter<boolean>();
    constructor( private http: HttpClient) {
        this.cardsService = new CardsService(http);
    }

    ngOnInit() {
        this.addCardForm = new FormGroup({
            'title':new FormControl(null, Validators.required),
            'sub_title':new FormControl(null,Validators.required),
            'image':new FormControl(DEFAULT_IMAGE)
        });
    }

    onSubmit() {
        let data = {...this.addCardForm.value, id: Math.floor(Math.random() * 1000)};
        this.cardsService.addCard(data).subscribe((res:any)=>{
            //clean form except image
            this.addCardForm.controls['title'].setValue(null);
            this.addCardForm.controls['sub_title'].setValue(null);
            this.close.emit(true);
        })
        
    }
}