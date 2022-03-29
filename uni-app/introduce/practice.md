## uni.request
注意uni.request和wx.request参数返回值差异比较大，不可直接更改。
## 自定义导航
先在pages.json中取消默认导航

```
{  
    "path" : "pages/index/index",  
    "style" : {  
        "navigationStyle":"custom"  
    }  
}
```

[uni.getSystemInfo(OBJECT)](https://uniapp.dcloud.io/api/system/info.html#getsysteminfosync)动态计算状态栏的高度；
内容使用slot的形式插入。
[uni.setNavigationBarTitle(OBJECT)](https://uniapp.dcloud.io/api/ui/navigationbar.html) 同微信，uni也提供了api修改导航栏设置
导航栏大概代码：

```javascript
<template>
<view class="fix-full-page">
  <view class="navigation-bar" :style="{height:height}">
    <view class="navigation-bar-fixed" :style="{height:height}">
      <view  class="navigation-bar-textbox" :style="{top:marginTop}">
        <view class="button-action" hover-class="button-action-active" @click="back_">
          <uni-icons type="left" size="20" color="white"></uni-icons>
        </view>
        <view v-if="config.showHomeBtn" class="button-action" hover-class="button-action-active" @click="home_">
          home
        </view>
      </view>
      <!-- title -->
      <view class="navigation-bar-title" :style="'margin-top:'+marginTop+';color:'+config.fontcolor">{{cmsConfig.justForJumpVer.title}}</view>
      <view class="navigation-bar-settings"></view>
    </view>
  </view>
  <view class="nav-content" :style="{height: contentHeight}">
     <slot />
  </view>
</view>

</template>

<script>
import uniIcons from "../uni-icons/uni-icons";
export default {
  components: {
    uniIcons
  },
  data() {
    return {
      cmsConfig: uni.faceidVerifySdkCmsConfig
    };
  },
  computed: {
    contentHeight(){
      return `calc(100% - ${this.height});`
    },
    height() {
      const { platform, statusBarHeight } = uni.getSystemInfoSync();
      return statusBarHeight  + "px";
    },
    marginTop() {
      const { platform, statusBarHeight } = uni.getSystemInfoSync();
      return statusBarHeight + "px";
    }
  },
  methods: {}
};
</script>

```

[--status-bar-height](https://uniapp.dcloud.io/tutorial/syntax-css.html#css-%E5%8F%98%E9%87%8F)uni提供了css变量系统状态栏高度来自定义导航栏，方便不用计算。此变量在微信小程序环境为固定  `25px` ，在 App 里为手机实际状态栏高度。
![css变量.jpeg](https://cdn.calamus.xyz/uni/cssvar.jpeg)
使用css变量优化：

```vue
	<view class="status-contents">  
		 <view class="status top-view"></view>  
		<view class="title" style="height: 88px;">
			<text>导航栏</text>
		</view>
	</view>
      .status-contents{  
           height: calc(var(--status-bar-height) + 88px);  
       }  
    .top-view{  
          width: 100%;  
          position: fixed;  
          top:0;  
    }  
    .status{  
          height:var(--status-bar-height);  
    }
    .title{
         width: 100%;  
         position: fixed;  
         top: var(--status-bar-height);  
    }

```

## message全局

	```javascript
		const config = require('../config.js')

		var message = {
			toast(title, type = 'text') {
				uni.showToast({
					title,
					icon:type
				})
			},
			confirm(title, confirmColor) {
				return new Promise((res, rej) => {
					uni.showModal({
						title,
						cancelColor: '#b6b6b6',
						confirmColor: confirmColor || config.modalColor,
						success: (result) => {
							if (result.cancel) {
								rej(result)
							} else if (result.confirm) {
								res(result)
							}
						}

					})
				})
			},
			async message(content, confrimText) {
				return new Promise((res) => {
					uni.showModal({
						title: '提示',
						content,
						showCancel: false,
						confirmColor: config.modalColor,
						success: (result) => {
							res(result)
						}
					})
				})
			}
		}
		module.exports = message

	```

	调用示例

	```javascript
		this.message.toast('你好')
	```

## globalConfig自定义配置

```
export default  {
  normalPath: ''	//	sdk路径配置
}
```


