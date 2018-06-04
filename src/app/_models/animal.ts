export class Animal {

    static count=0;
    public id: number;
    public espece: string;
    public famille: string;
    public image: string;
    public regime: string;
    public lieuDeVie: string;
    public esperanceVie: number;
    

    constructor(espece="", famille="", image="", regime="", lieuDeVie= "", esperanceVie=null){
        this.id = Animal.count++;
        this.espece = espece;
        this.famille = famille;
        this.image = image;
        this.regime = regime;
        this.lieuDeVie = lieuDeVie;
        this.esperanceVie = esperanceVie;
    }

}