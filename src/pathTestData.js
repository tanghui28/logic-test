//getPath 函数测试数据
//rawData 测试数据
//processedData 测试结果对照数据
export default {
  test1: {
    rawData: {
      title: 'componentA',
      ui: {
        x: 70,
        y: 100,
        border: {
          color: '#999',
          borderRadius: {
            radiusValue: 20,
          },
        },
      },
      columns: {
        displayMode: 'default',
        scroll: {
          speed: 1,
          enabled: true,
        },
      },
    },
    processedData: [
      'title',
      'ui',
      'columns',
      'ui.x',
      'ui.y',
      'ui.border',
      'ui.border.color',
      'ui.border.borderRadius',
      'ui.border.borderRadius.radiusValue',
      'columns.displayMode',
      'columns.scroll',
      'columns.scroll.speed',
      'columns.scroll.enabled',
    ],
  },
  test2: {
    rawData: {
      title: 'componentB',
      legend: {
        type: 'plain',
        zlevel: 2,
        itemStyle: {
          border: {
            borderColor: 'red',
            borderWidth: 1,
          },
        },
        lineStyle: {
          opacity: 1,
        },
      },
    },
    processedData: [
      'title',
      'legend',
      'legend.type',
      'legend.zlevel',
      'legend.itemStyle',
      'legend.lineStyle',
      'legend.itemStyle.border',
      'legend.itemStyle.border.borderColor',
      'legend.itemStyle.border.borderWidth',
      'legend.lineStyle.opacity',
    ],
  },
};
