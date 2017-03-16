import { EventEmitter } from 'events';

class NPCStore extends EventEmitter {
  constructor() {
    super();
    this.npcTalk = '開始!輸入0~100';
  }

  getAll() {
    return this.npcTalk;
  }
}

const npcTalkstore = new NPCStore;

export default npcTalkstore;
