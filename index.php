<?php

if(isset($_GET['page'])) {
	$page = $_GET['page'];
} else {
	$page = 'home';
}

$page === isset($_GET['page']);

switch($page) {
	case 'home':
	require 'view/indexView.php';
	break;

	case 'about':
	require 'view/aboutView.php';
	break;

	default :
	require 'view/404View.php';
	break;
}
