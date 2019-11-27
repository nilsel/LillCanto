function loadMd(kind, targetElementId) {
  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log('success!', xhr.respone);
      document.getElementById(targetElementId).innerHTML = marked(xhr.response);
      document.getElementById(targetElementId).classList = 'col loaded';
    } else {
      console.log('The request failed!');
    }
  };

  xhr.open('GET', './markdown/' + kind + '.md');
  xhr.send();
}