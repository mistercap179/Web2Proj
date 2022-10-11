export interface UserModel {
    id : number,
    korisnickoIme : string,
    email : string,
    lozinka : string,
    imePrezime : string,
    datumRodjenja : Date,
    adresa : string,
    slika:string,
    tipKorisnika : UserType
}

enum UserType { 
    Admin,
    Dostavljac,
    Potrosac
}
