
## fabric简单介绍
fabricjs是和konva同类型的，但是比konva上线时间更早一些，维护也更久一些。语言相对比较老，基础点。
![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/51b7ff7e729d4c26bc969d57ce78d81b~tplv-k3u1fbpfcp-watermark.image?)
### fabric接入
npm 安装：
```
npm i fabric --save
```
普通安装：
```
<script src="https://unpkg.com/fabric@4.6.0/dist/fabric.min.js"></script>
```
示例：
需要创建canvas实例
```
import { fabric } from 'fabric' // 引入 fabric 
function addRect() { 
const canvas = new fabric.Canvas('contexy')
// 创建一个长方形 
const rect = new fabric.Rect({ 
top: 30, 
left: 30,
height: 60, 
fill: 'red' })
canvas.add(rect) 
}

<canvas width="400" height="400" id="context" style="border: 1px solid #ccc;"></canvas>
```

### 相关文档
- [docs](http://fabricjs.com/docs/)


## konva 简单介绍及接入
### npm 接入
```
npm install konva\
```
### 普通接入
```
<script src="https://unpkg.com/konva@8/konva.min.js"></script> 
```
### react接入
```
npm install react-konva konva\
```
示例：
```
import { Stage, Layer, Rect, Circle } from 'react-konva';

export const App = () => {
  return (
    // Stage - is a div wrapper
    // Layer - is an actual 2d canvas element, so you can have several layers inside the stage
    // Rect and Circle are not DOM elements. They are 2d shapes on canvas
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Rect width={50} height={50} fill="red" />
        <Circle x={200} y={200} stroke="black" radius={50} />
      </Layer>
    </Stage>
  );
}
```

## 相关文档
- [react-konva](https://konvajs.org/docs/react/Intro.html)
- [api](https://konvajs.org/api/Konva.html)


## fabric和konva对比
### fabric
优点：
- 上线比较久，功能丰富，canvas相关的放大缩小等常用操作都有封装；
- 内置丰富的笔刷，对齐、标线等都有；
- 代码集成度很高，富文本等复杂的操作也都有；
- 文档很完善，功能都有描述；

缺点：
- 基于es5开发。可能会影响开发效率；
- 功能比较多，包比较大；
- 功能丰富，但是相对比较基础简单；
- 对其他主流前端库的支持比较弱


### konva

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9ebbfd7c83344497988b747cdd3e1fa0~tplv-k3u1fbpfcp-watermark.image?)
优点：
- Typescript编写，对ts的支持比较高
- 图层分级明显，组件规范：Stage --》 Layer --》 Group 等层级明显
- 代码简洁，基于canvas的操作语义化，好理解，更好上手
- 包体积较小
- 支持Reacy、Vue等，有对应组件、demo和文档


缺点：
- 相比fabric，周边比较薄弱
- 维护更新修复代码较慢





