export class Door{
    status: boolean

    constructor(status: boolean) {
    this.status = status;
    
  }

  isOpen(status: boolean): boolean{
    if(status === false){
        return false;
    }
    
    return true;
  }
}


