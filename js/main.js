/* ===================================================
 * Main JS
 * - Handles various logics for this site
 * ================================================ */

!function ($) {

  "use strict";

  $(document).ready(function () {
		//Disable cut copy paste
    $('img').bind('cut copy paste', function (e) {
      e.preventDefault();
    });
   
    //Disable mouse right click
    $('img').on("contextmenu",function(e){
      return false;
    });
  });

}(window.jQuery);