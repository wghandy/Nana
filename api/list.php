<?php
    $spData = array(
        array(
            "img" => "./src/1200X1200_1560135707026878.jpg",
            "name" => "韩国肌司研JMsolution 胶囊面",
            "Tai" => "登录后查看价格",
            "price"=> 59
        ),
        array(
            "img" => "./src/1200X1200_1560135707026878.jpg",
            "name" => "美国肌司研JMsolution 胶囊面",
            "Tai" => "登录后查看价格",
            "price"=> 59
        ),
        array(
            "img" => "./src/1200X1200_1560135707026878.jpg",
            "name" => "日本肌司研JMsolution 胶囊面",
            "Tai" => "登录后查看价格",
            "price"=> 59
        ),
        array(
            "img" => "./src/1200X1200_1560135707026878.jpg",
            "name" => "越南肌司研JMsolution 胶囊面",
            "Tai" => "登录后查看价格",
            "price"=> 59
        ),
        array(
            "img" => "./src/1200X1200_1560135707026878.jpg",
            "name" => "法国肌司研JMsolution 胶囊面",
            "Tai" => "登录后查看价格",
            "price"=> 59
        ),
        array(
            "img" => "./src/1200X1200_1560135707026878.jpg",
            "name" => "西班牙肌司研JMsolution 胶囊面",
            "Tai" => "登录后查看价格",
            "price"=> 59
        )
    );
    // var_dump($spData);
    // echo json_encode($spData);
    $index = $_REQUEST['num'];
    // $index = 3;
    // echo $index;
    // var_dump($index)
    # 转换为JSON返回
    echo json_encode($spData[$index],JSON_UNESCAPED_UNICODE);
?>