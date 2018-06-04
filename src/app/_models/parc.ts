import { Animal } from ".";

export class Parc {
    static count = 0;
    public id: number;
    public nom: string;
    public type: string;
    public departement: number;
    public image: string;
    public animals: number[];

    constructor (nom="", type="", departement=null, image="", animals=[1,2,3]){
        this.id = Parc.count++;
        this.nom = nom;
        this.type = type;
        this.departement = departement;
        this.image = image;
        this.animals = animals;
    }
}