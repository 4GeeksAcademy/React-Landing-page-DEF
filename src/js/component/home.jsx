
//include images into your bundle
import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Cards from "./Cards.jsx";
import myPosts from "../data/Post.js";



//create your first component
const Home = () => {
	return (
		<div>
			<Navbar/>
			<Jumbotron />
			<div className="">
                {myPosts.map((post) => {
                    return <Cards title={post.title} description={post.description} buttonDescription={post.buttonDescription} key={post.id} />
                })}
            </div>
        </div>

	);
};

export default Home;
