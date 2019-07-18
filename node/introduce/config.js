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
        title: "Node",
        path: "/home",
        source: 'node.md',
          },       
          {
            title: "egg",
            path: "/egg",
            source: 'egg.md',
              },    
          {
              title: '插件', 
              type: 'dropdown', 
          items: [
                {title: 'egg-sequelize', path: '/sequelize'},
                {title: 'egg-mongoose', path: '/mongo'},
                {title: 'egg-cors', path: '/cors'},
                {title: 'egg-alinode', path: '/alinode'},
                {title: 'egg-redis', path: '/redis'}
                ]
          },
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
