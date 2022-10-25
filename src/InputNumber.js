import React from "react";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

/**
 *   🚀手写 简易数字输入框 组件 , 不能使用第三方组件
 *   ℹ️ 该组件需要满足既可以支持受控 , 也可以非受控 (20分)
 *   📌 当调用该组件 , 没有传value属性时 , 该组件为非受控组件 ,  传了value属性则为受控组件
 *   左侧为输入框 , 只能输入数字  , 右侧为 上下箭头 ,  点击上/下箭头 实现值 +1 或 -1 (10分)
 *   该组件可接收四个属性, 如下: (20分)
 *    1. value: number
 *    2. onChange : function(value: number | null)
 *    3. min: number , 可输入的最小值
 *    4. max: number , 可输入的最大值
 *
 */
const InputNumber = (props) => {
  const { value, onChange, min, max } = props;
  //your logic

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <input />
      <DownOutlined style={{ top: 14 }} />
      <UpOutlined style={{ top: 2 }} />
    </div>
  );
};

export default InputNumber;
