<?php
function section_port_shortcode( $atts ) {
extract( shortcode_atts( array( 'limit' => -1, 'type' => 'post', 'width' => '300px', 'height' => '300px', 'column' => '3'), $atts ) );

$paged = get_query_var('paged') ? get_query_var('paged') : 1;

query_posts(  array ( 
    'posts_per_page' => $limit, 
    'post_type' => portfolio,  
    'order' => 'ASC', 
    'orderby' =>'menu_order', 
    'paged' => $paged ) );

$list = ' ';   

while ( have_posts() ) {
    the_post();

    $terms = get_the_terms( $post->ID, 'port_tags' );

    $terms_string = '';
    if ( $terms ) {
        foreach ( $terms as $term )
            $terms_string .= $term->slug . ' ';
    }

    $string = get_the_content('');
    $newString = substr($string, 0, 50);
    $feat_image = wp_get_attachment_url( get_post_thumbnail_id($post->ID) );
    $list .= '<li class="mix all '. $terms_string .'">' 
    . '<a href="'. $feat_image . '" data-gal="prettyPhoto[gallery]"><img src="'. $feat_image . '" style="width:'. $width.';height:'. $height.';"/></a>'
    . '<a href="' . get_permalink() . '">'
    . '<div class="item_info item_info_alt">'
    . '<h3><span>'. get_the_title() .'</span></h3>'
    . '</a>'
    .'<p><span>' . $newString . '</span>.....</p>'
    . '</div>'
    . '</li>';
}

function get_filters(){
    $p_terms = get_terms('port_tags');
    if ( $p_terms ) {
        ob_start();
        ?>
        <ul id="portfolioFilter">
            <li class="filter" data-filter="all">All</li>
            <?php foreach ( $p_terms as $p_term ): ?>
            <li class="filter" data-filter="<?php echo $p_term->slug; ?>"><?php echo esc_html($p_term->name); ?></li>
            <?php endforeach; ?>
        </ul>
        <?php
        return ob_get_clean();
    }
    return false;
}

return 
'<div class="listings clearfix">' 
. '<div class="inner-div preview-wrap">'
. '<div id="item_container" class="clearfix"></div>'
. '<div id="filter" class="clearfix">'
. '<div id="filter_wrapper">'
. '<div class="container">'
. get_filters()
. '</div>'
. '</div>'
. '<div id="portfolio-wrap">'
. '<div id="portfolio_thumbs" class="columns-'. $column . '">'
. '<ul id="grid" class="sortablePortfolio clearfix">'
. $list 
. '</ul>'
. '</div>'
. '</div>'
. '</div>'.

wp_reset_query();

}

add_shortcode( 'tg-portfolio', 'section_port_shortcode' );
?>