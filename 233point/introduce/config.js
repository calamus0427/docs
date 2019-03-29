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
      title: "关于233次元",
      path: "/home",
      source: 'introduce.md',
        }, 
        {
      title: "开发实践",
      path: "/document",
      source: 'document.md',
        },    
        {
      title: "关于我",
      path: "/aboutme",
      source: 'aboutme.md',
        }],
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
