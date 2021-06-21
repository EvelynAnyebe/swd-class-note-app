import week3 from "./../../assets/images/gallery/week-3.PNG";
import week4 from "./../../assets/images/gallery/week-4.PNG";
import week2 from "./../../assets/images/gallery/week-2.PNG";
import week5 from "./../../assets/images/gallery/week-5.PNG";
import week6 from "./../../assets/images/gallery/week-6.PNG";
import imgbtn from "./../../assets/images/gallery/images-btn-exercise.PNG";
import keyboard from "./../../assets/images/gallery/keyboard-exercise.PNG";
import router from "./../../assets/images/gallery/router-exercise.PNG";
import meetingrec from "./../../assets/images/gallery/meeting-records-exercise.PNG";

const Gallery=()=>{
 return(
    <section id="gallery" className="customContainer">
    <h1>Gallery of projects</h1>
    <div className="gridContainer">
      <div className="gallery-item">
        <img
          alt=""
          src={week2}
          className="card-box"
        />
      </div>
      <div className="gallery-item">
        <img
          alt=""
          src={week3}
          className="card-box"
        />
      </div>
      <div className="gallery-item">
        <img
          alt=""
          src={imgbtn}
          className="card-box"
        />
      </div>
      <div className="gallery-item">
        <img
          alt=""
          src={meetingrec}
          className="card-box"
        />
      </div>
      <div className="gallery-item">
        <img
          alt=""
          src={week5}
          className="card-box"
        />
      </div>
      <div className="gallery-item">
        <img
          alt=""
          src={keyboard}
          className="card-box"
        />
      </div>
      <div className="gallery-item">
        <img
          alt=""
          src={week6}
          className="card-box"
        />
      </div>
      <div className="gallery-item">
        <img
          alt=""
          src={week4}
          className="card-box"
        />
      </div>
      <div className="gallery-item">
        <img
          alt=""
          src={router}
          className="card-box"
        />
      </div>
    </div>
  </section>
 );
}
export default Gallery;