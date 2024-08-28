import DelButton from '../Button/DelButton'
import "./ToDoWindow.scss"

const ToDoWindow = ({ToDoArray, setToDoArray}) => {
	
	const ToDoElements = ToDoArray.map((e)=> {return (
		<li key={e.id} className='textElement'>
			<input className="CheckBox" type="checkbox"/>
			{e.value}
			<DelButton id={e.id} ToDoArray={ToDoArray} setToDoArray={setToDoArray}></DelButton>
		</li>
		)})

	return (
		<div className="MainWindow">
			<ul className="UL">
				{ToDoElements}
			</ul>
			
		</div>
	)
}

export default ToDoWindow
