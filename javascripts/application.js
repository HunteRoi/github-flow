var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

$(function(){

  // Initalize the ToC if we're on an article page
  if ($('.js-toc').length) {
    tableOfContents($('.js-toc'));

    var toc = $('.js-toc');
    var tocOffset = toc.offset().top;
    var tocPadding = 20;

    var tocSections = $('.toc-item');
    var tocSectionOffsets = [];

    // Calculates the toc section offsets, which can change as images get loaded
    var calculateTocSections = function(){
      tocSectionOffsets = [];
      tocSections.each(function(index, section){
        tocSectionOffsets.push(section.offsetTop);
      })
    }
    calculateTocSections();
    $(window).bind('load', calculateTocSections);

    var highlightTocSection = function(){
      var highlightIndex = 0;
      $.each(tocSectionOffsets, function(index, offset){
        if (window.scrollY > offset - 20){
          highlightIndex = index;
        }
      })
      highlightIndex += 1;
      $('ol.toc .active').removeClass('active');
      $('ol.toc li:nth-child(' + highlightIndex + ') a').addClass('active');
    }
    highlightTocSection();

    var didScroll = false;
    $(window).scroll(function() {
      didScroll = true;
    })

    setInterval(function() {
      if (didScroll) {
        didScroll = false;

        if (window.scrollY > tocOffset - tocPadding)
          toc.addClass('sticky');
        else
          toc.removeClass('sticky');
      }
      highlightTocSection();
    }, 100);

    var exampleNav = $('.js-examples-nav')
    if (exampleNav.length){
      exampleNav.on('click', 'a', function(event){
        event.preventDefault()
        exampleNav.find('a').removeClass('selected')
        $('.markdown-example').hide()
        $('#' + $(this).attr('data-container-id')).show()
        $(this).addClass('selected')
      })
    }

  }
})


// Generates a table of contents based on a.toc-item elements throughout the
// page. Follows allong via scroll and
var tableOfContents = function($listContainer) {
  if ($listContainer.length === 0) return;

  $('.toc-item').each(function(index, chapterAnchor) {
    $chapterAnchor = $(chapterAnchor);
    var listLink = $('<a>')
    .attr('href', '#' + $chapterAnchor.attr('id'))
    .text($chapterAnchor.attr('title'))
    .bind('click', scrollTo);

    var listItem = $('<li>').append(listLink);

    $listContainer.append(listItem);
  })
}

var scrollTo = function(e) {
  e.preventDefault();
  var elScrollTo = $(e.target).attr('href');
  var $el = $(elScrollTo);

  $('body,html').animate({ scrollTop: $el.offset().top }, 400, 'swing', function() {
    location.hash = elScrollTo;
  })
}


}
/*
     FILE ARCHIVED ON 10:54:33 Feb 26, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:39:51 Feb 22, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 96.47
  exclusion.robots: 0.106
  exclusion.robots.policy: 0.096
  RedisCDXSource: 0.66
  esindex: 0.01
  LoadShardBlock: 70.941 (3)
  PetaboxLoader3.datanode: 80.124 (5)
  CDXLines.iter: 14.903 (3)
  load_resource: 255.125 (2)
  PetaboxLoader3.resolve: 173.181 (2)
*/