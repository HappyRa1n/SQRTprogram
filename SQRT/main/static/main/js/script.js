var english = document.getElementById("en"),
    russian = document.getElementById("ru"),
    headerMainChangeText = document.getElementById("headerMainChangeText"),
    headerSupportChangeText = document.getElementById("headerSupportChangeText"),
    inputNumberChangeText = document.getElementById("inputNumberChangeText"),
    calcBtnChangeText = document.getElementById("calcBtnChangeText"), 
    ourContactsChangeText = document.getElementById("ourContactsChangeText");

english.addEventListener("click", function() {
    change(english, russian);
  }, false
);

russian.addEventListener("click", function() {
    change(russian, english);
  }, false
);

function change(lang_on, lang_off1, lang_off2) {
  if (!lang_on.classList.contains("current_lang")) {
    lang_on.classList.add("current_lang");
    lang_off1.classList.remove("current_lang");
    lang_off2.classList.remove("current_lang");
  }

  if (lang_on.innerHTML == "EN") {
    change_text.classList.add("english");
    change_text.classList.remove("russian");
    headerMainChangeText.innerHTML = "Main",
    headerSupportChangeText.innerHTML = "Support",
    inputNumberChangeText.innerHTML = "Input number:",
    calcBtnChangeText.innerHTML = "Calculate",
    ourContactsChangeText.innerHTML = "Our contacts: brigada@mail.ru";
  }
  
  else {
    change_text.classList.add("russian");
    change_text.classList.remove("english");
    headerMainChangeText.innerHTML = "Главная",
    headerSupportChangeText.innerHTML = "Поддержка",
    inputNumberChangeText.innerHTML = "Введите число:",
    calcBtnChangeText.innerHTML = "Вычислить",
    ourContactsChangeText.innerHTML = "Наши контакты: bridaga@mail.ru";
  }
}