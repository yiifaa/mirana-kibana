import AggTypesMetricsMetricAggTypeProvider from 'ui/agg_types/metrics/metric_agg_type';
import GetFieldLabel from 'ui/i18n/Fields.js'

export default function AggTypeMetricMinProvider(Private) {
  const MetricAggType = Private(AggTypesMetricsMetricAggTypeProvider);

  return new MetricAggType({
    name: 'min',
    title: '最小值',
    makeLabel: function (aggConfig) {
      return GetFieldLabel(aggConfig.getFieldDisplayName()) + '最小值';
    },
    params: [
      {
        name: 'field',
        filterFieldTypes: 'number,date'
      }
    ]
  });
}
