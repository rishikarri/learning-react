function Application(){
	return(
		<div className="scoreboard">
			<div className="header">
				<h1>National Championship Scoreboard</h1>
			</div>

			<div className="teams">
			{/* classname is exclusively used for styling in react*/}
				<div className="team">
					<div className="team-name">Alabama</div>
					<div className="counter">
						<button className="counter-change minus">-</button>
						<div className="team-score"> 0 </div>
						<button> + </button>
					</div>
				</div>

				<div className="team">
					<div className="team-name">Clemson</div>
					<div className="counter">
						<button className="counter-change minus">-</button>
						<div className="team-score"> 0 </div>
						<button> + </button>
					</div>
				</div>
			</div>
		</div>

	)
}

ReactDOM.render(
	<Application />, 
	document.getElementById('container')
)