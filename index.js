//Add new items to list
//How to add padding between buttons???
$('#js-shopping-list-form').on('submit', function(e) {
    const newItem = $('#shopping-list-entry').val();
    $('.shopping-list').append('<li><span class="shopping-item">' + newItem + '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>');
    $('button').css('margin-right', '5px');
    $('#shopping-list-entry').val('');
    e.preventDefault();
});

//Check items
$('ul').on('click', '.shopping-item-toggle', function() {
    $(this).parent().siblings().toggleClass('shopping-item__checked');
});

//Delete items
$('ul').on('click', '.shopping-item-delete', function() {
    $(this).parents('li').remove();
});

