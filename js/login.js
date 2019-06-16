$(function () {
    // 封装cookie
    function setCookie(key, val, iDay) {
        var now = new Date();
        now.setDate(now.getDate() + iDay);
        document.cookie = key + '=' + val + ';expires' + now + ';path/';
    }

    // 封装获取cookie
    function getCookie(key) {
        var str = document.cookie;
        var arr = str.split('; ');
        for (var ele of arr) {
            var arr2 = ele.split('=');
            if (key == arr2[0]) {
                return arr[1];
            }
        }
    }
    // 登录
    $(".top_main_btn").click(function () {
        // 判断cookie中是否存在账号
        if (getCookie($(".top_main_tex")[0].value)) {
            alert("用户已登录");
        } else {
            $.ajax({
                type: "post",
                url: "http://localhost:8080/PHP/Item/api/login.php",
                data: "phone=" + $(".top_main_tex")[0].value + "&pas=" + $(".top_main_pas")[0].value,
                success(txt) {
                    console.log(txt);
                    if (txt == "yes") {
                        alert("登录成功");
                        console.log(111);
                        
                        setCookie("phone", $(".top_main_tex")[0].value, 1);
                        console.log(222);
                        
                        location.href = 'http://localhost:8080/PHP/Item/index1.html';

                        // $(".top_ao").html($(".top_main_tex")[0].value);
                    } else {
                        alert("请输入正确账号密码");
                    }
                }
            })
        }
    })

    let reg = /^1[3-9]\d{9}$/;
    // 随机四位随机数
    function randomNum() {
        let html = "";
        for (var i = 0; i < 4; i++) {
            html += parseInt(Math.random() * 10);
        }
        return html;
    }
    // 点击获取随机验证码
    let num = randomNum();
    $(".a_btn").click(function () {
        $(".a_btn").html(num);
    })

    // 注册
    $(".top_main_b_tex").blur(function () {
        if ($(".top_main_b_tex")[0].value) {
            // 正则
            if (reg.test($(".top_main_b_tex")[0].value)) {
                $.ajax({
                    type: "post",
                    url: "../api/register.php",
                    data: "phone=" + $(".top_main_b_tex")[0].value,
                    success(txt) {
                        console.log(txt);
                        if (txt == "yes") {
                            $(".top_main_b_sp").text("该手机号已经注册");
                            $(".top_main_b_sp").css("color", "red");


                        } else {
                            $(".top_main_b_sp").text("该手机号可以注册");
                            $(".top_main_b_sp").css("color", "#58bc58");

                            // 点击注册 存储用户信息
                            $(".a_btn1").click(function () {
                                let val1 = $(".top_main_b_pas1")[0].value;
                                let val2 = $(".top_main_b_pas2")[0].value;
                                let val3 = $(".top_main_b_tex2")[0].value;
                                let val4 = $(".top_main_b_tex")[0].value;
                                if (val1 && val2) {
                                    if (val1 == val2 && val3 == num) {
                                        // 发送ajax存储账号密码
                                        $.ajax({
                                            type: "post",
                                            url: "../api/zuce.php",
                                            data: "phone=" + val4 + "&pas=" + val2,
                                            success(tex) {
                                                alert("注册成功");
                                                location.href = '../html/login.html';
                                            }
                                        })

                                    } else {
                                        alert("密码不一致或验证码错误")
                                    }
                                } else {
                                    alert("请输入密码");
                                }
                            })
                        }
                    }
                })
            } else {
                $(".top_main_b_sp").text("请输入正确手机号");
                $(".top_main_b_sp").css("color", "red");
            }
        } else {
            $(".top_main_b_sp").text("请输入手机号");
            $(".top_main_b_sp").css("color", "red");
        }

    })



})