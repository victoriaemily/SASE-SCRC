import { Navbar } from "@/components";

export default function Layout({ children }) {
	return (
		<>
			{children[1].type.name !== "Guide" &&
			children[1].type.name !== "Maps" &&
			children[1].type.name !== "GuideSchedule" &&
			children[1].type.name !== "Socials" ? (
				<Navbar />
			) : null}
			<main>{children}</main>
		</>
	);
}
