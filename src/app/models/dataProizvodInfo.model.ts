import { Proizvod } from "./proizvod.model";

export class ProizvodInfo{
    public proizvodi : Proizvod[];
    public kolicinaProizvoda : { [key: number]: number };

    constructor(){
        this.proizvodi = [];
        this.kolicinaProizvoda = {};
    }
}

