import React from "react";
import { HomepageCard } from "./HomepageCard";

export default function ProjectCarousel() {
        return (
                <div className="flex justify-between">
                        <HomepageCard
                                projectImage={"/teamux.png"}
                                projectName="Teamux"
                                prodUrl="https://www.github.com/jonmejia/teamux"
                                githubUrl="https://www.github.com/jonmejia/teamux"
                                margin="mx-20"
				imageClasses="p-6"
                        />
                        <HomepageCard
                                projectImage={"/teamux.png"}
                                projectName="Project"
                                prodUrl="www.projectinvesting.com"
                                githubUrl="https://www.github.com/jonmejia/teamux"
                                margin=""
                        />
                        <HomepageCard
                                projectImage={"/teamux.png"}
                                projectName="Project"
                                prodUrl="www.projectinvesting.com"
                                githubUrl="https://www.github.com/jonmejia/teamux"
                                margin="mx-20"
                        />
                </div>
        );
}
