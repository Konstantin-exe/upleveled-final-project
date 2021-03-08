$('.li-modal').on('click', function(event) {
    event.preventDefault();
    $('#modalContainer').modal('show').find('.modal-content').load($(this).attr('xlink:href'));
});

$('#main-menu').on('click', function(event) {
    item = '#main-menu option:selected';
    
})