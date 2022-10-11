import { Dostavljac } from "./dostavljac.model";
import { Potrosac } from "./potrosac.model";
import { Proizvod } from "./proizvod.model";

export interface Porudzbina{
    id : number,
    adresaDostave : string,
    komentar : string,
    cijena : number,
    statusPorudzbine : StatusPorudzbine,
    potrosac : Potrosac,
    dostavljac : Dostavljac,
    kolicinaProizvoda: { [key: number]: number },
    proizvodi : Proizvod[]
}

enum StatusPorudzbine{
    "Na cekanju",
    "Zapoceta",
    "Zavrsena"
}