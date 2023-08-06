
import { Component, ViewChild, OnInit, Output, EventEmitter } from '@angular/core';
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
    @Output() close = new EventEmitter<boolean>();
    constructor( private http: HttpClient) {
        this.cardsService = new CardsService(http);
    }

    ngOnInit() {
        this.addCardForm = new FormGroup({
            'title':new FormControl(null, Validators.required),
            'sub_title':new FormControl(null,Validators.required),
            'image':new FormControl("https://robohash.org/quibeataesunt.png?size=50x50&set=set1")
        });
    }

    onSubmit() {
        let data = {...this.addCardForm.value, id: Math.random()};
        this.cardsService.addCard(data).subscribe((res:any)=>{
            console.log(res);
            this.close.emit(true);
        })
    }
}