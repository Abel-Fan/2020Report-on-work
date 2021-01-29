var mySwiper1 = new Swiper ('.swiper1', {
    direction: 'vertical', // 垂直切换选项
    //loop: true, // 循环模式选项
     // 如果需要分页器
    pagination: {
        el: '.swiper1 .swiper-pagination',
        clickable :true,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
    on:{
        init: function(){
            swiperAnimateCache(this); //隐藏动画元素 
            swiperAnimate(this); //初始化完成开始动画
        }, 
        slideChangeTransitionEnd: function(){ 
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
            //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
        } 
    }
})        
var mySwiper3 = new Swiper ('.swiper3', {
    direction: 'vertical', // 垂直切换选项
    //loop: true, // 循环模式选项
     // 如果需要分页器
    pagination: {
        el: '.swiper3 .swiper-pagination',
        clickable :true,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
    on:{
        init: function(){
            swiperAnimateCache(this); //隐藏动画元素 
            swiperAnimate(this); //初始化完成开始动画
        }, 
        slideChangeTransitionEnd: function(){ 
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
            //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
        } 
    }
})  
var mySwiper2 = new Swiper ('.swiper2', {
    //direction: 'vertical', // 垂直切换选项
    //loop: true, // 循环模式选项
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
    effect : 'cube',
}) 


$("#xj1").click(()=>{
    $("#xjBox1").fadeToggle()
})

// Storage.prototype.setExpire = (key, value, expire) => {
// 	let obj = {
// 	data: value,
// 	time: Date.now(),
// 	expire: expire
// 	};
// 	//localStorage 设置的值不能为对象,转为json字符串
// 	localStorage.setItem(key, JSON.stringify(obj));
// }

// Storage.prototype.getExpire = key => {
//     let val = localStorage.getItem(key);
//     if (!val) {
//         return val;
//     }
//     val = JSON.parse(val);
//     if (Date.now() - val.time > val.expire) {
//         localStorage.removeItem(key);
//         return null;
//     }
//     return val.data;
// }



// function login(){
//     $(".swiper1").removeClass("blur")
//     $(".loginBox").fadeOut()
// }

// $("#login").click(function(){
//     if($("#input").val()=="123"){
//         login()
//     }
// })
// $("html").keydown(function(event){
//     if(event.keyCode==13 && $("#input").val()=="123"){
//         login()
//     }
// })