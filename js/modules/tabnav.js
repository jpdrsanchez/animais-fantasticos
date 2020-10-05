/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
export default class initTabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    [this.firstTabContent] = this.tabContent;
    this.activeClass = 'ativo';
  }

  // Ativa tab de acordo com o index da mesma
  activeTab(index) {
    this.tabContent.forEach((section) => {
      section.classList.remove(this.activeClass, section.dataset.anime);
    });
    this.tabContent[index].classList.add(
      this.activeClass,
      this.tabContent[index].dataset.anime,
    );
  }

  // Adiciona os eventos às tabs
  addTabNavEvents() {
    this.tabMenu.forEach((item, index) => {
      item.addEventListener('click', () => this.activeTab(index));
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      // Ativar primeiro item
      this.activeTab(0);
      this.addTabNavEvents();
    }
    return this;
  }
}
