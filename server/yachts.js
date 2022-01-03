class Yachts{
    constructor(ID_Jacht, MarkaModel, Typ, RokProdukcj, Dlugosc, Szerokosc, Opis, link){
        this.Id = ID_Jacht; 
        this.MarkaModel = MarkaModel; 
        this.Typ = Typ;
        this.RokProdukcj = RokProdukcj;
        this.Dlugosc = Dlugosc;
        this.Szerokosc = Szerokosc; 
        this.Opis = Opis; 
        this.link = link;
    }
}

module.exports = Yachts;
