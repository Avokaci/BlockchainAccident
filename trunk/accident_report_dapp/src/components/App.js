import React, { Component } from 'react';
import Web3 from 'web3';
import './App.css';
import Accident from '../abis/Accident.json'
import Navbar from './Navbar'
import Main from './Main'
import Allgemein from './allgemein.png'
import {
    CollapsibleHead,
    CollapsibleContent
} from "react-collapsible-component";
import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './App.css'

const ipfsClient = require('ipfs-http-client')
const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' }) // leaving out the arguments will default to these values

class App extends Component {

  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3
    // Load account
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    const networkId = await web3.eth.net.getId()
    const networkData = Accident.networks[networkId]
    if(networkData) {
      const contract = web3.eth.Contract(Accident.abi, networkData.address)
      this.setState({ contract })
      const ipfsHash = await contract.methods.get().call()
      console.log("ipfsHashes from contract: ", ipfsHash)
    } else {
      window.alert('Smart contract not deployed to detected network.')
    }
  }

  constructor(props) {
    super(props)

    this.state = {
      ipfsHashes: [],
      contract: null,
      web3: null,
      buffers: [],
      buffer: null,
      account: null
    }
  }

  captureFile = (event) => {
    event.preventDefault()
    const file = event.target.files[0]
    const reader = new window.FileReader()
    reader.readAsArrayBuffer(file)
    reader.onloadend = () => {
      this.state.buffers.push(Buffer(reader.result))
      this.setState({ buffer: Buffer(reader.result) })
      console.log('buffer', this.state.buffer)
    }
  }

  onSubmit = (event) => {
    event.preventDefault()
    let pre = document.querySelector('#noImgs pre')
    let precount = document.querySelector('#countImgs pre')
    let data = JSON.parse(sessionStorage.getItem('AccidentReport'))
    console.log("accident report data: ", data)

    const jsonString = JSON.stringify(Object.assign({}, data))
    
    pre.textContent = ''
    precount.textContent = ''

    console.log("buffers count: " + this.state.buffers.length)

    if(this.state.buffers.length === 0) {
      console.warn("no images found")
      pre.textContent = '\nKein Foto wurde ausgewählt! Bitte wählen Sie Fotos aus!'
      return
    } else if(this.state.buffers.length < 4) {
        console.warn("number of selected images is too low")
        pre.textContent = '\nBitte wählen Sie mind. 4 Fotos aus!'
        return

    } else {
        if(document.getElementById("btn").disabled === false) {
          console.warn("not submitted!!")
          return 
        }
        document.getElementById("submit").disabled = true;
        sessionStorage.clear()
        var inputs = document.getElementsByTagName("INPUT");
        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].type === 'file') {
                inputs[i].disabled = true;
            }
        }
    }

    console.log("Submitting file to ipfs...")
    this.state.buffers.forEach((buffer, index) => {
      ipfs.add(this.state.buffers[index], (error, result) => {
        console.log('Ipfs result', index, result)
        if(error) {
          console.error(error)
          return
        }

        this.state.ipfsHashes.push(result[0].hash)

        if(this.state.ipfsHashes.length === this.state.buffers.length) {
            console.log("ipfsHashes length: " + this.state.ipfsHashes.length)
            precount.textContent = '\n' + this.state.ipfsHashes.length + ' Fotos wurden hochgeladen'

            this.state.ipfsHashes.push(jsonString)
            console.log("input length after pushing report as string: " + this.state.ipfsHashes.length)

            this.state.contract.methods.set(this.state.ipfsHashes).send({ from: this.state.account }).then((r) => {
                return
            })
          }
      })
    })
  }

  render() {
    return (
      <div>
        <Navbar account={this.state.account} />
      <div className="App">
        <main className="container">
            <div className="pure-g">
              <div className="pure-u-1-1">
                <Main/>
                <form onSubmit={this.onSubmit} >
                    <CollapsibleHead className="additionalClassForHead">
                        Fotodumentation von Fahrzeugbeschädigugen
                    </CollapsibleHead>
                    <CollapsibleContent className="additionalClassForContent">
                        <div className="row">
                          <div className="col">
                          <br/>
                            <h2> Allgemein </h2>
                            <p> Die unten beschriebenen Vorgehensweisen zum Fotografieren, sollen eine praktische Unterstützungshilfe zur Erstellung einer kompletten, aussagekräftigen Fotodokumentation bieten. </p>
                            <img  src={Allgemein} alt="Allgemein"  class="img-fluid"/>
                            
                            <h2>Übersichtsfotos</h2>
                            <h3>Fahrzeug A</h3>

                            <table class="table">
                              <thead>
                                <tr>
                                  <th scope="col"></th>
                                  <th scope="col"></th>  
                                </tr>
                              </thead>
                              <tbody>
                              <tr>
                                <td><label>Übersichtsfoto, diagonal gesamte Fahrzeugfront und linke Seite</label></td>
                                <td><input type='file' onChange={this.captureFile} /></td>
                              </tr>
                              <tr>
                                <td><label>Übersichtsfoto, diagonal gesamtes Fahrzeugheck und rechte Seite</label></td>
                                <td><input type='file' onChange={this.captureFile} /></td>
                              </tr>
                              <tr>
                                <td><label>Übersichtsfoto, diagonal gesamte Fahrzeugfront und rechte Seite</label></td>
                                <td><input type='file' onChange={this.captureFile} /></td>
                              </tr>
                              <tr>
                                <td><label>Zulassungsschein</label></td>
                                <td><input type='file' onChange={this.captureFile} /></td>
                              </tr>
                              </tbody>
                            </table>

                            <h3>Fahrzeug B</h3>
                            <table class="table">
                              <thead>
                                <tr>
                                  <th scope="col"></th>
                                  <th scope="col"></th>  
                                </tr>
                              </thead>
                              <tbody>
                              <tr>
                                <td><label>Übersichtsfoto, diagonal gesamte Fahrzeugfront und linke Seite</label></td>
                                <td><input type='file' onChange={this.captureFile} /></td>
                              </tr>
                              <tr>
                                <td><label>Übersichtsfoto, diagonal gesamtes Fahrzeugheck und rechte Seite</label></td>
                                <td><input type='file' onChange={this.captureFile} /></td>
                              </tr>
                              <tr>
                                <td><label>Übersichtsfoto, diagonal gesamte Fahrzeugfront und rechte Seite</label></td>
                                <td><input type='file' onChange={this.captureFile} /></td>
                              </tr>
                              <tr>
                                <td><label>Zulassungsschein</label></td>
                                <td><input type='file' onChange={this.captureFile} /></td>
                              </tr>
                              </tbody>
                            </table>

                            <h2>Detailaufnahmen des Schadens</h2>
                            <h3>Fahrzeug A</h3>

                            <table class="table">
                              <thead>
                                <tr>
                                  <th scope="col"></th>
                                  <th scope="col"></th>  
                                </tr>
                              </thead>
                              <tbody>
                              <tr>
                                <td><label>Gesamtbild (aus einer gewissen Entfernung zum Fahrzeug)</label></td>
                                <td><input type='file' onChange={this.captureFile} /></td>
                              </tr>
                              <tr>
                                <td><label>Detailaufnahmen aller Schäden I</label></td>
                                <td><input type='file' onChange={this.captureFile} /></td>
                              </tr>
                              <tr>
                                <td><label>Detailaufnahmen aller Schäden II</label></td>
                                <td><input type='file' onChange={this.captureFile} /></td>
                              </tr>                         
                              </tbody>
                            </table>
                   
                            <h3>Fahrzeug B</h3>

                            <table class="table">
                              <thead>
                                <tr>
                                  <th scope="col"></th>
                                  <th scope="col"></th>  
                                </tr>
                              </thead>
                              <tbody>
                              <tr>
                                <td><label>Gesamtbild (aus einer gewissen Entfernung zum Fahrzeug)</label></td>
                                <td><input type='file' onChange={this.captureFile} /></td>
                              </tr>
                              <tr>
                                <td><label>Detailaufnahmen aller Schäden I</label></td>
                                <td><input type='file' onChange={this.captureFile} /></td>
                              </tr>
                              <tr>
                                <td><label>Detailaufnahmen aller Schäden II</label></td>
                                <td><input type='file' onChange={this.captureFile} /></td>
                              </tr>                         
                              </tbody>
                            </table>

                            <h2>Spaltmasse dokumentieren bei sichtbarer Veränderung</h2>
                            <h3>Fahrzeug A</h3>
                            <h5>Hinweis: Spaltmasse jeweils zur Gegenseite vergleichen und mit Foto dokumentieren.</h5>
                            <table class="table">
                              <thead>
                                <tr>
                                  <th scope="col"></th>
                                </tr>
                              </thead>
                              <tbody>
                              <tr>
                                <td><input type='file' onChange={this.captureFile} /></td>
                              </tr>
                              <tr>
                                <td><input type='file' onChange={this.captureFile} /></td>
                              </tr>
                              <tr>
                                <td><input type='file' onChange={this.captureFile} /></td>
                              </tr>  
                              <tr>
                                <td><input type='file' onChange={this.captureFile} /></td>
                              </tr>                
                              </tbody>
                            </table>


                            <h3>Fahrzeug B</h3>

                            <h5>Hinweis: Spaltmasse jeweils zur Gegenseite vergleichen und mit Foto dokumentieren.</h5>
                            <table class="table">
                              <thead>
                                <tr>
                                  <th scope="col"></th>
                                </tr>
                              </thead>
                              <tbody>
                              <tr>
                                <td><input type='file' onChange={this.captureFile} /></td>
                              </tr>
                              <tr>
                                <td><input type='file' onChange={this.captureFile} /></td>
                              </tr>
                              <tr>
                                <td><input type='file' onChange={this.captureFile} /></td>
                              </tr>  
                              <tr>
                                <td><input type='file' onChange={this.captureFile} /></td>
                              </tr>                
                              </tbody>
                            </table>
                            <h2>Fahrzeuginnenraum (bei Auslösung SRS - Airbag-Systeme oder Totalschadenverdacht)</h2>
                            <h3>Fahrzeug A</h3>
                            <table class="table">
                              <thead>
                                <tr>
                                  <th scope="col"></th>
                                  <th scope="col"></th>  
                                </tr>
                              </thead>
                              <tbody>
                              <tr>
                                <td><label>Armaturenbrett inkl. Mittelkonsole</label></td>
                                <td><input type='file' onChange={this.captureFile} /></td>
                              </tr>
                              <tr>
                                <td><label>Innenraum Front (inkl. allfällig ausgelöster Airbags) – zwingend bei Auffahrkollision</label></td>
                                <td><input type='file' onChange={this.captureFile} /></td>
                              </tr>
                              <tr>
                                <td><label>Innenraum hinten (inkl. allfällig ausgelöster Airbags) – zwingend bei Auffahrkollision</label></td>
                                <td><input type='file' onChange={this.captureFile} /></td>
                              </tr>                         
                              </tbody>
                            </table>



                            <h4>Sicherheitsgurt fotografieren</h4>
                            <p>1. Hängt der Gurt gestrafft an der B-Säule, den Gurt spannen, fotografieren und zusätzlich einen deutlichen Textvermerk erstellen.</p>
                            <p>2. Nicht aufgerollten Sicherheitsgurt fotografieren</p>
                            <p>3. Bei einigen Modellen lässt sich der Gurt trotz Straffung noch ein- und ausrollen (teilweise mit markantem Geräusch). Gurt ausziehen und fotografieren (ggf. Auslösen des Gurtstraffers dokumentieren)</p>   
                            <input type='file' onChange={this.captureFile} />
                            <br/>
                            <br/>

                            <h3>Fahrzeug B</h3>

                            <table class="table">
                              <thead>
                                <tr>
                                  <th scope="col"></th>
                                  <th scope="col"></th>  
                                </tr>
                              </thead>
                              <tbody>
                              <tr>
                                <td><label>Armaturenbrett inkl. Mittelkonsole</label></td>
                                <td><input type='file' onChange={this.captureFile} /></td>
                              </tr>
                              <tr>
                                <td><label>Innenraum Front (inkl. allfällig ausgelöster Airbags) – zwingend bei Auffahrkollision</label></td>
                                <td><input type='file' onChange={this.captureFile} /></td>
                              </tr>
                              <tr>
                                <td><label>Innenraum hinten (inkl. allfällig ausgelöster Airbags) – zwingend bei Auffahrkollision</label></td>
                                <td><input type='file' onChange={this.captureFile} /></td>
                              </tr>                         
                              </tbody>
                            </table>

                            <h4>Sicherheitsgurt fotografieren</h4>
                            <p>1. Hängt der Gurt gestrafft an der B-Säule, den Gurt spannen, fotografieren und zusätzlich einen deutlichen Textvermerk erstellen.</p>
                            <p>2. Nicht aufgerollten Sicherheitsgurt fotografieren</p>
                            <p>3. Bei einigen Modellen lässt sich der Gurt trotz Straffung noch ein- und ausrollen (teilweise mit markantem Geräusch). Gurt ausziehen und fotografieren (ggf. Auslösen des Gurtstraffers dokumentieren)</p>   
                            <input type='file' onChange={this.captureFile} />
                            <br/>
                            <br/>

                            <h2>Weitere Fotos</h2>

                            <h3>Fahrzeug A </h3>
                            <table class="table">
                              <thead>
                                <tr>
                                  <th scope="col"></th>
                                </tr>
                              </thead>
                              <tbody>
                              <tr>
                                <td><input type='file' onChange={this.captureFile} /></td>
                              </tr>
                              <tr>
                                <td><input type='file' onChange={this.captureFile} /></td>
                              </tr>
                              <tr>
                                <td><input type='file' onChange={this.captureFile} /></td>
                              </tr>                                           
                              </tbody>
                            </table>
                            <h3>Fahrzeug B</h3>
                            <table class="table">
                              <thead>
                                <tr>
                                  <th scope="col"></th>
                                </tr>
                              </thead>
                              <tbody>
                              <tr>
                                <td><input type='file' onChange={this.captureFile} /></td>
                              </tr>
                              <tr>
                                <td><input type='file' onChange={this.captureFile} /></td>
                              </tr>
                              <tr>
                                <td><input type='file' onChange={this.captureFile} /></td>
                              </tr>                                           
                              </tbody>
                            </table>
                            <div className="row">
                                    <div class="col-5"></div>
                                    <div class="col">
                                      <div className="col-5">
                                        <label className="importantLabel">Stellen Sie sicher, dass Sie auf "Bestätigen" in "Umstände" geklickt haben (siehe oben), bevor Sie auf „Senden“ klicken.</label>
                                        <input type='submit' id="submit" value="Hochladen & senden" class="btn btn-success"/>
                                        <div id="noImgs">
                                            <pre></pre>
                                        </div>
                                        <div id="countImgs">
                                            <pre></pre>
                                        </div>        
                                      </div>
                                      <div id="bMsg">
                                      <pre></pre>
                                      </div>
                                    </div>                                
                            </div>
                            
                        </div>
                      </div>
                    </CollapsibleContent>
                  </form>
                </div>
              </div>
            </main>
          </div>
        </div>

    );
  }
}

export default App;
