import { useState } from 'react'
import "./Form.scss"

const Form = ({ToDoArray, setToDoArray}) => {
	const [text, setText] = useState("")

	return (
		<form className="FormBox" onSubmit={(e) => {
			e.preventDefault()
			if(ToDoArray) {setToDoArray([...ToDoArray, {id:Date.now(), value:text}])}else {setToDoArray([{id:Date.now(), value:text}])} 
			setText("")

		}}>

			<input className='inputField'
			onChange={(e)=> setText(e.target.value)}
			value={text}
			/>
			
		</form>
	)
}

export default Form
