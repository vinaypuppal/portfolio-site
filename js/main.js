$(document).ready(function(){
  $.backstretch([
          "https://res.cloudinary.com/vinaypuppal/image/upload/c_scale,w_1024/v1464896760/photo-1428223501723-d821c5d00ca3_knl5ki.jpg",
          "https://res.cloudinary.com/vinaypuppal/image/upload/c_scale,w_1024/v1464896839/photo-1432888498266-38ffec3eaf0a_ukva1r.jpg"
      ],{
          duration:30000,
          fade: 'slow'
  });
var data = [
  {
    id:23,
    title:"Linklet",
    description:"Linklet as of now contains the links which are shared in whatsapp freeCodeCamp Hyderabad group.",
    demoUrl:"https://linklet.ml",
    previewUrl:"https://res.cloudinary.com/vinaypuppal/image/upload/c_scale,w_600/v1490456906/Screen_Shot_2017-03-25_at_9.01.02_PM_y7dk6j.png",
    category:"frontend"
  },
  {
    id:21,
    title:"TopGit ★",
    description:"Search different programming languages and browse top github projects conveniently.",
    demoUrl:"https://topgit.vinaypuppal.com",
    previewUrl:"https://res.cloudinary.com/vinaypuppal/image/upload/c_scale,w_300/v1473033629/top-git-ui_zkevgt.png",
    category:"frontend"
  },
  {
    id:0,
    title:"Tribute Page",
    description:"A Tribute Page For Nandamuri Taraka Rama Rao.",
    demoUrl:"https://www.vinaypuppal.com/fcc-tribute-page",
    previewUrl:"https://res.cloudinary.com/vinaypuppal/image/upload/c_scale,w_300/v1465247988/fcc/tribute-page-ui.png",
    category:"frontend"
  },
  {
    id:1,
    title:"Random Quote Generator",
    description:"A simple quote generator that you can tweet and share.",
    demoUrl:"https://www.vinaypuppal.com/fcc-random-quotes",
    previewUrl:"https://res.cloudinary.com/vinaypuppal/image/upload/c_scale,w_300/v1465247983/fcc/random-quote-ui.png",
    category:"frontend"
  },
  {
    id:2,
    title:"Wiki Search",
    description:"A useful app to search Wikipedia articles.",
    demoUrl:"https://www.vinaypuppal.com/fcc-wiki-viewer",
    previewUrl:"https://res.cloudinary.com/vinaypuppal/image/upload/c_scale,w_300/v1465247982/fcc/wiki-search-ui.png",
    category:"frontend"
  },
  {
    id:3,
    title:"Show Local Weather",
    description:"A simple app to locate your current position and tell you the current weather.",
    demoUrl:"https://www.vinaypuppal.com/fcc-show-local-weather",
    previewUrl:"https://res.cloudinary.com/vinaypuppal/image/upload/c_scale,w_300/v1465247982/fcc/local-weather-ui.png",
    category:"frontend"
  },
  {
    id:4,
    title:"Basic JavaScript Calculator",
    description:"A simple calculator with the ability to chain operations.",
    demoUrl:"https://www.vinaypuppal.com/fcc-basic-calculator",
    previewUrl:"https://res.cloudinary.com/vinaypuppal/image/upload/c_scale,w_300/v1465247982/fcc/js-calculator-ui.png",
    category:"frontend"
  },
  {
    id:5,
    title:"Pomodoro Clock",
    description:"Pomodoro timer featuring notification and audible alarm.",
    demoUrl:"https://www.vinaypuppal.com/fcc-pomodoro-clock",
    previewUrl:"https://res.cloudinary.com/vinaypuppal/image/upload/c_scale,w_300/v1465247982/fcc/pomodoro-clock-ui.png",
    category:"frontend"
  },
  {
    id:6,
    title:"Twitch Streamers",
    description:"A simple widget to show online status of Twitch streamers.",
    demoUrl:"https://www.vinaypuppal.com/fcc-twitch-json-api",
    previewUrl:"https://res.cloudinary.com/vinaypuppal/image/upload/c_scale,w_300/v1465247986/fcc/twitch-streams-ui.png",
    category:"frontend"
  },
  {
    id:7,
    title:"Tic-Tac-Toe Game",
    description:"A Tic-Tac-Toe game with unbeatable AI created using Minimax Algorithm.",
    demoUrl:"https://www.vinaypuppal.com/fcc-tic-tac-toe",
    previewUrl:"https://res.cloudinary.com/vinaypuppal/image/upload/c_scale,w_300/v1466484035/tic-tac-toe-ui_suoxn1.png",
    category:"frontend"
  },
  {
    id:8,
    title:"Simon Says Game",
    description:"A classic Simon Says Game built for fun.",
    demoUrl:"https://www.vinaypuppal.com/fcc-simon-game",
    previewUrl:"https://res.cloudinary.com/vinaypuppal/image/upload/c_scale,h_300/v1466486988/simon-says-game-ui_nyxr6d.png",
    category:"frontend"
  },
  {
    id:9,
    title:"Timestamp microservice",
    description:"I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date",
    demoUrl:"https://vp-timestamp.herokuapp.com",
    previewUrl:"https://res.cloudinary.com/vinaypuppal/image/upload/c_scale,w_300/v1465061495/fcc/timestamp-ui.png",
    category:"backend"
  },
  {
    id:10,
    title:"Request Header Parser Microservice",
    description:"I can get the IP address, language and operating system for my browser.",
    demoUrl:"https://vp-header-parser.herokuapp.com",
    previewUrl:"https://res.cloudinary.com/vinaypuppal/image/upload/c_scale,w_300/v1465067738/fcc/header-parser-ui.png",
    category:"backend"
  },
  {
    id:11,
    title:"URL Shortener Microservice",
    description:"I can pass a URL as a parameter and I will receive a shortened URL in the JSON response.",
    demoUrl:"http://vp-shorturl.herokuapp.com",
    previewUrl:"https://res.cloudinary.com/vinaypuppal/image/upload/c_scale,w_300/v1465124936/fcc/ui-url-shortener.png",
    category:"backend"
  },
  {
    id:12,
    title:"Image Search Abstraction Layer",
    description:"I can get the image URLs, alt text and page urls for a set of images relating to a given search string.",
    demoUrl:"https://vp-images.herokuapp.com",
    previewUrl:"https://res.cloudinary.com/vinaypuppal/image/upload/c_scale,w_300/v1465221550/fcc/img-search-ui.png",
    category:"backend"
  },
  {
    id:13,
    title:"File MetaData Microservice",
    description:"I can submit a FormData object that includes a file upload. And get File metadata as response",
    demoUrl:"https://vp-file-metadata.herokuapp.com/",
    previewUrl:"https://res.cloudinary.com/vinaypuppal/image/upload/c_scale,w_300/v1465395641/file-metadata-ui_vxltxf.png",
    category:"backend"
  },
  {
    id:14,
    title:"Youtube Search",
    description:"A React App to search youtube videos",
    demoUrl:"https://youtube-api.vinaypuppal.com/",
    previewUrl:"https://res.cloudinary.com/vinaypuppal/image/upload/c_scale,w_300/v1465248106/fcc/youtube-api.png",
    category:"react"
  },
  {
    id:15,
    title:"Markdown Editor",
    description:"A Github flavoured Markdown Editor built using React.js",
    demoUrl:"https://www.vinaypuppal.com/react-markdown-editor",
    previewUrl:"https://res.cloudinary.com/vinaypuppal/image/upload/v1466487853/markdown-editor-ui_lpusb2.png",
    category:"react"
  },
  {
    id:16,
    title:"Mediclco Website",
    description:"A Landing page and Blog for Medicloc Startup Company",
    demoUrl:"https://www.medicloc.com/",
    previewUrl:"https://res.cloudinary.com/vinaypuppal/image/upload/c_scale,w_300/v1465247992/fcc/medicloc-ui.png",
    category:"meteor"
  },
  {
    id:17,
    title:"Amplidudes",
    description:"A Landing page and Alumni dashboard for ECE Branch, IT GGV",
    demoUrl:"https://www.amplidudes.in/",
    previewUrl:"https://res.cloudinary.com/vinaypuppal/image/upload/c_scale,w_300/v1465247989/fcc/amplidudes-ui.png",
    category:"meteor"
  },
	{
		id:18,
		title: 'FreeCodeCamp Leaderboard',
		description: 'A list of Free Code Camp campers who\'ve earned the most brownie points in the past 30 days.',   demoUrl:'http://codepen.io/vinaypuppal/full/MeJqzJ/',
		previewUrl:'https://res.cloudinary.com/vinaypuppal/image/upload/v1467570960/fcc/fcc-leaderboard-ui.png',
		category: 'react'
	},
	{
		id:19,
		title: 'Recipe Book',
		description: 'A list of Recipes that the user can create with name and ingredients.All Recipes are stored in users localstorage',   demoUrl:'http://codepen.io/vinaypuppal/live/pbPabb',
		previewUrl:'https://res.cloudinary.com/vinaypuppal/image/upload/v1467571176/fcc/recipe-book-ui.png',
		category: 'react'
	}
];

  var frontend = data.filter(function(item){
    return item.category === 'frontend';
  });

  var backend =  data.filter(function(item){
    return item.category === 'backend';
  });

  var react =  data.filter(function(item){
    return item.category === 'react';
  });

   var meteor = data.filter(function(item){
    return item.category === 'meteor';
  });

  function removeActiveClass(){
    $('.center').find('a').each(function(i,el){    if($(el).hasClass('active')){
      $(el).removeClass('active');
    }

    });
  }
  function removeOpenClass(){
    $('.container').each(function(i,el){
      if($(el).hasClass('open')){
        $(el).removeClass('open');
      }
    })
  }
  $('.js-close').on('click',function(e){
    e.preventDefault();
    removeActiveClass();
    $('.center').animate({
      opacity:'0'
    },50);
    if($(window).width()<=900) $('.container.home header .right').show(100);
    removeOpenClass();
    $('.close-arrow').hide();
  });
  $('.js-open-about').on('click',function(e){
    e.preventDefault();
    removeOpenClass();
    $('.about').addClass('open');
    $('.close-arrow').show(600);
    if($(window).width()<=900) $('.container.home header .right').hide(100);
    $('.center').animate({
      opacity:'1'
    },500);
        removeActiveClass();
    $('.center').find('.js-open-about').addClass('active');
  });

  $('.js-open-works').on('click',function(e){
    e.preventDefault();
    removeOpenClass();
    $('.works').addClass('open');
    $('.close-arrow').show(600);
    if($(window).width()<=900) $('.container.home header .right').hide(100);
    $('.center').animate({
      opacity:'1'
    },500);
        removeActiveClass();
    $('.center').find('.js-open-works').addClass('active');
  });

  $('.js-open-contact').on('click',function(e){
    e.preventDefault();
    removeOpenClass();
    $('.contact').addClass('open');
    $('.close-arrow').show(600);
    if($(window).width()<=900) $('.container.home header .right').hide(100);
    $('.center').animate({
      opacity:'1'
    },500);
    removeActiveClass();
    $('.center').find('.js-open-contact').addClass('active');
  });

  // $(".title h1").typed({
  //       strings: ["Hello", "Welcome", "I Am VinayPuppal", "A Self Taught","Web Developer"],
  //       typeSpeed: 100,
  //       loop: true
  //     });

function generateCard(data){
    var title = data.title;
    var desc = data.description;
    var imgUrl = data.previewUrl;
    var demoUrl = data.demoUrl;
    return ('<li class="card animated zoomIn"><div class="card-media"><img src='+imgUrl+' alt="#" /></div><div class="card-content"><h4>'+title+'</h4><p>'+desc+'</p></div><div class="card-actions"><a target="_blank" href='+demoUrl+' class="view-demo">View Demo</a></div></li>');
  }
  function renderToDom(data){
    data.forEach(function(item){
      var card = generateCard(item);
      //render card to dom
      //console.log(card);
      $('.js-list').append(card);
    });
  }
  //for intial rendering
  renderToDom(frontend);

  function clearDom(){
    $('.js-list').empty();
  }
 $('input[type=radio]').on('change',function(e){
     switch(e.target.value){
       case 'frontend':
         clearDom();
         renderToDom(frontend);
         break;
       case 'backend':
         clearDom();
         renderToDom(backend);
         break;
       case 'react':
         clearDom();
         renderToDom(react);
         break;
       case 'meteor':
         clearDom();
         renderToDom(meteor);
         break;
     }
    });

  if(document.createElement("p").style.flex===undefined){
      $('.supported').hide();
      $('.not-supported').show();
      alert("Sorry your browser is not supported. Please Use Latest Browsers Like Chrome")
   }

   if(~navigator.userAgent.indexOf('UCBrowser') || ~navigator.userAgent.indexOf('Opera Mini')){
    $('.supported').hide();
    $('.not-supported').show();
    alert("Sorry your browser is not supported. Please Use Latest Browsers Like Chrome")
   }
});
