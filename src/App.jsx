import React from 'react';
import {
  HiOutlineLightningBolt,
  HiOutlineCheckCircle,
  HiOutlineDownload,
  HiOutlineDocumentText,
  HiOutlineCube,
  HiOutlineArrowRight,
  HiOutlineSparkles
} from "react-icons/hi";
import { SiFacebook, SiInstagram, SiZalo } from "react-icons/si";

const Nav = () => (
  <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 py-4 flex justify-between items-center">
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center text-white">
        <HiOutlineCube size={20} />
      </div>
      <span className="font-black text-xl tracking-tight uppercase italic text-brand-primary">Japanse Vocab Pro</span>
    </div>
    <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-500">
      <a href="#features" className="hover:text-brand-primary transition-colors">Tính năng</a>
      <a href="#pricing" className="hover:text-brand-primary transition-colors">Gói tài liệu</a>
      <a href="https://www.facebook.com/leo.tulo.6" target="_blank" rel="noopener noreferrer">
        <button className="text-brand-primary font-bold">Facebook tư vấn</button>
      </a>
    </div>
  </nav>
);

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <div className="pro-card group">
    <div className="w-12 h-12 bg-indigo-50 text-brand-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-white transition-all">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
  </div>
);

export default function App() {
  return (
    <div className="pt-20">
      <Nav />

      {/* --- HERO --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-indigo-50 text-brand-primary px-4 py-2 rounded-full text-xs font-bold mb-8">
          <HiOutlineSparkles /> Phiên bản 2026 đã sẵn sàng
        </div>
        <h1 className="text-5xl md:text-7xl font-[900] tracking-tight text-slate-900 mb-8 leading-[1.1]">
          Làm chủ tiếng Nhật <br />
          <span className="text-brand-primary">Bằng dữ liệu thực tế.</span>
        </h1>
        <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
          Đóng gói trọn bộ các giáo trình tiếng Nhật thành hệ thống 6 file thông minh. Dành riêng cho những người học tiếng Nhật bằng tư duy logic.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#pricing" className="btn-pro-primary flex items-center justify-center gap-2">
            Xem các gói học liệu <HiOutlineArrowRight />
          </a>
          <a href="https://drive.google.com/drive/folders/1RnjQgTrYSuXNmPUgBCjP9bQLSqAeNHoR?usp=sharing" target="_blank" rel="noopener noreferrer">
            <button className="btn-pro-outline">Dùng thử bản mẫu</button>
          </a>
        </div>
      </section>

      {/* --- SYSTEM SHOWCASE --- */}
      <section id="features" className="py-24 bg-white border-y border-slate-100 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 italic">Cấu trúc "6-File" độc quyền</h2>
            <p className="text-slate-400 font-medium">Khoa học - Ngẫu nhiên - Hiệu quả</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={HiOutlineDownload}
              title="Excel & PDF Hybrid"
              desc="Vừa có PDF để in ấn học tay, vừa có Excel để nạp thẳng vào bộ nhớ của Quizlet hoặc Anki cá nhân của bạn."
            />
            <FeatureCard
              icon={HiOutlineLightningBolt}
              title="Algorithm Shuffle"
              desc="File xáo trộn ngẫu nhiên giúp bạn thoát khỏi thói quen học vẹt. Nhìn chữ biết nghĩa, không phải nhớ vị trí."
            />
            <FeatureCard
              icon={HiOutlineDocumentText}
              title="Test & Key System"
              desc="Quy trình luyện tập khép kín với file Bài tập và Đáp án tách biệt, giúp tối ưu hóa kết quả thi JLPT."
            />
          </div>
        </div>
      </section>

      {/* --- PRICING --- */}
      <section id="pricing" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-4 gap-6">
          {[
            { name: "Minna no Nihongo", price: "79", level: "Sơ cấp" },
            { name: "Mimikara Oboeru Goi N3", price: "49", level: "Trung cấp" },
            { name: "Mimikara Oboeru Goi N2", price: "49", level: "Thượng cấp" },
            { name: "Mimikara Oboeru Goi N1", price: "49", level: "Đỉnh cao" }
          ].map((item, i) => (
            <div key={i} className="pro-card flex flex-col justify-between hover:border-brand-primary transition-colors">
              <div>
                <span className="text-[10px] font-black uppercase text-brand-primary tracking-widest">{item.level}</span>
                <h3 className="text-2xl font-bold mt-2 mb-8">{item.name}</h3>
                <div className="text-4xl font-black mb-8 italic">{item.price}K</div>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-2 text-sm text-slate-500 italic"><HiOutlineCheckCircle className="text-brand-success" /> Trọn bộ 6 định dạng file</li>
                  <li className="flex items-center gap-2 text-sm text-slate-500 italic"><HiOutlineCheckCircle className="text-brand-success" /> File Shuffle chống vẹt</li>
                  <li className="flex items-center gap-2 text-sm text-slate-500 italic"><HiOutlineCheckCircle className="text-brand-success" /> Tài liệu vĩnh viễn</li>
                </ul>
              </div>
              <a href="https://www.facebook.com/leo.tulo.6" target="_blank" rel="noopener noreferrer">
                <button className="w-full py-3 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-brand-primary transition-colors">Đăng ký mua</button>
              </a>
            </div>
          ))}
        </div>

        {/* COMBO MASTER - SaaS Style */}
        <div className="mt-12 bg-indigo-600 rounded-[32px] p-12 text-white relative overflow-hidden flex flex-col lg:flex-row items-center justify-between shadow-2xl shadow-indigo-200">
          <div className="relative z-10">
            <div className="bg-white/20 inline-block px-3 py-1 rounded-lg text-[10px] font-bold uppercase mb-6 tracking-widest">Tiết kiệm 25%</div>
            <h3 className="text-5xl font-black mb-4">The Master Combo</h3>
            <p className="text-indigo-100 max-w-md font-medium leading-relaxed">Sở hữu toàn bộ hệ sinh thái Japanese Vocab Pro từ N5 đến N1. Giải pháp tối ưu nhất cho sự nghiệp tiếng Nhật của bạn.</p>
          </div>
          <div className="relative z-10 flex flex-col items-center lg:items-end mt-12 lg:mt-0">
            <div className="text-xl line-through opacity-50 mb-2 font-bold italic">226.000đ</div>
            <div className="text-8xl font-black mb-8 italic">169K</div>
            <a href="https://www.facebook.com/leo.tulo.6" target="_blank" rel="noopener noreferrer">
              <button className="bg-white text-indigo-600 px-12 py-5 rounded-2xl font-black text-lg hover:bg-indigo-50 transition-colors shadow-lg shadow-indigo-900/20">
                MUA TRỌN BỘ NGAY
              </button>
            </a>
          </div>
          {/* Background Gradient Effect */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-900 text-white py-24 px-6 text-center">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="font-black text-3xl tracking-tighter uppercase mb-8 italic">Japanese Vocab Pro</div>
          <p className="text-slate-400 mb-12 max-w-sm font-medium italic">Tài liệu chuẩn - Phương pháp chuẩn. <br /> Chốt đơn trực tiếp qua các kênh bên dưới.</p>

          <div className="flex gap-6 mb-20">
            <a href="https://www.instagram.com/leo_tulo_6/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-brand-primary transition-colors"><SiInstagram size={20} /></a>
            <a href="https://www.facebook.com/leo.tulo.6" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-brand-primary transition-colors"><SiFacebook size={20} /></a>
            <a href="https://zalo.me/0772910452" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-brand-primary transition-colors"><SiZalo size={24} /></a>
          </div>

          <div className="border-t border-white/5 pt-8 w-full flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-widest text-slate-500 gap-4">
            <span>© 2026 Japanese Vocab Pro - Tuan Loc</span>
            <span>Build with Japanese Vocab Pro</span>
          </div>
        </div>
      </footer>
    </div>
  );
}