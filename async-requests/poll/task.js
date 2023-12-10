document.addEventListener("DOMContentLoaded", function () {
    let pollTitleElement = document.getElementById("poll__title");
    let pollAnswersElement = document.getElementById("poll__answers");
  
    function fetchData(url, callback) {
      let xhr = new XMLHttpRequest();
      xhr.open("GET", url, true);
  
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            callback(null, JSON.parse(xhr.responseText));
          } else {
            callback(new Error("Ошибка HTTP: " + xhr.status));
          }
        }
      };
  
      xhr.send();
    }
  
    function displayPoll(data) {
      pollTitleElement.textContent = data.data.title;
      pollAnswersElement.innerHTML = "";
  
      data.data.answers.forEach(function (answer) {
        let answerButton = document.createElement("button");
        answerButton.className = "poll__answer";
        answerButton.textContent = answer;
  
        answerButton.addEventListener("click", function () {
          alert("Спасибо, ваш голос засчитан!");
          fetchNewPoll();
        });
  
        pollAnswersElement.appendChild(answerButton);
      });
    }
  
    function fetchNewPoll() {
      fetchData("https://students.netoservices.ru/nestjs-backend/poll", function (error, data) {
        if (!error && data && data.data && data.data.title && data.data.answers) {
          displayPoll(data);
        } else {
          console.error("Некорректный формат данных опроса");
        }
      });
    }
  
    fetchNewPoll();
  });
  
  