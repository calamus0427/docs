docute.init({
    //自定义sidebar
    // toc: './toc.md',
    landing: "landing.html",
    home: './introduce.md',
    plugins: [
      evanyou()
    ],
    vue:'/taro.md',
    announcement: {
        type: "danger", // warning | danger | success | primary
        html: '<a href="http://www.calamus.xyz">Calamus</a>'
    },
    sidebar: true,
    disableSidebarToggle: true,
    tocVisibleDepth: 3,
    marked: {
    smartypants: true
  },
    nav: [{
    path: '/',
    markdown: '## counter\n {{ count }}',
    component: {
      data() {
        return { count: 0 }
      }
    }
  },{
        title: "首页",
        path: "/home",
        source: 'introduce.md',
          }, 
          {
        title: "Taro实践",
        path: "/taro",
        source: 'taro.md',
          },    
          {
        title: "资源汇总",
        path: "/awesome",
        source: 'awesome.md',
          },    
          {
              title: '三端统一框架对比', 
              type: 'dropdown', 
          items: [
                {title: '三端统一框架调研', path: '/three/compare'},
                {type: 'sep'},
                {title: 'react native', path: '/three/rn'},
                {title: 'Vue weex', path: '/three/weex'},
                {title: 'JDReact', path: '/three/JDReact'},
                {title: 'ionic', path: '/three/ionic'},
                {title: 'flutter', path: '/three/flutter'},
                {title: 'Hybrid APP， PhoneGap/Cordova ', path: '/three/others'}
                ]}],
   icons: [{
        icon: 'github',
        label: 'Fork me on GitHub',
        link: 'https://github.com/calamus0427'
    },{
        icon: "twitter",
        label: "calamus",
        link:"https://github.com/calamus0427"
    },{
        icon: "edit",
        label: "calamus",
        link:"https://github.com/calamus0427" 
    },{
      label: 'Hovered!', 
      svgId: 'my-icon', 
      link: 'http://blah.blah'
    }]
    

});
