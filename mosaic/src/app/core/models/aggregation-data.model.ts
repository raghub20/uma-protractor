/* tslint:disable */
/**
 * Model for AggregationView Data. Used for displaying the Aggregation destination country table data.
 */
export interface AggregationData {
  /**
   * Country to display the country name
   */
  country: string;

  /**
   * activeEmployees to display the number of active employees
   */
  activeEmployees: number;

  /**
   * currentYtdCosts to display the current YTD costs
   */
  currentYtdCosts: string;

  /**
   * priorYtdCosts to display the prior YTD costs
   */
  priorYtdCosts: string;

  /**
   * ChangeOfTotalCost to display Change of total cost
   */
  ChangeOfTotalCost: number;
}
