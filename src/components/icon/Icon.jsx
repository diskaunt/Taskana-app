import React from 'react'
import Create from './icons/Create'
import Inbox from './icons/Inbox'
import Loading from './icons/Loading'
import Moon from './icons/Moon'
import Sun from './icons/Sun'

const Icon = ({name}) => {
	switch (name.toLowerCase()) {
		case 'create':
			return <Create />
		case 'inbox':
			return <Inbox />
		case 'loading':
			return <Loading />
		case 'moon':
			return <Moon />
		case 'sun':
			return <Sun />
		default:
			return null
	}
}

export default Icon