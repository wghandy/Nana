$(function () {
    $(".shop_ul1").on("click", "li", function () {
        $(this).addClass("shop_main_active").siblings().removeClass("shop_main_active");
    })

    // 获取cookie渲染到购物车
    
    // console.log(bbCod);

    // 01、cookie转成json
    var bbCod = document.cookie;
    function cookieToJson() {
        let cookieArr = document.cookie.split("; ");//这里落掉一个空格造成错误
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
    // function keys(){
    //     let cookie = document.cookie.split("; ");
    //     let res = [];
    //     for(let i = 0;i < cookie.length;i++){
    //         let tempArr = cookie[i].split("=");
    //         res.push(tempArr[0]);
    //     }
    //     return res;
    // }

    
    // console.log(data);
    

    let html = `<div class="shop_main_c  con">
                    <ul class="shop_ul1">
                        <li class="shop_main_active">
                            现货商品 1
                        </li>
                        <li>
                            订单商品 2
                        </li>
                    </ul>
                    <ul class="shop_ul2">
                        <li>
                            <input class="checkbox allBox" type="checkbox">
                            全选
                        </li>
                        <li>
                            规格
                        </li>
                        <li>
                            条码
                        </li>
                        <li>
                            单价 (元)
                        </li>
                        <li>
                            数量
                        </li>
                        <li>
                            小计 (元)
                        </li>
                        <li>
                            操作
                        </li>
                    </ul>
                    <ul class="shop_ul3">
                        <li>
                            <input class="checkbox" type="checkbox">
                            <span>NALA采销供应商（娜拉）</span>
                        </li>
                        <li></li>
                    </ul>
                    <div class="shop_shop">
                        <ul>
                            <li>
                                <input class="checkbox" type="checkbox">
                                <div class="shop_con">
                                    <div class="shop_l">
                                        <img src="${data.img}" alt="">
                                    </div>
                                    <div class="shop_r">
                                        <p>韩国蒂佳婷Dr.Jart+ 蓝色补水绿色舒缓药丸面膜5片</p>
                                        <p>起批量：12件</p>
                                    </div>
                                </div>                   
                            </li>
                            <li>
                                5片/盒（绿色）
                            </li>
                            <li>
                                8809380645762
                            </li>
                            <li >
                                ￥<span class="i_price">${data.i_price}</span>
                            </li>
                            <li>
                                ${data.Num1}
                            </li>
                            <li>
                                ￥58.00
                            </li>
                            <li>
                                删除
                            </li>
                        </ul>
                    </div>
                    <ul class="shop_ul4">
                        <li>
                            <input class="checkbox" type="checkbox">
                            全选
                        </li>
                        <li>
                            删除选中商品
                        </li>
                        <li>
                            已选商品 <em>1</em> 种 <i class="iNum">${data.Num1}</i> 件， 总计(不含运费)：￥<span class="zNum">0.00</span>
                        </li>
                        <span class="shop_sp">去结算</span>
                    </ul>
                </div>`;
    
    // 02、渲染
    $(html).appendTo($(".shop_main"));

    let iNum = $(".iNum").text();
    let i_price = $(".i_price").text();
    // console.log(i_price);
    var flag = false;

    // 1、全选反选
    $(".allBox").click(function(){
        console.log(111);
        $(".zNum").text(iNum * i_price);
        let isOk = $(".allBox").prop('checked');
        $(".checkbox").prop('checked',isOk);
        flag = true;
    })
    if(flag = true){
        $(".zNum").text(0.00);
    }

    $(".checkbox").click(function(){
        $(this).index();
        console.log($(this).index());
    })
})