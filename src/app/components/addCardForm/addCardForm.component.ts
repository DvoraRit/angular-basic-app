
import { Component, ViewChild, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { CardsService } from 'src/app/pages/cards/cardsService.service';
import { HttpClient } from '@angular/common/http';
@Component({
    selector: 'app-addCardForm',
    templateUrl: './addCardForm.component.html',
    styleUrls: ['./addCardForm.component.css']
})

export class AddCardFormComponent implements OnInit {
    addCardForm: FormGroup | any;
    cardsService: CardsService;
    constructor( private http: HttpClient) {
        this.cardsService = new CardsService(http);
    }

    ngOnInit() {
        this.addCardForm = new FormGroup({
            'title':new FormControl(null, Validators.required),
            'sub_title':new FormControl(null,Validators.required),
            'image':new FormControl(null)
        });
    }

    onSubmit() {
        console.log(this.addCardForm);
    }
}