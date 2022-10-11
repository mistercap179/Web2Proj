import { Porudzbina } from "./porudzbina.model";

export interface Dostavljac{
    IdDostavljac:number,
    StatusProfila : number,
    Porudzbine : Porudzbina[],
    Id : number,
    KorisnickoIme: string,
    Email:string,
    Lozinka:string,
    ImePrezime:string,
    DatumRodjenja:string,
    Adresa:string,
    Slika:string,
    TipKorisnika:number
}