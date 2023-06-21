import { Header } from "../../components/Header";
import { Container, Description, Menu } from "./styles";
import { Card } from "../../components/Card";
import flavors from "../../assets/flavors.png";
import prate from '../../assets/prate.png';
import { Section } from "../../components/Section";
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from "keen-slider/react"
import { useState } from "react";


export function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  return (
    <Container>
      <Header />

      <Description>
        <img src={flavors} alt="Alimentos e frutas" />
        <div>
          <h2>Sabores inigualáveis</h2>
          <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
        </div>
      </Description>

      <Menu>
        <Section title="Refeições">

          <div className="navigation-wrapper">
            <div ref={sliderRef} className="keen-slider">
              <Card
                image={prate}
                plateName="Salada Ravanello"
                value="49,97"
                className="keen-slider__slide"
              />
              <Card
                image={prate}
                plateName="Salada Ravanello"
                value="49,97"
                className="keen-slider__slide"
              />
              <Card
                image={prate}
                plateName="Salada Ravanello"
                value="49,97"
                className="keen-slider__slide"
              />
              <Card
                image={prate}
                plateName="Salada Ravanello"
                value="49,97"
                className="keen-slider__slide"
              />
            </div>

            {loaded && instanceRef.current && (
              <>
                <Arrow
                  left
                  onClick={(e) =>
                    e.stopPropagation() || instanceRef.current?.prev()
                  }
                  disabled={currentSlide === 0}
                />

                <Arrow
                  onClick={(e) =>
                    e.stopPropagation() || instanceRef.current?.next()
                  }
                  disabled={
                    currentSlide ===
                    instanceRef.current.track.details.slides.length - 1
                  }
                />
              </>
            )}
          </div>

          {loaded && instanceRef.current && (
            <div className="dots">
              {[
                ...Array(instanceRef.current.track.details.slides.length).keys(),
              ].map((idx) => {
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      instanceRef.current?.moveToIdx(idx)
                    }}
                    className={"dot" + (currentSlide === idx ? " active" : "")}
                  ></button>
                )
              })}
            </div>
          )}

        </Section>
      </Menu>
    </Container>
  )
}

function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${props.left ? "arrow--left" : "arrow--right"
        } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  )
}