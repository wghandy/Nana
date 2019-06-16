window.onload = function () {
    console.log(1111);
    
    let input = document.getElementsByClassName("form_o")[0];
    let form = document.getElementsByClassName("c_form")[0];
   
    input.onfocus = function (ev) {
        if (input.value = "请输入商品名称") {
            input.value = "";
        }
    }

    input.onblur = function () {
        input.value = "请输入商品名称";
    }
    
    let active = document.getElementsByClassName("active")[0];
    
}