$('#calender').click(function(){
  $('.scripts').slideDown(200).delay(500).slideUp(200);
  $('.scripts').text('date \'+%m/%d\' -d "$end_date+268 days"');
});
$('#fake1, #fake2, #fake3, #fake4, #fake5').click(function(){
  $('#faketext').slideDown(200).delay(500).slideUp(200);
});
