const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (isNaN(height) || height <= 0) {
        results.innerHTML = `⚠️ Please enter a valid height.`;
    } else if (isNaN(weight) || weight <= 0) {
        results.innerHTML = `⚠️ Please enter a valid weight.`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        let message = '';

        if (bmi < 18.6) {
            message = `You are Underweight 😔`;
        } else if (bmi >= 18.6 && bmi < 24.9) {
            message = `You are Normal 😊`;
        } else {
            message = `You are Overweight 😅`;
        }

        results.innerHTML = `<h3>Your BMI is ${bmi}</h3><p>${message}</p>`;
    }
});


// now make on temprature 