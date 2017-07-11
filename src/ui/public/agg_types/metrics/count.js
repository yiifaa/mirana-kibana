import AggTypesMetricsMetricAggTypeProvider from 'ui/agg_types/metrics/metric_agg_type';
import RegistryFieldFormatsProvider from 'ui/registry/field_formats';

export default function AggTypeMetricCountProvider(Private) {
  const MetricAggType = Private(AggTypesMetricsMetricAggTypeProvider);
  const fieldFormats = Private(RegistryFieldFormatsProvider);

  return new MetricAggType({
    name: 'count',
    title: '计数',
    hasNoDsl: true,
    makeLabel: function () {
      return '计数';
    },
    getFormat: function () {
      return fieldFormats.getDefaultInstance('number');
    },
    getValue: function (agg, bucket) {
      return bucket.doc_count;
    }
  });
}
