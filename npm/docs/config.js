docute.init({
    //自定义sidebar
    // toc: './toc.md',
    landing: 'landing.html',
    home: './README.md',
    announcement: {
        type: "primary", // warning | danger | success | primary
        html: '<a href="http://www.calamus.xyz">世界第一帅蒲</a>'
    },
    sidebar: true,
    //   There will be a toggle button for switching sidebar on and off, to hide this button:
    //   disableSidebarToggle: true
    // to show h2 to h3 only
    tocVisibleDepth: 3,
    marked: {
    smartypants: true
    // ...
  },
    nav: [{
    path: '/',
    markdown: '## counter\n {{ count }}', // this will be parsed to html first
    component: {
      data() {
        return { count: 0 }
      }
    }
  },{
        title: "introduce",
        path: "/md/introduce",
        source: '/md/introduce.md',
          },    
          {
              title: 'Languages', 
              type: 'dropdown', 
          items: [
                {title: 'Chinese',type: 'label', path: '/language/chinese'},
                {title: 'Japanese', path: '/language/japanese'},
                {type: 'sep'},
                {title: 'Chinese',type: 'label', path: '/language/chinese'},
                {title: 'Japanese', path: '/language/japanese'},
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
      label: 'Hovered!', // the text for tooltip
      svgId: 'my-icon', // the id of symbol
      link: 'http://blah.blah'
    }],

});
