import { useEffect, useState } from "react";
import { MAC_FAMILIES } from "../../../../../../types/macs";
import cn from 'classnames'
import s from './carousel.module.css'
import arrowBack from "../../../../../../img/arrows/back.svg"
import arrowNext from "../../../../../../img/arrows/next.svg";
import { Device } from "../Device/Device";


export function Carousel() {
  const STEP = 2;

  const [params, setParams] = useState({
    ref: 0, 
    isSet: true, 
    isReversing: false
  })

  useEffect(() => {
    resetSet();
  }, [next, prev])

    const { ref, isSet, isReversing } = params

 

  function getOrder(index: number) {
    const order = index - ref

    if (order >= 0) {
      return order
    }

    return MAC_FAMILIES.length - order
  }
    
  function resetSet() {
    setTimeout(() => {
      setParams(prev => ({...prev, isSet: true}))
    }, 50)
  }
    
  function next() {
    const newRef = ref + STEP

    if (newRef < MAC_FAMILIES.length) {
      setParams({
        ref: newRef,
        isSet: false,
        isReversing: false,
      })
    }
  }
    
  function prev() {
    const newRef = ref - STEP

    if (newRef >= 0) {
      setParams({
        ref: newRef,
        isSet: false,
        isReversing: true,
      })
    }
  }

    return (
      <>
        <div className={cn(s.carouselWrapper, s.isHidden) } role="listbox">
          <button
            type="button"
            onClick={() => prev()}
            tabIndex={0}
            className={s.arrowButton}
          >
          <img className={s.iconArrow} src={arrowBack} alt="back" />
          </button>
          <div className={cn({
            [s.carousel]: true,
            [s.isSet]: isSet,
            [s.isReversing]: isReversing
          })}>
            {MAC_FAMILIES.map((item, index) => (
              <div
                key={item}
                style={{ order: getOrder(index) }}
                className={s.item}
              >
                <Device mac={item} />
              </div>
            ))}
          </div>
          <button
            className={s.arrowButton}
            type="button"
            onClick={() => next()}
            tabIndex={0}
          >
          <img className={s.iconArrow} src={arrowNext} alt="next" />
          </button>
        </div>
      </>
    )
  
}
