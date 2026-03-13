import { Component, signal } from '@angular/core';
import { Card } from '../../components/card/card';
import {
  I18nSelectPipe,
  I18nPluralPipe,
  SlicePipe,
  JsonPipe,
  KeyValuePipe,
  TitleCasePipe,
  AsyncPipe,
} from '@angular/common';

const client1 = {
  name: 'Roberto',
  lastName: 'Vargas',
  age: 29,
  gender: 'male',
};

const client2 = {
  name: 'Jeimmy',
  lastName: 'Jimenez',
  age: 27,
  gender: 'female',
};

@Component({
  selector: 'uncommon-page',
  imports: [
    Card,
    I18nSelectPipe,
    I18nPluralPipe,
    SlicePipe,
    JsonPipe,
    KeyValuePipe,
    TitleCasePipe,
    AsyncPipe,
  ],
  templateUrl: './uncommon-page.html',
})
export default class UncommonPage {
  // i18n Select
  client = signal(client1);

  invitationMap = {
    male: 'It is a He',
    female: 'It is a She',
  };

  changeClient() {
    if (this.client() === client1) {
      this.client.set(client2);
      return;
    }

    this.client.set(client1);
  }

  // i18nPlural
  quantity = signal(1);
  quantityMap = {
    '=0': 'Zero',
    '=1': 'One',
    other: 'Is not 1 nor 0',
  };

  // KeyValue Pipe
  keyValueMap = {
    name: 'Roberto',
    lastName: 'Vargas',
    age: 29,
  };

  promiseValue = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise Value :)');
    }, 2000);
  });
}
