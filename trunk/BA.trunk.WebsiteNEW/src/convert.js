let content = [];
// example {id:1592304983049, title: 'Deadpool', year: 2015}
const addFormData = (ev)=>{
    ev.preventDefault();  //to stop the form submitting
    let data = {
        titel: 'StandortDatum',
        dateofaccident: document.getElementById('dateofaccident').value,
        timeofaccident: document.getElementById('timeofaccident').value,
        country: document.getElementById('country').value,
        state: document.getElementById('state').value,
        email: document.getElementById('email').value,
        plz: document.getElementById('plz').value,
        zeugen: document.getElementById('zeugen').value,
        andereSachschaeden: document.getElementById('sachschaeden').value,

        title: 'FahrzeugA',
        ueberschrift:'Versicherungsnehmer/Versicherter',
        name: document.getElementById('versName').value,
        vorname: document.getElementById('versVname').value,
        anschrift: document.getElementById('versAddress').value,
        plz: document.getElementById('versPlz').value,
        land: document.getElementById('versCountry').value,
        BerechtigungZumVorsteuerabzug: document.getElementById('versState').value,
        TelefonOderEMail: document.getElementById('versTelOrEmail').value,

        ueberschrift:'Fahrzeug',
        marke_Typ: document.getElementById('markeType').value,
        kennzeichen:document.getElementById('kennzeichen').value,

        ueberschrift:'Versicherer',
        versicherer: document.getElementById('versicherer').value,
        versNr: document.getElementById('versNr').value,
        agent: document.getElementById('agent').value,
        NrDerGruenenKarte: document.getElementById('greencardNr').value,
        KarteGueltigBis: document.getElementById('gueltigkeitsdatum').value,
        volkaskoVersichert: document.getElementById('volkasko').value,
        

        ueberschrift:'Fahrer',
        name: document.getElementById('fahrerName').value,
        vorname: document.getElementById('fahrerVname').value,
        addresse: document.getElementById('fahrerAdresse').value,
        fuehrerscheinNr: document.getElementById('fuehrerscheinNr').value,
        klasse: document.getElementById('klasse').value,
        ausgestellt: document.getElementById('ausgestellt').value,
        gueltigAb: document.getElementById('gueltigAb').value,
        bis: document.getElementById('bis').value,
        sichtbareSchaden: document.getElementById('sichtbareSchaden').value,
        bemerkungen: document.getElementById('bemerkungen').value,

        ueberschrift:'FahrzeugB',
        ueberschrift:'Versicherungsnehmer/Versicherter',
        name: document.getElementById('versNameB').value,
        vorname: document.getElementById('versVnameB').value,
        anschrift: document.getElementById('versAddressB').value,
        plz: document.getElementById('versPlzB').value,
        land: document.getElementById('versCountryB').value,
        BerechtigungZumVorsteuerabzug: document.getElementById('versStateB').value,
        TelefonOderEMail: document.getElementById('versTelOrEmailB').value,

        ueberschrift:'Fahrzeug',
        marke_Typ: document.getElementById('markeTypeB').value,
        kennzeichen:document.getElementById('kennzeichenB').value,

        ueberschrift:'Versicherer',
        versicherer: document.getElementById('versichererB').value,
        versNr: document.getElementById('versNrB').value,
        agent: document.getElementById('agentB').value,
        NrDerGruenenKarte: document.getElementById('greencardNrB').value,
        KarteGueltigBis: document.getElementById('gueltigkeitsdatumB').value,
        volkaskoVersichert: document.getElementById('volkaskoB').value,
        

        ueberschrift:'Fahrer',
        name: document.getElementById('fahrerNameB').value,
        vorname: document.getElementById('fahrerVnameB').value,
        addresse: document.getElementById('fahrerAdresseB').value,
        fuehrerscheinNr: document.getElementById('fuehrerscheinNrB').value,
        klasse: document.getElementById('klasseB').value,
        ausgestellt: document.getElementById('ausgestelltB').value,
        gueltigAb: document.getElementById('gueltigAbB').value,
        bis: document.getElementById('bisB').value,
        sichtbareSchaden: document.getElementById('sichtbareSchadenB').value,
        bemerkungen: document.getElementById('bemerkungenB').value,

    }
    content.push(data);
    document.forms[0].reset(); // to clear the form for the next entries
    //document.querySelector('form').reset();

    //for display purposes only
    
    console.warn('added' , {content} );
    let pre = document.querySelector('#msg pre');
    pre.textContent = '\n' + JSON.stringify(content, '\t', 2);
    
    //saving to sessionStorage
    sessionStorage.setItem('MydataList', JSON.stringify(content) );
    
}
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', addFormData);
});
