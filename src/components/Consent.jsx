function Consent() {
	function closeConsent(id) {
		document.getElementById(id).classList.add("hidden");
	}

	return (
		<>
			<div
				id="consent"
				className="fixed h-screen left-0 right-0 bg-black/95 flex flex-col justify-center items-center p-20 z-20"
			>
				<div className="text-justify w-120 bg-white text-black p-10 rounded flex flex-col gap-3">
					<div>
						Haiii Nasywaa! Apa Kabar? <br />
						Semoga kamu selalu diberi kesehatan kapanpun dan
						dimanapun kamu berada. Ketika kamu baca ini, berarti
						kamu udah menginjak kepala 2, Ciee udah tua. Aku ada
						sedikit 'kado' untuk kamu, mungkin memang ngga seberapa
						dan ngga terlalu fungsional di kehidupan sehari hari
						tapi semoga bisa diterima dengan baik
					</div>
					<div className="flex justify-end">
						<button
							onClick={() => closeConsent("consent")}
							className="p-2 bg-black text-white font-bold rounded"
						>
							Oke
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default Consent;
