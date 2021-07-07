import axios from "./utils/axios";
export const Categorylist = {
  technology: "tecnology",
  playing: "playing",
  invorenment: "invorenment",
  game: "game",
  study: "study",
  international: "international",
};

const MAXIUM_PER_PAGE = 10;

export default class News {
  constructor(category) {
    this.category = category;
    this.searchTerm = "";
    this.currentPage = 1;
    this.pageSize = MAXIUM_PER_PAGE;
    this.totalPage = 1;
  }

  async getNews() {
    try {
      const { data } = await axios.get(this.getUrl());
      this.totalPage = Math.ceil(data.totalResults / this.pageSize);
      return {
        articles: data.articles,
        category: this.category,
        currentPage: this.currentPage,
        totalPage: this.totalPage,
        totalResults: data.totalResults,
        isNext:this._isNext(),
        isPrev:this._isPrev(),
      };
    } catch (e) {
      throw new Error(e);
    }
  }

  next() {
    if (this._isNext()) {
      this.currentPage++;
      return this.getNews();
    }
    return false;
  }
  prev() {
    if (this._isPrev()) {
      this.currentPage--;
      return this.getNews();
    }
    return false;
  }
  setCurrentPage(pagenumber) {
    if (pagenumber < 1 && pagenumber > this.totalPage) {
      throw new Error("invalid page number");
    } else {
      this.currentPage = pagenumber;
      return this.getNews();
    }
  }
  changeCategory(category) {
    this.category = category;
    this.currentPage = 1;
    return this.getNews();
  }
  searchTerm(term) {
    this.searchTerm = term;
    return this.getNews();
  }

  getUrl() {
    let url = "/?";
    if (this.category) url += `category=${this.category}`;
    if (this.searchTerm) url += `&q=${this.searchTerm}`;
    if (this.pageSize) url += `&pageSize=${this.pageSize}`;
    if (this.currentPage) url += `&page=${this.currentPage}`;
    return url;
  }

  //2 utils function for pagincation

  _isNext() {
    return this.currentPage < this.totalPage;
  }

  _isPrev() {
    return this.currentPage > 1;
  }
}
