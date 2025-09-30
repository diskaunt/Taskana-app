import React from 'react'
import style from './navBar.module.css'
import Button from '../button/Button'

const NavBar = () => {
	return (
		<div className={style.navBar}>
			<nav className={style.navBar__menu}>
				<Button newStyle={style.navBar__button}>
					<img className={style.navBar__image} src="../../../public/navBar.svg" alt="" />
					<span>Входящие</span>
				</Button>
			</nav>
		</div>
	)
}

export default NavBar