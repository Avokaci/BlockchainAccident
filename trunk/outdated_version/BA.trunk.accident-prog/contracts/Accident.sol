pragma solidity ^0.5.0;

contract Accident {
  uint public count=0;
  string datum;
  string uhrzeit;
  string ort;
  string zeugen;

  function setUnfalldaten (string memory _datum, string memory _uhrzeit, string memory _ort, string memory _zeugen) public{
    datum=_datum;
    uhrzeit=_uhrzeit;
    ort=_ort;
    zeugen=_zeugen;
  }

  struct versicherungsnehmerdaten{
    string versName;
    string versVorname;
    string versAdr;
    string versTel;
  }
  event VersicherungAdded(
    string versName,
    string versVorname,
    string versAdr,
    string versTel
  );
  mapping(uint => versicherungsnehmerdaten) public arrVerdaten;

  function setVersicherungsnehmerdaten(string memory _name,string memory _vname, string memory _adr, string memory _tel) public {
    arrVerdaten[count] = versicherungsnehmerdaten(_name,_vname,_adr,_tel);
    emit VersicherungAdded(_name,_vname,_adr,_tel);
  }


  struct fahrzeugdaten{
    string markeType;
    string kennzeichen;
  }
  event FahrzeugdatenAdded(
    string markeType,
    string kennzeichen
  );
  mapping (uint => fahrzeugdaten) public arrFahrzeugdaten;


  function setFahrzeugdaten(string memory _markeTyp, string memory _kennzeichen) public{
    arrFahrzeugdaten[count] = fahrzeugdaten(_markeTyp, _kennzeichen);
    emit FahrzeugdatenAdded(_markeTyp, _kennzeichen);
  }

  struct versicher{
    uint versNr;
    string agent;
    uint nrGrKarte;
    string gueltigBis;
  }
  event VersicherAdded(
    uint versNr,
    string agent,
    uint nrGrKarte,
    string gueltigBis
    );
  mapping (uint => versicher) public arrVersicher;
  function setVersicher(uint _versNr, string memory _agent, uint _nrGrKarte, string memory _gueltig) public{
    arrVersicher[count]=versicher(_versNr,_agent,_nrGrKarte,_gueltig);
    emit VersicherAdded(_versNr,_agent,_nrGrKarte,_gueltig);
  }

  

  struct schaden{
    string sichtbareSchaeden;
    string bemerkungen;
  }
  event SchadenAdded(
    string sichtbareSchaeden,
    string bemerkungen
  );
  mapping (uint => schaden) public arrSchaden;
  function setSchadenBemerkungen(string memory _sichtbareSchaeden, string memory _bemerkungen) public{
    arrSchaden[count++]=schaden(_sichtbareSchaeden, _bemerkungen);
    emit SchadenAdded(_sichtbareSchaeden, _bemerkungen);
  }

  function getUnfalldaten() public view returns(string memory, string memory, string memory, string memory){
    return (datum, uhrzeit, ort,zeugen);
  }

  function getVersicherungsnehmerdaten(uint _id) public view returns (string memory,string memory, string memory, string memory){
    return (arrVerdaten[_id].versName,arrVerdaten[_id].versVorname, arrVerdaten[_id].versAdr, arrVerdaten[_id].versTel);
  }

  function getFahrzeugdaten(uint _id) public view returns(string memory, string memory){
    return (arrFahrzeugdaten[_id].markeType, arrFahrzeugdaten[_id].kennzeichen);
  }

  function getVersicher(uint _id) public view returns(uint,string memory, uint, string memory){
    return (arrVersicher[_id].versNr, arrVersicher[_id].agent, arrVersicher[_id].nrGrKarte, arrVersicher[_id].gueltigBis);
  }

  
  function getSchadenBemerkungen(uint _id) public view returns(string memory, string memory){
    return (arrSchaden[_id].sichtbareSchaeden, arrSchaden[_id].bemerkungen);
  }

}
