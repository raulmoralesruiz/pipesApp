import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {
  // i18n Select
  public name: string = 'Raúl';
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient():void {
    if (this.name === 'Raúl') {
      this.name = 'Meli';
      this.gender = 'female';
    } else {
      this.name = 'Raúl';
      this.gender = 'male';
    }
  }

  // i18n Plural
  public clients: string[] = ['Leti','Raúl','Carlos','Meli','Manuel','Jimena','Cristina'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 personas esperando.',
    'other': 'tenemos # clientes esperando.',
  }

  deleteClient() {
    this.clients.shift();
  }

  // KeyValue Pipe
  public person = {
    name: "Raúl",
    age: 31,
    address: 'Sevilla, España'
  }

}
