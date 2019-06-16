$(function () {

    let input = document.getElementsByClassName("form_o")[0];
    let form = document.getElementsByClassName("c_form")[0];

    // input.onfocus = function (ev) {
    //     if (input.value = "请输入商品名称") {
    //         input.value = "";
    //     }
    // }

    // input.onblur = function () {
    //     input.value = "请输入商品名称";
    // }

    let active = document.getElementsByClassName("active")[0];

    //输入框字体消失
    $(".form_o").focus(function () {
        if (input.value = "请输入商品名称") {
            input.value = "";
        }
    })

    $(".form_o").blur(function () {
        input.value = "请输入商品名称";
    });
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

    // 1.banner

    // 0.1轮播图
    let iw = $(".banner_ul li img")[0].width; //图的宽度
    let banner_ul = $(".banner_ul");
    let index_banner = $(".index_banner");
    let lists = $(".index_banner li");
    let timer = "";
    let num = 0;
    let index = $(".banner_ul li").length;
    let prev = $(".prev");
    let text = $(".text");
    let slider = $(".slider-control");
    let slider_active = $(".slider-active");
    let switchSlider = function (num) {
        if (num == index - 1) {
            num = 0;
        }
        $(".li_sp").eq(num).addClass("list_active").siblings().removeClass("list_active");
    }
    // 001自动轮播
    function next() {
        num++;
        if (num >= index) {
            banner_ul.css("left", 0);
            num = 1;
        };
        banner_ul.stop(true).animate({
                "left": -iw * num + "px"
            },
            500
        );
        switchSlider(num);
    }
    timer = setInterval(next, 3000);
    //002暂停
    $(".index_banner").hover(function () {
        slider.css("display", "block");
        clearInterval(timer);
        // $(".slider-control").css("display","block");
    }, function () {
        slider.css("display", "none");
        timer = setInterval(next, 3000);
    });


    // 003点击向右
    text.click(function () {
        next();
    })
    // 004点击向左
    prev.click(function () {
        num--;
        if (num < 0) {
            banner_ul.css("left", -iw * (index - 1));
            num = index - 2;
        }
        banner_ul.stop(true).animate({
                "left": -iw * num + "px"
            },
            500
        );
        switchSlider(num);
    })

    // 005焦点跟随
    lists.each(function (i, ele) {
        if (i == index - 1) {
            return false;
        }
        $(`<span class="li_sp"></span>`).appendTo(slider_active);
        $(".li_sp").first().addClass("list_active");
    })

    let iww = slider_active.width() / 2;
    slider_active.css("margin-left", -iww + "px")

    // 02动态轮播
    // 001点击切换
    let banner_a1 = $(".banner_a1");
    let banner_a2 = $(".banner_a2");
    let center_a_iw = $(".c_con").width();
    let center_a_top = $(".c_con li").height();
    let center_a_length = $(".center_a1 li").length;
    let num1 = 0;
    var timer1 = "";
    // console.log(center_a_length);
    banner_a1.addClass("bon_active");
    banner_a2.click(function () {
        $(this).addClass("bon_active").siblings().removeClass("bon_active");
        $(".box_keShi").stop(true).animate({
            "left": -center_a_iw + "px"
        })
    })
    banner_a1.click(function () {
        $(".box_keShi").stop(true).animate({
            "left": 0
        })
        $(this).addClass("bon_active").siblings().removeClass("bon_active");
    })

    // 002垂直轮播
    function vertical() {
        num1++;
        // console.log(num1);

        if (num1 >= center_a_length - 3) {
            num1 = 1;
            $(".box_keShi").css("top", 0);
        }
        $(".box_keShi").stop(true).animate({
            "top": (-22 * num1) + "px"
        });
    }
    timer1 = setInterval(vertical, 3000);

    // 003暂停
    $(".box_keShi").hover(function () {
        clearInterval(timer1);
    }, function () {
        timer1 = setInterval(vertical, 3000);
    })

    // 品牌框划入出现动画和发送ajax
    $.ajax({
        type: "post",
        url: "http://localhost:8080/PHP/Item/api/logData.php",
        success(text) {
            // console.log(text);
            let logData = JSON.parse(text);
            // console.log(logData);
            var html = logData.map(function (item) {
                return `<li>
                            <a href="javascrip:;">
                                <img src="${item.img}" alt="">
                            </a>
                            <p>${item.name}</p>
                            <div class="zHao">
                                <p>澳洲天人彩妆品牌</p>
                                <p>可申请授权证书</p>
                                <a href="javascrip:;">点击进入</a>
                            </div>
                        </li>`
            }).join('');
            $(html).appendTo($(".brand_footer ul"));
        },
        error(xhr) {
            console.log("失败-", xhr.statusText);
        }
    })

    // 选品清单发送ajax
    $.ajax({
        type: "get",
        url: "http://localhost:8080/PHP/Item/api/wupinxinxi.php",
        success(text) {
            let data = JSON.parse(text);
            let html = data.map(function (item) {
                return `<li>
                            <a href="javascript:;">
                                <img src="${item.img}" alt="">
                                <p class="l1_p">${item.name}</p>
                                <p class="l1_p1">${item.Tai}</p>
                            </a>
                        </li>`
            }).join('');
            $(html).appendTo($(".l1_ul"));
        },
        error(xhr) {
            console.log("失败", xhr.statusText);
        }
    })

    // 新品发布发送ajax
    $.ajax({
        type: "post",
        url: "http://localhost:8080/PHP/Item/api/item_new.php",
        success(text) {
            let data = JSON.parse(text);
            // console.log(data);

            let html = data.map(function (item) {
                return `<li>
                            <a href="">
                                <img src="${item.img}" alt="">
                                <p>${item.name}</p>
                                <p>${item.Tai}</p>
                                <p>
                                    <span>建议零售价：￥ ${item.price}</span>
                                    <span class="new_center_sp">起批量：${item.num}</span>
                                </p>
                            </a>
                        </li>`
            }).join('');
            $(html).appendTo($(".new_center ul"));
        }
    })

    // 线上最受欢迎品牌
    $.ajax({
        type: "post",
        url: "http://localhost:8080/PHP/Item/api/item_list.php",
        success(text) {
            let data = JSON.parse(text);
            // console.log(data);

            let html = data.map(function (item) {
                return `<li>
                            <a href="">
                                <img src="${item.img}" alt="">
                                <p>${item.name}</p>
                                <p>${item.Tai}</p>
                                <p>
                                    <span>建议零售价：￥ ${item.price}</span>
                                    <span class="new_center_sp">起批量：${item.num}</span>
                                </p>
                            </a>
                        </li>`
            }).join('');
            $(html).appendTo($(".item_list ul"));
        }
    })

    $.ajax({
        type: "post",
        url: "http://localhost:8080/PHP/Item/api/item_list.php",
        success(text) {
            let data = JSON.parse(text);
            // console.log(data);

            let html = data.map(function (item) {
                return `<li>
                            <a href="">
                                <img src="${item.img}" alt="">
                                <p>${item.name}</p>
                                <p>${item.Tai}</p>
                                <p>
                                    <span>建议零售价：￥ ${item.price}</span>
                                    <span class="new_center_sp">起批量：${item.num}</span>
                                </p>
                            </a>
                        </li>`
            }).join('');
            $(html).appendTo($(".offline_list ul"));
        }
    })

    // floor
    $.ajax({
        type: "post",
        url: "http://localhost:8080/PHP/Item/api/floor.php",
        success(text) {
            let data = JSON.parse(text);
            // console.log(data);

            let html = data.map(function (item) {
                return `<li>
                            <a href="">
                                <img src="${item.img}" alt="">
                                <div class="floor_b_r_xi">
                                    <p>${item.name}</p>
                                    <p>
                                        <span>已经售：${item.sh}件</span>
                                        <span class="floor_b_r_sp">起批量：${item.num}</span>
                                    </p>
                                    <p>${item.Tai}</p>
                                    <p>
                                        建议零售价：￥${item.price}
                                    </p>
                                </div>
                            </a>
                        </li>`
            }).join('');
            $(html).appendTo($(".floor_b_r ul"));
        }
    })

    // 推荐
    $.ajax({
        type: "post",
        url: "http://localhost:8080/PHP/Item/api/tuijian.php",
        success(text) {
            let data = JSON.parse(text);
            // console.log(data);

            let html = data.map(function (item) {
                return `<li>
                            <a href="">
                                <img src="${item.img}" alt="">
                                <div class="floor_b_r_xi">
                                    <p>${item.name}</p>
                                    <p>
                                        <span>已经售：${item.sh}件</span>
                                        <span class="floor_b_r_sp">起批量：${item.num}</span>
                                    </p>
                                    <p>${item.Tai}</p>
                                    <p>
                                        建议零售价：￥${item.price}
                                    </p>
                                </div>
                            </a>
                        </li>`
            }).join('');
            $(html).appendTo($(".footer_b ul"));
        }
    })

    function objtoStr(obj) {
        var html = '';
        for (var key in obj) {
            html += key + '=' + obj[key] + '&';
        }
        var str = html.slice(0, -1);
        return str;
    }



    // cookie转成json
    var bbCod = document.cookie;

    function cookieToJson() {
        let cookieArr = document.cookie.split("; "); //这里落掉一个空格造成错误
        let obj = {}
        // console.log(cookieArr);

        cookieArr.forEach((i) => {
            let arr = i.split("=");
            // console.log(arr);    
            let key = arr[0];
            obj[key] = arr[1];
        });
        // console.log(obj);
        return obj
    }
    let data = cookieToJson(bbCod);
    // console.log(data);
    let phone = data.phone; //或许电话号
    // console.log(phone);


    //添加购物车
    $(".l1_ul").on("click", "li", function () {
        let index = $(this).index();
        console.log(index);
        // 判断登录了才能打开
        if (data.phone) {
            $.ajax({
                type: "get",
                url: "http://localhost:8080/PHP/Item/api/list.php",
                data: "num=" + index,
                success(text) {
                    let data = JSON.parse(text);
                    console.log(data);
                    var str = objtoStr(data);
                    console.log(str);

                    location.href = 'xqy.html?' + str;
                }
            })
        } else {
            alert("请先登录");
        }
    })

    //更改登录状态名
    // 封装获取cookie
    function getCookie(key) {
        var str = document.cookie;
        var arr = str.split('; ');
        // console.log(arr);

        for (var ele of arr) {
            var arr2 = ele.split('=');
            // console.log(arr2[0]);
            return arr2[0];
        }

    }

    // let aa = getCookie(phone);
    // console.log(aa);

    // 判断是否有phone值
    if (data.phone) { //有值才执行
        console.log(1122121);
        $(".top_ao").text(phone);
        $(".top_at").text("退出");
        $(".r_p2").html(phone);
        $(".top_at").click(function () {
            console.log(111);

            COOKIE.removeItem("phone");
            $(".top_at").text("免费注册");
            $(".top_ao").text("登录");
        })
    }
    // 封装cookie
    function setCookie(key, val, iDay) {
        var now = new Date();
        now.setDate(now.getDate() + iDay);
        document.cookie = key + '=' + val + ';expires' + now + ';path/';
    }
    // 删除cookie
    function removeCookie(key) {
        setCookie(key, '', -1);
    }

    // 获取购物车数量
    // console.log(data.Num1);
    $(".siDe").text(data.Num1);
})