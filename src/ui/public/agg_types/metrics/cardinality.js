import AggTypesMetricsMetricAggTypeProvider from 'ui/agg_types/metrics/metric_agg_type';
import RegistryFieldFormatsProvider from 'ui/registry/field_formats';
import GetFieldLabel from 'ui/i18n/Fields.js'

export default function AggTypeMetricCardinalityProvider(Private) {
  const MetricAggType = Private(AggTypesMetricsMetricAggTypeProvider);
  const fieldFormats = Private(RegistryFieldFormatsProvider);

  return new MetricAggType({
    name: 'cardinality',
    title: '计数(不含重复记录)',
    makeLabel: function (aggConfig) {
      return GetFieldLabel(aggConfig.getFieldDisplayName()) + '计数(不含重复记录)';
    },
    getFormat: function () {
      return fieldFormats.getDefaultInstance('number');
    },
    params: [
      {
        name: 'field'
      }
    ]
  });
}
