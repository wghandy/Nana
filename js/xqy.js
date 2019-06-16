$(function () {
    // 所有分类这块的动画
    $(".xia").css("display", "none");
    $(".nav_l").hover(function () {
        $(".xia").stop(true).slideToggle(300, function () {
            $(".xia").css("display", "block");
        });
    }, function () {
        $(".xia").stop(true).slideToggle(300, function () {
            $(".xia").css("display", "none");
        });
    })


    // top动画
    $(".l_n").mouseenter(function () {
        $(".l_n").css("background", "white");
        $(".n_img").animate({
                "width": "100px",
                "height": "50px"
            },
            500
        ).stop(true).slideDown();
    })
    $(".l_n").mouseleave(function () {
        $(".l_n").css("background", "#F2F2F2");
        // $(".n_img").slideUp();
        $(".n_img").css("display", "none")
    })

    //导航栏添加三角形图标 事件委托
    let nav = $(".nav");
    nav.on("mouseenter", "li", function () {
        $(this).children("div").addClass("triangle_border_up");

    });
    nav.on("mouseleave", "li", function () {
        $(this).children("div").removeClass("triangle_border_up ");
    })

    //多级导航栏
    let q1 = $(".q1");
    // console.log(q1);
    q1.hover(function () {
        // console.log($(this));
        let bb = $(this).children().get(2); //获取点击标签的字标签中的第三个
        // console.log(bb);
        $(bb).addClass("active"); //添加class名
        $(bb).animate( //添加css样式
            {
                "left": "220px"
            },
            500
        )
        // console.log(123);

    }, function () {
        let bb = $(this).children().get(2); //获取点击标签的字标签中的第三个
        $(bb).css("left", "0px").removeClass("active");
        // $(bb).css("left","0");
    })


    // 购物车渲染
    var url = decodeURI(location.search);
    var obj = strtoObj(url);

    function strtoObj(url) {
        var arr = url.split('?')[1];

        var str = arr.split('&');

        var obj = {};
        str.forEach(function (item) {
            var inner = item.split('=');
            console.log(inner);
            
            obj[inner[0]] = inner[1];

        })
        return obj;
    }

    console.log(obj);
    
    let html = `<div class="xqy_l">
                    <img class="xqy_img" src="${obj.img}" alt="">
                    <div class="xqy_k">
                        <ul>
                            <li>
                                <img src="./src/640X640_1560319342066202.jpg" alt="">
                            </li>
                            <li>
                                <img src="./src/640X640_1560319342066202.jpg" alt="">
                            </li>
                            <li>
                                <img src="./src/640X640_1560319342066202.jpg" alt="">
                            </li>
                            <li>
                                <img src="./src/640X640_1560319342066202.jpg" alt="">
                            </li>
                            <li>
                                <img src="./src/640X640_1560319342066202.jpg" alt="">
                            </li>
                            <li>
                                <img src="./src/640X640_1560319342066202.jpg" alt="">
                            </li>
                            <li>
                                <img src="./src/640X640_1560319342066202.jpg" alt="">
                            </li>
                            <a class="xqy_la1" href="javascript:;">
                                <i class="iconfont icon-jiankuohaoxizuo"></i>
                            </a>
                            <a class="xqy_la2" href="javascript:;">
                                <i class="iconfont icon-jiankuohaoxiyou"></i>
                            </a>
                        </ul>
                    </div>
                    <p>
                        <span>销量：13682</span>
                        <span><i class="iconfont icon-weibiaoti-
                            "></i>收藏商品</span>
                    </p>
                </div>
                <div class="xqy_c">
                    <p class="main_q1">${obj.name}</p>
                    <p class="main_q2">
                        <span>丝绒雾感唇釉</span>
                        <span>小仙女都心水</span>
                    </p>
                    <div class="xqy_c_main">
                        <p class="main_q3 main_con">
                            <span>
                                批发价：
                            </span>
                            <span class="sp_con">
                                <i>￥</i>18.00 - 49.00
                            </span>
                        </p>
                        <p class="main_q4">
                            <span>
                                建议零售价：
                            </span>
                            <span class="sp_con1">
                                <i>￥</i> 28.00 - 68.00
                            </span>
                        </p>
                        <p class="main_q5">
                            <span>
                                起批量：10件
                            </span>
                            <span class="sp_con2"><i class="iconfont icon-dagou"></i>混批</span>
                        </p>
                    </div>
                    <ul class="xqy_cul">
                        <li class="xqy_active">现 货</li>
                        <li>订 单</li>
                    </ul>
                    <ul class="xqy_cul1">
                        <li>规格</li>
                        <li>批发价</li>
                        <li>箱规</li>
                        <li>库存</li>
                        <li>数量</li>
                    </ul>
                    <ul class="xqy_cul2">
                        <li>
                            <div class="xqy_cul_img">
                                <img src="./src/640X640_1560319342066202.jpg" alt="">
                            </div>
                            <div class="xqy_cul2_li1">
                                <p>35g</p>
                                <p class="tiMa" style="color: ">条码：6926799621490</p>
                            </div>
                        </li>
                        <li>
                            ￥<span class="zqy_jaGe">${obj.price}</span>
                        </li>
                        <li>
                            21
                        </li>
                        <li>
                            142件
                        </li>
                        <li>
                            <div class="no5">
                                <div class="skunum">
                                    <span class="jian"><i class="iconfont icon-jianhao"></i></span>
                                    <input class="shuZi" type="text" value="0" data-storage="232">
                                    <span class="jia"><i class="iconfont icon-add"></i></span>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div class="xqy_zj">
                        <span>总额：<em>￥</em><i class="zJia">0.00</i></span>
                        <span>数量：<em class="number">0</em></span>
                    </div>
                    <div class="xqy_buy">
                        <a>
                            <i class="iconfont icon-gouwuche"></i>加入购物车
                        </a>
                    </div>
                    <div class="xqy_footer">
                        <span><i class="iconfont icon-dagou"></i>正品货源</span>
                        <span><i class="iconfont icon-dagou"></i>正品货源</span>
                        <span><i class="iconfont icon-dagou"></i>正品货源</span>
                        <span><i class="iconfont icon-dagou"></i>正品货源</span>
                        <span><i class="iconfont icon-dagou"></i>正品货源</span>
                    </div>
                </div>`;
    $(html).prependTo($(".xqy_top"));   


    // 详情页
    $(".xqy_cul").on("click", "li", function () {
        $(this).addClass("xqy_active").siblings().removeClass("xqy_active");
    })
    
    //计算总价
    let jaGe = $(".zqy_jaGe").text();
    // console.log(jaGe);
    //加加减减
    let num = 0;
    $(".jia").click(function () {
        num++;
        if (num > 10) {
            num = 10;
        }
        // console.log(num);
        $(".number").text(num);
        $(".shuZi").val(num);
        let zoJia = num * jaGe
        $(".zJia").text(num * jaGe);
    })
    $(".jian").click(function () {
        num--;
        if (num < 0) {
            num = 0;
        }
        // console.log(num);
        $(".number").text(num);
        $(".shuZi").val(num);
        let zoJia = num * jaGe
        $(".zJia").text(num * jaGe);
    })

    // 点击加入购物车悬浮窗口购物车数量跟这边   注意这里最好通过cookie拿
    $(".xqy_buy a").click(function(){
        let num = $(".number").text();
        // console.log(num);
        $(".siDe").text(num)
        let i_img = $(".xqy_img").attr("src");
        let i_name = $(".main_q1").text();
        let i_price = $(".zqy_jaGe").text();
        // console.log(i_img);
        
        // 存储cookie
        setCookie("img",i_img,1);
        setCookie("name",i_name,1);
        setCookie("i_price",i_price,1);
        setCookie("Num1",num,1);

        // var bbCod = document.cookie;
        // console.log(bbCod);

        // // cookie转成json
        // function cookieToJson() {
        //     let cookieArr = document.cookie.split(";");
        //     let obj = {} 
        //     cookieArr.forEach((i) => {
        //         let arr = i.split("=");
        //         obj[arr[0]] =arr[1];
        //     });
        //     return obj
        //   }
        //   console.log(cookieToJson(bbCod));
        
        location.href = 'shou.html';
    })

    // 封装设置cookie
    function setCookie(key,val,iDay){
        var now = new Date();
        now.setDate(now.getDate() + iDay);
        document.cookie = key + '=' + val + ';expires' + now + ';path/';
    }
    // 封装获取cookie
    function getCookie(key){
        var str = document.cookie;
        var arr = str.split('; ');
        for(var ele of arr){
            var arr2 = ele.split('=');
            if(key == arr2[0]){
                return arr[1];
            }
        }
    }

    // 删除cookie
    function removeCookie(key){
        setCookie(key,'',-1);
    }


})