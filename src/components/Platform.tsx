import { Children } from "react";
import { OnScroll } from "./animations";

const Platform = () => {
	return (
		<main className="m-4 mx-auto flex max-w-2xl flex-col gap-16 p-8 text-2xl leading-loose text-indigo-200">
			{wrapChildren(
				<p>
					My name is Daniel Thorp, a 1st year Software Engineering student, and I'm running for IEEE VP
					External.
				</p>,

				<p>
					I'm passionate about building connections between students and industry professionals. If elected,
					I'll prioritize organizing events that enhance student involvement and build a sense of community
					within IEEE.I'll also promote external collaboration with our activities, and work with student
					organizations across the country to achieve this goal.
				</p>,

				<p>
					With a track record of organizing successful events, including being a director in this year's Hack
					the Hill hackathon, I'm confident in my ability to make the next hackathon one of Canada's largest.
					I'll work with student organizations across the country to achieve this goal, providing students
					with valuable opportunities to connect with industry leaders and peers from across the nation.
				</p>,

				<p>
					Furthermore, I'll help find potential sponsorships for branch events and collaborate with the VP
					Internal to facilitate communication with various student groups at uOttawa.
				</p>,

				<p>
					I believe my dedication and experience make me a strong candidate for VP External.I'm eager to hear
					your ideas and feedback and look forward to working together to create a stronger, more connected
					IEEE community. Thank you for considering my candidacy, and I hope to earn your support in the
					upcoming election.
				</p>
			)}
		</main>
	);
};

const wrapChildren = (...children: JSX.Element[]) => {
	return Children.map(children, child => {
		return <OnScroll transition={{ duration: 0.5, delay: 0.5 }}>{child}</OnScroll>;
	});
};

export default Platform;
