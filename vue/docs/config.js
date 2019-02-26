docute.init({
    //自定义sidebar
    // toc: './toc.md',
    landing: "landing.html",
    home: './introduce.md',
    vue:'/vue.md',
    announcement: {
        type: "danger", // warning | danger | success | primary
        html: '<a href="http://www.calamus.xyz">Calamus</a>'
    },
    sidebar: true,
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
        title: "vue+elementUI搭建管理后台",
        path: "/vue",
        source: 'vue.md',
          },    
          {
        title: "组件件通信的几种方式",
        path: "/communication",
        source: 'communication.md',
          },    
          {
        title: "资源汇总",
        path: "/awesome",
        source: 'awesome.md',
          },    
          {
              title: '下拉菜单', 
              type: 'dropdown', 
          items: [
                {type: 'label', title: "语言"},
                {title: '中文', path: '/language/chinese'},
                {title: '日文', path: '/language/japanese'},
                {title: '英文', path: '/language/english'},
                {type: 'sep'}
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
    }],

});
