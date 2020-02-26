<?php	
	define('LOG_FILE', $_SERVER['DOCUMENT_ROOT'] . '/ajax.log');
	if (!file_exists(LOG_FILE)) file_put_contents(LOG_FILE, '');

	if (!empty($_POST)) {
		parse_str($_POST['data'], $params);

		if ($params['agreement'] === 'on' && !empty($params['name']) && !empty($params['phone'])) {
			// $to = [
			// 	'yel.anton@gmail.com'
			// ];

			// $subject = 'Заявка с сайта Извозчик'; 
			// $message = '<p>Имя: ' . $params['name'] . '</p><p>Номер телефона: ' . $params['phone'] . '</p>';

			// $headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
			// $headers .= "From: Извозчик <info@izvozchik.ru>\r\n"; 

			// foreach ($to as $emailTo) {
			// 	file_put_contents(LOG_FILE, "Попытка отправить письмо на почту $emailTo..." . PHP_EOL, FILE_APPEND);
			// 	file_put_contents(LOG_FILE, 'Тема письма: ' . $subject . PHP_EOL, FILE_APPEND);
			// 	file_put_contents(LOG_FILE, 'Заголовки письма:' . PHP_EOL . $headers, FILE_APPEND);
			// 	file_put_contents(LOG_FILE, 'Содержание письма:' . PHP_EOL . $message . PHP_EOL, FILE_APPEND);

			// 	if (!mail($emailTo, $subject, $message, $headers)) {
			// 		$logMessage = 'Письмо не было отправлено';
			// 		echo json_encode(['status' => 'error', 'message' => $logMessage]);
			// 		file_put_contents(LOG_FILE, $logMessage . PHP_EOL . PHP_EOL, FILE_APPEND);
			// 		exit;	
			// 	}

			// 	file_put_contents(LOG_FILE, 'Письмо успешно отправлено' . PHP_EOL . PHP_EOL, FILE_APPEND);
			// }

			echo json_encode(['status' => 'success', 'message' => 'Письмо успешно отправлено']);
			exit;
		}
	}

	$logMessage = 'Ошибка заполнения данных формы';
	echo json_encode(['status' => 'error', 'message' => $logMessage]);
	file_put_contents(LOG_FILE, $logMessage . PHP_EOL . PHP_EOL, FILE_APPEND);
	exit;
?>