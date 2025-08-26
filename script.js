
function addProduct(name, description, image) {
  const productBox = document.createElement('div');
  productBox.className = 'product-box';
  
  const heading = document.createElement('h3');
  heading.textContent = name;
  productBox.appendChild(heading);
  
  const img = document.createElement('img');
  img.src = image;
  img.alt = name;
  productBox.appendChild(img);
  
  const desc = document.createElement('p');
  desc.textContent = description;
  productBox.appendChild(desc);
  
  const button = document.createElement('button');
  button.textContent = 'Add to Cart';
  button.onclick = function() { alert(`${name} added to cart!`); };
  productBox.appendChild(button);
  
  document.body.appendChild(productBox);
}




 < form  id="contactForm">
        <h2>Welcome! Please fill out the form below.</h2>
        <input type="text" placeholder="Name" required>
        <input type="tel" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" placeholder="Phone Number" required>
        <select id="month" required>
            <option value="">Select Month</option>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
        </select>
        <select id="day" required>
            <option value="">Select Day</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="1">4</option>
            <option value="2">5</option>
            <option value="3">6</option>
            <option value="1">7</option>
            <option value="2">8</option>
            <option value="3">9</option>
            <option value="1">10</option>
            <option value="2">11</option>
            <option value="3">12</option>
            <option value="1">13</option>
            <option value="2">14</option>
            <option value="3">15</option>
            <option value="1">16</option>
            <option value="2">17</option>
            <option value="3">18</option>
            <option value="1">19</option>
            <option value="2">20</option>
            <option value="3">21</option>
            <option value="1">22</option>
            <option value="2">23</option>
            <option value="3">24</option>
            <option value="1">25</option>
            <option value="2">26</option>
            <option value="3">27</option>
            <option value="2">28</option>
            <option value="3">29</option>
            <option value="1">30</option>
            <option value="2">31</option>
        

        </select>
        <select id="year" required>
            <option value="">Select Year</option>
            <option value="2023">2025</option>
            <option value="2024">2024</option>
            <option value="2025">2023</option>
            <option value="2023">2022</option>
            <option value="2024">2021</option>
            <option value="2025">2020</option>
            <option value="2023">2019</option>
            <option value="2024">2018</option>
            <option value="2025">2017</option>
            <option value="2023">2016</option>
            <option value="2024">2015</option>
            <option value="2025">2016</option>
             <option value="2023">2015</option>
            <option value="2024">2014</option>
            <option value="2025">2013</option>
            <option value="2023">2012</option>
            <option value="2024">2011</option>
            <option value="2025">2010</option>
            <option value="2023">2009</option>
            <option value="2024">2008</option>
            <option value="2025">2007</option>
            <option value="2023">2006</option>
            <option value="2024">2005</option>
            <option value="2025">2004</option>

   { function createCalendar() {
    const table = document.getElementById('calendar-table');
    const today = new Date();
    let dayOfWeek = today.getDay();

    // Clear existing rows
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }

    // Add header row
    const headerRow = table.insertRow(0);
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    for (let i = 0; i < 7; i++) {
        const cell = headerRow.insertCell(i);
        cell.innerHTML = days[i];
    }

    // Add calendar rows
    const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    let currentDate = firstDayOfMonth;

    while (currentDate.getMonth() === today.getMonth()) {
        const row = table.insertRow(table.rows.length);
        for (let i = 0; i < 7; i++) {
            const cell = row.insertCell(i);
            if (i >= dayOfWeek && currentDate <= today) {
                cell.innerHTML = currentDate.getDate();
                currentDate.setDate(currentDate.getDate() + 1);
            } else {
                cell.innerHTML = '';
            }

        function createCalendar() {
    const table = document.getElementById('calendar-table');
    const today = new Date();
    let dayOfWeek = today.getDay();

    // Clear existing rows
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }

    // Add header row
    const headerRow = table.insertRow(0);
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    for (let i = 0; i < 7; i++) {
        const cell = headerRow.insertCell(i);
        cell.innerHTML = days[i];
    }

    // Add calendar rows
    const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    let currentDate = firstDayOfMonth;

    while (currentDate.getMonth() === today.getMonth()) {
        const row = table.insertRow(table.rows.length);
        for (let i = 0; i < 7; i++) {
            const cell = row.insertCell(i);
            if (i >= dayOfWeek && currentDate <= today) {
                cell.innerHTML = currentDate.getDate();
                currentDate.setDate(currentDate.getDate() + 1);
            } else {
                cell.innerHTML = '';
            }

        }}}}}}}

















