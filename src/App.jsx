import { useState } from "react";
import Consent from "./components/Consent";
import Ucapan from "./components/ucapan";
import Flash from "./components/flash";
import Carou from "./components/Carou";
import "./App.css";

function App() {
	return (
		<>
			<div className="bg-black ">
				<Consent></Consent>
				<div className="flex flex-col gap-10">
					<Ucapan></Ucapan>
					<div className=" bg-white flex justify-between mx-15 p-10 rounded-2xl gap-10">
						<div className=" w-1/3">
							<img
								className=""
								src="src\assets\danau_text.png"
								alt=""
							/>
						</div>
						<div className="flex-1">
							<div className="text-xl text-justify">
								Ga kerasa kita udah bareng hampir setahun aja
								ya? Makasih banyak udah nemenin aku yang banyak
								banget bikin salah, sering bikin kamu marah,
								gapaham situasi kondisi, kadang egois, kadang
								gatau diri dan suuppeeeer clingy ini. Maaf ini
								first time jadi kadang bingung sendiri harus
								ngapain, kayak, ini nasywaa lagi gapapa? ini
								nasywaa lagi marah kah? marahnya sama aku apa
								sama orang? apa emang lagi pengen diem aja?
								begitulah sekiranya isi pikiranku yang super
								lemot itu. Jadi harap maklum sama manusia satu
								ini yaa&lt;3. Kamu sekarang pasti udah sadar
								kalau ada subtitle di foto kita, alay ya? biarin
								soalnya lucu kaya di film-film.
							</div>
						</div>
					</div>
					<div className="bg-white flex justify-between mx-15 p-10 rounded-2xl gap-10">
						<div className="flex-1">
							<div className="text-xl text-justify">
								Ternyata kita udah maen banyaaaaaak banget
								apalagi hampir tiap hari ketemu di perpus. Kamu
								pasti bosen ya ketemu aku terus? Kalaupun kamu
								bosen ya biarin, aku bakal ketemu terus-terusan
								selama masih bisa. Sedih ga si bentar lagi jadi
								jarang ketemu. Tapi gapapa kita juga harus
								memperjuangkan masa depan kita juga. Kalau
								dihitung-hitung nih waktu kita sampai akhir
								semester 6 nanti tinggal 3 bulan, tepat 90 hari
								setelah kamu ulang tahun. Jadi, ayo kita maen
								yang baaaanyaaaaak, walaupun sekedar di perpus
								aja gamasalah soalnya nanti bakal jarang ketemu.
								Kita wujudkan wishlist-wsihlist yang belum
								kesampaian, kita libas semua makanan yang pengen
								kita makan. Kita isi 90 hari ini dengan hal-hal
								yang seru dan menyenangkan.
							</div>
						</div>
						<div className=" w-1/3">
							<img
								className=""
								src="src\assets\bayang_text.png"
								alt=""
							/>
						</div>
					</div>
					<div className="bg-white flex justify-between mx-15 p-10 rounded-2xl gap-10">
						<div className=" w-1/3">
							<img
								className=""
								src="src\assets\mirror_text.png"
								alt=""
							/>
						</div>
						<div className="flex-1">
							<div className="text-xl text-justify">
								Sekali lagi selamat ulang tahun Naswyaa! Makasih
								udah menjadi 'kartika' di mataku. Kamu adalah
								salah satu orang paling keren yang pernah aku
								temui. Pola pikir kamu, bagaimana kamu
								berinteraksi dengan lingkungan sekitar kamu,
								rasa kepedulian kamu terhadap orang lain, bahkan
								bagaimana kamu bisa meregulasi emosi kamu ketika
								menghadapi suatu permasalahan menjadi sebuah
								daya tarik tersendiri yang membat kamu bercahaya
								dibandingkan yang lain. Kamu sering berpikir
								bahwa kamu sendirian, tapi di mataku, segala
								kualitas diri kamu telah menarik orang-orang
								yang peduli terhadap diri kamu tanpa kamu
								sadari. Pada akhirnya jalan yang kamu tempuh
								hanya akan dilalui kamu sendiri sepenuhnya, tapi
								di setiap langkah yang kamu lalui untuk melewati
								jalan tersebut, kamu tidak sendirian
							</div>
						</div>
					</div>
					<Flash></Flash>
					<Carou></Carou>
					<div className="text-white text-2xl font-medium flex flex-col items-center">
						<p>Terimakasih sudah menyimak, semoga kadonya dapat diterima dengan baik</p>
						<p>~ Ghaliyh ~</p>
					</div>
				</div>

				<div className="p-20"></div>
			</div>
		</>
	);
}

export default App;
