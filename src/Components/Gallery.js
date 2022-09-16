import { useState } from "react";
import { useEffect } from "react";
import "./Gallery.css"
import { data } from "./GalleryItem";
const Gallery = () => {
  const [dots, setdot] = useState([])
  const [slides, setslides] = useState([])
  useEffect(() => {
    const allWithClass = Array.from(
      document.querySelectorAll('.demo')
    );
    const slides = Array.from(
      document.querySelectorAll('div.mySlides')
    );
    setslides(slides)
    setdot(allWithClass)
  }, [])

  let slideIndex = 1;

  const showSlides = (n) => {
    let i;
    console.log(slides)

    let captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    if (slides.length !== 0) {
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
      captionText.innerHTML = dots[slideIndex - 1].alt;
    }
  }

  showSlides(slideIndex);

  const plusSlides = (n) => {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Gallery</h2>

      <div className="container">


        {data.map((item, index) => {
          return (
            <div key={index}>
              <div className="mySlides" >
                <div className="numbertext">{index + 1} / {data.length}</div>
                <img src={item.image} style={{ width: "100%", height: "400px" }} />
              </div>
            </div>
          )
        })}

        <a className="prev" onClick={() => plusSlides(-1)}>❮</a>
        <a className="next" onClick={() => plusSlides(1)}>❯</a>

        <div className="caption-container">
          <p id="caption" style={{ marginTop: "10px" }}></p>
        </div>

        <div className="row">

          <div className="column">
            {data.map((item, index) => {
              return (
                <div key={index}>

                  <img className="demo cursor" src={item.image} style={{ width: "100%" }} onClick={() => currentSlide(index + 1)} alt={item.title} />
                </div>
              )
            })}
          </div>

        </div>

      </div>
    </div>
  )
}
export default Gallery