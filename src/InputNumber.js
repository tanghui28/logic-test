import React from 'react';
import { DownOutlined, UpOutlined } from '@ant-design/icons';

/**
 *   🚀手写 数字输入框 组件
 *   左侧为输入框 , 只能输入数字  , 右侧为 上下箭头 ,  点击上/下箭头 实现值 +1 或 -1
 *   样式参考 antd InputNumber : https://ant-design.gitee.io/components/input-number-cn/
 *   该组件共四个属性, 如下:
 *    1. value: number
 *    2. onChange : function(value: number | null)
 *    3. min: number , 可输入的最小值
 *    4. max: number , 可输入的最大值
 *
 *    📌 当调用该组件 , 没有传value属性时 , 该组件为非受控组件 ,  传了value属性则为受控组件
 *
 *
 *
 */
const InputNumber = () => {
  //your logic
  return <div>InputNumber组件</div>;
};

export default InputNumber;
