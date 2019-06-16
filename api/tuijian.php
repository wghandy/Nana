<?php
    
    $lists = array();
    for($i = 0 ; $i <50; $i++){
        $data = array(
            'gid' => 'g'.($i + 1),
            "img" => "./src/800X800_1557214729686797.jpg",
            "name" => "日本姬芮ZA 新能真皙美白隔离霜（吃豆人版）",
            "Tai" => "登录后查看价格",
            "price" => 58,
            "num" => 6,
            "sh" => 7588
        );
        
        $lists[] = $data;
    }

    echo json_encode($lists);
?>