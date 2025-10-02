import React from 'react'
import style from './statistic.module.css'

const Statistic = () => {
	return (
		<>
			<div className={style.statistic__content}>
        <img
          className={style.statistic__image}
          src='../../../public/light.svg'
          alt=''
        />
        <p className={style.statistic__text}>
          Здесь мы&nbsp;поможем тебе управлять твоими задачами, отслеживать
          статистику и&nbsp;самочувствие.
        </p>
      </div>
		</>
	)
}

export default Statistic