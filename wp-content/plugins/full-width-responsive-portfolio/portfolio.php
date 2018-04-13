<?php
/* Plugin Name: Full Width Responsive Portfolio
Plugin URI: http://www.templategraphy.com
Description: Add a full width responsive portfolio to your website with a user-friendly UI and shortcodes.
Version: 1.0
Author: Template Graphy
Author URI: http://www.templategraphy.com
*/

add_action('wp_enqueue_scripts', 'port_tab_init');

function port_tab_init()
{
wp_enqueue_style('bootstrap.min', plugins_url('/css/bootstrap.min.css', __FILE__));
wp_enqueue_style('style', plugins_url('/css/style.css', __FILE__));
wp_enqueue_style('prettyPhoto', plugins_url('/css/prettyPhoto.css', __FILE__));
}

add_action('wp_enqueue_scripts', 'port_query_init');

function port_query_init()
{

wp_register_script('bootstrap', plugins_url('/js/bootstrap.min.js', __FILE__));
wp_register_script('portfolio', plugins_url('/js/portfolio.js', __FILE__));
wp_register_script('prettyPhoto', plugins_url('/js/prettyPhoto.js', __FILE__),array('jquery'));
wp_register_script('mixitup', plugins_url('/js/jquery.mixitup.js', __FILE__),array('jquery'));

wp_enqueue_script('jquery');
wp_enqueue_script('bootstrap');
wp_enqueue_script('portfolio');
wp_enqueue_script('prettyPhoto');
wp_enqueue_script('mixitup');
};


function port_remove_cssjs_ver( $src ) {
    if( strpos( $src, '?ver=' ) )
        $src = remove_query_arg( 'ver', $src );
    return $src;
}
add_filter( 'style_loader_src', 'port_remove_cssjs_ver', 10, 2 );
add_filter( 'script_loader_src', 'port_remove_cssjs_ver', 10, 2 );

function port_jquery()
{
?>
	<script>
(function($){
	//Portfolio Engine
    $('#grid').mixitup({
      transitionSpeed : 800
    });

    //Portfolio Filter Active State
    $('ul#portfolioFilter li').click(function(){
      $('ul#portfolioFilter li').removeClass('active-filter');
      $(this).addClass('active-filter');
    });
})(jQuery);
		
	</script>
<?php
}

add_action('wp_footer', 'port_jquery');

include( plugin_dir_path( __FILE__ ) . 'custom-data.php');
include( plugin_dir_path( __FILE__ ) . 'shortcode-data.php');
?>