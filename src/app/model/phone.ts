export class Phone {
    country: string;
    number : string;
    name : string;
  
    // format phone numbers as E.164
    get e164() {
      const num = this.country + this.number
      return `+${num}`
    }
  
}