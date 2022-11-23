<!doctype html>
<html>
<head>
    <title>Online jQuery Editor</title>
    <script src="https://www.tutorialspoint.com/jquery/jquery-3.6.0.js"></script>
    <script>
        $(document).ready(function() {
            $('#removeItemButton').click(function() {
                // remove the list Submarine First in the Queue on SeaBankShore
                $("#list li").eq(0).remove();
                return false;
            });
             $('#addItemButton').click(function() {
           var itemFound = false;
                var newItem = $('#input').val();
                if ($('#input').val().length === 0) {
                    alert('enter name');
                } else {
                alert(newItem);
                    $('#list li').each(function() {
                        if ($(this).text() === newItem) {
                         itemFound = true;
                        }
                    });
                    if (itemFound == true) {
                        alert('item already present');
                    } else {
                          $('#list').append('<li>' + newItem + '</li>');
                        // add item here
                    }
                    /*$('#list').append('<li>' + newItem + '</li>');*/
                    return false;
                }
                return false;
            });
        });
    </script>
</head>
<body>
    <h1>Jack Sparrow's Control Room</h1>
    <form>
        Enter SubMarine-Name:(*NoNull*) <input type="text" name="task" id="input">
        <button id="addItemButton">OnBoard-The-Marine</button>
        <br>
        <br>
        <br>
        <br> SubMarines onBoarded List @SeaShoreBank
        <ul id="list">
        </ul>
        <button id="removeItemButton">Hide-SubMarine</button>
    </form>
</body>
</html>
