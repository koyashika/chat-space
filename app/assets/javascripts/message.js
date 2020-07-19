$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="Message-box">
          <div class="Message-box__message-info">
            <div class="Message-box__message-info__user-name">
              ${message.user_name}
            </div>
            <div class="Message-box__message-info__post-data">
              ${message.created_at}
            </div>
          </div>
          <div class="Message-box__message">
            <p class="Message-box__message__message-contents">
              ${message.content}
            </p>
            <img class="Message-box__message__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="Message-box__Message-box">
        <div class="Message-box__message-info">
            <div class="Message-box__message-info__user-name">
            ${message.user_name}
          </div>
          <div class="Message-box__message-info__post-date">
            ${message.created_at}
          </div>
        </div>
        <div class="Message-box__message">
          <p class="Message-box__message__message-contents">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    };
  }

  $('.Form').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.Message-list').append(html);      
      $('form')[0].reset();
      $('.Message-list').animate({ scrollTop: $('.Message-list')[0].scrollHeight});
      $('.Form__input-box__submit-btn').prop('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
  });
  });
});