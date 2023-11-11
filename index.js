$(document).ready(function(){
    $('nav ul.toggle').click(function(){
          $(this).toggleClass('active');
          $('nav ul.menu').toggleClass('active');
    })
})
$(document).ready(function(){
    $('aside .aside_toggle').click(function(){
          $(this).toggleClass('active');
          $('aside .aside_content').toggleClass('active');
    })
})