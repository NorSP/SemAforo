import React,{useState} from "react";
import '../../styles/index.css';
//include images into your bundle





//create your first component
const Home = () => {
	
	const [ colorR, setColorR] = useState("no-luz");
	const [ colorY, setColorY] = useState("no-luz");
	const [ colorG, setColorG] = useState("no-luz");

	function TrafficLight1 (){
		
		
	    if (colorR === "no-luz") {
				setColorR("luz")
				setColorY("no-luz")
				setColorG("no-luz")
			
		};
				
	
	};

	function TrafficLight2 (){
		
		
	    if (colorY === "no-luz") {
				setColorY("luz")
				setColorR("no-luz")
				setColorG("no-luz")
			
		};
				
	
	};

	function TrafficLight3 (){
		
		
	    if (colorG === "no-luz") {
				setColorG("luz")
				setColorY("no-luz")
				setColorR("no-luz")
			
		};
				
	
	};
	




	return (
		
		<div className="container w-25 bg-dark d-flex justify-content-center">
		<div>
			<div className={"m-5 caja rounded-circle bg-danger "+colorR} onClick={TrafficLight1}></div>
			<div className={"m-5 caja rounded-circle bg-warning "+colorY} onClick={TrafficLight2}></div>
			<div className={"m-5 caja rounded-circle bg-success "+colorG} onClick={TrafficLight3}></div>
		</div>
	</div>
	
		
		
	
	);
};

export default Home;
