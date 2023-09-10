document.getElementById('submit-button').addEventListener('click', function () {
    // Get the current balance and input values
    var balanceElement = document.getElementById('balance-amount');
    var currentBalance = parseFloat(balanceElement.textContent);
    var amountInput = parseFloat(document.getElementById('amount-input').value);
    var emailInput = document.getElementById('email-input').value;

    // Check if the amount is valid and subtract it from the balance
    if (!isNaN(amountInput) && amountInput >= 0 && currentBalance >= amountInput) {
        currentBalance -= amountInput;
        balanceElement.textContent = currentBalance;

        // Show a message with the amount and email in the popup
        var popup = document.getElementById('popup');
        var popupContent = document.getElementById('popup-content');
        popupContent.textContent = "€" + amountInput + " has been sent to " + emailInput;
        popup.style.display = 'block';

        // Close the popup after 3 seconds
        setTimeout(function () {
            popup.style.display = 'none';
        }, 3000);
    } else {
        // Show an error message in the popup
        var popup = document.getElementById('popup');
        var popupContent = document.getElementById('popup-content');
        popupContent.textContent = "Invalid amount or insufficient balance.";
        popup.style.display = 'block';

        // Close the popup after 3 seconds
        setTimeout(function () {
            popup.style.display = 'none';
        }, 3000);
    }
});
