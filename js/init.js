function client() {
  if (window.innerWidth != null) {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    }
  } else if (document.compatMode == "CSS1Compat") {
    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    }
  } else {
    return {
      width: document.body.clientWidth,
      height: document.body.clientHeight
    }
  }
}

document.addEventListener('DOMContentLoaded', function () {
  // var html = document.documentElement || window || document.body;
  var html = document.getElementsByTagName('html')[0];
  var windowWidth = client().width;
  windowWidth = windowWidth > 750 ? 750 : windowWidth;
  html.style.fontSize = windowWidth / 7.5 + 'px';
  // document.body.width = 7.5 + 'rem';
  // document.body.style.cssText = 'width: 7.5rem; margin: 0 auto';
}, false);