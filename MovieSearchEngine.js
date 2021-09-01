async function datas() {
  try {
    var movie = document.getElementById("city").value;

    var response = await fetch(
      `http://www.omdbapi.com/?t=${movie}&apikey=12b2cef5`
    );

    //console.log(response);
    var data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }

  let showDiv = document.getElementById("show");
  showDiv.innerHTML = "";

  let div1 = document.createElement("div");

  let img = document.createElement("img");
  img.src = data.Poster;

  let div2 = document.createElement("div");

  let p1 = document.createElement("p");
  let p2 = document.createElement("p");
  let p3 = document.createElement("p");
  let p4 = document.createElement("p");
  let p5 = document.createElement("p");
  let p6 = document.createElement("p");
  let p7 = document.createElement("p");
  let p8 = document.createElement("p");
  let p9 = document.createElement("p");

  p1.innerHTML = `Title -  ${data.Title}`;
  p2.innerHTML = `Actors -  ${data.Actors}`;
  p3.innerHTML = `Awards -  ${data.Awards}`;
  p4.innerHTML = `BoxOffice -  ${data.BoxOffice}`;
  p5.innerHTML = `Genre -  ${data.Genre}`;
  p6.innerHTML = `imdbRating -  ${data.imdbRating}`;
  p7.innerHTML = `Runtime -  ${data.Runtime}`;
  p8.innerHTML = `Language -  ${data.Language}`;
  p9.innerHTML = `Plot -  ${data.Plot}`;

  div1.append(img, p1);
  div2.append(p2, p3, p4, p5, p6, p7, p8, p9);

  showDiv.append(div1, div2);
}
