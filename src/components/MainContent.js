import CardStruktur from './CardStruktur'
import kahim from './../assets/IMG_0648.JPG'

const MainContent = ()=> {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 text-center my-5">
                    <h1>SELAMAT DATANG DI WEBSITE HIMPUNAN MAHASISWA TEKNIK INFORMATIKA UHAMKA</h1>
                    <h3>___________________________</h3>
                </div>
                <div className="col-12 text-center my-5">
                    <h3>Apa itu HIMA TI?</h3>
                    <p> HIMA TI adalah </p>
                    <h3>VISI</h3>
                    <p>VISI dari HIMA TI adalah</p>
                    <h3>MISI</h3>
                    <p>MISI dari HIMA TI adalah</p>
                    <h3>Struktur Organisasi</h3>
                    <div className='row justify-content-center'>
                     <div className='col-3'>
                        <CardStruktur image ={kahim} jabatan="Sekertaris Umum" nama="Ardhita Nur Zahrany"/>
                      </div>
                      <div className='col-3'>
                        <CardStruktur image ={kahim}  jabatan="Ketua Himpunan" nama="Bimo Prasetyo Wibowo"/>
                      </div>
                      <div className='col-3'>
                        <CardStruktur image ={kahim}  jabatan="Wakil Ketua Himpunan" nama="Ahmad Firdaus Zakaria"/>
                      </div>
                      <div className='col-3'>
                        <CardStruktur image ={kahim} jabatan="Bendahara Umum" nama="Salsa Dwi Agistina"/>
                      </div>
                    </div>
                  
                </div>
            </div>
        </div>
    )
}

export default MainContent