import React, { useState } from "react";
import InputNumber from "./InputNumber";
import pathTestData from "./pathTestData";
import virtualTestData from "./virtualTestData";
import isEqual from "lodash.isequal";
import cloneDeep from "lodash.clonedeep";
import xor from "lodash.xor";

export default function App() {
  const [v, setV] = useState(8);
  return (
    <div>
      <code style={{ fontSize: 20 }}>
        笔试题 , 共三题(一个半小时内完成) <br />
        总分100分 , InputNumber50分 / getPath25分 /deleteVirtualWrapper25分,
        60分以上可进入面试环节 <br />
        1、 完成 InputNumber 组件编写 <br />
        2、 实现 getPath 方法 <br />
        3、 实现 deleteVirtualWrapper 方法
        <br />
      </code>

      {/* 1、进入 InputNumber.js文件 , 实现该 InputNumber 组件逻辑 */}
      <div style={{ padding: 40, display: "flex", gap: 16 }}>
        <span>受控模式 ：</span>
        <InputNumber value={6} />
        <InputNumber value={v} onChange={setV} />
      </div>
      <div style={{ padding: 40 }}>
        <span>非受控模式 ：</span>
        <InputNumber min={-2} max={5} />
      </div>
    </div>
  );
}
/**
 *  2、完善下方 getPath 方法
 *  该方法接受一个对象参数 , 返回该对象中的所有属性的路径数组
 *  如: {
 *        label:'饼图',
 *        legend:{
 *          zlevel:2,
 *          borderColor:'red',
 *          padding:{
 *            top:10
 *          }
 *        }
 *      }
 *   => ['label','legend','legend.zlevel','legend.borderColor','legend.padding','legend.padding.top']
 * */

/**
 * @param   {Object} obj        任意对象
 * @returns {Array<string>}     路径数组
 */
function getPath(obj) {
  //your logic
  return [];
}
console.log(
  "🚀getPath 测试结果1: ",
  getPath(cloneDeep(pathTestData.test1.rawData)),
  "是否符合预期:",
  xor(
    getPath(cloneDeep(pathTestData.test1.rawData)),
    pathTestData.test1.processedData
  ).length === 0
);
console.log(
  "🚀getPath 测试结果2",
  getPath(cloneDeep(pathTestData.test2.rawData)),
  "是否符合预期:",
  xor(
    getPath(cloneDeep(pathTestData.test2.rawData)),
    pathTestData.test2.processedData
  ).length === 0
);

/**
 * 3、完善下方deleteVirtualWrapper函数 , 将obj对象中的虚拟包裹层(isVirtualWrapper === true的对象)删除 (将该对象的其余属性放置到上一层对象中, 如果上一层对象任然为虚拟包裹层 , 则继续放置到上一层对象)
 * 如: {
 *        name:'tom',
 *        virtualY:{
 *           isVirtualWrapper:true,
 *           companyName:'擎创科技',
 *           location:'上海'
 *        },
 *        virtualA:{
 *           isVirtualWrapper:true,
 *           virtualB:{
 *              isVirtualWrapper:true,
 *              address:'孵化园C区'
 *           }
 *        },
 *        realProp:{  isVirtualWrapper:false, title:'真实属性' }
 *    }
 *
 * ==> {
 *       name:'tom',
 *       companyName:'擎创科技',
 *       location:'上海',
 *       address:'孵化园C区',
 *       realProp:{ isVirtualWrapper:false, title:'真实属性' }
 *     }
 */

/**
 * @param   {Object} data  需要剔除虚拟层的源数据
 * @returns {Object}        剔除虚拟层后的数据
 */
function deleteVirtualWrapper(data) {
  //your logic
  return data;
}
console.log(
  "🚀  deleteVirtualWrapper 测试结果1:",
  deleteVirtualWrapper(cloneDeep(virtualTestData.test1.rawData)),
  "是否符合预期:",
  isEqual(
    deleteVirtualWrapper(cloneDeep(virtualTestData.test1.rawData)),
    virtualTestData.test1.processedData
  )
);
console.log(
  "🚀  deleteVirtualWrapper 测试结果2:",
  deleteVirtualWrapper(cloneDeep(virtualTestData.test2.rawData)),
  "是否符合预期:",
  isEqual(
    deleteVirtualWrapper(cloneDeep(virtualTestData.test2.rawData)),
    virtualTestData.test2.processedData
  )
);
