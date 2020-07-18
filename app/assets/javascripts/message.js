$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="MessageBox">
          <div class="message-info">
            <div class="message-info__user-name">
              ${message.user_name}
            </div>
            <div class="Message-info__post-date">
              ${message.created_at}
            </div>
          </div>
          <div class="message">
            <p class="message__message-contents">
              ${message.content}
            </p>
            <img class="Message__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="MessageBox">
        <div class="message-info">
            <div class="message-info__user-name">
            ${message.user_name}
          </div>
          <div class="message-info__post-date">
            ${message.created_at}
          </div>
        </div>
        <div class="message">
          <p class="message__message-contents">
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
    })
  });
});