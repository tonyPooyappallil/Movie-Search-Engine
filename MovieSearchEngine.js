var showGif = document.getElementById("showGif");
var showDiv = document.getElementById("show");
async function datas() {
  try {
    var movie = document.getElementById("city").value;

    var response = await fetch(
      `http://www.omdbapi.com/?t=${movie}&apikey=12b2cef5`
    );

    //console.log(response);
    var data = await response.json();
    if (data.Response == "True") {
      console.log(data);
      showMovie(data);
    } else {
      errorAaythuBhai();
    }
  } catch (error) {
    //console.log(error);
  }

  function showMovie(data) {
    //console.log(showDiv);
    showDiv.innerHTML = "";
    showGif.innerHTML = "";
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
    if (data.imdbRating > 8.5) {
      var h4 = document.createElement("h4");
      var h4Div = document.createElement("div");

      h4.innerHTML = "Recommended ★";
      var h4DivCont = document.createElement("div");
      h4DivCont.id = "h4DivCont";
      h4Div.id = "h4Div";
      h4Div.append(h4);
      h4DivCont.append(h4Div);

      div1.append(img, p1);
      div2.append(h4DivCont, p2, p3, p4, p5, p6, p7, p8, p9);
      console.log(div2);
    } else {
      div1.append(img, p1);
      div2.append(p2, p3, p4, p5, p6, p7, p8, p9);
    }

    showDiv.append(div1, div2);
  }
}

function errorAaythuBhai() {
  showGif.innerHTML = "";
  showDiv.innerHTML = "";
  let div1 = document.createElement("div");
  let h2 = document.createElement("h2");
  h2.innerHTML = "uh oh! You Entered An Invalid Movie Name";
  let img = document.createElement("img");
  img.src = "https://c.tenor.com/O1R2k9WrHCwAAAAM/error.gif";
  div1.id = "errDiv";
  div1.append(h2, img);

  showGif.append(div1);
}
