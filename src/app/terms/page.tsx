import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft, FileText, AlertCircle, CheckCircle, Scale } from 'lucide-react'

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <img src="/logo.png" alt="CV BUMI MARS" className="h-10 w-10" />
              <span className="font-bold text-xl text-blue-900">CV BUMI MARS</span>
            </div>
            
            <Link href="/">
              <Button variant="outline" className="flex items-center space-x-2">
                <ArrowLeft className="h-4 w-4" />
                <span>Kembali ke Beranda</span>
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Syarat & Ketentuan</h1>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-4">
            Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="space-y-8">
          {/* Introduction */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-blue-900">
                <FileText className="h-5 w-5" />
                <span>Pendahuluan</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Selamat datang di website CV BUMI MARS. Syarat & Ketentuan ini mengatur penggunaan 
                website dan layanan yang kami sediakan. Dengan mengakses atau menggunakan website kami, 
                Anda setuju untuk terikat oleh Syarat & Ketentuan ini.
              </p>
              <p>
                Jika Anda tidak setuju dengan bagian mana pun dari Syarat & Ketentuan ini, 
                Anda tidak boleh menggunakan website atau layanan kami.
              </p>
            </CardContent>
          </Card>

          {/* Definitions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-blue-900">Definisi</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium">"Perusahaan"</h4>
                  <p className="text-sm">Merujuk pada CV BUMI MARS, perusahaan konstruksi jaringan irigasi dan drainase.</p>
                </div>
                
                <div>
                  <h4 className="font-medium">"Website"</h4>
                  <p className="text-sm">Merujuk pada website resmi CV BUMI MARS dan semua konten, fitur, dan fungsionalitasnya.</p>
                </div>
                
                <div>
                  <h4 className="font-medium">"Pengguna"</h4>
                  <p className="text-sm">Merujuk pada individu atau entitas yang mengakses atau menggunakan website kami.</p>
                </div>
                
                <div>
                  <h4 className="font-medium">"Layanan"</h4>
                  <p className="text-sm">Merujuk pada layanan konstruksi jaringan irigasi dan drainase yang kami sediakan.</p>
                </div>
                
                <div>
                  <h4 className="font-medium">"Konten"</h4>
                  <p className="text-sm">Merujuk pada semua informasi, teks, gambar, video, dan materi lainnya di website.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Website Usage */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-blue-900">
                <CheckCircle className="h-5 w-5" />
                <span>Penggunaan Website</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <h3 className="font-semibold text-lg">Kewajiban Pengguna:</h3>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium">1. Informasi Akurat</h4>
                  <p className="text-sm">Anda setuju untuk memberikan informasi yang akurat, lengkap, dan terkini saat menggunakan layanan kami.</p>
                </div>
                
                <div>
                  <h4 className="font-medium">2. Penggunaan yang Sah</h4>
                  <p className="text-sm">Anda setuju untuk tidak menggunakan website untuk tujuan ilegal atau tidak sah.</p>
                </div>
                
                <div>
                  <h4 className="font-medium">3. Tidak Melanggar Hak</h4>
                  <p className="text-sm">Anda setuju untuk tidak melanggar hak kekayaan intelektual atau hak lainnya.</p>
                </div>
                
                <div>
                  <h4 className="font-medium">4. Tidak Mengganggu</h4>
                  <p className="text-sm">Anda setuju untuk tidak mengganggu operasi website atau mencoba merusak sistem.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card>
            <CardHeader>
              <CardTitle className="text-blue-900">Hak Kekayaan Intelektual</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Semua konten, merek dagang, logo, dan hak kekayaan intelektual lainnya di website ini 
                adalah milik CV BUMI MARS atau pihak ketiga yang berwenang. Anda tidak diperbolehkan:
              </p>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium">1. Menyalin Konten</h4>
                  <p className="text-sm">Menyalin, mendistribusikan, atau mereproduksi konten tanpa izin tertulis.</p>
                </div>
                
                <div>
                  <h4 className="font-medium">2. Menggunakan Merek</h4>
                  <p className="text-sm">Menggunakan merek dagang atau logo kami tanpa izin.</p>
                </div>
                
                <div>
                  <h4 className="font-medium">3. Modifikasi</h4>
                  <p className="text-sm">Memodifikasi atau membuat karya turunan dari konten kami.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Services */}
          <Card>
            <CardHeader>
              <CardTitle className="text-blue-900">Layanan Konstruksi</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <h3 className="font-semibold text-lg">Syarat Layanan:</h3>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium">1. Konsultasi Awal</h4>
                  <p className="text-sm">Kami menyediakan konsultasi awal gratis untuk mengevaluasi kebutuhan proyek Anda.</p>
                </div>
                
                <div>
                  <h4 className="font-medium">2. Penawaran Harga</h4>
                  <p className="text-sm">Penawaran harga yang kami berikan berlaku selama 30 hari kecuali disepakati lain.</p>
                </div>
                
                <div>
                  <h4 className="font-medium">3. Perjanjian Kontrak</h4>
                  <p className="text-sm">Setiap proyek harus diikat dengan perjanjian kontrak yang ditandatangani kedua belah pihak.</p>
                </div>
                
                <div>
                  <h4 className="font-medium">4. Pembayaran</h4>
                  <p className="text-sm">Syarat pembayaran mengikuti ketentuan yang tertulis dalam kontrak proyek.</p>
                </div>
                
                <div>
                  <h4 className="font-medium">5. Garansi</h4>
                  <p className="text-sm">Kami memberikan garansi untuk setiap pekerjaan sesuai dengan standar industri dan kesepakatan kontrak.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Limitations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-blue-900">
                <AlertCircle className="h-5 w-5" />
                <span>Pembatasan Tanggung Jawab</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                CV BUMI MARS tidak bertanggung jawab atas:
              </p>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium">1. Kerugian Tidak Langsung</h4>
                  <p className="text-sm">Kerugian tidak langsung, insidental, atau konsekuensial yang timbul dari penggunaan website.</p>
                </div>
                
                <div>
                  <h4 className="font-medium">2. Ketersediaan Website</h4>
                  <p className="text-sm">Gangguan sementara atau ketidaktersediaan website karena pemeliharaan atau force majeure.</p>
                </div>
                
                <div>
                  <h4 className="font-medium">3. Link Pihak Ketiga</h4>
                  <p className="text-sm">Konten atau kebijakan privasi dari website pihak ketiga yang terhubung dengan website kami.</p>
                </div>
                
                <div>
                  <h4 className="font-medium">4. Akurasi Informasi</h4>
                  <p className="text-sm">Meskipun kami berusaha menyajikan informasi akurat, kami tidak menjamin kelengkapan atau keakuratan semua konten.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dispute Resolution */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-blue-900">
                <Scale className="h-5 w-5" />
                <span>Penyelesaian Sengketa</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <h3 className="font-semibold text-lg">Prosedur Penyelesaian:</h3>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium">1. Negosiasi Awal</h4>
                  <p className="text-sm">Sengketa akan diselesaikan terlebih dahulu melalui negosiasi baik antara kedua belah pihak.</p>
                </div>
                
                <div>
                  <h4 className="font-medium">2. Mediasi</h4>
                  <p className="text-sm">Jika negosiasi gagal, sengketa dapat diselesaikan melalui mediasi dengan mediator netral.</p>
                </div>
                
                <div>
                  <h4 className="font-medium">3. Yurisdiksi Hukum</h4>
                  <p className="text-sm">Syarat & Ketentuan ini diatur oleh hukum Republik Indonesia. Sengketa diselesaikan di pengadilan negeri setempat.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Termination */}
          <Card>
            <CardHeader>
              <CardTitle className="text-blue-900">Pengakhiran Penggunaan</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                CV BUMI MARS berhak menghentikan atau menangguhkan akses Anda ke website jika:
              </p>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium">1. Pelanggaran Syarat</h4>
                  <p className="text-sm">Anda melanggar Syarat & Ketentuan yang berlaku.</p>
                </div>
                
                <div>
                  <h4 className="font-medium">2. Penggunaan Ilegal</h4>
                  <p className="text-sm">Anda menggunakan website untuk aktivitas ilegal atau tidak sah.</p>
                </div>
                
                <div>
                  <h4 className="font-medium">3. Keamanan</h4>
                  <p className="text-sm">Aktivitas Anda membahayakan keamanan website atau pengguna lain.</p>
                </div>
              </div>
              
              <p className="text-sm">
                Penghentian akses dapat dilakukan secara sementara atau permanen tanpa pemberitahuan sebelumnya.
              </p>
            </CardContent>
          </Card>

          {/* General Provisions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-blue-900">Ketentuan Umum</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium">1. Perubahan Syarat</h4>
                  <p className="text-sm">Kami berhak mengubah Syarat & Ketentuan ini sewaktu-waktu dengan memberitahukan melalui website.</p>
                </div>
                
                <div>
                  <h4 className="font-medium">2. Pemisahan Klausul</h4>
                  <p className="text-sm">Jika bagian dari Syarat & Ketentuan ini tidak sah, bagian lainnya tetap berlaku.</p>
                </div>
                
                <div>
                  <h4 className="font-medium">3. Pengabaian Hak</h4>
                  <p className="text-sm">Kegagalan kami menegakkan hak tidak berarti kami mengabaikan hak tersebut.</p>
                </div>
                
                <div>
                  <h4 className="font-medium">4. Keseluruhan Perjanjian</h4>
                  <p className="text-sm">Syarat & Ketentuan ini merupakan keseluruhan perjanjian antara Anda dan CV BUMI MARS.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card>
            <CardHeader>
              <CardTitle className="text-blue-900">Hubungi Kami</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Jika Anda memiliki pertanyaan tentang Syarat & Ketentuan ini, silakan hubungi kami:
              </p>
              
              <div className="bg-blue-50 p-4 rounded-lg space-y-2">
                <p><strong>Email:</strong> legal@cvbumimars.co.id</p>
                <p><strong>Telepon:</strong> 082382466172</p>
                <p><strong>Alamat:</strong> Marsaoleh, Desa/Kelurahan Bahomoleo, Kec. Bungku Tengah, Kab. Morowali, Provinsi Sulawesi Tengah</p>
              </div>
              
              <p className="text-sm">
                Kami akan merespons pertanyaan Anda dalam waktu 7 hari kerja.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <img src="/logo.png" alt="CV BUMI MARS" className="h-8 w-8" />
            <span className="font-bold">CV BUMI MARS</span>
          </div>
          <p className="text-blue-200 text-sm mb-4">
            Profesional dalam konstruksi jaringan irigasi dan drainase
          </p>
          <div className="flex justify-center space-x-6 text-sm">
            <Link href="/" className="text-blue-200 hover:text-white">Beranda</Link>
            <Link href="/privacy" className="text-blue-200 hover:text-white">Kebijakan Privasi</Link>
            <Link href="/terms" className="text-blue-200 hover:text-white">Syarat & Ketentuan</Link>
          </div>
          <p className="text-blue-200 text-xs mt-4">
            &copy; 2024 CV BUMI MARS. Hak Cipta Dilindungi.
          </p>
        </div>
      </footer>
    </div>
  )
}