<?php


mb_language("Japanese");
mb_internal_encoding("UTF-8");

$to = $_POST['email'];
$subject = "資料請求のご依頼ありがとうございます。/　PENGUIN-X";
$headers = "From: info@penguin-x.tokyo";
$body = "

フォーム送信サービス「PENGUIN-X」です。
この度は資料請求のご依頼を頂きありがとうございました。

担当者よりご連絡させていただきますので、しばらくお待ちいただきますようお願いいたします。
お急ぎの場合はお電話でのお問い合わせも受け付けております。

[ご入力内容]

ご担当者様： {$_POST["name"]}

電話番号： {$_POST["phone"]}

Email： {$_POST["email"]}

--
──────────────────────────────
PENGUIN-X
営業担当: 石川 幹久 / Mikihisa Ishikawa
Phone:070-8590-1692
WebSite:https://penguin-x.tokyo
──────────────────────────────
";

mb_send_mail($to, $subject, $body, $headers);

//　管理者用メール送信

$to = 'info@penguin-x.tokyo';
$subject = "資料請求依頼がありました。/　PENGUIN-X";
$headers = "From: info@penguin-x.tokyo";
$body = "

「PENGUIN-X」のLPから資料請求依頼がありました。

[ご入力内容]

ご担当者様： {$_POST['name']}

電話番号： {$_POST['phone']}

Email： {$_POST['email']}

";

mb_send_mail($to, $subject, $body, $headers);


var_dump($_POST);