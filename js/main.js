$(document).ready(function () {

    var flight_data = {};

    var i = 2;
    $("#add-person-button").click(function () {
        var input = document.createElement("input");
        input.type = "text";
        input.id = "person" + i;
        input.className += "new-person-field";
        flight_form.appendChild(input);
        i++;
    });

    $("#submit-button").click(function () {
        flight_data["station"] = $("#station").val();
        flight_data["date"] = $("#date").val();
        flight_data["flight_number"] = $("#flight_number").val();
        flight_data["person_1"] = $("#person1").val();
        
        var n = 2;
        while ($("#person" + n).val()) {
            flight_data["person_" + n] = $("#person" + n).val();
            n++;
        }

        console.log(flight_data);
    });

});