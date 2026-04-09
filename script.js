const seatInput = document.getElementById("seats");
const courseTotal = document.getElementById("courseTotal");
const finalAmount = document.getElementById("finalAmount");
const errorMsg = document.getElementById("error");
const discountMsg = document.getElementById("discountMsg");
const classType = document.getElementById("classType");
const confirmBox = document.getElementById("confirm");
const submitBtn = document.getElementById("submitBtn");

const pricePerSeat = 1000;

function calculateTotal() {
    let seats = parseInt(seatInput.value);

    if (seats <= 0 || isNaN(seats)) {
        errorMsg.textContent = "Seats must be at least 1";
        seatInput.value = 1;
        seats = 1;
    } else {
        errorMsg.textContent = "";
    }

    let total = seats * pricePerSeat;
    courseTotal.textContent = total;
    if (total > 5000) {
        discountMsg.textContent = "You are eligible for a special discount.";
    } else {
        discountMsg.textContent = "";
    }

    updateFinalAmount(total);
}

function updateFinalAmount(baseTotal) {
    let extra = 0;

    if (classType.value === "online") {
        extra = 100;
    } else {
        extra = 250;
    }

    finalAmount.textContent = baseTotal + extra;
}

seatInput.addEventListener("input", calculateTotal);

classType.addEventListener("change", () => {
    calculateTotal();
});

// Show submit button
confirmBox.addEventListener("change", () => {
    submitBtn.style.display = confirmBox.checked ? "block" : "none";
});

calculateTotal();