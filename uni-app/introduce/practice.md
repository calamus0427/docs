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
[wx.getMenuButtonBoundingClientRect()](https://developers.weixin.qq.com/miniprogram/dev/api/ui/menu/wx.getMenuButtonBoundingClientRect.html)
获取菜单按钮（右上角胶囊按钮）的布局位置信息。坐标信息以屏幕左上角为原点。

导航栏大概代码：

```Vue
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
      let height = statusBarHeight + 4; //ios 24px
      if (platform.toLowerCase() == "android") {
        height += 4; //android 28px
      }
      // 胶囊高度 32px 下边框6px height 状态栏高度
      return height + 38 + "px";
    },
    marginTop() {
      const { platform, statusBarHeight } = uni.getSystemInfoSync();
      let height = statusBarHeight + 4;
      if (platform.toLowerCase() == "android") {
        height += 4;
      }
      return height + "px";
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


## trtc音视频组件

```vue 
<template>
 <live-pusher
                            class="pusher"
                            :url="pusher.url"
                            mode="RTC"
                            :autopush="true"
                            :enable-camera="true"
                            :enable-mic="true"
                            :muted="false"
                            :enable-agc="false"
                            :enable-ans="false"
                            :enable-ear-monitor="false"
                            :auto-focus="true"
                            :zoom="true"
                            :min-bitrate="600"
                            :max-bitrate="900"
                            :video-width="360"
                            :video-height="640"
                            :beauty="0"
                            :whiteness="0"
                            orientation="vertical"
                            aspect="9:16"
                            device-position="front"
                            :remote-mirror="false"
                            local-mirror=auto
                            :background-mute="false"
                            audio-quality="high"
                            audio-volume-type="voicecall"
                            :audio-reverb-type="0"
                            waiting-image="https://mc.qcloudimg.com/static/img/daeed8616ac5df256c0591c22a65c4d3/pause_publish.jpg"
                            :debug="debug"
                            @statechange="_pusherStateChangeHandler"
                            @netstatus="_pusherNetStatusHandler"
                            @error="_pusherErrorHandler"
                            @bgmstart="_pusherBGMStartHandler"
                            @bgmprogress="_pusherBGMProgressHandler"
                            @bgmcomplete="_pusherBGMCompleteHandler"
                        />
</template>

<script>
import TIM from "./libs/tim-wx.js";
import TRTC from "./libs/trtc-wx.js";

export default {
  created() {
    // 在组件实例刚刚被创建时执行
    console.log(TAG_NAME, "created", ENV);
    this.TRTC = new TRTC(this);
    this.EVENT = this.TRTC.EVENT;
    this.InitTRTC();
    this.bindTRTCRoomEvent();
  },
  methods:{
    InitTRTC(){
      this.userController.on(EVENT.REMOTE_USER_JOIN, event => {
        console.log(TAG_NAME, "远端用户进房", event, event.data.userID);
      }); 
      // 初始化事件订阅
      this.TRTC.on(TRTC_EVENT.LOCAL_JOIN, event => {
        console.log("* room LOCAL_JOIN", event);
        this._emitter.emit(this.EVENT.LOCAL_JOIN, {
          userID: this.pusher.userID
        });
      });
    },
    enterRoom(params) {
      return new Promise((resolve, reject) => {
        // 1. 补齐进房参数，校验必要参数是否齐全
        if (params) {
          Object.assign(this.pusher, params);
          Object.assign(this.config, params);
        }
        if (!this._checkParam(this.config)) {
          reject(new Error("缺少必要参数"));
          return;
        } // 2. 根据参数拼接 push url，赋值给 live-pusher，

        this._getPushUrl(this.config)
          .then(pushUrl => {
            this.pusher.url = pushUrl;
            this.pusher = this.TRTC.enterRoom(this.config);
            this.$nextTick(() => {
              // 真正进房成功需要通过 1018 事件通知
              this.TRTC.getPusherInstance().start(); // 开始推流
              this.status.isPush = true;
              this._loginIM({ ...this.config, roomID: params.roomID });
              setTimeout(() => {
                uni.createLivePlayerContext("live-pusher", this).stop();
              }, 2000);
              resolve();
            });
          })
          .catch(res => {
            // 进房失败需要通过 pusher state 事件通知，目前还没有准确的事件通知
            console.error(TAG_NAME, "enterRoom error", res);
            reject(res);
          });
      });
    },
    _initIM(config) {
      const tim = TIM.create({
        SDKAppID: config.sdkAppID
      }); 
      // 0 普通级别，日志量较多，接入时建议使用
      // 1 release级别，SDK 输出关键信息，生产环境时建议使用
      // 2 告警级别，SDK 只输出告警和错误级别的日志
      // 3 错误级别，SDK 只输出错误级别的日志
      // 4 无日志级别，SDK 将不打印任何日志
      // if (config.debugMode) {

      tim.setLogLevel(1);
      tim.registerPlugin({ "tim-upload-plugin": TIMUploadPlugin });

      // 取消监听
      tim.off(TIM.EVENT.SDK_READY, this._onIMReady);
      tim.off(TIM.EVENT.MESSAGE_RECEIVED, this._onIMMessageReceived);
      tim.off(TIM.EVENT.SDK_NOT_READY, this._onIMNotReady);
      tim.off(TIM.EVENT.ERROR, this._onIMError); // 监听事件

      tim.on(TIM.EVENT.SDK_READY, this._onIMReady, this);
      tim.on(TIM.EVENT.MESSAGE_RECEIVED, this._onIMMessageReceived, this);
      tim.on(TIM.EVENT.SDK_NOT_READY, this._onIMNotReady, this);
      tim.on(TIM.EVENT.ERROR, this._onIMError, this);
      this.tim = tim;
      uni.tim = tim;
    },
     _loginIM(params) {
      if (!this.tim) {
        return;
      }
      return this.tim.login({
        userID: params.userID,
        userSig: params.userSig
      });
    },
  }
}
</script>
```


