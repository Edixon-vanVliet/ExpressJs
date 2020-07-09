function deleteLead(idLead) {
    $.ajax({
        url: "lead/" + idLead + "/delete-json",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify({ idLead }),
        type: "POST",
        success: (res) => {
            console.log("Result: ", res);
            $("#" + idLead).remove();
        },
        error: (error) => {
            console.log("Error: ", error);
        },
    });
}
