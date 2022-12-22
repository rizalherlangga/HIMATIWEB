import CardStruktur from './CardStruktur'
import kahim from './../assets/IMG_0648.JPG'
import './../style/landingPage.css'

const MainContent = ()=> {
    return (
        <div className="container">
          <div className="row">
            <div className="col-12 text-center my-5">
              <h1>SELAMAT DATANG DI WEBSITE HIMPUNAN MAHASISWA TEKNIK INFORMATIKA UHAMKA</h1>
              <h3>___________________________</h3>
            </div>
            <div className="col-12 text-center my-5">
             <h2>Apa itu HIMA TI?</h2>
             <p> HIMA TI adalah </p>
             <h2>VISI</h2>
             <p>VISI dari HIMA TI adalah</p>
             <h2>MISI</h2>
             <p>MISI dari HIMA TI adalah</p>
            </div>
            <div className="col-12 text-center my-5">
              <h2>Struktur Organisasi</h2>
              <div className='container'>
              <h5>Badan Pengawas Harian</h5>
              <div className='row justify-content-center '>
                <div className='col-3'>
                 <CardStruktur image ={kahim} jabatan="Sekertaris Umum" nama="Ardhita Nur Zahrany"/>
                </div>
                <div className='col-3'>
                 <CardStruktur image ={kahim}  jabatan="Kahim" nama="Bimo Prasetyo Wibowo"/>
                </div>
                <div className='col-3'>
                 <CardStruktur image ={kahim}  jabatan="Wakahim" nama="Ahmad Firdaus Zakaria"/>
                </div>
                <div className='col-3'>
                 <CardStruktur image ={kahim} jabatan="Bendahara Umum" nama="Salsa Dwi Agistina"/>
                </div>
              </div>
              </div>
            </div>
            <div className="col-12 text-center my-5">
              <div className='container'>
                <h5>Bidang I</h5>
                <div className='row justify-content-center '>
                <div className='col-3'>
                 <CardStruktur image ={kahim} jabatan="Ketua Bidang" nama="Buyung"/>
                </div>
                <div className='col-3'>
                 <CardStruktur image ={kahim}  jabatan="Sekertaris Bidang" nama="..."/>
                </div>
                <div className="col-12 text-center my-5">
                  <div className='container'>
                    <div className='row justify-content-center '>
                      <div className='col-3'>
                        <CardStruktur image ={kahim} jabatan="Anggota" nama="..."/>
                      </div>
                      <div className='col-3'>
                        <CardStruktur image ={kahim}  jabatan="Anggota" nama="..."/>
                      </div>
                      <div className='col-3'>
                        <CardStruktur image ={kahim}  jabatan="Anggota" nama="..."/>
                      </div>
                      <div className='col-3'>
                        <CardStruktur image ={kahim} jabatan="Anggota" nama="..."/>
                      </div>
                      <div className='col-3'>
                        <CardStruktur image ={kahim} jabatan="Anggota" nama="..."/>
                      </div>
                      <div className='col-3'>
                        <CardStruktur image ={kahim}  jabatan="Anggota" nama="..."/>
                      </div>
                      <div className='col-3'>
                        <CardStruktur image ={kahim}  jabatan="Anggota" nama="..."/>
                      </div>
                      <div className='col-3'>
                        <CardStruktur image ={kahim} jabatan="Anggota" nama="..."/>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 text-center my-5">
              <div className='container'>
                <h5>Bidang II</h5>
                <div className='row justify-content-center '>
                <div className='col-3'>
                 <CardStruktur image ={kahim} jabatan="Ketua Bidang" nama="Rizal"/>
                </div>
                <div className='col-3'>
                 <CardStruktur image ={kahim}  jabatan="Sekertaris Bidang" nama="..."/>
                </div>
                <div className="col-12 text-center my-5">
                  <div className='container'>
                    <div className='row justify-content-center '>
                      <div className='col-3'>
                        <CardStruktur image ={kahim} jabatan="Anggota" nama="..."/>
                      </div>
                      <div className='col-3'>
                        <CardStruktur image ={kahim}  jabatan="Anggota" nama="..."/>
                      </div>
                      <div className='col-3'>
                        <CardStruktur image ={kahim}  jabatan="Anggota" nama="..."/>
                      </div>
                      <div className='col-3'>
                        <CardStruktur image ={kahim} jabatan="Anggota" nama="..."/>
                      </div>
                      <div className='col-3'>
                        <CardStruktur image ={kahim} jabatan="Anggota" nama="..."/>
                      </div>
                      <div className='col-3'>
                        <CardStruktur image ={kahim}  jabatan="Anggota" nama="..."/>
                      </div>
                      <div className='col-3'>
                        <CardStruktur image ={kahim}  jabatan="Anggota" nama="..."/>
                      </div>
                      <div className='col-3'>
                        <CardStruktur image ={kahim} jabatan="Anggota" nama="..."/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 text-center my-5">
              <div className='container'>
                <h5>Bidang III</h5>
                <div className='row justify-content-center '>
                <div className='col-3'>
                 <CardStruktur image ={kahim} jabatan="Ketua Bidang" nama="Fatan"/>
                </div>
                <div className='col-3'>
                 <CardStruktur image ={kahim}  jabatan="Sekertaris Bidang" nama="..."/>
                </div>
                <div className="col-12 text-center my-5">
                  <div className='container'>
                    <div className='row justify-content-center '>
                      <div className='col-3'>
                        <CardStruktur image ={kahim} jabatan="Anggota" nama="..."/>
                      </div>
                      <div className='col-3'>
                        <CardStruktur image ={kahim}  jabatan="Anggota" nama="..."/>
                      </div>
                      <div className='col-3'>
                        <CardStruktur image ={kahim}  jabatan="Anggota" nama="..."/>
                      </div>
                      <div className='col-3'>
                        <CardStruktur image ={kahim} jabatan="Anggota" nama="..."/>
                      </div>
                      <div className='col-3'>
                        <CardStruktur image ={kahim} jabatan="Anggota" nama="..."/>
                      </div>
                      <div className='col-3'>
                        <CardStruktur image ={kahim}  jabatan="Anggota" nama="..."/>
                      </div>
                      <div className='col-3'>
                        <CardStruktur image ={kahim}  jabatan="Anggota" nama="..."/>
                      </div>
                      <div className='col-3'>
                        <CardStruktur image ={kahim} jabatan="Anggota" nama="..."/>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
           </div>
           <div className="col-12 text-center my-5">
              <div className='container'>
                <h5>Bidang IV</h5>
                <div className='row justify-content-center '>
                <div className='col-3'>
                 <CardStruktur image ={kahim} jabatan="Ketua Bidang" nama="Hafidz"/>
                </div>
                <div className='col-3'>
                 <CardStruktur image ={kahim}  jabatan="Sekertaris Bidang" nama="Haykal Sayid"/>
                </div>
                <div className="col-12 text-center my-5">
                  <div className='container'>
                    <div className='row justify-content-center '>
                      <div className='col-3'>
                        <CardStruktur image ={kahim} jabatan="Anggota" nama="Irgieawan"/>
                      </div>
                      <div className='col-3'>
                        <CardStruktur image ={kahim}  jabatan="Anggota" nama="Valentino"/>
                      </div>
                      <div className='col-3'>
                        <CardStruktur image ={kahim}  jabatan="Anggota" nama="Hilmi"/>
                      </div>
                      <div className='col-3'>
                        <CardStruktur image ={kahim} jabatan="Anggota" nama="Rizal"/>
                      </div>
                      <div className='col-3'>
                        <CardStruktur image ={kahim} jabatan="Anggota" nama="Dimas"/>
                      </div>
                      <div className='col-3'>
                        <CardStruktur image ={kahim}  jabatan="Anggota" nama="Indah Winarni"/>
                      </div>
                      <div className='col-3'>
                        <CardStruktur image ={kahim}  jabatan="Anggota" nama="Salma Nida"/>
                      </div>
                      <div className='col-3'>
                        <CardStruktur image ={kahim} jabatan="Anggota" nama="Salsa Billa Permana Putri"/>
                      </div>
                      <div className='col-3'>
                        <CardStruktur image ={kahim} jabatan="Anggota" nama="Anissa Mutia"/>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
           </div>
          </div>
        </div>
      </div>
    )
}

export default MainContent