colorsContainer = document.querySelector('.colors-container')
fontsContainer = document.querySelector('.fonts-container')

colors = [
	'#c8c4b9',
	'#b0292c',
	'#48426d',
	'#f0c38e',
	'#9bc4f1',
	'#252339',
	'#315468',
	'#12525e',
	'#55717d',
	'#1d1b28',
	'#0e0402',
	'#456289',
	'#a3c3d8',
	'#d0e2eb',
	'#80a4c0',
	'#cd4945',
	'#6b4341',
	'#d4c1d2',
	'#1a1c16',
	'#453b36',
	'#322773',
	'#2b3745',
	'#4e445c',
	'#8e8f89',
	'#efa822',
	'#e74c3c',
	'#03a9f4',
	'#e22e49',
	'#bec7d7',
	'#eff2f7',
	'#e1e6ec',
	'#06020f',
	'#00bcd4',
	'#c7eeff',
	'#03a9f4',
]
fonts = [
	'Poppins',
	'Muli',
	'Roboto',
	'Pirata One',
	'Heebo',
	'Montserrat',
	'Lato',
	'Squada One',
]

colors.forEach((color) => {
	createColorELement(color)
})

fonts.forEach((font) => {
	createFontELement(font)
})

function createColorELement(color) {
	const colorBox = document.createElement('div')
	colorBox.classList.add('color-box')
	colorBox.innerHTML = `<button class="copy"></button>`
	colorBox.style.backgroundColor = color

	colorBox.onclick = () => {
		let inputElement = document.createElement('input')
		inputElement.setAttribute('value', color)
		document.body.appendChild(inputElement)

		inputElement.select()

		document.execCommand('copy')

		inputElement.remove()
	}

	colorsContainer.appendChild(colorBox)
}

function createFontELement(font) {
	const fontBox = document.createElement('div')
	fontBox.classList.add('font-box')
	fontBox.innerHTML = `
		<p style="font-family: inherit">This font is called '${font}'.</>
		<button class="copy"></button>
		`
	fontBox.style.fontFamily = `'${font}'`

	fontBox.onclick = () => {
		let inputElement = document.createElement('input')
		inputElement.setAttribute(
			'value',
			`@import url('https://fonts.googleapis.com/css2?family=${font.replace(
				' ',
				'+'
			)}:ital,wght@0,400;1,400&display=swap');`
		)
		document.body.appendChild(inputElement)

		inputElement.select()

		document.execCommand('copy')

		inputElement.remove()
	}

	fontsContainer.appendChild(fontBox)
}
