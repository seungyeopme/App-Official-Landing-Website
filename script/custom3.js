// $('.show-btn').click(function() {
//     $('.container div').show()
// })
// $('.show-btn').click(function() {
//     $('.container div').slideDown()
// })
// $('.show-btn').click(function() {
//     $('.container div').fadeIn('fast')
// })
$('.show-btn').click(function() {
    $('.container div').fadeIn(500)  //0.5초
})

// $('.hide-btn').click(function() {
//     $('.container div').hide()
// })
// $('.hide-btn').click(function() {
//     $('.container div').slideUp()
// })
// $('.hide-btn').click(function() {
//     $('.container div').fadeOut('slow')
// })
$('.hide-btn').click(function() {
    $('.container div').fadeOut(3000)  //3초
})

// $('.toggle-btn').click(function(){
//     $('.container div').toggle()
// })
// $('.toggle-btn').click(function(){
//     $('.container div').slideToggle()
// })
$('.toggle-btn').click(function(){
    $('.container div').fadeToggle()
})