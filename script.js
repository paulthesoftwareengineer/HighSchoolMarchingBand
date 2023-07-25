$(document).ready(function() {
    $('#addButton').click(function() {
        var name = $('#name').val();
        var quantity = $('#quantity').val();

        if(name.trim() != '' && quantity.trim() != '') {
            var newRow = `<tr><td>${name}</td><td>${quantity}</td></tr>`;
            $('#instrumentList').append(newRow);

            $('#name').val('');
            $('#quantity').val('');
        } else {
            alert("Please enter instrument name and quantity");
        }
    });
});
