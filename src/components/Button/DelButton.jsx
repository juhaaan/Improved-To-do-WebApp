import "./DelButton.scss"

const DelButton = ({id, ToDoArray, setToDoArray}) => {
	return (
		<button className='DeleteButton' onClick={
			()=>{
				setToDoArray(ToDoArray.filter((e)=> e.id!=id))
			}
		}>
			Delete To-Do
		</button>
	)
}

export default DelButton
