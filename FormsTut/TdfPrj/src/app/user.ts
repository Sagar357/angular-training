export class User {
    public name;
    public email:any;
    public phone:any;
    public course:any;
    public timing:any;
    public offers:any;
    
    constructor(
    name:string,
    email:string,
    phone:number,
    course:string,
    timing:string,
    offers:boolean
    ){
        this.name=name;
        this.email=email;
        this.phone=phone;
        this.course=course;
        this.timing=timing;
        this.offers=offers;
    }
}
