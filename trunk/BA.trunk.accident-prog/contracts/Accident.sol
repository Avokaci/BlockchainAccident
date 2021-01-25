pragma solidity ^0.5.0;

contract Accident {
  uint public count=0;
  string datumUhrzeit;
  string ort;
  bool verletzte;
  bool andereSachschaeden;
  string zeugen;

  function setUnfalldaten (string memory _datumUhrzeit, string memory _ort, bool _verletzte, bool _andereSachschaeden, string memory _zeugen) public{
    datumUhrzeit=_datumUhrzeit;
    ort=_ort;
    verletzte=_verletzte;
    andereSachschaeden=_andereSachschaeden;
    zeugen=_zeugen;
  }

  struct versicherungsnehmerDaten{
    uint versicherungsid;
    string versName;
    string versAdr;
    uint versTel;
    bool vorsteuerabzug;
  }
  mapping(uint => versicherungsnehmerDaten) public arrVerDaten;

  function addVersicherungsnehmerDaten(string memory _nameVname, string memory _adr, uint _tel,bool _vorsteuerabzug) public {
    count++;
    arrVerDaten[count] = versicherungsnehmerDaten(count,_nameVname,_adr,_tel,_vorsteuerabzug);
  }
  struct fahrzeugsdaten{
    uint fahrzeugid;
    string markeType;
    string kennzeichen;
  }
  mapping (uint => fahrzeugsdaten) public arrFahrzeugsdaten;
  function addFahrzeugDaten(string memory _markeTyp, string memory _kennzeichen) public{
    arrFahrzeugsdaten[count] = fahrzeugsdaten(count, _markeTyp, _kennzeichen);
  }
  struct fahrersdaten{
    uint fahrerid;
    string fahrerName;
    string fahrerAdr;
    uint fuehrerscheinnr;
    string klasse;
    string ausgestellt;
    string gueltigAbBis;
  }
  mapping (uint => fahrersdaten) public arrFahrersdaten;
  function addFahrersdaten(string memory _nameVname, string memory _adr, uint _fuehrerscheinnr,
    string memory _klasse, string memory _ausgestellt, string memory _gueltigAbBis) public {
      arrFahrersdaten[count]= fahrersdaten(count, _nameVname, _adr, _fuehrerscheinnr, _klasse, _ausgestellt, _gueltigAbBis);
  }

  struct schaden{
    uint id;
    string sichtbareSchaeden;
    string bemerkungen;
  }
  mapping (uint => schaden) arrSchaden;
  function addSchaden(string memory _sichtbareSchaeden, string memory _bemerkungen) public{
    arrSchaden[count]=schaden(count, _sichtbareSchaeden, _bemerkungen);
  }

}
