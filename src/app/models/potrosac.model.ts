import { Porudzbina } from "./porudzbina.model";

export interface Potrosac{
    idPotrosac:number,
    porudzbine : Porudzbina[],
    id : number,
    korisnickoIme: string,
    email:string,
    lozinka:string,
    imePrezime:string,
    datumRodjenja:string,
    adresa:string,
    slika:string,
    tipKorisnika:number,
}