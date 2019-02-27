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
        title: "vue基础",
        path: "/home",
        source: 'introduce.md',
          },       
          
          {
              title: 'vue开发实践', 
              type: 'dropdown', 
          items: [
                {title: 'vue+elementUI搭建管理后台', path: '/vue'}
                ]},
          {
              title: 'vue踩坑记录', 
              type: 'dropdown', 
          items: [
                {title: '组件件通信的几种方式', path: '/communication'},
                {title: 'vue修饰符', path: '/modifier'}
                ]},
                {
                  title: "资源汇总",
                  path: "/awesome",
                  source: 'awesome.md',
                    },    
          ],
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
