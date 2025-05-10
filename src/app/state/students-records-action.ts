import { createAction, props } from "@ngrx/store";
import { StudentsRecords } from "./students-records";

export const actionsList = {
    callStudentRecordsApi: "[Student Table Component] call students records api",
    callStudentRecordsApiSucess: "[Student Table Component] call students records api sucess"
};

export const callStudentRecordsApi = createAction( actionsList.callStudentRecordsApi);
export const callStudentRecordsApiSucess = createAction(actionsList.callStudentRecordsApiSucess, props<{ palyload : StudentsRecords[]}>());

