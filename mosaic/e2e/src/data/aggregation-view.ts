import mongoose from 'mongoose';
import { AggregationData as IAggregationData } from '../../../src/app/core/models/aggregation-data.model';
import { AggregationView as IAggregationView } from '../../../src/app/core/models/aggregation-view.model';

export class AggregationView {
  static getSchema() {
    return new mongoose.Schema({
      aggregationType: String,
      columns: Array,
      data: Array,
      totalRecordCount: Number
    });
  }
  static getData() {
    const aggregateView: IAggregationView[] = [];
    const aggregateData: IAggregationData[] = [];

    aggregateData.push({
      country: 'Australia',
      activeEmployees: 8,
      currentYtdCosts: '113058 AUD',
      priorYtdCosts: '103277 AUD',
      ChangeOfTotalCost: 0.095
    });
    aggregateData.push({
      country: 'Brazil',
      activeEmployees: 1,
      currentYtdCosts: '11754 BRL',
      priorYtdCosts: '10112 BRL',
      ChangeOfTotalCost: 0.162
    });
    aggregateData.push({
      country: 'Canada',
      activeEmployees: 2,
      currentYtdCosts: '8298 CAD',
      priorYtdCosts: '10114 CAD',
      ChangeOfTotalCost: -0.18
    });
    aggregateData.push({
      country: 'China',
      activeEmployees: 10,
      currentYtdCosts: '299169 CNY',
      priorYtdCosts: '205668 CNY',
      ChangeOfTotalCost: 0.455
    });
    aggregateData.push({
      country: 'Chile',
      activeEmployees: 4,
      currentYtdCosts: '7550 CLP',
      priorYtdCosts: '2467 CLP',
      ChangeOfTotalCost: 2.06
    });
    aggregateData.push({
      country: 'Egypt',
      activeEmployees: 2,
      currentYtdCosts: '3709 EGP',
      priorYtdCosts: '3048 EGP',
      ChangeOfTotalCost: 0.217
    });
    aggregateData.push({
      country: 'France',
      activeEmployees: 18,
      currentYtdCosts: '15228 EUR',
      priorYtdCosts: '10762 EUR',
      ChangeOfTotalCost: 0.415
    });
    aggregateData.push({
      country: 'Germany',
      activeEmployees: 2,
      currentYtdCosts: '54007 EUR',
      priorYtdCosts: '54112 EUR',
      ChangeOfTotalCost: -0.002
    });

    aggregateView.push({
      aggregationType: 'destinationCountry',
      columns: [
        'country',
        'activeEmployees',
        'currentYtdCosts',
        'priorYtdCosts',
        'ChangeOfTotalCost'
      ],
      data: aggregateData,
      totalRecordCount: 4
    });
    return aggregateView;
  }
}
