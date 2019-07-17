/* tslint:disable */
/**
 * importing dependent model for Aggregation View
 */
import { AggregationData } from './aggregation-data.model';

/**
 * Model for AggregationView. Used for displaying the Aggregation view table data.
 */
export interface AggregationView {
  /**
   * AggregationType to display the Aggregation type 
  */
  aggregationType: string;

  /**
   * Columns to display the Aggregation view's display columns 
  */
  columns: string[];

  /**
   * data to display the Aggregation view's datas
  */
  data: AggregationData[];

  /**
   * totalRecordCount to display the Aggregation view's total record count
  */
  totalRecordCount: number;
}
