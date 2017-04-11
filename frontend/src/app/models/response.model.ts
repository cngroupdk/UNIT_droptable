import { Messagebox } from './messagebox.model'

export class Response
{
    constructor(
        public id:number,
        public type:number,
        public publisher:string,
        public published:boolean,
        public email:string,
        public value:string,
        public msbgox:Messagebox
    )
    {}
}