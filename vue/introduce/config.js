/*
 * @Author       : Calamus
 * @websit       : calamus.xyz
 * @Description  : 
 * @FilePath     : /vue/introduce/config.js
 * @Date         : 2019-02-20 15:53:42
 * @LastEditors  : Calamus
 * @LastEditTime : 2020-01-10 15:20:47
 */
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
            title: 'UI库', 
            type: 'dropdown', 
        items: [
              {title: 'element', path: '/UI/element'},
              {title: 'ant design', path: '/UI/antdesign'},
              ]},
          {
              title: 'vue开发实践', 
              type: 'dropdown', 
          items: [
                {title: '组件开发', path: '/components'},
                {title: 'vue+elementUI搭建管理后台', path: '/vue'},
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
