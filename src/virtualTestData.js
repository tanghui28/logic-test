//deleteVirtualWrapper 函数测试数据
//rawData 测试数据
//processedData 测试结果对照数据
export default {
  test1: {
    rawData: {
      name: 'tom',
      virtualY: {
        isVirtualWrapper: true,
        companyName: '擎创科技',
        location: '上海',
      },
      virtualA: {
        isVirtualWrapper: true,
        virtualB: {
          isVirtualWrapper: true,
          address: '孵化园C区',
          virtualC: { isVirtualWrapper: true, year: '2022' },
        },
        realProp: { isVirtualWrapper: false, title: '真实属性' },
      },
    },
    processedData: {
      name: 'tom',
      companyName: '擎创科技',
      location: '上海',
      address: '孵化园C区',
      year: '2022',
      realProp: { isVirtualWrapper: false, title: '真实属性' },
    },
  },
  test2: {
    rawData: {
      name: 'tom',
      virtualY: {
        isVirtualWrapper: true,
        companyName: '擎创科技',
        location: '上海',
      },
      virtualA: {
        isVirtualWrapper: true,
        realB: {
          address: '孵化园C区',
          realC: {
            year: '2022',
            virtualD: { isVirtualWrapper: true, tag: 'disposed' },
          },
        },
        realProp: { isVirtualWrapper: false, title: '真实属性' },
      },
    },
    processedData: {
      name: 'tom',
      companyName: '擎创科技',
      location: '上海',
      realB: {
        address: '孵化园C区',
        realC: {
          year: '2022',
          tag: 'disposed',
        },
      },
      realProp: { isVirtualWrapper: false, title: '真实属性' },
    },
  },
};
