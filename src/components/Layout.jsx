import { Navbar } from "@/components";

export default function Layout({ children }) {
	return (
		<>
			{children[1].type.name !== "Guide" ? <Navbar /> : null}
			<main>{children}</main>
		</>
	);
}
