console.log('java.js is active')
let p1 = document.getElementById("test")

let weekdays = ["maandag", "dinsdag", "woendag", "donderdag", "vrijdag", "zaterdag", "zondag"]
let months = ["januari", "februari","maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"]

function create_table(location, head_array, body_array, foot_array) {
 let table = document.createElement("table")
 let thead = document.createElement("thead")
 let tbody = document.createElement("tbody")
 let tfoot = document.createElement("tfoot")
 location = document.getElementById(location)
 table.appendChild(thead)
 create_table_row(thead, weekdays, true)
 table.appendChild(tbody)
 create_table_row(tbody, months, false)
 table.appendChild(tfoot)
 location.appendChild(table)
 console.log(table);
}

function create_table_collum(location, array) {
  let tr = document.createElement("tr")
 for (var i = 0; i < array.length; i++) {
  let cell = document.createElement("th")
  cell.innerHTML = array[i]
  tr.appendChild(cell)
 }
 location.appendChild(tr)
}

function create_table_row(location, array, th) {
  let tr = document.createElement("tr")
  let cell_type = "td"
  if (th) {
   cell_type = "th"
 }
 for (var i = 0; i < array.length; i++) {
  let cell = document.createElement(
   cell_type)
  cell.innerHTML = array[i]
  tr.appendChild(cell)
 }
 location.appendChild(tr)
}

class Contact{
    constructor(
        straat,
        huisnummer,
        toevoeging,
        postcode_cijfers,
        postcode_letters,
        stad,
        telefoon
    ){
        this.straat = straat
        this.huisnummer = huisnummer
        this.toevoeging = toevoeging
        this.postcode_cijfers = postcode_cijfers
        this.postcode_letters = postcode_letters
        this.stad = stad
        this.telefoon = telefoon
    }
}
const eerste_constantijn_huygensstraat_adres = new Contact("Eerste Constantijn Huygensstraat", 38, undefined, 1054, "BR", "Amsterdam", "0205904111")

class Organisatie{
    constructor(
        naam_organisatie,
    ){
        this.organisatie ={}
        this.organisatie.naam = naam_organisatie
        this.organisatie.klinieken = []
    }
}
const arkin = new Organisatie("Arkin")

class Kliniek extends Organisatie{
    constructor(
        naam_organisatie,
        naam_kliniek,
        contact_kliniek,
        type_kliniek,
    ){
        super(naam_organisatie)
        this.kliniek = {}
        this.kliniek.naam_kliniek = naam_kliniek
        this.kliniek.contact = contact_kliniek
        this.kliniek.type = type_kliniek
    }
}
const eerste_constantijn_huygensstraat = new Kliniek(arkin.naam, "Kliniek Eerste Contantijn Huygensstraat", eerste_constantijn_huygensstraat_adres)

class Afdeling extends Kliniek{
    constructor(
        naam_organisatie,
        naam_kliniek,
        contact_kliniek,
        type_kliniek,
        toren_afdeling,
        verdieping_afdeling,
        type_afdeling,
    ){
        super(naam_organisatie, naam_kliniek, contact_kliniek, type_kliniek)
        this.afdeling = {}
        this.afdeling.toren = toren_afdeling
        this.afdeling.verdieping = verdieping_afdeling
        this.afdeling.type = type_afdeling
    }
}

const eerste_constantijn_huygensstraat_kliniek = new Kliniek("Kliniek Eerste Constantijn Huygensstraat", eerste_constantijn_huygensstraat_adres)

class Bezoek {
    constructor(
      organisatie = "Arkin",
      locatie = "Eerste Contantijn Huygensstraat",
      toren = "B",
      verdieping = Number,
      tijdstip,
      aanwezigen_systeem,
      aanwezigen_ambulant,
      aanwezigen_kliniek,
      anamnese,
      lichamelijk_onderzoek,
      aanvullend_onderzoek,
      psychiatrisch_onderzoek,
      conclusie,
      vrijheden,
      medicatie,
      vod,
      zag,
      volgende_bezoek,
      overig_beleid
    ){
      this.organisatie = organisatie
      this.locatie = locatie
      this.toren = toren
      this.verdieping = verdieping
      this.tijdstip = tijdstip
      this.aanwezigen = aanwezigen
      this.aanwezigen_systeem = aanwezigen_systeem
      this.aanwezigen_ambulant = aanwezigen_ambulant
      this.aanwezigen_kliniek = aanwezigen_kliniek
      this.anamnese = anamnese
      this.lichamelijk_onderzoek = lichamelijk_onderzoek
      this.aanvullend_onderzoek = aanvullend_onderzoek
      this.psychiatrisch_onderzoek = psychiatrisch_onderzoek
      this.conclusie = conclusie
      this.vrijheden = vrijheden
      this.medicatie = medicatie
      this.vod = vod
      this.zag = zag
      this.volgende_bezoek = volgende_bezoek
      this.overig_beleid = overig_beleid
    }
  }
  
