<?php $css='public/css/about.css'; ?>
<?php $title = 'About - Full Moon Island Resort'; ?>

<?php ob_start(); ?>

    <section class="container_about">
        <div class="content_title">
            <h1>The story of <br/>an island in Cambodia</h1>
            <p>and a family affair</p>    
        </div>

        <div class="content_intro">
            <div class="content_blocs">
                <div class="bloc_txt">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
                </div>
                <figure class="figure_1">
                    <img src="public/img/team-fmi.jpg" alt="The Full Moon island resort team" />
                    <figcaption class="figcaption_1">View from the King Villa</figcaption>
                </figure>
            </div>
        </div>
    </section>

    <div class="container_list">
        <div class="content_txt">
            <ul>
                <li class="humans">Humans</li>
                <li class="ecologic">Ecologic</li>
                <li class="luxury">Luxury</li>
            </ul>
            <p class="change_txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
        </div>
        <section class="content_founders">
            <h2>The founders</h2>
            <p>Pen Vokhanith & Lay Prohas</p>
        </section>
    </div>

    <div class="container_founders">
        <img src="public/img/2.jpg" alt="Pen Vokhanith & Lay Prohas" />

        <div class="content_baseline">
            <div class="content_found_left">
                <div class="top">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
                </div>
                <figure class="figure_2">
                    <img src="public/img/3.jpg" alt="Terrace from King Villa, Full Moon Island Resort" />
                    <figcaption class="figcaption_2">Terrace from the King Villa</figcaption>
                </figure>
            </div>
            <div class="content_found_right">
                <img src="public/img/4.jpg" alt="Full Moon Island, the perfect place in the world" />
            </div>
        </div>
    </div>

    <div class="container_bio">
        <div class="content_bio_txt">
            <p class="title_bio">They call her The Superwoman, and with good reason— she’s a force to be reckoned with.</p>
            <p class="txt_bio">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        </div>
        <div class="content_bio_img">
            <img src="public/img/pen-vokhanith.jpg" alt="Pen Vokhanith, co-founder of Full Moon Island resort in Cambodia" />
            <div class="content_status"> 
                <h3>Pen Vokhanith</h3>
                <p>COO & Co-founder</p>
            </div>
        </div>
    </div>

    <div class="container_bio">
        <div class="content_bio_img2">
            <img src="public/img/lay-prohas.jpg" alt="Lay Prohas, co-founder of Full Moon Island resort in Cambodia" />
            <div class="content_status"> 
                <h3>Lay Prohas</h3>
                <p>CEO & Co-founder</p>
            </div>
        </div>
        <div class="content_bio_txt">
            <p class="title_bio">They call him The Man on board, and with good reason— he’s a force to be reckoned with.</p>
            <p class="txt_bio">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        </div>
    </div>

<?php $content = ob_get_clean(); ?>

<?php require('template/templatePage.php'); ?>