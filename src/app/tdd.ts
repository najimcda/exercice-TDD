export class Door{
    status: boolean;
    key?: string;
    

    constructor(status: boolean, key : string) {
    this.status = status;
    key && (this.key = key);
    
    
  }

    isOpen(status: boolean): boolean{
    if(status === false){
        return false;
    }
    
    return true;
  }

  setStatus(){
    this.status! = this.status;
  }

  
}

export class Gamer{
    name: string;
    keys:{name: string, quantity: number}[];

    constructor(name: string){
        this.name = name,
        this.keys = []
    }

    useKey(door: Door, gamer: Gamer){
      const result = gamer.keys.find((k)=>door.key === k.name);
        
      if(result){
          door.status = true;
        }
        return door;
    }

    addKey(key: string){
      this.keys.push({name: key, quantity: 1})
    }
}




