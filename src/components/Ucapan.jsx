
import {
	intervalToDuration,
	differenceInDays,
	differenceInMonths,
	differenceInHours,
	differenceInMinutes,
} from "date-fns";

function Ucapan() {
    const duration = intervalToDuration({
        start: new Date(2006, 2, 28),
        end: new Date(),
    });

    const selisihHari = new Intl.NumberFormat("de-DE").format(
        differenceInDays(new Date(2026, 5, 26), new Date(2026, 2, 28)),
    );
    const selisihBulan = new Intl.NumberFormat("de-DE").format(
        differenceInMonths(new Date(), new Date(2006, 2, 28)),
    );
    const selisihJam = new Intl.NumberFormat("de-DE").format(
        differenceInHours(new Date(), new Date(2006, 2, 28)),
    );
    const selisihMenit = new Intl.NumberFormat("de-DE").format(
        differenceInMinutes(new Date(), new Date(2006, 2, 28)),
    );

    const hari = new Date();
    console.log(hari);
    const getDurationString = (dur) => {
        const parts = [
            dur.years && `${dur.years} tahun`,
            dur.months && `${dur.months} bulan`,
            dur.days && `${dur.days} hari`,
        ].filter(Boolean);

        return parts.length > 0 ? `${parts.join(" ")}` : ``;
    };
    return (
        <>
            

            <img className="w-full" src="src/assets/Desktop3.png" alt="" />

            <div className="bg-white flex justify-between mx-15 p-10 rounded-2xl gap-10">
                <div className="flex-1 flex flex-col gap-3">
                    <div className="text-4xl font-medium">
                        Selamat Ulang Tahun Nasywaa!!!
                    </div>
                    <div className="text-xl text-justify">
                        Udah kepala 2 aja nih, denger umur sendiri udah mulai
                        kerasa serius aja ya. Makin gede makin keren aja
                        kuliat-liat, semoga bisa makin keren
                        seterus-terus-terus-terusnya. Ketika kamu baca ini,
                        sekarang umur kamu udah {getDurationString(duration)}.
                        Itu artinya kamu udah menghabiskan waktu sebanyak{" "}
                        {selisihBulan} purnama, {selisihHari} hari, {selisihJam}{" "}
                        jam, atau {selisihMenit} menit di dunia ini. Sudah saatnya
                        menghela nafas dan berterimakasih kepada dirimu sendiri
                        karena telah berjuang sampai sejauh ini.
                    </div>
                    <div></div>
                </div>
                <div className=" w-1/3">
                    <img className="" src="src\assets\back_text.png" alt="" />
                </div>
            </div>
        </>
    );
}

export default Ucapan;