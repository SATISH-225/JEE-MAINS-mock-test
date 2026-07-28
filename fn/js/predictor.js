function predictCollege() {

    let category = document.getElementById("category").value;

    let percentile = parseFloat(document.getElementById("percentile").value);

    let result = document.getElementById("result");

    if (isNaN(percentile) || percentile < 0 || percentile > 100) {

        result.innerHTML = "<h3 style='color:red;'>Please enter a valid percentile.</h3>";

        return;

    }

    let output = "";

    if (percentile >= 99) {

        output = `
        <h2>Predicted Colleges</h2>
        <p><b>Expected Rank:</b> Below 15,000</p>
        <ul>
            <li>NIT Trichy - CSE ⭐ High Chance</li>
            <li>NIT Warangal - CSE ⭐ High Chance</li>
            <li>IIIT Hyderabad - CSE ⭐ Medium Chance</li>
        </ul>`;

    }

    else if (percentile >= 95) {

        output = `
        <h2>Predicted Colleges</h2>
        <p><b>Expected Rank:</b> 15,000 - 40,000</p>
        <ul>
            <li>NIT Surathkal - ECE</li>
            <li>NIT Calicut - CSE</li>
            <li>IIIT Gwalior - IT</li>
        </ul>`;

    }

    else if (percentile >= 90) {

        output = `
        <h2>Predicted Colleges</h2>
        <p><b>Expected Rank:</b> 40,000 - 90,000</p>
        <ul>
            <li>IIIT Kurnool - ECE</li>
            <li>NIT Andhra Pradesh - Civil</li>
            <li>NIT Agartala - Mechanical</li>
            <li>GFTIs - Various Branches</li>
        </ul>`;

    }

    else if (percentile >= 80) {

        output = `
        <h2>Predicted Colleges</h2>
        <p><b>Expected Rank:</b> 90,000 - 1,80,000</p>
        <ul>
            <li>IIIT Bhagalpur</li>
            <li>NIT Meghalaya</li>
            <li>GFTIs</li>
        </ul>`;

    }

    else {

        output = `
        <h2>Predicted Colleges</h2>
        <p><b>Expected Rank:</b> Above 1,80,000</p>
        <ul>
            <li>State Engineering Colleges</li>
            <li>Private Engineering Colleges</li>
            <li>Management Quota Options</li>
        </ul>`;

    }

    result.innerHTML = output;

}