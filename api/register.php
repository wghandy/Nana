<?php
//验证账号是否存在
    // 导入数据库链接
    include 'conn.php';

    // 获取发送值
    $phone = isset($_POST['phone']) ? $_POST['phone'] : '';
    // 查询语句
    $sql = "SELECT * FROM user WHERE phone='$phone'";

    //执行查询
    $res = $conn->query($sql);//结果集

    // 测试返回值是否是num_rows
    // var_dump($res);
    if($res->num_rows){
        echo "yes";//账号正确
    }else{
        echo "no";//错误
    }

    // 关闭数据库
    $res->close();
	$conn->close();
?>