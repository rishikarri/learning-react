// createCLass takes an object 
// component simply creates html
// flipCoin is a javascript function created by Me 
// Render function gets called right away using the initial state and then gets called everytime the state changes 

// getInitialState - react function 
// render - a react function

var Application = React.createClass({
	getInitialState: function() {
	
		return{
			image: 'http://www.marshu.com/articles/images-website/articles/presidents-on-coins/half-dollar-coin-tail.jpg'
		}

		render: function(){
			return(
				<div className="application">
					<button>Click to Flip</button>
					<div> <img src={this.state.image}></div>
				</div>
			)
		}
	}

}); 

ReactDOM.render(
	<Application />,
	document.getElementById('container');
)

// Render take two parameters
// 1. component that I want to create 
// 2. Where in teh DOM do I place it
