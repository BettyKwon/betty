$(function(){
  $("#switch_heads").click(function() {
    var tmp = $( ".small_head" ).html();
    $( ".small_head" ).html($( ".big_head" ).html());
    $( ".big_head" ).html(tmp);
  });

  $("#small_head_mode").click(function() {
    $.post("/lectures/small_head", { pilot_class_id: vars['pilot_class_id'], course_id: vars['course_id']} );
  });

  $("#big_head_mode").click(function() {
    $.post("/lectures/big_head", { pilot_class_id: vars['pilot_class_id'], course_id: vars['course_id']} );
  });
});