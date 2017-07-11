import AggTypesMetricsMetricAggTypeProvider from 'ui/agg_types/metrics/metric_agg_type';
import AggTypesMetricsPercentilesProvider from 'ui/agg_types/metrics/percentiles';
import GetFieldLabel from 'ui/i18n/Fields.js'

export default function AggTypeMetricMedianProvider(Private) {

  const MetricAggType = Private(AggTypesMetricsMetricAggTypeProvider);
  const percentiles = Private(AggTypesMetricsPercentilesProvider);

  return new MetricAggType({
    name: 'median',
    dslName: 'percentiles',
    title: '中位数',
    makeLabel: function (aggConfig) {
      return GetFieldLabel(aggConfig.getFieldDisplayName()) + "的中位数";
    },
    params: [
      {
        name: 'field',
        filterFieldTypes: 'number'
      },
      {
        name: 'percents',
        default: [50]
      },
      {
        write(agg, output) {
          output.params.keyed = false;
        }
      }
    ],
    getResponseAggs: percentiles.getResponseAggs,
    getValue: percentiles.getValue
  });
}
