import { useState } from 'react'
import "./Form.scss"

const Form = () => {
	const [text, setText] = useState("")

	return (
		<form onSubmit={(e) => {
			e.preventDefault()
			//settodos(text)
			

		}}>

			<input className='inputField'
			onChange={(e)=> setText(e.target.value)}
			value={text}
			/>
			
		</form>
	)
}

export default Form
