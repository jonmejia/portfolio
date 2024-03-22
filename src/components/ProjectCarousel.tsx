import React from "react";
import { HomepageCard } from "./HomepageCard";

export default function ProjectCarousel() {
	return (
		<div className='flex justify-between'>
			<HomepageCard
				projectImage="img_string"
				projectName="Project"
				prodUrl="www.projectinvesting.com"
				localUrl="localhost:4000"
				margin='mx-20'
			/>
			<HomepageCard
				projectImage="img_string"
				projectName="Project"
				prodUrl="www.projectinvesting.com"
				localUrl="localhost:4000"
				margin=''
			/>
			<HomepageCard
				projectImage="img_string"
				projectName="Project"
				prodUrl="www.projectinvesting.com"
				localUrl="localhost:4000"
				margin='mx-20'
			/>
		</div>
	);
}
