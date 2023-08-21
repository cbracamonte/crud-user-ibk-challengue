import { Injectable } from '@angular/core';
import BroadcastChannelIbk from 'broadcast-channel-hb';

@Injectable({
  providedIn: 'root',
})
export class BroadcastChannelService {
  private channel: BroadcastChannelIbk;

  constructor() {
    this.channel = new BroadcastChannelIbk('crud-users');
    console.log('channel-angular', this.channel);
  }

  addListener(type: string, callback: (data: any) => void) {
    this.channel.addListener(type, callback);
  }

  removeListener(type: string, callback: (data: any) => void) {
    this.channel.removeListener(type, callback);
  }

  sendMessage(type: string, data: any) {
    this.channel.sendMessage(type, data);
  }
}
