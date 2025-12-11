function Home() {
	const githubUser = "jorgeprj";
	const githubRepo = "clone-tabnews";

	return (
		<div
			style={{
				minHeight: "100vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				textAlign: "center",
				fontFamily: "sans-serif",
				padding: "16px",
			}}
		>
			<div>
				<h1>🚧 Em construção</h1>

				<p
					style={{
						color: "#666",
						maxWidth: "600px",
						margin: "16px auto",
					}}
				>
					O projeto consiste em um clone da plataforma TabNews,
					desenvolvido com o objetivo de aprimorar técnicas e teórias.
					Esse marca um passo importante na minha jornada de
					aprendizado em desenvolvimento.
				</p>

				<a
					href={`https://github.com/${githubUser}/${githubRepo}`}
					target="_blank"
					rel="noopener noreferrer"
					style={{
						display: "inline-flex",
						alignItems: "center",
						gap: "8px",
						padding: "8px 16px",
						borderRadius: "20px",
						border: "1px solid #ddd",
						textDecoration: "none",
						color: "#333",
						background: "#f5f5f5",
					}}
				>
					<img
						src={`https://github.com/${githubUser}.png`}
						alt="Avatar"
						style={{
							width: "24px",
							height: "24px",
							borderRadius: "50%",
						}}
					/>
					<span>Ver projeto no GitHub</span>
				</a>
			</div>
		</div>
	);
}

export default Home;
