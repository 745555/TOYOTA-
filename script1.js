// بيانات الرسم البياني
const data1 = {
  labels: [
    "مايو (5)",
    "يونيو (6)",
    "يوليو (7)",
    "أغسطس (8)",
    "سبتمبر (9)",
    "أكتوبر (10)",
    "نوفمبر (11)",
    "ديسمبر (12)",
  ],
  datasets: [
    {
      label: "نمو وكيل تويوتا جنزور (٪)",
      data: [5, 7, 6, 8, 9, 10, 11, 12], // نسب النمو الشهرية
      backgroundColor: "rgba(233, 147, 27, 0.5)",
      borderColor: "#E9931B",
      borderWidth: 2,
    },
  ],
};

const data2 = {
  labels: [
    "مايو (5)",
    "يونيو (6)",
    "يوليو (7)",
    "أغسطس (8)",
    "سبتمبر (9)",
    "أكتوبر (10)",
    "نوفمبر (11)",
    "ديسمبر (12)",
  ],
  datasets: [
    {
      label: "المبيعات الشهرية (ألف دينار)",
      data: [450, 500, 520, 580, 600, 650, 680, 720], // المبيعات الشهرية بالآلاف
      backgroundColor: "rgba(54, 162, 235, 0.5)",
      borderColor: "rgba(54, 162, 235, 1)",
      borderWidth: 2,
    },
  ],
};

const data3 = {
  labels: [
    "مايو (5)",
    "يونيو (6)",
    "يوليو (7)",
    "أغسطس (8)",
    "سبتمبر (9)",
    "أكتوبر (10)",
    "نوفمبر (11)",
    "ديسمبر (12)",
  ],
  datasets: [
    {
      label: "عدد السيارات المباعة",
      data: [90, 100, 110, 120, 130, 140, 150, 160], // عدد السيارات المباعة كل شهر
      backgroundColor: "rgba(75, 192, 192, 0.5)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 2,
    },
  ],
};

// خيارات الرسم البياني
const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
      labels: {
        font: {
          size: 14, // تكبير حجم النص في وسيلة الإيضاح
        },
      },
    },
  },
  scales: {
    x: {
      ticks: {
        font: {
          size: 14, // تكبير حجم النص على محور X
        },
      },
    },
    y: {
      beginAtZero: true,
      ticks: {
        font: {
          size: 14, // تكبير حجم النص على محور Y
        },
      },
    },
  },
};

// إنشاء الرسوم البيانية
new Chart(document.getElementById("growthChart1"), {
  type: "bar",
  data: data1,
  options: options,
});

new Chart(document.getElementById("growthChart2"), {
  type: "line",
  data: data2,
  options: options,
});

new Chart(document.getElementById("growthChart3"), {
  type: "pie",
  data: {
    labels: [
      "مايو (5)",
      "يونيو (6)",
      "يوليو (7)",
      "أغسطس (8)",
      "سبتمبر (9)",
      "أكتوبر (10)",
      "نوفمبر (11)",
      "ديسمبر (12)",
    ],
    datasets: [
      {
        label: "نسبة المبيعات الشهرية",
        data: [10, 12, 14, 16, 18, 20, 22, 24], // نسب مئوية تعبر عن توزيع المبيعات
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
          "rgba(201, 203, 207, 0.5)",
          "rgba(100, 100, 255, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(201, 203, 207, 1)",
          "rgba(100, 100, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: options,
});