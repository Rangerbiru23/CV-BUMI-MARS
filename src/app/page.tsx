'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Phone, Mail, MapPin, Shield, CheckCircle, Wrench, Droplets } from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
            
            <div className="hidden md:flex space-x-8">
              <a href="#beranda" className="text-gray-700 hover:text-blue-600 transition-colors">Beranda</a>
              <a href="#tentang" className="text-gray-700 hover:text-blue-600 transition-colors">Tentang</a>
              <a href="#layanan" className="text-gray-700 hover:text-blue-600 transition-colors">Layanan</a>
              <a href="#kontak" className="text-gray-700 hover:text-blue-600 transition-colors">Kontak</a>
            </div>

            <Button
              variant="outline"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              Menu
            </Button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              <a href="#beranda" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Beranda</a>
              <a href="#tentang" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Tentang</a>
              <a href="#layanan" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Layanan</a>
              <a href="#kontak" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Kontak</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="beranda" className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <img src="/logo.png" alt="CV BUMI MARS" className="h-24 w-24" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
            CV BUMI MARS
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 mb-4">
            Konstruksi Jaringan Irigasi dan Drainase
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Perusahaan konstruksi profesional yang berfokus pada pembangunan jaringan irigasi dan drainase 
            yang berkualitas, berkelanjutan, dan mendukung ketahanan pangan nasional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <a href="#layanan">Lihat Layanan Kami</a>
            </Button>
            <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
              <a href="#kontak">Hubungi Kami</a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Tentang Kami</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-blue-800 mb-4">
                Profesional dalam Konstruksi Irigasi dan Drainase
              </h3>
              <p className="text-gray-600 mb-4">
                CV BUMI MARS adalah perusahaan konstruksi yang berpengalaman dalam pembangunan 
                jaringan irigasi dan drainase. Dengan tim ahli dan dedikasi tinggi, kami berkomitmen 
                untuk memberikan solusi infrastruktur terbaik yang mendukung pertanian dan pengelolaan sumber daya air.
              </p>
              <p className="text-gray-600 mb-6">
                Kami memahami pentingnya sistem irigasi dan drainase yang baik untuk kesuksesan 
                pertanian dan kesejahteraan masyarakat. Setiap proyek kami kerjakan dengan standar 
                kualitas tertinggi dan kepedulian terhadap lingkungan.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600 h-5 w-5" />
                  <span className="text-gray-700">Berpengalaman</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600 h-5 w-5" />
                  <span className="text-gray-700">Profesional</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600 h-5 w-5" />
                  <span className="text-gray-700">Berkualitas</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600 h-5 w-5" />
                  <span className="text-gray-700">Tepat Waktu</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-100 to-green-100 p-8 rounded-lg">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-900">100%</div>
                  <div className="text-gray-600">Komitmen Kualitas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-700">Tepat</div>
                  <div className="text-gray-600">Waktu Pengerjaan</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-900">24/7</div>
                  <div className="text-gray-600">Dukungan Teknis</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-700">Aman</div>
                  <div className="text-gray-600">Standar Keselamatan</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="layanan" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Layanan Kami</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Droplets className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-blue-900">Konstruksi Irigasi</CardTitle>
                <CardDescription>
                  Pembangunan jaringan irigasi teknis dan semi teknis untuk mendukung produktivitas pertanian.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Saluran primer dan sekunder</li>
                  <li>• Bangunan bagi dan sadap</li>
                  <li>• Jaringan irigasi tersier</li>
                  <li>• Rehabilitasi irigasi</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-blue-900">Konstruksi Drainase</CardTitle>
                <CardDescription>
                  Sistem drainase kota dan pertanian untuk mencegah banjir dan mengelola air permukaan.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Drainase perkotaan</li>
                  <li>• Sistem pengendali banjir</li>
                  <li>• Drainase pertanian</li>
                  <li>• Konstruksi gorong-gorong</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-blue-900">Konsultasi Teknis</CardTitle>
                <CardDescription>
                  Layanan konsultasi dan perencanaan infrastruktur air yang komprehensif.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Survei dan investigasi</li>
                  <li>• Desain teknis</li>
                  <li>• Perencanaan proyek</li>
                  <li>• Supervisi konstruksi</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Hubungi Kami</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-blue-800 mb-6">Informasi Kontak</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Alamat</h4>
                    <p className="text-gray-600">
                      Marsaoleh, Desa/Kelurahan Bahomoleo, Kec. Bungku Tengah, 
                      Kab. Morowali, Provinsi Sulawesi Tengah
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Telepon</h4>
                    <p className="text-gray-600">082382466172</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-600">info@cvbumimars.co.id</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Jam Operasional</h4>
                <p className="text-gray-700">Senin - Jumat: 08:00 - 17:00 WITA</p>
                <p className="text-gray-700">Sabtu: 08:00 - 12:00 WITA</p>
                <p className="text-gray-700">Minggu: Tutup</p>
              </div>
            </div>
            
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-900">Kirim Pesan</CardTitle>
                  <CardDescription>
                    Silakan kirim pesan kepada kami untuk informasi lebih lanjut tentang layanan kami.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Masukkan nama Anda"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="email@example.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Subjek
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Subjek pesan"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Pesan
                      </label>
                      <textarea
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Tulis pesan Anda di sini..."
                      ></textarea>
                    </div>
                    
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                      Kirim Pesan
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="/logo.png" alt="CV BUMI MARS" className="h-8 w-8" />
                <span className="font-bold text-lg">CV BUMI MARS</span>
              </div>
              <p className="text-blue-200 text-sm">
                Profesional dalam konstruksi jaringan irigasi dan drainase yang mendukung ketahanan pangan nasional.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-blue-200 text-sm">
                <li>Konstruksi Irigasi</li>
                <li>Konstruksi Drainase</li>
                <li>Konsultasi Teknis</li>
                <li>Rehabilitasi Jaringan</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-blue-200 text-sm">
                <li><a href="#tentang">Tentang Kami</a></li>
                <li><a href="#layanan">Layanan</a></li>
                <li><a href="#kontak">Kontak</a></li>
                <li><a href="/privacy">Kebijakan Privasi</a></li>
                <li><a href="/terms">Syarat & Ketentuan</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-blue-200 text-sm">
                <li>082382466172</li>
                <li>info@cvbumimars.co.id</li>
                <li>Bahomoleo, Bungku Tengah</li>
                <li>Morowali, Sulawesi Tengah</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200 text-sm">
            <p>&copy; 2024 CV BUMI MARS. Hak Cipta Dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}