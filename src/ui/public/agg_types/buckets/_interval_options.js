export default function IntervalOptionsService() {
  return [
    {
      display: '由系统确定',
      val: 'auto',
      enabled: function (agg) {
        // not only do we need a time field, but the selected field needs
        // to be the time field. (see #3028)
        return agg.fieldIsTimeField();
      }
    },
    {
      display: '按微秒统计',
      val: 'ms'
    },
    {
      display: '按秒统计',
      val: 's'
    },
    {
      display: '按分钟统计',
      val: 'm'
    },
    {
      display: '按小时统计',
      val: 'h'
    },
    {
      display: '按天统计',
      val: 'd'
    },
    {
      display: '按周统计',
      val: 'w'
    },
    {
      display: '按月统计',
      val: 'M'
    },
    {
      display: '按年统计',
      val: 'y'
    },
    {
      display: 'Custom',
      val: 'custom'
    }
  ];
}
