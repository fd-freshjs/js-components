
function alertLeavePage() {
  confirm("Эта ссылка ведет на внешний ресурс. Вы уверены что хотите перейти?");
}

function NavButton(options = {}) {
  const link = document.createElement("a");
  link.href = options.href;
  link.textContent = options.text;
  link.className = options.className;

  link.addEventListener("click", alertLeavePage);

  return link;
}
