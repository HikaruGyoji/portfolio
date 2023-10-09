// close the hamburger menu
document.addEventListener("DOMContentLoaded", function () {
  const navContentLinks = document.querySelectorAll("#nav-content a li");

  navContentLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      document.getElementById("nav-input").checked = false;
    });
  });
});

// chart
const frontData = {
  labels: [
    "HTML/CSS",
    "JS/TS",
    "React/Next",
    "Vue/Nuxt",
    "Svelte/SvelteKit",
    "WordPress",
  ],
  datasets: [
    {
      data: [4, 2, 3, 4, 5, 3],
      label: "Front-end",
      backgroundColor: "rgba(0, 0, 255, 0.3)", // 青系の背景色
      borderCapStyle: "butt",
      borderColor: "rgba(0, 255, 255, 1)", // 青系の線の色
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      borderWidth: 3,
      fill: true,
      order: 0,
      lineTension: 0,
    },
  ],
};

const backData = {
  labels: [
    "Node.js",
    "Express.js",
    "Django",
    "Spring Boot",
    "Ruby on Rails",
    "ASP.NET",
  ],
  datasets: [
    {
      data: [4, 3, 3, 4, 5, 3],
      label: "Back-end",
      backgroundColor: "rgba(255, 0, 0, 0.3)", // 赤系の背景色
      borderCapStyle: "butt",
      borderColor: "rgba(255, 165, 0, 1)", // オレンジ系の線の色
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      borderWidth: 3,
      fill: true,
      order: 0,
      lineTension: 0,
    },
  ],
};

const devOptData = {
  labels: ["Git", "Docker", "CI/CD", "Testing", "Code Review", "Agile/Scrum"],
  datasets: [
    {
      data: [5, 4, 4, 3, 4, 5],
      label: "DevOps",
      backgroundColor: "rgba(0, 128, 0, 0.3)", // 緑系の背景色
      borderCapStyle: "butt",
      borderColor: "rgba(0, 255, 0, 1)", // 緑系の線の色
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      borderWidth: 3,
      fill: true,
      order: 0,
      lineTension: 0,
    },
  ],
};

const frontOptions = {
  scales: {
    r: {
      min: 0,
      max: 5,
      backgroundColor: "rgba(135, 206, 235, 0.5)", // 青系の背景色
      grid: {
        color: "#BBB", // グリッド色
      },
      angleLines: {
        color: "#BBB", // 深緑色のアングルライン
      },
      pointLabels: {
        color: "black", // ラベル
      },
    },
  },
};

const backOptions = {
  scales: {
    r: {
      min: 0,
      max: 5,
      backgroundColor: "rgba(255, 69, 0, 0.5)", // 赤系の背景色
      grid: {
        color: "#BBB", // グリッド色
      },
      angleLines: {
        color: "#BBB", // グリッド色
      },
      pointLabels: {
        color: "black", // ラベル
      },
    },
  },
};

const devOptOptions = {
  scales: {
    r: {
      min: 0,
      max: 5,
      backgroundColor: "rgba(50, 205, 50, 0.5)", // 緑系の背景色
      grid: {
        color: "#BBB", // グリッド色
      },
      angleLines: {
        color: "#BBB", // グリッド色
      },
      pointLabels: {
        color: "black", // ラベル
      },
    },
  },
};

const ctx = document.getElementById("frontRadarChart");
const myChart = new Chart(ctx, {
  type: "radar",
  data: frontData,
  options: frontOptions,
});

const backCtx = document.getElementById("backRadarChart");
const backChart = new Chart(backCtx, {
  type: "radar",
  data: backData,
  options: backOptions,
});

const devOptCtx = document.getElementById("devOptRadarChart");
const devOptChart = new Chart(devOptCtx, {
  type: "radar",
  data: devOptData,
  options: devOptOptions,
});
