<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['name'])) {$name = $_POST['name'];}
    if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
    if (isset($_POST['target'])) {$target = $_POST['target'];}
 if (trim($phone) != '' && trim($name) != '')
	{ 
    $to = "info@profstroymoschenie.ru, alex2611@mail.ru";
    $sendfrom   = "noreply@profstroymoschenie.ru";
    $headers  = "From: " . strip_tags($sendfrom) . "\r\n";
    $headers .= "Reply-To: ". strip_tags($sendfrom) . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html;charset=utf-8 \r\n";
    $subject = "Заявка с сайта - УКЛАДКА ТРОТУАРНОЙ ПЛИТКИ «ПОД КЛЮЧ»";
    $message = 
    "
            <h2>$subject</h2><br>
            <b>Имя:</b> $name<br>
            <b>Телефон:</b> $phone<br><br>
			<b>Форма:</b> со страницы ukladka-trotuarnoy-plitki-spb.ru/plitka/
    ";
    $send = mail ($to, $subject, $message, $headers);
    if ($send == 'true')
    {
		//header( "Location: /graffiti/" );
		echo "<h4 align=\"center\">Спасибо! Мы свяжемся с вами в ближайшее время</h4>";
		echo "<script>ym(61184527,'reachGoal','$target')</script>";
    }
    else

    {
    echo '<center><b>Ошибка. Сообщение не отправлено!</b></center>';
    }
	}	else {echo "<h4 align=\"center\">Поля <b>имя</b> и <b>телефон</b> не могут быть пустыми! Заявка НЕ отправлена! Попробуйте еще раз</h4>";}
} else {
	http_response_code(403);
	echo "Заявка НЕ отправлена! Попробуйте еще раз";

}?>