function Application(props){
	// Capital letters in React, means component. 
	// components return a single virtual DOM element
	return(
		<div className="application">
			<h1>{props.title}</h1>
			{props.message}

		</div>
	)
}

ReactDOM.render(
	<Application message="Hello, Class" title="React Day" />, 
	document.getElementById('container')
);

// I need what you want me to render - and where to put it

// looks for a component adn then 

// we make a component on line 1 called application
// components job is to return one virtual dom element
// ReactDOM we want you to run this - what do you want me to put - the application component inside the document.get

// this whatever component is passed to it, props property of the this and message