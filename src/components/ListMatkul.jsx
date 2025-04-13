import Matkul from './Matkul';

const matkul = [
    { kode: 'BD1007', nama: 'Pemrograman Web Dasar' },
    { kode: 'BD1019', nama: 'Pemrograman Web Lanjutan' },
    { kode: 'BD1025', nama: 'Pemrograman Lintas Platform' }
];

function ListMatkul() {
    return (
        <ul>
            { matkul.map((item, i) => (
                <Matkul key={1} kode={item.kode} nama={item.nama} />
            ))}
        </ul>
    )
}

export default ListMatkul;