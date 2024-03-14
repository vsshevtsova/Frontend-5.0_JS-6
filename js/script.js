let movieDB = {
  movies: [],
  newFilm: function () {
    const form = document.querySelector("#form");
    const movieList = document.querySelector("#movielist");

    // Новый элемент в списке
    function addFilm(data) {
      const divLi = document.createElement("div");
      divLi.classList.add("wrapper");
      divLi.style.display = "flex";
      divLi.style.justifyContent = "space-between";
      movieList.append(divLi);

      let li = document.createElement("li");
      const trash = document.createElement("trash");
      if (data.length > 21) {
        data = data.slice(0, 21) + "...";
      }
      li.textContent = data;

      divLi.append(li);
      li.classList.add("list__item");

      // Мусорная корзина
      trash.innerHTML = '<img src="../icons/trash.svg" width=20px>';
      divLi.insertAdjacentElement("beforeend", trash);
      trash.style.visibility = "hidden";
      divLi.addEventListener("mouseenter", (e) => {
        e.preventDefault();
        trash.style.visibility = "visible";
      });
      divLi.addEventListener("mouseleave", (e) => {
        e.preventDefault();
        trash.style.visibility = "hidden";
      });
      trash.addEventListener("click", () => {
        delete movieDB.movies[data];
        divLi.remove();
        console.log(movieDB);
      });
    }
    // Сортировка
    const sorted = (arr) => {
      arr.sort();
    };

    // Отправка формы
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const filmName = document.querySelector("#name").value,
        filmFav = document.querySelector("#fav");
      if (!filmName) {
        return false;
      }
      movieDB.movies.push(filmName);
      if (filmFav.checked) {
        console.log("Добавляем любимый фильм");
      }
      sorted(movieDB.movies);
      movieList.innerHTML = "";

      // Второй вариант
      // while (movieList.firstChild) {
      //   movieList.removeChild(movieList.firstChild);
      // }

      movieDB.movies.forEach((name) => {
        addFilm(name);
      });
      console.log(movieDB.movies);
    });
  },
};

movieDB.newFilm();
