import AggTypesMetricsMetricAggTypeProvider from 'ui/agg_types/metrics/metric_agg_type';
import GetFieldLabel from 'ui/i18n/Fields.js'

export default function AggTypeMetricMaxProvider(Private) {
  const MetricAggType = Private(AggTypesMetricsMetricAggTypeProvider);

  return new MetricAggType({
    name: 'max',
    title: '最大值',
    makeLabel: function (aggConfig) {
      return GetFieldLabel(aggConfig.getFieldDisplayName()) + '最大值';
    },
    params: [
      {
        name: 'field',
        filterFieldTypes: 'number,date'
      }
    ]
  });
}
