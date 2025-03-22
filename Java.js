function calculateBMI() {
  let weight = parseFloat(document.getElementById("weight").value);
  let height = parseFloat(document.getElementById("height").value);

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    alert("กรุณากรอกข้อมูลน้ำหนักและส่วนสูงให้ถูกต้อง");
    return;
  }

  height = height / 100;

  let bmi = weight / (height * height);
  let bmiResult = document.querySelector(".result p:nth-child(1)");
  let bmiCategory = document.querySelector(".result p:nth-child(2)");

  bmiResult.textContent = `ค่า BMI: ${bmi.toFixed(2)}`;
  bmiCategory.textContent = `อยู่ในหมวดหมู่: ${getBMICategory(bmi)}`;
}

function getBMICategory(bmi) {
  if (bmi < 18.5) return "น้ำหนักต่ำกว่ามาตรฐาน";
  else if (bmi >= 18.5 && bmi < 22.9) return "น้ำหนักปกติ";
  else if (bmi >= 23 && bmi < 24.9) return "น้ำหนักเกิน";
  else if (bmi >= 25 && bmi < 29.9) return "โรคอ้วนระดับที่ 1";
  else return "โรคอ้วนระดับที่ 2";
}
document.querySelector(".butt").addEventListener("click", calculateBMI);
