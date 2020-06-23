import http from "./http-common.js";

class FilmDataService {
  getAll() {
    return http.get("/films");
  }

  findByTitle(title) {
    return http.get(`/films?title=${title}`);
  }
  findByGenre(genre) {
    return http.get(`films/genre?genre=${genre}`);
  }
}
export default new FilmDataService();