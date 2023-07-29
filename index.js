import "./scss/main.scss";

/* popup창 관련 js - 'X'나 '+' 누르면 클래스 toggle과 글자 변환 */
const btnElement = document.getElementById("close");

btnElement.addEventListener("click", () => {
  const ulElement = document.querySelector(".popup ul");
  ulElement.classList.toggle("on");
  if (ulElement.className === "on") {
    btnElement.textContent = "+";
  } else {
    btnElement.textContent = "\u00D7";
  }
});

/* main__content관련 js코드 - 각 탭의 주제를 누르면 관련 내용으로 바뀌도록 하기 */
const tabBoxElement = document.getElementsByClassName("board__tabBox")[0];

tabBoxElement.addEventListener("click", (e) => {
  const liElements = document.getElementsByClassName("tab");
  const liArray = Array.from(liElements);
  liArray.forEach((liElement) => {
    liElement.classList.remove("on");
  });
  const clickElement = e.target.closest("li");
  clickElement.classList.toggle("on");

  const { id } = clickElement.dataset;
  const contentElements = document.getElementsByClassName("content");
  const contentArray = Array.from(contentElements);
  contentArray.forEach((contentElement) => {
    const checkId = contentElement.getAttribute("data-id");
    if (checkId === id) {
      if (!contentElement.classList.contains("on"))
        contentElement.classList.toggle("on");
    } else {
      contentElement.classList.remove("on");
    }
  });

  /* board__tabBox 관련 js 코드 - +버튼 클릭시 그에 맞는 해당 페이지로 이동 */
  const atagElement = document.getElementsByClassName("tabPlus")[0];
  console.log(atagElement, id);
  if (id === "1") {
    atagElement.setAttribute(
      "href",
      "http://ipsi.sejong.ac.kr/sub_page/sub5/0107_list.asp?tab1=5&B_CODE=BOARD_1455878015&B_CATEGORY=0"
    );
  } else if (id === "2") {
    atagElement.setAttribute(
      "href",
      "http://ipsi.sejong.ac.kr/sub_page/sub5/0102_list.asp?tab1=5&B_CODE=BOARD_1455985403&B_CATEGORY=0"
    );
  } else if (id === "3") {
    atagElement.setAttribute(
      "href",
      "http://ipsi.sejong.ac.kr/sub_page/sub5/0109_list.asp?tab1=5&B_CODE=BOARD_1464099007&B_CATEGORY=0"
    );
  }
});

/* main__image--pictuer 관련 js코드 -  이미지가 5초에 한 번씩 바뀌도록 변환 */
const pictureItems = document.querySelectorAll(".picture--item");
const tabSquare = document.querySelectorAll(".tab--square");
let currentIndex = 0;
let intervalId;

const tabArray = Array.from(tabSquare);
tabArray.forEach((tab, idx) => {
  tab.addEventListener("click", () => {
    const previousIndex = currentIndex;
    currentIndex = idx;
    showNextImage(previousIndex, currentIndex);
  });
});

function checkIdx() {
  const previousIndex = currentIndex;
  currentIndex = (currentIndex + 1) % pictureItems.length;

  showNextImage(previousIndex, currentIndex);
}

function showNextImage(prvIdx, nextIdx) {
  pictureItems[prvIdx].querySelector("img").style.opacity = 0;
  pictureItems[nextIdx].querySelector("img").style.opacity = 1;

  tabSquare[prvIdx].classList.remove("on");
  tabSquare[nextIdx].classList.add("on");
}

function startInterval() {
  intervalId = setInterval(checkIdx, 5000);
}

function stopInterval() {
  clearInterval(intervalId);
}

startInterval();

const stopButton = document.querySelector(".stop");
stopButton.addEventListener("click", () => {
  if (stopButton.classList.contains("on")) {
    stopButton.textContent = "►";
  } else {
    stopButton.textContent = "||";
  }
  stopButton.classList.toggle("on");
  if (intervalId) {
    stopInterval();
    intervalId = null;
  } else {
    startInterval();
  }
});

/* siteGo관련 js 코드 - 클릭했을 때 그의 자식요소 display: none -> block시키기 */
const divElement = document.getElementsByClassName("siteGo")[0];

divElement.addEventListener("click", (e) => {
  const depthElement = e.target.parentElement.querySelector(".depth2");
  console.log(e.target);
  depthElement.classList.toggle("on");
});

const goElement = document.getElementsByClassName("go")[0];
goElement.addEventListener("click", () => alert("주요 사이트를 선택해주세요."));