function create_patient_bezoek_section(location){
    let section = document.createElement("section")
    let label_organisatie = document.createElement("label")
    label_organisatie.htmlFor  = "bezoek_organisatie"
    section.appendChild(label_organisatie)
    label_organisatie.innerHTML = "bezoek_organisatie: "
    let organisatie = document.createElement("input")
    organisatie.type = "text"
    section.appendChild(organisatie)
    organisatie.id = "bezoek_organisatie"
    section.appendChild(document.createElement("br"))
    let label_locatie = document.createElement("label")
    label_locatie.htmlFor  = "bezoek_locatie"
    section.appendChild(label_locatie)
    label_locatie.innerHTML = "bezoek_locatie: "
    let locatie = document.createElement("input")
    locatie.type = "text"
    section.appendChild(locatie)
    locatie.id = "bezoek_locatie"
    section.appendChild(document.createElement("br"))
    let label_toren = document.createElement("label")
    label_toren.htmlFor  = "bezoek_toren"
    section.appendChild(label_toren)
    label_toren.innerHTML = "bezoek_toren: "
    let toren = document.createElement("input")
    toren.type = "text"
    section.appendChild(toren)
    toren.id = "bezoek_toren"
    section.appendChild(document.createElement("br"))
    let label_verdieping = document.createElement("label")
    label_verdieping.htmlFor  = "bezoek_verdieping"
    section.appendChild(label_verdieping)
    label_verdieping.innerHTML = "bezoek_verdieping: "
    let verdieping = document.createElement("input")
    verdieping.type = "text"
    section.appendChild(verdieping)
    verdieping.id = "bezoek_verdieping"
    section.appendChild(document.createElement("br"))
    let label_tijdstip = document.createElement("label")
    label_tijdstip.htmlFor  = "bezoek_tijdstip"
    section.appendChild(label_tijdstip)
    label_tijdstip.innerHTML = "bezoek_tijdstip: "
    let tijdstip = document.createElement("input")
    tijdstip.type = "text"
    section.appendChild(tijdstip)
    tijdstip.id = "bezoek_tijdstip"
    section.appendChild(document.createElement("br"))
    let label_aanwezigen_systeem = document.createElement("label")
    label_aanwezigen_systeem.htmlFor  = "bezoek_aanwezigen_systeem"
    section.appendChild(label_aanwezigen_systeem)
    label_aanwezigen_systeem.innerHTML = "bezoek_aanwezigen_systeem: "
    let aanwezigen_systeem = document.createElement("input")
    aanwezigen_systeem.type = "text"
    section.appendChild(aanwezigen_systeem)
    aanwezigen_systeem.id = "bezoek_aanwezigen_systeem"
    section.appendChild(document.createElement("br"))
    let label_aanwezigen_ambulant = document.createElement("label")
    label_aanwezigen_ambulant.htmlFor  = "bezoek_aanwezigen_ambulant"
    section.appendChild(label_aanwezigen_ambulant)
    label_aanwezigen_ambulant.innerHTML = "bezoek_aanwezigen_ambulant: "
    let aanwezigen_ambulant = document.createElement("input")
    aanwezigen_ambulant.type = "text"
    section.appendChild(aanwezigen_ambulant)
    aanwezigen_ambulant.id = "bezoek_aanwezigen_ambulant"
    section.appendChild(document.createElement("br"))
    let label_aanwezigen_kliniek = document.createElement("label")
    label_aanwezigen_kliniek.htmlFor  = "bezoek_aanwezigen_kliniek"
    section.appendChild(label_aanwezigen_kliniek)
    label_aanwezigen_kliniek.innerHTML = "bezoek_aanwezigen_kliniek: "
    let aanwezigen_kliniek = document.createElement("input")
    aanwezigen_kliniek.type = "text"
    section.appendChild(aanwezigen_kliniek)
    aanwezigen_kliniek.id = "bezoek_aanwezigen_kliniek"
    section.appendChild(document.createElement("br"))
    let label_anamnese = document.createElement("label")
    label_anamnese.htmlFor  = "bezoek_anamnese"
    section.appendChild(label_anamnese)
    label_anamnese.innerHTML = "bezoek_anamnese: "
    let anamnese = document.createElement("input")
    anamnese.type = "text"
    section.appendChild(anamnese)
    anamnese.id = "bezoek_anamnese"
    section.appendChild(document.createElement("br"))
    let label_lichamelijk_onderzoek = document.createElement("label")
    label_lichamelijk_onderzoek.htmlFor  = "bezoek_lichamelijk_onderzoek"
    section.appendChild(label_lichamelijk_onderzoek)
    label_lichamelijk_onderzoek.innerHTML = "bezoek_lichamelijk_onderzoek: "
    let lichamelijk_onderzoek = document.createElement("input")
    lichamelijk_onderzoek.type = "text"
    section.appendChild(lichamelijk_onderzoek)
    lichamelijk_onderzoek.id = "bezoek_lichamelijk_onderzoek"
    section.appendChild(document.createElement("br"))
    let label_aanvullend_onderzoek = document.createElement("label")
    label_aanvullend_onderzoek.htmlFor  = "bezoek_aanvullend_onderzoek"
    section.appendChild(label_aanvullend_onderzoek)
    label_aanvullend_onderzoek.innerHTML = "bezoek_aanvullend_onderzoek: "
    let aanvullend_onderzoek = document.createElement("input")
    aanvullend_onderzoek.type = "text"
    section.appendChild(aanvullend_onderzoek)
    aanvullend_onderzoek.id = "bezoek_aanvullend_onderzoek"
    section.appendChild(document.createElement("br"))
    let label_psychiatrisch_onderzoek = document.createElement("label")
    label_psychiatrisch_onderzoek.htmlFor  = "bezoek_psychiatrisch_onderzoek"
    section.appendChild(label_psychiatrisch_onderzoek)
    label_psychiatrisch_onderzoek.innerHTML = "bezoek_psychiatrisch_onderzoek: "
    let psychiatrisch_onderzoek = document.createElement("input")
    psychiatrisch_onderzoek.type = "text"
    section.appendChild(psychiatrisch_onderzoek)
    psychiatrisch_onderzoek.id = "bezoek_psychiatrisch_onderzoek"
    section.appendChild(document.createElement("br"))
    let label_conclusie = document.createElement("label")
    label_conclusie.htmlFor  = "bezoek_conclusie"
    section.appendChild(label_conclusie)
    label_conclusie.innerHTML = "bezoek_conclusie: "
    let conclusie = document.createElement("input")
    conclusie.type = "text"
    section.appendChild(conclusie)
    conclusie.id = "bezoek_conclusie"
    section.appendChild(document.createElement("br"))
    let label_vrijheden = document.createElement("label")
    label_vrijheden.htmlFor  = "bezoek_vrijheden"
    section.appendChild(label_vrijheden)
    label_vrijheden.innerHTML = "bezoek_vrijheden: "
    let vrijheden = document.createElement("input")
    vrijheden.type = "text"
    section.appendChild(vrijheden)
    vrijheden.id = "bezoek_vrijheden"
    section.appendChild(document.createElement("br"))
    let label_medicatie = document.createElement("label")
    label_medicatie.htmlFor  = "bezoek_medicatie"
    section.appendChild(label_medicatie)
    label_medicatie.innerHTML = "bezoek_medicatie: "
    let medicatie = document.createElement("input")
    medicatie.type = "text"
    section.appendChild(medicatie)
    medicatie.id = "bezoek_medicatie"
    section.appendChild(document.createElement("br"))
    let label_vod = document.createElement("label")
    label_vod.htmlFor  = "bezoek_vod"
    section.appendChild(label_vod)
    label_vod.innerHTML = "bezoek_vod: "
    let vod = document.createElement("input")
    vod.type = "text"
    section.appendChild(vod)
    vod.id = "bezoek_vod"
    section.appendChild(document.createElement("br"))
    let label_zag = document.createElement("label")
    label_zag.htmlFor  = "bezoek_zag"
    section.appendChild(label_zag)
    label_zag.innerHTML = "bezoek_zag: "
    let zag = document.createElement("input")
    zag.type = "text"
    section.appendChild(zag)
    zag.id = "bezoek_zag"
    section.appendChild(document.createElement("br"))
    let label_volgende_bezoek = document.createElement("label")
    label_volgende_bezoek.htmlFor  = "bezoek_volgende_bezoek"
    section.appendChild(label_volgende_bezoek)
    label_volgende_bezoek.innerHTML = "bezoek_volgende_bezoek: "
    let volgende_bezoek = document.createElement("input")
    volgende_bezoek.type = "text"
    section.appendChild(volgende_bezoek)
    volgende_bezoek.id = "bezoek_volgende_bezoek"
    section.appendChild(document.createElement("br"))
    let label_overig_beleid = document.createElement("label")
    label_overig_beleid.htmlFor  = "bezoek_overig_beleid"
    section.appendChild(label_overig_beleid)
    label_overig_beleid.innerHTML = "bezoek_overig_beleid: "
    let overig_beleid = document.createElement("input")
    overig_beleid.type = "text"
    section.appendChild(overig_beleid)
    overig_beleid.id = "bezoek_overig_beleid"
    location.appendChild(section)
    section.appendChild(document.createElement("br"))
    let eind_teskt = document.createElement("textArea")
    section.appendChild(eind_teskt)
}

let definitieve_tekst = document.createElement("p")
definitieve_tekst.innerHTML = `
Bezoek op afdeling`
