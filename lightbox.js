<script>
  $(function() {
		// Set custom Lightbox options here. See https://lokeshdhakar.com/projects/lightbox2/#options
    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    })

    // Initialize Lightbox on all galleries (but not if we're in the editor)
    if (!window.isCMS) {
      var i = 0;

      // Loop through each gallery
     	$('.cms-gallery, .cms-editable[data-type="gallery"]').each(function() {
        var gallery = this;
        i++;

        // Loop through each link in the gallery
        $(gallery).find('a').each(function() {
          var a = this;
          var img = $(a).find('img');
          var caption = $(img).attr('data-caption');
          var alt = $(img).attr('alt');

          // Shim the appropriate attributes for Lightbox
          $(a)
            .attr('data-lightbox', 'gallery-' + i)
            .attr('data-title', caption)
            .attr('data-alt', alt);
        });
      });
    }
  });
</script>