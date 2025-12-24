import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft, Shield, Eye, Lock, Database } from 'lucide-react'

export default function PrivacyPolicy() {
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
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Kebijakan Privasi</h1>
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
                <Shield className="h-5 w-5" />
                <span>Pendahuluan</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Selamat datang di CV BUMI MARS. Kami sangat memahami pentingnya privasi dan keamanan data 
                pribadi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, 
                melindungi, dan membagikan informasi yang Anda berikan kepada kami melalui website 
                dan layanan kami.
              </p>
              <p>
                Dengan menggunakan website kami, Anda menyetujui praktik-praktik yang dijelaskan dalam 
                Kebijakan Privasi ini. Kami berkomitmen untuk melindungi privasi Anda dan memastikan 
                bahwa data pribadi Anda ditangani dengan aman dan bertanggung jawab.
              </p>
            </CardContent>
          </Card>

          {/* Data Collection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-blue-900">
                <Database className="h-5 w-5" />
                <span>Pengumpulan Data</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <h3 className="font-semibold text-lg">Informasi yang Kami Kumpulkan:</h3>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium">1. Data Pribadi</h4>
                  <p className="text-sm">Nama, alamat email, nomor telepon, dan informasi kontak lainnya yang Anda berikan secara sukarela.</p>
                </div>
                
                <div>
                  <h4 className="font-medium">2. Data Penggunaan Website</h4>
                  <p className="text-sm">Alamat IP, jenis browser, waktu akses, halaman yang dikunjungi, dan data analitik website lainnya.</p>
                </div>
                
                <div>
                  <h4 className="font-medium">3. Data Komunikasi</h4>
                  <p className="text-sm">Konten komunikasi Anda dengan kami melalui email, formulir kontak, atau media komunikasi lainnya.</p>
                </div>
                
                <div>
                  <h4 className="font-medium">4. Data Teknis</h4>
                  <p className="text-sm">Informasi teknis tentang perangkat dan koneksi internet yang Anda gunakan untuk mengakses website kami.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Usage */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-blue-900">
                <Eye className="h-5 w-5" />
                <span>Penggunaan Data</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <h3 className="font-semibold text-lg">Kami Menggunakan Data Anda Untuk:</h3>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium">1. Layanan Pelanggan</h4>
                  <p className="text-sm">Menanggapi pertanyaan, permintaan, dan keluhan Anda dengan cepat dan efektif.</p>
                </div>
                
                <div>
                  <h4 className="font-medium">2. Penyediaan Layanan</h4>
                  <p className="text-sm">Menyediakan informasi tentang layanan konstruksi irigasi dan drainase yang kami tawarkan.</p>
                </div>
                
                <div>
                  <h4 className="font-medium">3. Peningkatan Layanan</h4>
                  <p className="text-sm">Menganalisis data untuk meningkatkan kualitas website dan layanan kami.</p>
                </div>
                
                <div>
                  <h4 className="font-medium">4. Komunikasi</h4>
                  <p className="text-sm">Mengirim informasi penting tentang layanan kami (dengan persetujuan Anda).</p>
                </div>
                
                <div>
                  <h4 className="font-medium">5. Kepatuhan Hukum</h4>
                  <p className="text-sm">Mematuhi kewajiban hukum dan peraturan yang berlaku.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Protection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-blue-900">
                <Lock className="h-5 w-5" />
                <span>Perlindungan Data</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <h3 className="font-semibold text-lg">Langkah-Langkah Keamanan Kami:</h3>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium">1. Enkripsi Data</h4>
                  <p className="text-sm">Data pribadi dienkripsi menggunakan teknologi enkripsi standar industri.</p>
                </div>
                
                <div>
                  <h4 className="font-medium">2. Akses Terbatas</h4>
                  <p className="text-sm">Hanya personel yang berwenang yang dapat mengakses data pribadi Anda.</p>
                </div>
                
                <div>
                  <h4 className="font-medium">3. Firewall Keamanan</h4>
                  <p className="text-sm">Sistem kami dilindungi dengan firewall dan keamanan berlapis.</p>
                </div>
                
                <div>
                  <h4 className="font-medium">4. Pembaruan Rutin</h4>
                  <p className="text-sm">Keamanan sistem kami diperbarui secara berkala untuk mencegah ancaman terbaru.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Third Party Sharing */}
          <Card>
            <CardHeader>
              <CardTitle className="text-blue-900">Pembagian Data dengan Pihak Ketiga</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Kami tidak menjual, menyewakan, atau membagikan data pribadi Anda kepada pihak ketiga 
                untuk tujuan pemasaran tanpa persetujuan Anda. Namun, kami mungkin membagikan data Anda 
                dalam keadaan berikut:
              </p>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium">1. Penyedia Layanan</h4>
                  <p className="text-sm">Penyedia layanan teknis yang membantu operasional website kami.</p>
                </div>
                
                <div>
                  <h4 className="font-medium">2. Kewajiban Hukum</h4>
                  <p className="text-sm">Jika diwajibkan oleh hukum atau perintah resmi dari pihak berwenang.</p>
                </div>
                
                <div>
                  <h4 className="font-medium">3. Keamanan</h4>
                  <p className="text-sm">Untuk melindungi hak, properti, atau keselamatan kami atau pihak lain.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* User Rights */}
          <Card>
            <CardHeader>
              <CardTitle className="text-blue-900">Hak Anda sebagai Pengguna</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <h3 className="font-semibold text-lg">Hak-Hak Anda:</h3>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium">1. Hak Akses</h4>
                  <p className="text-sm">Anda berhak mengetahui data pribadi yang kami simpan tentang Anda.</p>
                </div>
                
                <div>
                  <h4 className="font-medium">2. Hak Koreksi</h4>
                  <p className="text-sm">Anda berhak memperbaiki data pribadi yang tidak akurat.</p>
                </div>
                
                <div>
                  <h4 className="font-medium">3. Hak Penghapusan</h4>
                  <p className="text-sm">Anda berhak meminta penghapusan data pribadi Anda dalam kondisi tertentu.</p>
                </div>
                
                <div>
                  <h4 className="font-medium">4. Hak Pembatasan</h4>
                  <p className="text-sm">Anda berhak membatasi pemrosesan data pribadi Anda.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cookies */}
          <Card>
            <CardHeader>
              <CardTitle className="text-blue-900">Kebijakan Cookie</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Website kami menggunakan cookie untuk meningkatkan pengalaman pengguna. Cookie adalah 
                file teks kecil yang disimpan di browser Anda. Kami menggunakan:
              </p>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium">1. Cookie Esensial</h4>
                  <p className="text-sm">Diperlukan agar website dapat berfungsi dengan baik.</p>
                </div>
                
                <div>
                  <h4 className="font-medium">2. Cookie Analitik</h4>
                  <p className="text-sm">Membantu kami memahami bagaimana pengguna berinteraksi dengan website.</p>
                </div>
                
                <div>
                  <h4 className="font-medium">3. Cookie Performa</h4>
                  <p className="text-sm">Mengumpulkan informasi tentang performa website.</p>
                </div>
              </div>
              
              <p className="text-sm">
                Anda dapat mengatur preferensi cookie melalui pengaturan browser Anda.
              </p>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card>
            <CardHeader>
              <CardTitle className="text-blue-900">Hubungi Kami</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Jika Anda memiliki pertanyaan, keluhan, atau permintaan terkait Kebijakan Privasi ini, 
                silakan hubungi kami melalui:
              </p>
              
              <div className="bg-blue-50 p-4 rounded-lg space-y-2">
                <p><strong>Email:</strong> privacy@cvbumimars.co.id</p>
                <p><strong>Telepon:</strong> 082382466172</p>
                <p><strong>Alamat:</strong> Marsaoleh, Desa/Kelurahan Bahomoleo, Kec. Bungku Tengah, Kab. Morowali, Provinsi Sulawesi Tengah</p>
              </div>
              
              <p className="text-sm">
                Kami akan merespons pertanyaan Anda dalam waktu 7 hari kerja.
              </p>
            </CardContent>
          </Card>

          {/* Changes to Policy */}
          <Card>
            <CardHeader>
              <CardTitle className="text-blue-900">Perubahan Kebijakan</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                CV BUMI MARS berhak mengubah Kebijakan Privasi ini sewaktu-waktu. Perubahan akan 
                diberlakukan segera setelah dipublikasikan di website ini. Kami menyarankan Anda 
                untuk secara berkala meninjau Kebijakan Privasi ini untuk tetap mendapatkan informasi 
                terbaru tentang praktik privasi kami.
              </p>
              
              <p className="text-sm">
                Perubahan material akan diberitahukan kepada pengguna melalui website atau email.
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