const form = document.querySelector("form");
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'Kindly add a valid height ${height}';
  }
  else if (weight === '' || weight < 0 || isNaN(weight)) {
      results.innerHTML = 'kindly add a valid weight ${weight}';
  }
    else{
      const bmi = (weight / ((height * height) / 10000)).toFixed(2);

      let message;
      if (bmi < 18.6) {
        message = "Under Weight";
      } else if (bmi >= 18.6 && bmi <= 24.9) {
        message = "Normal Range";
      } else {
        message = "Overweight";
      }
  
      // Clear the previous content
    results.innerHTML = "";
    // Append the new content
    results.innerHTML += `<span>${bmi}</span> - ${message}`;

    }
});

  