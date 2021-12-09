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

        titleA: 'FahrzeugA',
        ueberschriftA:'Versicherungsnehmer/Versicherter',
        nameA: document.getElementById('versName').value,
        vornameA: document.getElementById('versVname').value,
        anschriftA: document.getElementById('versAddress').value,
        plzA: document.getElementById('versPlz').value,
        landA: document.getElementById('versCountry').value,
        BerechtigungZumVorsteuerabzugA: document.getElementById('versState').value,
        TelefonOderEMailA: document.getElementById('versTelOrEmail').value,

        ueberschriftFahrzeugA:'Fahrzeug',
        marke_TypA: document.getElementById('markeType').value,
        kennzeichenA:document.getElementById('kennzeichen').value,

        ueberschriftVersA:'Versicherer',
        versichererA: document.getElementById('versicherer').value,
        versNrA: document.getElementById('versNr').value,
        agentA: document.getElementById('agent').value,
        NrDerGruenenKarteA: document.getElementById('greencardNr').value,
        KarteGueltigBisA: document.getElementById('gueltigkeitsdatum').value,
        volkaskoVersichertA: document.getElementById('volkasko').value,
        

        ueberschriftFahrerA:'Fahrer',
        nameFahrerA: document.getElementById('fahrerName').value,
        vornameFahrerA: document.getElementById('fahrerVname').value,
        addresseFahrerA: document.getElementById('fahrerAdresse').value,
        fuehrerscheinNrFahrerA: document.getElementById('fuehrerscheinNr').value,
        klasseFahrerA: document.getElementById('klasse').value,
        ausgestelltFahrerA: document.getElementById('ausgestellt').value,
        gueltigAbFahrerA: document.getElementById('gueltigAb').value,
        bisFahrerA: document.getElementById('bis').value,
        sichtbareSchadenFahrerA: document.getElementById('sichtbareSchaden').value,
        bemerkungenFahrerA: document.getElementById('bemerkungen').value,

        ueberschriftB:'FahrzeugB',
        ueberschriftVersB:'Versicherungsnehmer/Versicherter',
        nameB: document.getElementById('versNameB').value,
        vornameB: document.getElementById('versVnameB').value,
        anschriftB: document.getElementById('versAddressB').value,
        plzB: document.getElementById('versPlzB').value,
        landB: document.getElementById('versCountryB').value,
        BerechtigungZumVorsteuerabzugB: document.getElementById('versStateB').value,
        TelefonOderEMailB: document.getElementById('versTelOrEmailB').value,

        ueberschriftFahrzeug:'Fahrzeug',
        marke_TypB: document.getElementById('markeTypeB').value,
        kennzeichenB:document.getElementById('kennzeichenB').value,

        ueberschriftVers:'Versicherer',
        versichererB: document.getElementById('versichererB').value,
        versNrB: document.getElementById('versNrB').value,
        agentB: document.getElementById('agentB').value,
        NrDerGruenenKarteB: document.getElementById('greencardNrB').value,
        KarteGueltigBisB: document.getElementById('gueltigkeitsdatumB').value,
        volkaskoVersichertB: document.getElementById('volkaskoB').value,
        

        ueberschriftFahrerB:'Fahrer',
        nameFahrerB: document.getElementById('fahrerNameB').value,
        vornameFahrerB: document.getElementById('fahrerVnameB').value,
        addresseFahrerB: document.getElementById('fahrerAdresseB').value,
        fuehrerscheinNrFahrerB: document.getElementById('fuehrerscheinNrB').value,
        klasseFahrerB: document.getElementById('klasseB').value,
        ausgestelltFahrerB: document.getElementById('ausgestelltB').value,
        gueltigAbFahrerB: document.getElementById('gueltigAbB').value,
        bisFahrerB: document.getElementById('bisB').value,
        sichtbareSchadenFahrerB: document.getElementById('sichtbareSchadenB').value,
        bemerkungenFahrerB: document.getElementById('bemerkungenB').value,

    }
    content.push(data);
    document.forms[0].reset(); // to clear the form for the next entries
    //document.querySelector('form').reset();

    //for display purposes only
    
    console.log('added accident report' , {content} );
    let pre = document.querySelector('#msg pre');
    pre.textContent = '\nDas Formular wurde bestätigt!\nBitte laden Sie Fotos in "Fotodumentation von Fahrzeugbeschädigugen" hoch.';

    let preb = document.querySelector('#bMsg pre');
    preb.textContent = '\nDas Formular wurde bestätigt';

    //saving to sessionStorage
    sessionStorage.setItem('AccidentReport', JSON.stringify(content) );
    document.getElementById("btn").disabled = true;    
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', addFormData);
});


