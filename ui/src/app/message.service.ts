import { Injectable } from '@angular/core';

type TMessageType = 'info' | 'error';
interface IMessage {
  serviceName: string;
  messageType: TMessageType;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private messages: IMessage[] = [];

  push(message: IMessage): void;
  push(serviceName: string, messageType: TMessageType, message: string): void;
  push(...args: any[]): void {
    let message: IMessage = {
      serviceName: args.length === 1 ? '' : args[0],
      messageType: args.length === 1 ? 'info' : args[1],
      message: args.length === 1 ? args[0] : args[2]
    }
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }

  get(): IMessage[] {
    // TODO: copy, instead of exposing
    return this.messages;
  }

  hasMessages(): boolean {
    return this.messages.length > 0;
  }

  count(): number {
    return this.messages.length;
  }

}
