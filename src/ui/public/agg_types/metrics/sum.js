import AggTypesMetricsMetricAggTypeProvider from 'ui/agg_types/metrics/metric_agg_type';
import GetFieldLabel from 'ui/i18n/Fields.js'

export default function AggTypeMetricSumProvider(Private) {
  const MetricAggType = Private(AggTypesMetricsMetricAggTypeProvider);

  return new MetricAggType({
    name: 'sum',
    title: '求和',
    makeLabel: function (aggConfig) {
      return GetFieldLabel(aggConfig.getFieldDisplayName()) + "的和";
    },
    params: [
      {
        name: 'field',
        filterFieldTypes: 'number'
      }
    ]
  });
}
