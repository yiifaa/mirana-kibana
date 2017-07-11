import AggTypesMetricsMetricAggTypeProvider from 'ui/agg_types/metrics/metric_agg_type';
import GetFieldLabel from 'ui/i18n/Fields.js'

export default function AggTypeMetricAvgProvider(Private) {
  const MetricAggType = Private(AggTypesMetricsMetricAggTypeProvider);

  return new MetricAggType({
    name: 'avg',
    title: '平均值',
    makeLabel: function (aggConfig) {
      return GetFieldLabel(aggConfig.getFieldDisplayName()) + '平均值';
    },
    params: [
      {
        name: 'field',
        filterFieldTypes: 'number'
      }
    ]
  });
}
