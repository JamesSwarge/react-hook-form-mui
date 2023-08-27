import { useEffect, useRef, useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import img1 from "../assets/1.jpg"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.jpg"
import img4 from "../assets/4.jpg"
import gtaTrack from "../assets/gta.mp3"
import VolumeUpIcon from "@mui/icons-material/VolumeUp"
import VolumeOffIcon from "@mui/icons-material/VolumeOff"

export const BgSlider = () => {
  const settings = {
    dots: false,
    fade: false,
    accessibility: false,
    infinite: true,
    pauseOnHover: false,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  const [togglePlayPause, setTogglePlayPause] = useState(true)
  const audio = new Audio(gtaTrack)
  const playPause = () => {
    if (togglePlayPause) {
      console.log("Paused()")
      audio.pause()
    }
    setTogglePlayPause(!togglePlayPause)
  }

  useEffect(() => {
    if (togglePlayPause) {
      audio.play()
      // audio.pause()
      console.log("play", togglePlayPause)
    } else {
      audio.pause()
      console.log("pause", togglePlayPause)
    }
  }, [togglePlayPause])

  return (
    <>
      <button className="playpause" onClick={playPause}>
        <span>{togglePlayPause ? <VolumeUpIcon /> : <VolumeOffIcon />}</span>
      </button>
      <div className="sliderWrap">
        <Slider {...settings}>
          <div className="sliderImg">
            <img className="" src={img1} />
          </div>
          <div className="sliderImg">
            <img className="" src={img2} />
          </div>
          <div className="sliderImg">
            <img className="" src={img3} />
          </div>
          <div className="sliderImg">
            <img className="" src={img4} />
          </div>
        </Slider>
      </div>
    </>
  )
}
