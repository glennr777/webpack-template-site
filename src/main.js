import jQuery from 'jQuery';
import './main.css';

(($) => {
  const $win = $(window);
  const $html = $('html');
  const $doc = $(document);
  const $bod = $(document.body);

  const ARIA = {
    HIDDEN: 'aria-hidden',
  };

  const onReady = () => {
    $html.addClass('ready');
  };

  $doc.on('ready', onReady());
})(jQuery);
