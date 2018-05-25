export class Animal {

    public id: number;
    public espece: string;
    public famille: string;
    public photo: string;

    constructor(espece="", famille="", photo=""){
        this.espece = espece;
        this.famille = famille;
        this.photo = photo;
    }

}