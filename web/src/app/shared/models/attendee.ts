export class TrekAttendee {
    isAdult: boolean;
    firstName: string;
    lastName: string;
    ward: string;
    gender: string;
    peanutAllergy: boolean;
    glutenAllergy: boolean;
    dateOfBirth: Date;
    parentName: string;
    parentEmail: string;
    parentPhone: string;
    emergencyName: string;
    emergencyPhone: string;
  
    constructor(obj: TrekAttendee = {} as TrekAttendee) {
        this.isAdult = obj.isAdult;
        this.firstName = obj.firstName;
        this.lastName = obj.lastName;
        this.ward = obj.ward
        this.gender = obj.gender
        this.peanutAllergy = obj.peanutAllergy;
        this.glutenAllergy = obj.glutenAllergy;
        this.dateOfBirth = obj.dateOfBirth;
        this.parentName = obj.parentName;
        this.parentEmail = obj.parentEmail;
        this.parentPhone = obj.parentPhone;
        this.emergencyName = obj.emergencyName;
        this.emergencyPhone = obj.emergencyPhone;
    }
  }
  