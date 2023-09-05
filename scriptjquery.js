$(document).ready(function () {
  $('#infoForm input[type="button"]').on("click", function (e) {
    const name = $("#name").val();
    const dob = $("#dob").val();
    const gender = $('input[name="gender"]:checked').val();
    const languages = $('input[name="language"]:checked')
      .map(function () {
        return $(this).val();
      })
      .get()
      .join(", ");
    const country = $("#country").val();

    $("#result").html(`
            <h2>Submitted Details:</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Date of Birth:</strong> ${dob}</p>
            <p><strong>Gender:</strong> ${gender}</p>
            <p><strong>Languages:</strong> ${languages}</p>
            <p><strong>Country:</strong> ${country}</p>
        `);
  });
});
