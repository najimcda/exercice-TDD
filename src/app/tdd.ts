export class Door {
  status: boolean;
  key?: string;


  constructor(status: boolean, key: string) {
    this.status = status;
    key && (this.key = key);


  }

  isOpen(status: boolean): boolean {
    if (status === false) {
      return false;
    }

    return true;
  }

  setStatus() {
    this.status! = this.status;
  }


}

export class Gamer {
  name: string;
  keys: { name: string }[];

  constructor(name: string) {
    this.name = name,
      this.keys = []
  }

  useKey(door: Door, gamer: Gamer) {
    const result = gamer.keys.find((k) => door.key === k.name);

    if (result) {
      door.status = true;
      this.removeKey(door.key as string);
    }
    return door;
  }

  addKey(key: string) {
    this.keys.push({ name: key })
  }


  removeKey(keyName: string) {
    const index = this.keys.findIndex((k) => k.name === keyName);

    if (index !== -1) {
      this.keys.splice(index, 1);
    }

  }


  lootItem(room: Room, item: string) {
    this.keys.push({ name: item });
    room.removeItem(item);
  }
}

export class Room {
  name: string;
  items: string[];

  constructor(name: string, items: string[] = []) {
    this.items = items;
    this.name = name;
  }

  removeItem(itemName: string) {
    const index = this.items.findIndex((i) => i === itemName);

    if (index !== -1) {
      this.items.splice(index, 1);
    }

  }
}



