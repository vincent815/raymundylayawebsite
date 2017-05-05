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
        <section class="full-page" id="banner">
            <?php $bgImage = CFS()->get('banner_bg_image'); ?>
            <img rvy-parallax-img="160" rvy-parallax-offset="0" src="<?= $bgImage ?>">
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
        <section id="portfolio" class="bg-white">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h2>PERSONAL PROJECTS</h2>
                    </div>
                </div>
                <div class="items">
                    <div class="item first-item row">
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
                    <div class="item row">
                        <div class="col-md-6 col-sm-12 col-xs-12 remove-padding-left" >
                            <img src="http://placehold.it/180x180" class="img-responsive" alt="">
                        </div>
                        <div class="col-md-6 col-sm-12 col-xs-12 remove-padding-right">
                            <p class="_title">Paradigmdevs</p>
                            <p class="_description">Paradigmdevs is consist of 6 developers that are offering mobile and web services.
                                Their mission is not just to satisfy their clients with the high quality product they produce but also to make them realise that they've made a perfect decision in choosing Paradigmdevs. </p>
                            <a href="http://paradigmdevs.com" target="_blank">Visit Site</a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
        <section id="about" class="bg-blue">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h2>ABOUT</h2>
                    </div>
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
            </div>
        </section>
        <section id="contact" class="bg-white">
            <div class="container">
                <div class="row">
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
                        <!--<div class="embed-responsive embed-responsive-4by3">
                            <iframe src="https://player.twitch.tv/?channel=vincent815" class="embed-responsive-item" frameborder="0"></iframe>
                        </div>-->
                        <table class="address-info">
                            <tr>
                                <td><i class="fa fa-map-marker" aria-hidden="true"></i></td>
                                <td><a href="https://www.google.com.ph/maps/place/Cebu+City,+Cebu/@10.3788437,123.7762548,12z/data=!3m1!4b1!4m5!3m4!1s0x33a999258dcd2dfd:0x4c34030cdbd33507!8m2!3d10.3156992!4d123.8854366?hl=en" target="_blank">Cebu City, Philippines</a></td>

                            </tr>
                            <tr>
                                <td><i class="fa fa-mobile" aria-hidden="true"></i></td>
                                <td><a href="tel:639435101323">+639435101323</a></td>
                            </tr>
                            <tr>
                                <td><i class="fa fa-envelope-o" aria-hidden="true"></i></td>
                                <td><a href="mailto:ylaya.raymund@gmail.com">ylaya.raymund@gmail.com</a></td>
                            </tr>
                        </table>
                        <hr>
                        <div class="socials">
                            <ul>
                                <li><a href="https://www.facebook.com/Raymundsanity" target="_blank"><i class="fa fa-facebook-f" aria-hidden="true"></i> /Raymundsanity</a></li>
                                <li><a href="https://twitter.com/vincent81581" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i>/vincent81581</a></li>
                                <li><a href="https://www.linkedin.com/in/raymundylaya/" target="_blank"><i class="fa fa-linkedin" aria-hidden="true"></i>/raymundylaya</a></li>
                                <li><a href="https://www.twitch.tv/vincent815" target="_blank"><i class="fa fa-twitch" aria-hidden="true"></i>/vincent815</a></li>
                                <li><a href="http://stackoverflow.com/users/3302093/vincent815" target="_blank"><i class="fa fa-stack-overflow" aria-hidden="true"></i>/vincent815</a></li>
                                <li><a href="https://github.com/vincent815" target="_blank"><i class="fa fa-github" aria-hidden="true"></i>/vincent815</a></li>

                            </ul>
                        </div>
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

