<?php $css='public/css/style.css'; ?>
<?php $title = 'Full Moon Island Resort in Cambodia'; ?>

<?php ob_start(); ?>
    <div id="hp"></div>
    <div id="container_txt" >
        <p class="little_title">A unique experience in Cambodia</p>
        <h1 id="h1_hp">An ecologic and luxury resort</h1>
        <button>Discover</button>
    </div>
<?php $content = ob_get_clean(); ?>

<?php require('template/templatePage.php'); ?>