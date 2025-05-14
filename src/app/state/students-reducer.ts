import { StudentsRecords } from "./students-records.model";


import { createReducer, on } from "@ngrx/store";

import * as Actions from "./students-records-action";

import { adapter ,initialState } from "./students-records";


// export const initState : StudentsRecords[] = [{
       
//         name: "John Doe",
//         city: "New York",
//         country: "USA",
//         subject: "Marine Safety Training",
//         passportDeclaration: "Passport is valid and submitted.",
//         fitnessDeclaration: "Medically fit for the course.",
//         courseName: "STCW Basic Safety Training",
//         date: "2025-05-03",
//         state: "NY",
//         street: "123 Ocean Avenue",
//         email: "johndoe@example.com",
//         phone: "+1 555 123 4567",
//         postalCode: 10001
           
//     }];


export const studentsReducer = createReducer(
    initialState,
    on(Actions.callStudentRecordsApiSucess,
        (state: any, { payload } : any) => 
        {
            // [...payload ]
            return adapter.setAll(payload, state);} 
)
);