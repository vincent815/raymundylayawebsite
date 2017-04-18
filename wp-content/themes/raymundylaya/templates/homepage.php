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
                    <h2>PROJECTS</h2>
                    <div class="item">
                        <div class="col-md-6 col-md-push-6">
                            <img src="http://placehold.it/180x180" class="img-responsive" alt="">
                        </div>
                        <div class="col-md-6 col-md-pull-6">
                            <p class="_title">Plaze It</p>
                            <p class="_description">Plaze It, is a web application where you can find a place and save it for reference.
                            It is powered by angular 4 and uses Airbnb API.</p>
                            <a href="https://plazeit.raymundylaya.com">Visit Site <span class="glyphicon glyphicon-hand-right"></span> </a>
                        </div>
                    </div>
                    <div class="item">
                        <div class="col-md-6">
                            <img src="http://placehold.it/180x180" class="img-responsive" alt="">
                        </div>
                        <div class="col-md-6">
                            <p class="_title">Plaze It</p>
                            <p class="_description">Plaze It, is a web application where you can find a place and save it for reference.
                                It is powered by angular 4 and uses Airbnb API.</p>
                            <a href="https://plazeit.raymundylaya.com">Visit Site <span class="glyphicon glyphicon-hand-right"></span> </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="about">
            <div class="container">
                <h2>ABOUT ME</h2>
                <div class="col-md-6">
                    <?php $about_img = CFS()->get('about_image'); ?>
                    <img src="<?= $about_img ?>" class="img-responsive img-circle" alt="">
                </div>
                <div class="col-md-6">
                    <?= CFS()->get('about_text'); ?>
                </div>
            </div>
        </section>
        <section id="contact">

        </section>
<?php


    endwhile;



else :

    get_template_part( 'template-parts/content', 'none' );

endif;

get_footer('home');
?>

