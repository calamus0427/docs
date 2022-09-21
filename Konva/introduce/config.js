docute.init({
    //自定义sidebar
    // toc: './toc.md',
    landing: "landing.html",
    home: './konva-react.md',
    plugins: [
      evanyou()
    ],
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
        title: "Konva-react",
        path: "/home",
        source: 'konva-react.md',
          },  
          {
            title: "Konva.js",
            path: "/konvajs",
            source: 'konvajs.md',
              },
          {
              title: 'Konva实践', 
              type: 'dropdown', 
          items: [
                {title: 'konva实现基础图形', path: '/practice1',source: '/practice/1.md'},
                {title: 'konva实现可拖拽编辑矩形', path: '/practice1',source: '/practice/2.md'},
                {title: 'konva画table', path: '/practice1',source: '/practice/3.md'},
                {title: 'konva小游戏尝试', path: '/practice1',source: '/practice/4.md'},
                ]},
                {
                  title: "konva canvas原理",
                  type: 'dropdown', 
          items: [
                {title: 'canvas框架对比', path: '/compare',source: 'compare.md'},
                {title: 'canvas原理', path: '/canvas',source: 'canvas.md'},
                ]
                    }, 
                    {
                      title: "遇到的问题",
                      path: "/FAQ",
                      source: 'FAQ.md',
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
