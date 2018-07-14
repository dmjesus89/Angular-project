export class AddressModel {
    street:string;
    number:number;
    state:string;

    constructor(_street?: string, _number?: number, _state?: string){
        this.street = _street;
        this.number = _number;
        this.state = _state;
    }
}
