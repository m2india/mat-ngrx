import { StudentsRecords } from "./students-records";


import { createReducer, on } from "@ngrx/store";

import * as Actions from "./students-records-action";


export const initState :  {studentsRecords: StudentsRecords[]} = {
    studentsRecords: [
        {
            name: "John Doe",
            city: "New York",
            country: "USA",
            subject: "Marine Safety Training",
            passportDeclaration: "Passport is valid and submitted.",
            fitnessDeclaration: "Medically fit for the course.",
            courseName: "STCW Basic Safety Training",
            date: "2025-05-03",
            state: "NY",
            street: "123 Ocean Avenue",
            email: "johndoe@example.com",
            phone: "+1 555 123 4567",
            postalCode: 10001
        }
    ]
};


export const studentsReducer = createReducer(
    initState,
    on(Actions.callStudentRecordsApiSucess, (state: any, { payload } : any) => ({...state, studentsRecords: payload }) )
);