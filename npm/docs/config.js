docute.init({
    //自定义sidebar
    // toc: './toc.md',
    landing: "landing.html",
    home: './md/introduce.md',
    announcement: {
        type: "danger", // warning | danger | success | primary
        html: '<a href="http://www.calamus.xyz">あやめ</a>'
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
        path: "/md/introduce",
        source: '/md/introduce.md',
          },    
          {
              title: '语言', 
              type: 'dropdown', 
          items: [
                {title: '中文', path: '/language/chinese'},
                {title: '日文', path: '/language/japanese'},
                {title: '英文', path: '/language/english'}
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
