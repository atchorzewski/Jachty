var config = require('./dbconfig');
const sql = require('mssql');


async function getYachts() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT ID as ID_Jacht, MarkaModel, Typ, RokProdukcji, Dlugosc, Szerokosc, Zanurzenie, Opis, link FROM Stronka_Jachty ");
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function getYacht(id) {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request()
        .input('input_parameter', sql.Int, id)
        .query("SELECT ID as ID_Jacht, MarkaModel, Typ, RokProdukcji, Dlugosc, Szerokosc, Zanurzenie, Opis, link FROM Stronka_Jachty WHERE ID=@input_parameter");
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function getAllYachts() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT R.ID as ID_Rezerwacji, R.DataRezerwacji, R.DataZwrotu, R.ID_Klient, R.ID_Jacht, J.ID as ID_Jacht, J.MarkaModel, J.Typ, J.RokProdukcji, J.Dlugosc, J.Szerokosc, J.Zanurzenie, J.Opis FROM Stronka_Jachty as J left join Stronka_Rezerwacja as R on J.ID = R.ID_Jacht order by R.ID_Jacht, R.ID_Klient");
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function getAllReservationByID(Id) {
    try {
        let pool = await sql.connect(config);
        let product = await pool.request()
            .input('input_parameter', sql.Bit, Id)
            .query("SELECT K.ID as Klient_ID, K.Imie, K.Nazwisko, K.Telefon, K.Email, R.ID as Rezerwacja_ID, R.DataRezerwacji, R.DataZwrotu, R.ID_Klient, R.ID_Jacht, J.ID as Jacht_ID, J.MarkaModel, J.Typ, J.RokProdukcji, J.Dlugosc, J.Szerokosc, J.Zanurzenie, J.Opis, J.link FROM Stronka_Klienci AS K JOIN Stronka_Rezerwacja as R join Stronka_Jachty as J on J.ID=R.ID_Jacht on K.ID=R.ID_Klient  WHERE K.ID=@input_parameter");
        return product.recordsets;

    }
    catch (error) {
        console.log(error);
    }
}

async function addReservation(reservation) {
    try {
        const { DataRezerwacji, DataZwrotu, ID_Klient, ID_Jacht } = reservation;
        let pool = await sql.connect(config);
        let inserProduct = await pool.request()
            .input('input_parameterv1', sql.NVarChar, DataRezerwacji)
            .input('input_parameterv2', sql.NVarChar, DataZwrotu)
            .input('input_parameterv3', sql.NVarChar, ID_Klient)
            .input('input_parameterv4', sql.NVarChar, ID_Jacht)
            .query("INSERT INTO Stronka_Rezerwacja(DataRezerwacji,DataZwrotu,ID_Klient,ID_Jacht) VALUES (@input_parameterv1, @input_parameterv2, @input_parameterv3,@input_parameterv4)");
        return inserProduct.recordsets;

    }
    catch (error) {
        console.log(error);
    }
}

async function addUser(user) {
    try {
        const { Imie, Nazwisko, Telefon, Email, ID } = user;
        let pool = await sql.connect(config);
        let inserProduct = await pool.request()
            .input('input_parameterv1', sql.NVarChar, Imie)
            .input('input_parameterv2', sql.NVarChar, Nazwisko)
            .input('input_parameterv3', sql.NVarChar, Telefon)
            .input('input_parameterv4', sql.NVarChar, Email)
            .input('input_parameterv5', sql.Int, ID)
            .query("INSERT INTO Stronka_Klienci(ID, Imie, Nazwisko, Telefon, Email) VALUES (@input_parameterv5, @input_parameterv1, @input_parameterv2, @input_parameterv3,@input_parameterv4)");

        return inserProduct.recordsets;

    }
    catch (error) {
        console.log(error);
    }
}


module.exports = {
    getYachts: getYachts,
    getAllYachts: getAllYachts,
    getAllReservationByID: getAllReservationByID,
    addReservation: addReservation,
    addUser: addUser,
    getYacht: getYacht
}