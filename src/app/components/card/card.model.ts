export class Card {
    id:number;
    title:string;
    imageSource:string;
    isAdmin:boolean = false;

    constructor(_id:number, _title:string, _imageSource:string, _isAdmin:boolean = false) {
        this.id = _id;
        this.title = _title;
        this.imageSource = _imageSource;
        this.isAdmin = _isAdmin;
    }
}