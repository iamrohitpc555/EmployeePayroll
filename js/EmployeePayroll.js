<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/employee_form.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Baloo+Bhai+2&display=swap" rel="stylesheet">

    <title>Employee Payroll App</title>
</head>
<body>
    <header class="header-content header">
      <div class="logo-content">
        <img src="../assets/images/logo.png">
        <div>
          <span class="emp-text">EMPLOYEE</span><br>
          <span class="emp-text emp-payroll">PAYROLL</span>
        </div>
      </div>
    </header>
   <!-- UC-2 -->
  <div class="form-content">
    <form class="form" action="#" onsubmit="save(event)" onreset="resetForm()">
      <div class="form-head">Employee Payroll form</div>
      <div class="row-content">
        <label class="label text" for="name">Name</label>
        <input class="input" type="text" name="name" id="name"
          placeholder="Your Name { Eg: Amit Kumar }" required>
        <error-output class="text-error" for="text"></error-output>
      </div>

      <!-- UC-3 -->
      <div class="row-content">
        <label class="label text">Profile image</label>
        <div class="profile-radio-content">
          <label>
            <input type="radio" id="profile9" name="profile" value="../assets/profile-images/Ellipse -9.png" required>
            <img class="profile" id="image9" src="../assets/profile-images/Ellipse -9.png">
          </label>
          <label>
            <input type="radio" id="profile2" name="profile" value="../assets/profile-images/Ellipse -2.png" required>
            <img class="profile" id="image2" src="../assets/profile-images/Ellipse -2.png">
          </label>
          <label>
            <input type="radio" id="profile4" name="profile" value="../assets/profile-images/Ellipse -4.png" required>
            <img class="profile" id="image4" src="../assets/profile-images/Ellipse -4.png">
          </label>
          <label>
            <input type="radio" id="profile3" name="profile" value="../assets/profile-images/Ellipse -3.png" required>
            <img class="profile" id="image3" src="../assets/profile-images/Ellipse -3.png">
          </label>
          <label>
            <input type="radio" id="profile5" name="profile" value="../assets/profile-images/Ellipse -5.png" required>
            <img class="profile" id="image5" src="../assets/profile-images/Ellipse -5.png">
          </label>
          <label>
            <input type="radio" id="profile1" name="profile" value="../assets/profile-images/Ellipse -1.png" required>
            <img class="profile" id="image1" src="../assets/profile-images/Ellipse -1.png">
          </label>
          <label>
            <input type="radio" id="profile6" name="profile" value="../assets/profile-images/Ellipse -6.png" required>
            <img class="profile" id="image6" src="../assets/profile-images/Ellipse -6.png">
          </label>
          <label>
            <input type="radio" id="profile8" name="profile" value="../assets/profile-images/Ellipse -1.png" required>
            <img class="profile" id="image8" src="../assets/profile-images/Ellipse -8.png">
          </label>
        </div>
      </div>
      <!-- UC-4 -->
      <div class="row-content">
        <label class="label text" for="gender">Gender</label>
        <div>
          <input type="radio" name="gender" value="male">
          <label class="text" for="male">Male</label>
          <input type="radio" name="gender" value="female">
          <label class="text" for="female">Female</label>
        </div>
      </div>
      <div class="row-content">
        <label class="label text" for="department">Department</label>
        <div>
          <input class="checkbox" type="checkbox" name="department" id="hr" value="HR">
          <label class="text" for="hr">HR</label>
          <input class="checkbox" type="checkbox" name="department" id="sales" value="Sales">
          <label class="text" for="sales">Sales</label>
          <input class="checkbox" type="checkbox" name="department" id="finance" value="Finance">
          <label class="text" for="finance">Finance</label>
          <input class="checkbox" type="checkbox" name="department" id="engineer" value="Engineer">
          <label class="text" for="engineer">Engineer</label>
          <input class="checkbox" type="checkbox" name="department" id="others" value="Others">
          <label class="text" for="others">Others</label>
        </div>
      </div>
      <div class="row-content">
        <label class="label text" for="salary">Choose your salary: </label>
        <input class="input" type="range" name="salary" id="salary" min="100000" max="500000" step="100" value="400000">
        <output class="salary-output text" for="salary">400000</output>
      </div>
      <!-- UC-5 -->
      <div class="row-content">
        <label class="label text" for="startdate">Start Date</label>
        <div name="startdate" id="startdate">
          <select id="day" name="day">
            <option value="1" selected>1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
          </select>
          <select id="month" name="month">
            <option value="Jan">January</option>
            <option value="Feb">February</option>
            <option value="Mar">March</option>
            <option value="Apr">April</option>
            <option value="May">May</option>
            <option value="Jun">June</option>
            <option value="Jul">July</option>
            <option value="Aug">August</option>
            <option value="Sep">September</option>
            <option value="Oct">October</option>
            <option value="Nov" selected>November</option>
            <option value="Dec">December</option>
          </select>
          <select id="year" name="year">
            <option value="2020" selected`>2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
          </select>
        </div>
        <error-output class="date-error" for="startdate"></error-output>
      </div>
      <!-- UC-6 -->
      <div class="row-content">
        <label class="label text" for="notes">Notes</label>
        <textarea class="input" id="notes" name="Notes" style="height: 100px;" placeholder= "Leave Your Message Here " ></textarea>
      </div>
      <div class="buttonParent">
        <button type="submit" class="button submitButton" id="submitButton">Submit</button>
        <div class="submit-reset">
          <a href="./employee_form.html" class=" button cancelButton">Cancel</a>
          <button type="reset" class="resetButton button">Reset</button>
        </div>
      </div>
    </form>
  </div>
  <script src="../js/employee_form.js"></script>
  <script src="../js/EmployeePayroll.js"></script>
</body>
</html>
