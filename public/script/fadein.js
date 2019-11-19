// On Load
$(document).ready(function() {
  var pageTop = $(document).scrollTop()
  var pageBottom = pageTop + $(window).height()
  var slideTags = $("img")
  var fadeTags = $("section")
  
  $(slideTags).addClass("transparent")
  $(slideTags).addClass("slideFrom100")
  $(fadeTags).addClass("transparent")

  // Slide effect
  for (var i = 0; i < slideTags.length; i++) {
    var slideTag = slideTags[i]

    if($(slideTag).position().top < pageBottom) {
      $(slideTag).addClass("slide")
    }
  }

  // Fade effect
  for (var i = 0; i < fadeTags.length; i++) {
    var fadeTag = fadeTags[i]

    if($(fadeTag).position().top < pageBottom) {
      $(fadeTag).addClass("fade")
    }
  }
})



// Scrolling
$(document).on("scroll", function() {
  var pageTop = $(document).scrollTop()
  var pageBottom = pageTop + $(window).height()
  var slideTags = $("img")
  var fadeTags = $("section")

  // Slide effect
  for (var i = 0; i < slideTags.length; i++) {
    var slideTag = slideTags[i]

    if($(slideTag).position().top < pageBottom) {
      $(slideTag).addClass("slide")
    }
    else {
      // Slides over and over again
      // $(slideTag).removeClass("slide")
    }
  }

  // Fade effect
  for (var i = 0; i < fadeTags.length; i++) {
    var fadeTag = fadeTags[i]

    if($(fadeTag).position().top < pageBottom) {
      $(fadeTag).addClass("fade")
    }
    else {
      // Fades over and over again
      // $(fadeTag).removeClass("slide")
    }
  }
})