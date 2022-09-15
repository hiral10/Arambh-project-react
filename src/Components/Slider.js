import Carousel from 'react-bootstrap/Carousel';
import './Slider.css'
function Slider() {
  return (
    <div style={{ display: 'block', width: 1500, padding: 30 ,margin:"auto"}}>
        <Carousel >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://1.bp.blogspot.com/-PfImtXiYfpA/YOsa4LBNyeI/AAAAAAAAu5c/8U1a_DBb6lESd4E9ct97Mef9qdxZxBMHgCLcBGAsYHQ/s1210-rw/ibps-clerk-recruitment.webp"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://d2cyt36b7wnvt9.cloudfront.net/exams/wp-content/uploads/2022/01/25210805/SBI-PO-Exam-Pattern.png"
          alt="Second slide"
         
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://d2cyt36b7wnvt9.cloudfront.net/exams/wp-content/uploads/2021/11/14194925/SBI-PO-Result1.png"
          alt="Third slide"

        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  
  );
}

export default Slider;