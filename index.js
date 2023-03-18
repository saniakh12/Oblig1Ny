function leggTilBillett(billett){
    billetter.push(billett)
    return
}


function kjopBillett(){
    let skalLagres = true

    document.getElementById("feilAntall").innerText =""
    document.getElementById("feilFornavn").innerText =""
    document.getElementById("feilEtternavn").innerText =""
    document.getElementById("feilTlf").innerText =""
    document.getElementById("feilEpost").innerText =""
    

    let inputAntall = document.getElementById("inputAntall")
    if (inputAntall.value==""){
        skalLagres = false
        document.getElementById("feilAntall").innerText ="Du må skrive noe inn i antall"
    }
    let inputFornavn = document.getElementById("inputFornavn")
    if (inputFornavn.value==""){
        skalLagres = false
        document.getElementById("feilFornavn").innerText ="Du må skrive noe inn i fornavn"
    }

    let inputEtternavn = document.getElementById("inputEtternavn")
    if (inputEtternavn.value==""){
        skalLagres = false
        document.getElementById("feilEtternavn").innerText ="Du må skrive noe inn i etternavn"
    }

    let inputTelefonnummer = document.getElementById("inputTlf")
    if (inputTelefonnummer.value==""){
        skalLagres = false
        document.getElementById("feilTlf").innerText ="Du må skrive noe inn i telefonnr"
    }

    let inputEpost = document.getElementById("inputEpost")
    if (inputEpost.value==""){
        skalLagres = false
        document.getElementById("feilEpost").innerText ="Du må skrive noe inn i epost"
    }

    if(skalLagres) {
        const billett = {
            Film: inputFilm.value,
            Antall: inputAntall.value,
            Fornavn: inputFornavn.value,
            Etternavn: inputEtternavn.value,
            Telefonnummer: inputTelefonnummer.value,
            Epost: inputEpost.value
        };
        inputFilm.value = ""
        inputAntall.value = ""
        inputFornavn.value = ""
        inputEtternavn.value = ""
        inputTelefonnummer.value = ""
        inputEpost.value = ""
        leggTilBillett(billett)
        oppdaterTabell()
    }

}
function oppdaterTabell() {
    let tabell = document.getElementById("#billett-tabell")
    tabell.innerHTML = "";

    let table = document.createElement("table")
    let tabellOverskrifter = document.createElement("tr")
    for (let h of headers) {
        let tabellOverskrift = document.createElement('th')
        tabellOverskrift.innerText = h
        tabellOverskrifter.appendChild(tabellOverskrift)
    }
    table.appendChild(tabellOverskrifter)

    for (let billett of billetter) {
        let row = document.createElement("tr")

        for (let nokkel in billett) {
            let tabellElemet = document.createElement("td")

            tabellElemet.innerText = billett[nokkel]
            row.appendChild(tabellElemet)
        }
        table.appendChild(row)
        tabell.appendChild(table);

    }
}
function slettBilletter(){
    billetter = []
    oppdaterTabell();
}

let billetter = []
let headers = ["Film", "Antall", "Fornavn", "Etternavn", "Telefonnr", "Epost"]
