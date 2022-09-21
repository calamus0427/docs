## konva介绍
Konva is an HTML5 Canvas JavaScript framework that extends the 2d context
by enabling canvas interactivity for desktop and mobile applications.



## Konva Util 的一些api
###  haveIntersection 检查两个矩形有没有相交
#### 入参
p1 : { x, y, width, height }
p2 : { x, y, width, height }

#### 返回值
true/false

#¥¥# 示例
```
import Konva from 'konva';

const overlapping = Konva.Util.haveIntersection(shape1.getClientRect(), shape2.getClientRect());

```


### getRandomColor 返回随机颜色值
#### 入参


#### 返回值
hex color

#### 示例
```
import Konva from 'konva';

shape.fill(Konva.Util.getRandomColor());

```

###  getRGB 返回RGB颜色值
#### 入参
color: string

#### 返回值
rgb color

#### 示例
```
import Konva from 'konva';

var rgb = Konva.Util.getRGB('blue');    // return {r:0, g:0, b:255}
var rgb = Konva.Util.getRGB('#0000ff');    // return {r:0, g:0, b:255}
var rgb = Konva.Util.getRGB('rgb(0,0,255)');    // return {r:0, g:0, b:255}

```


###  getRGB 返回RGB颜色值
#### 入参
color: string

#### 返回值
rgb color

#### 示例
```
import Konva from 'konva';

var rgb = Konva.Util.getRGB('blue');    // return {r:0, g:0, b:255}
var rgb = Konva.Util.getRGB('#0000ff');    // return {r:0, g:0, b:255}
var rgb = Konva.Util.getRGB('rgb(0,0,255)');    // return {r:0, g:0, b:255}

```

## Konva node 的一些api
###  getClientRect
获取rect对应参数
#### 入参
    {
        skipTransform,   // 计算坐标时是否考虑变形参数
        skipShadow,    // 计算坐标时是否考虑阴影
        skipStroke,    // 计算坐标时是否考虑stroke
        relativeTo    // 计算相对的父元素
    }

#### 返回值
{x, y, width, height}

#### 示例
```
var rect = new Konva.Rect({
     width : 100,
     height : 100,
     x : 50,
     y : 50,
     strokeWidth : 4,
     stroke : 'black',
     offsetX : 50,
     scaleY : 2
});

// get client rect without think off transformations (position, rotation, scale, offset, etc)
rect.getClientRect({ skipTransform: true});
// returns {
//     x : -2,   // two pixels for stroke / 2
//     y : -2,
//     width : 104, // increased by 4 for stroke
//     height : 104
//}

// get client rect with transformation applied
rect.getClientRect();
// returns Object {x: -2, y: 46, width: 104, height: 208}
```

###  absolutePosition
获取/设置position
#### 入参
{x,y}

#### 返回值
{x,y}

#### 示例
```
获取位置
var position = node.absolutePosition();

设置位置
node.absolutePosition({
  x: 5,
  y: 10
});
```

### scale(scale)
设置/获取缩放
#### 入参
{x,y}

#### 示例

```
// 获取缩放值，返回{x,y}
var scale = node.scale();

// 设置缩放值
shape.scale({
  x: 2,
  y: 3
});
```


###  getAbsoluteScale
获取缩放值
#### 入参
空

#### 返回值
横纵缩放值
{x,y}

#### 示例
```
var scaleX = node.getAbsoluteScale().x;
var scaleY = node.getAbsoluteScale().y;
```

#### 类似api
- scaleX(x)
- scaleY(y)


###  getStage
获取对应stage对象

###  getType
获取当前对象的类型：Stage, Layer, Group, Shape

###  setAttrs(config)
设置属性值
#### 示例
```
node.setAttrs({
  x: 5,
  fill: 'red'
});
```







