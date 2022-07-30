function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabMenu li");
  const tabContent = document.querySelectorAll(".js-tabContent section");
  tabContent[0].classList.add("ativo");

  if (tabContent.length && tabMenu.length) {
    function activeTab(index) {
      tabContent.forEach((content) => {
        content.classList.remove("ativo");
      });
      tabContent[index].classList.add("ativo");
    }
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
initTabNav();

function initAccordinList() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  const activeName = "ativo";
  if (accordionList.length) {
    accordionList[0].classList.add(activeName);
    accordionList[0].nextElementSibling.classList.add(activeName);

    function active() {
      this.classList.toggle(activeName);
      this.nextElementSibling.classList.toggle(activeName);
    }
    accordionList.forEach((item) => {
      item.addEventListener("click", active);
    });
  }
}
initAccordinList();

function scrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
scrollSuave();

function initAnimacaoScroll() {
  const sections = document.querySelectorAll(".js-scroll");
  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6;
    
    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isVisibleSection = (sectionTop - windowMetade) < 0;
        if (isVisibleSection) {
          section.classList.add("ativo");
        } else {
          section.classList.remove("ativo");
        }
      });
    }
    animaScroll();
    window.addEventListener("scroll", animaScroll);
  }
}
initAnimacaoScroll();
