<?php
/**
 * Template Name: Maintenance Mode
 *
 */
get_header('maintenance');
?>
<video autoplay loop poster="/wp-content/themes/raymundylaya/images/website.jpg" id="bgvid">
    <source src="/wp-content/themes/raymundylaya/images/website-temp.mp4" type="video/mp4">
</video>
<div class="container">
    <div class="content-container">
        <div class="col-md-12">
            <h1>Coming SOON! hehehehehe :))</h1>
        </div>
        <!--<div class="col-md-12">
            <div class="left-content">
                <h3 class="text-align-left">It is almost done, trust me.
                </h3>
            </div>
        </div>-->

            <div class="social-media">
                <!--<div class="col-md-12">
                    <div class="row">
                        <input type="email" class="form-control" id="email-notify" placeholder="Email..." required>
                        <input type="submit" class="btn btn-primary" id="notify" value="Notify Me" data-toggle="modal" data-target="#myModal">
                    </div>
                </div>-->

                <div class="col-md-3 col-sm-6 col-xs-6">
                    <a href="https://www.facebook.com/Raymundsanity" target="_blank"><i class="fa fa-facebook-square fa-3x"></i></a>
                </div>
                <div class="col-md-3 col-sm-6 col-xs-6">
                    <a href="https://ph.linkedin.com/in/raymundylaya" target="_blank"><i class="fa fa-linkedin-square fa-3x"></i></a>
                </div>
                <div class="col-md-3 col-sm-6 col-xs-6">
                    <a href="https://github.com/vincent815" target="_blank"><i class="fa fa-github-square fa-3x"></i></a>
                </div>
                <div class="col-md-3 col-sm-6 col-xs-6">
                    <a href="mailto:ylaya.raymund@gmail.com"><i class="fa fa-envelope fa-3x"></i></a>
                </div>
            </div>

        <div class="clear"></div>
    </div>
</div>

<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myModalLabel">IT'S A TRAP!</h4>
            </div>
            <div class="modal-body">
                <div class="embed-responsive embed-responsive-16by9">
                    <div class="embed-responsive-item" id="player"></div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>
<?php
get_footer('maintenance');
?>

