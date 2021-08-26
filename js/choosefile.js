$('form').submit(function (e) {
  e.preventDefault();
});
$('form input').on('change', function () {
  var file        = $(this).prop('files')[0],
      convertToMb = Math.floor(file.size / 1024 / 1024);
  
  $('form #r').html(
     "<div><span>" + file.name + "</span></div>"
    // +
    // "<div>Type: <span>" + file.type + "</span></div>" +
    // "<div>Size: <span>" + file.size + ' bytes (' + convertToMb + ' mb)' + "</span> </div>"
    );
  console.log(file);
});

// $('form button').click(function () {
//   $('input').click();
// });
function choosefile()
{
  $('input').click();
}