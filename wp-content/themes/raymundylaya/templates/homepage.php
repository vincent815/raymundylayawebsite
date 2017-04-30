<?php
/**
 * Template Name: Homepage
 *
 */
get_header('home');

if ( have_posts() ) :

    if ( is_home() && ! is_front_page() ) : ?>
        <header>
            <h1 class="page-title screen-reader-text"><?php single_post_title(); ?></h1>
        </header>

        <?php
    endif;

    /* Start the Loop */
    while ( have_posts() ) : the_post();

?>
        <section id="banner" >
            <?php $bgImage = CFS()->get('banner_bg_image'); ?>
            <img id="bg-image" style="display: none;" src="<?= $bgImage ?>">
            <div class="dark-opacity"></div>
            <div class="container heading">
                <div class="col-md-5">
                   <?php $imageUrl = CFS()->get('banner_info_image'); ?>
                    <img src="<?= $imageUrl ?>" class="img-responsive img-circle" alt="">
                    <div class="loop-container">
                    <hr>
                    <?php $infos = CFS()->get('banner_loop_infos');
                    foreach($infos as $info){ ?>
                        <p><?= $info['loop_info'] ?></p>
                    <?php } ?>
                    </div>
                </div>
                <div class="col-md-6"><?php $heading_text = CFS()->get('banner_info_text'); ?>
                   <?= $heading_text ?>
                </div>
            </div>
        </section>
        <section id="portfolio">
            <div class="container">
                <div class="col-md-12 items">
                    <h2>PERSONAL PROJECTS</h2>
                    <div class="item first-item">
                        <div class="col-md-6 col-sm-12 col-xs-12 col-md-push-6 remove-padding-right">
                            <img src="http://placehold.it/180x180" class="img-responsive" alt="">
                        </div>
                        <div class="col-md-6 col-sm-12 col-xs-12 col-md-pull-6 remove-padding-left">
                            <p class="_title">Plazeit</p>
                            <p class="_description">Plazeit is a web application where travelers can search affordable rooms, hotels and apartments.
                            This web application is made with MEAN stack.</p>
                            <a href="https://plazeit.raymundylaya.com" target="_blank">Visit Site   <i class="fa fa-external-link" aria-hidden="true"></i> </a>
                        </div>
                    </div>
<!--                    <div class="item">-->
<!--                        <div class="col-md-6 col-sm-12 col-xs-12 remove-padding-left" >-->
<!--                            <img src="http://placehold.it/180x180" class="img-responsive" alt="">-->
<!--                        </div>-->
<!--                        <div class="col-md-6 col-sm-12 col-xs-12 remove-padding-right">-->
<!--                            <p class="_title">Paradigmdevs</p>-->
<!--                            <p class="_description">Paradigmdevs is consist of 6 developers that are offering mobile and web services.-->
<!--                                Their mission is not just to satisfy their clients with the high quality product they produce but also to make them realise that they've made a perfect decision in choosing Paradigmdevs. </p>-->
<!--                            <a href="http://paradigmdevs.com" target="_blank">Visit Site</a>-->
<!--                        </div>-->
<!--                    </div>-->
                </div>
            </div>
        </section>
        <section id="about">
            <div class="container">
                <h2>ABOUT</h2>
                <div class="col-md-6 left">
                    <!--<?php $about_img = CFS()->get('about_image'); ?>
                    <img src="<?= $about_img ?>" class="img-responsive img-circle" alt=""> -->
                    <ul>
                        <li><img src="/wp-content/themes/raymundylaya/images/icons/php.PNG" alt=""></li>
                        <li><img src="/wp-content/themes/raymundylaya/images/icons/html5.PNG" alt=""></li>
                        <li><img src="/wp-content/themes/raymundylaya/images/icons/css3.PNG" alt=""></li>
                        <li><img src="/wp-content/themes/raymundylaya/images/icons/js5.PNG" alt=""></li>
                        <li><img src="/wp-content/themes/raymundylaya/images/icons/laravel.png" alt=""></li>
                        <li><img src="/wp-content/themes/raymundylaya/images/icons/jquery.PNG" alt=""></li>
                        <li><img src="/wp-content/themes/raymundylaya/images/icons/angular.PNG" alt=""></li>
                        <li><img src="/wp-content/themes/raymundylaya/images/icons/vuejs.png" alt=""></li>
                        <li><img src="/wp-content/themes/raymundylaya/images/icons/wordpress.png" alt=""></li>
                        <li><img src="/wp-content/themes/raymundylaya/images/icons/git.PNG" alt=""></li>
                    </ul>
                </div>
                <div class="col-md-6 right">
                    <?= CFS()->get('about_text'); ?>
                    <a href="https://drive.google.com/file/d/0ByBH58LLLBm_RUlwXzl5aVpFWk0/view?usp=sharing" target="_blank" class="button-like"> My Resume <i class="fa fa-file-text-o" aria-hidden="true"></i></a>
                </div>
            </div>
        </section>
        <section id="contact">
            <div class="container">
                <div class="col-md-12">
                    <h2>CONTACT</h2>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" class="form-control" id="name" placeholder="John Doe">
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="text" class="form-control" id="email" placeholder="sample@gmail.com">
                    </div>
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea class="form-control" id="message" placeholder="Hello Raymund..." rows="6" style="resize: none;"></textarea>
                    </div>
                    <button class="default-button">Send</button>
                </div>
                <div class="col-md-6">
                    <div class="embed-responsive embed-responsive-4by3">
                    <iframe src="https://player.twitch.tv/?channel=vincent815" class="embed-responsive-item" frameborder="0"></iframe>
                    </div>
                </div>
            </div>
        </section>
<?php


    endwhile;



else :

    get_template_part( 'template-parts/content', 'none' );

endif;

get_footer('home');
?>

