(function ($) {
  $.fn.Callout = function () {

    /** Go through each pivot we've been given. */
    return this.each(function () {

      var $calloutContainer = $(this);
      
      $calloutContainer.hide();
      
      var $calloutParrent=$('#'+$calloutContainer.attr("for"));
      
      $calloutParrent.on('mouseenter', function(event) {
          if(document.currentCallout!==undefined)
            document.currentCallout.hide();
          var itemOffset=$(this).offset();
          $calloutContainer.attr("style","position:absolute;z-index:1000;");
          $calloutContainer.offset({top:itemOffset.top+36, left:itemOffset.left-25});
          $calloutContainer.show();
          document.currentCallout=$calloutContainer;
      });
      
      $(document).click(function(){
          document.currentCallout.hide();
      });
      
      /*$calloutParrent.on('mouseleave', function(event) {
          $calloutContainer.hide();
      });*/

    });

  };
})(jQuery);