<?php
    // 导入数据库链接
    include 'conn.php';

    // 获取发送值
    $phone = isset($_POST['phone']) ? $_POST['phone'] : '';
    $pas = isset($_POST['pas']) ? $_POST['pas'] : '';
    // 查询语句
    $sql = "INSERT INTO user(phone,pas) VALUES('$phone','$pas');";

    //执行查询
    $res = $conn->query($sql);//结果集

    // 测试返回值是否是num_rows
    // var_dump($res);
    if($res){
        echo "yes";//插入数据库成功
    }else{
        echo "no";//失败
    }

    // 关闭数据库
    // $res->close();
	// $conn->close();
?>