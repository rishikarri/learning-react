// let's create an arrray 

// State. V1. 
// Props are immutable (they do not change!) 
// State is a piece of data, that does change. 
// State also has an initial value, that changes when X happens 
// In the case of the National Championship, it starts at 0... initial state 
// Some kind of mutation or change occurs. 
// In order to use state, we have to ake our functions, React classes 


var teams = [
	{
		name: "Alabama",
		score: 0,
		mascot: "Crimson Tide"
	},
	{
		name: "Clemson",
		score: 0,
		mascot: "Tigers"
	}
	// {
	// 	name: "USC",
	// 	score: 0,
	// 	mascott: "Trojans"
	// }
]

// creating two components Header and Team 

function Header(props){
	return(
		<div className="header">
			<h1>{props.title}</h1>
		</div>
	)
}

function Team(props){
	return(
		<div className="team">
			<div className="team-name">{props.name}</div>
			{/* Remove Counter - make them a component so that they have state */}
			
			<Counter score={props.score} />
		</div>
	)
}

// react.createClass is a react component class that takes an object. The only requred property is a render method 
// Everytime state changes, render gets called 

var Counter = React.createClass({
	// We also need to add a getinitialState property that is part of react
	getInitialState: function() {
		return ({
			time: "60:00",
			score: 0
		})
	},

	losePoint: function(){
		console.log("hey");
		this.setState({
			score: (this.state.score - 1)
		})
	},

	
	render: function(){
		return(
			<div className="counter">
				<button onClick={this.losePoint} className="counter-change minus">-</button>
				{/* Change the score from this.props.score to state!*/}
				<div className="team-score"> {this.state.score} </div>
				<button className="counter-change plus">+</button>
			</div>
		)
	}
});

function Application(props){
	return(
		<div className="scoreboard">
			<Header title={props.title} />
			<div className="teams">


				{/* Using Map to loop through our teams JSON. These are no longer neccessary */ }
				{/* <Team name="Alabama" score="0" /> */ }
				{/* <Team name="Clemson" score="0" /> */ }

				{/* props.teams is an array or team objects */}	
				{/* return a component with the current team name and score */}	
				{/* () => {} is the ES6 way of writing function(){} */}	

				{props.teams.map((team, index) =>{
					{/* Add a key so that React can quickly and efficiently manage the DOM */}	
					return <Team key={index} name={team.name} score={team.score} />
				})}

			</div>
		</div>

	)
}


ReactDOM.render(
	<Application title="National Championship Scoreboard" teams={teams} />,
	document.getElementById('container')
)

