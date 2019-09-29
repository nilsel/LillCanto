// alternative to DOMContentLoaded
document.onreadystatechange = function () {
  if (document.readyState == "interactive") {
    loadMd('forside/kolonne-1', 'col1');
    loadMd('forside/kolonne-2-kalender', 'col2');
    loadMd('forside/kolonne-3', 'col3');
  }
}


function loadMd(kind, targetElement) {
  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log('success!', xhr.respone);
      document.getElementById(targetElement).innerHTML = marked(xhr.response);
      document.getElementById(targetElement).classList = 'col loaded';
    } else {
      console.log('The request failed!');
    }
  };

  xhr.open('GET', './markdown/' + kind + '.md');
  xhr.send();
}