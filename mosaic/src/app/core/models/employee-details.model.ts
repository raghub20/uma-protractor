/** Model for Employee details to display the employee details on the table */
export interface EmployeeDetails {
    /** Employee first name */
    empFirstName: string;
    /** Employee last name */
    empLastName: string;
    /** File number of the employee */
    fileNumber: number;
    /** Employee id */
    empId: string;
    /** Move phase of the employee
      *1 indicator: “Current Move Phase is 1 of 5: Pre-Policy Call”
      *2 indicators: “Current Move Phase is 2 of 5: Preparing to Relocate”
      *3 indicators: “Current Move Phase is 3 of 5: Arriving in New Location”
      *4 indicators: “Current Move Phase is 4 of 5: Living in New Location and Ongoing Assignment”
      *5 indicators: “Current Move Phase is 5 of 5: Living in New Location and Settled
    */
    movePhase: any;
    /** Ploicy name of the employee */
    policyName: string;
    /** departure city of the employee */
    departCity: string;
    /** departure state/province/canton of the employee */
    departStateProvCanton: string;
    /** departure country of the employee */
    departCountry: string;
    /** destination city of the employee */
    destCity: string;
    /** destination state/province/canton of the employee */
    destStateProvCanton: string;
    /** destination country of the employee */
    destCountry: string;
    /** Effective transfer date of the employee */
    effectiveTransferDate: Date;
    /** Total Cost of Move with Billing currency code of the employee  */
    totalCost: string;
  }
