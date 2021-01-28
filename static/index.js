var mySwiper = new Swiper ('.swiper1', {
    direction: 'vertical', // 垂直切换选项
    //loop: true, // 循环模式选项
     // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
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

var mySwiper = new Swiper ('.swiper2', {
    //direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
})        


$("#xj1").click(()=>{
    $("#xjBox1").fadeToggle()
})