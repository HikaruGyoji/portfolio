// multi language
const glot = new Glottologist();
const languageSelect = document.getElementById("language-select");
const body = document.querySelector("body");
languageSelect.addEventListener("change", (event) => {
  const selectedLanguage = event.target.value;
  if (selectedLanguage === "ja") {
    body.style.fontFamily = "Noto Sans JP";
    glot.import("../multiLanguage.json").then(() => {
      glot.render("ja");
    });
  } else if (selectedLanguage === "en") {
    body.style.fontFamily = "Poppins";
    glot.import("../multiLanguage.json").then(() => {
      glot.render("en");
    });
  } else {
    body.style.fontFamily = "Noto Sans JP";
    glot.import("../multiLanguage.json").then(() => {
      glot.render("ja");
    });
  }
});

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
  labels: ["HTML/CSS", "JS/TS", "React", "Vue", "Svelte", "WordPress"],
  datasets: [
    {
      data: [4, 4, 3, 4, 3, 4],
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
  labels: ["Python", "Django", "GraphQL", "FastAPI", "MySQL", "Express.js"],
  datasets: [
    {
      data: [4, 2, 2, 2, 2, 3],
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

const othersData = {
  labels: ["Git", "Docker", "CI/CD", "Testing", "Code Review", "Agile/Scrum"],
  datasets: [
    {
      data: [4, 2, 3, 3, 3, 3],
      label: "Others",
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
      backgroundColor: "rgba(135, 206, 235, 0.5)",
      grid: {
        color: "black",
      },
      angleLines: {
        color: "black",
      },
      pointLabels: {
        color: "black",
      },
    },
  },
  animation: {
    duration: 1500, // アニメーションの再生時間（ミリ秒）
    easing: "easeInOutQuart", // アニメーションのイージング
  },
};

const backOptions = {
  scales: {
    r: {
      min: 0,
      max: 5,
      backgroundColor: "rgba(255, 69, 0, 0.5)",
      grid: {
        color: "black",
      },
      angleLines: {
        color: "black",
      },
      pointLabels: {
        color: "black",
      },
    },
  },
  animation: {
    duration: 1500,
    easing: "easeInOutQuart",
  },
};

const othersOptions = {
  scales: {
    r: {
      min: 0,
      max: 5,
      backgroundColor: "rgba(50, 205, 50, 0.5)",
      grid: {
        color: "black",
      },
      angleLines: {
        color: "black",
      },
      pointLabels: {
        color: "black",
      },
    },
  },
  animation: {
    duration: 1500,
    easing: "easeInOutQuart",
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

const othersCtx = document.getElementById("othersRadarChart");
const othersChart = new Chart(othersCtx, {
  type: "radar",
  data: othersData,
  options: othersOptions,
});
