$(function(){
  function buildHTML(message){
    var content = message.content ? `${ message.content }` : "";
    var img = message.image ? `<img src= ${ message.image }>` : "";
    var html = `<div class= "message" data-id="${message.id}">
                 <div class= "upper-message">
                   <p class= "upper-message__user-name">
                     ${message.user_name}
                   </p>
                   <p class= "upper-message__date">
                     ${message.created_at}
                   </p>
                 </div>
                 <div class= "lower-message">
                   <p class= "lower-message__content">                   
                    <div>
                    ${content}
                    </div>                   
                    ${img}
                   </p>
                 </div>
                </div>`
    return html;
  }
  
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var message = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: 'POST',
      data: message,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data) {
      function scrollBottom(){
        var target = $('.message').last();
        var position = target.offset().top + $('.messages').scrollTop();
        $('.messages').animate({
          scrollTop: position
        }, 300, 'swing');
      }
      var html = buildHTML(data);
      $('.messages').append(html);
      $('#message_content').val('');
      scrollBottom();
    })
    .fail(function(){
      alert("メッセージを入力してください。");
    })
    .fail(function(){
      alert('error');
      $('.form__submit').prop('disabled', false)
    })
    .always(function(){
      $('.form__submit').prop('disabled', false)
    });
  })
})