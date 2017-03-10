<?php do_action( 'main_after' ); ?>

</section><!-- .main -->

<?php get_sidebar( 'primary' ); ?>

</div><!-- .max-width -->

<footer id="site-footer" class="site-footer" role="contentinfo">
	<?php do_action( 'footer_before' ); ?>
	<div class="footer-content">
		<h1 class="site-title">
			<a href="<?php echo esc_url( home_url() ); ?>"><?php bloginfo( 'title' ); ?></a>
		</h1>
		<p class="site-description"><?php bloginfo( 'description' ); ?></p>
	</div>
	<?php do_action( 'footer_widgets' ); ?>
	<div class="design-credit">
        <span>
            <?php
            $footer_text = sprintf( __('Thankyou for visiting.'), '', wp_get_theme( get_template() ) );
            $footer_text = apply_filters( 'footer_text', $footer_text );
            echo wp_kses_post( $footer_text );
            ?>
        </span>
	</div>
	<?php do_action( 'footer_after' ); ?>
</footer>

</div><!-- .overflow-container -->

<?php wp_footer(); ?>

<?php do_action( 'body_after' ); ?>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script src="js/script.js"></script>
</body>

</html>