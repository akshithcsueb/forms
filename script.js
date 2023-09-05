function displayInfo() {
  const name = document.getElementById("name").value;
  const dob = document.getElementById("dob").value;
  const genderEls = document.querySelectorAll('input[name="gender"]:checked');
  const gender = genderEls.length ? genderEls[0].value : "";
  const languagesEls = document.querySelectorAll(
    'input[name="language"]:checked'
  );
  const languages = Array.from(languagesEls)
    .map((el) => el.value)
    .join(", ");
  const country = document.getElementById("country").value;

  const resultDiv = document.getElementById("result");

  resultDiv.innerHTML = `
        <h2>Submitted Details:</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Languages:</strong> ${languages}</p>
        <p><strong>Country:</strong> ${country}</p>
    `;
}
