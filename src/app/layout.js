import { ReduxProvider } from "@/redux/provider";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
	title: "UIFL",
	description: "Official website for the university of ilorin football league",
};

export default function RootLayout({ children }) {
	return (
		// <html lang="en">
		//   <body className={inter.className}>{children}</body>
		// </html>
		<html lang="en">
			<body className={montserrat.className}>
				<Navbar />
				<ReduxProvider>{children}</ReduxProvider>
				{/* <Footer /> */}
			</body>
		</html>
	);
}
