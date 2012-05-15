/**
 * Attention grabbing functions
 * 
 * @file
 */
jQuery(document).ready(function () {
  var $attention = '#footer';
  $($attention).hide();
  if (typeof $.cookie != 'undefined') {
    if (!$.cookie('attention')) {
      $($attention).css({
        "height": "125px",
        "position": "fixed",
        "bottom": "0px",
        "width": "100%",
        "left": "0px",
        "background-color": "#000"
      }).animate({ "bottom": "0px" })
      .append('<div id="attentionMinimize" class="attention" style="cursor: pointer;">_</div>')
      .append('<div id="attentionClose" class="attention" style="cursor: pointer;">x</div>');
      setTimeout(function () {
        $($attention).slideDown(1500);
      }, 2000);

      $('#attentionMinimize').click(function () {
        $($attention).slideUp(1500);
      });
      $('#attentionClose').click(function () {
        $($attention).slideUp(1500);
        $.cookie('attention', 'close', { path: '/' });
      });
    }
  }
});