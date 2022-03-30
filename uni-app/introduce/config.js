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
              title: 'Uni-app实践', 
              type: 'dropdown', 
          items: [
                {title: 'uni-request', path: '/practice?id=uni-request'},
                {title: '自定义导航', path: '/practice?id=%E8%87%AA%E5%AE%9A%E4%B9%89%E5%AF%BC%E8%88%AA'},
                {title: 'message全局', path: '/practice?id=message全局'},
                {title: 'globalconfig自定义配置', path: '/practice?id=globalconfig自定义配置'},
                ]},
                {
                  title: "遇到的问题",
                  path: "/FAQ",
                  source: 'FAQ.md',
                    },
                {
                  title: "uni插件开发",
                  path: "/dcloud",
                  source: 'dcloud.md',
                    }, 
                {
                  title: "资源汇总",
                  path: "/awesome",
                  source: 'awesome.md',
                    }  ],
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
