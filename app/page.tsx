

export default function App() {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-xl">
      <div className="flex items-center justify-center space-x-4">
        <img
          
          src="/images/image.jpg" 
          alt="Profile"
          className="w-32 h-32 object-cover rounded-full border-4 border-gray-300"
        />
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">Thường Nguyễn</h1>
          <h2 className="text-lg text-gray-600">Intern Web Developer</h2>
        </div>
      </div>

      {/* About Section */}
      <section className="mt-8">
        <h3 className="text-2xl font-semibold text-gray-800 border-b-2 pb-1 border-gray-300">Giới thiệu</h3>
        <p className="text-gray-700 mt-4 leading-relaxed">
          Tôi mong muốn ứng dụng kiến thức chuyên môn về các công nghệ web hiện đại như HTML, CSS, JavaScript, ReactJS, và Node.js để phát triển các ứng dụng web hiệu quả, thân thiện với người dùng và có tính bảo mật cao.
        </p>
      </section>

      {/* Contact Info */}
      <section className="mt-8">
        <h3 className="text-2xl font-semibold text-gray-800 border-b-2 pb-1 border-gray-300">Thông tin cá nhân</h3>
        <ul className="text-gray-700 mt-4 space-y-2">
          <li><strong>Email:</strong> axample@gmail.com</li>
          <li><strong>Phone:</strong> 023456789</li>
          <li><strong>Location:</strong> Hồ Chí Minh</li>
          <li><strong>Website:</strong> <a href="https://facebook.com" className="text-blue-500 hover:underline">facebook</a></li>
        </ul>
      </section>

      {/* Education */}
      <section className="mt-8">
        <h3 className="text-2xl font-semibold text-gray-800 border-b-2 pb-1 border-gray-300">Học vấn</h3>
        <div className="mt-4">
          <h4 className="text-xl font-medium">Đại học Sài Gòn</h4>
          <p className="text-gray-700">Công nghệ thông tin (9/2022 - Hiện nay)</p>
        </div>
      </section>

      {/* Skills */}
      <section className="mt-8">
        <h3 className="text-2xl font-semibold text-gray-800 border-b-2 pb-1 border-gray-300">Kỹ năng</h3>
        <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
          <li><strong>Frontend:</strong> HTML, CSS, JavaScript, Bootstrap 5, TailwindCSS, ReactJS, NextJS</li>
          <li><strong>Backend:</strong> JavaScript, PHP, NodeJS (Express), NextJS</li>
          <li><strong>Database:</strong> MongoDB, MySQL, Prisma, SQLi</li>
        </ul>
      </section>

      {/* Work Experience */}
      <section className="mt-8">
        <h3 className="text-2xl font-semibold text-gray-800 border-b-2 pb-1 border-gray-300">Kinh nghiệm làm việc</h3>
        <p className="text-gray-700 mt-4">
          Trong suốt quá trình học tập và thực hiện luyện tập và trau dồi kiến thức qua các dự án tôi đã làm tôi đã tích lũy được nhiều kinh nghiệm thực tế trong việc phát triển và vận hành các ứng dụng web, bao gồm:
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
          <li>Phân tích và tư vấn các nhu cầu của khách hàng cũng như ứng dụng của doanh nghiệp trong các dự án.</li>
          <li>Tham gia vào thiết kế trải nghiệm người dùng (UX) và giao diện người dùng (UI) cho các đồ án học tập.</li>
          <li>Tìm kiếm và sửa lỗi (debugging) phần mềm, đảm bảo sản phẩm cuối cùng không có lỗi nghiêm trọng.</li>
          <li>Thực hiện lập trình và phát triển phần mềm cho một số dự án học tập.</li>
          <li>Sửa đổi, cập nhật, cấu trúc lại và gỡ lỗi mã nguồn để đảm bảo tính ổn định và hiệu suất.</li>
          <li>Thực hiện kiểm thử (testing) phần mềm nhằm đảm bảo phần mềm chạy ổn định và không lỗi.</li>
        </ul>
      </section>


      {/* Projects */}
      <section className="mt-8">
        <h3 className="text-2xl font-semibold text-gray-800 border-b-2 pb-1 border-gray-300">Dự án</h3>
        <div className="mt-4">
          <h4 className="text-xl font-medium">Messenger (8/2024 - Hiện nay)</h4>
          <p className="text-gray-700">Vị trí: Lập trình viên / Web Developer / Full-stack Developer</p>
          <p className="text-gray-700">Công nghệ sử dụng: FrontEnd: NextJs 14, TailwindCSS | BackEnd: NextJs 14, Prisma | Database: MongoDB</p>
        </div>
        <div className="mt-6">
          <h4 className="text-xl font-medium">Discord (8/2024 - Hiện nay)</h4>
          <p className="text-gray-700">Vị trí: Lập trình viên / Web Developer / Full-stack Developer</p>
          <p className="text-gray-700">Công nghệ sử dụng: FrontEnd: NextJs 14, TailwindCSS, shadcn-ui | BackEnd: NextJs 14, Prisma | Database: MongoDB</p>
        </div>
      </section>

      {/* Interests */}
      <section className="mt-8">
        <h3 className="text-2xl font-semibold text-gray-800 border-b-2 pb-1 border-gray-300">Sở thích</h3>
        <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
          <li>Đọc sách</li>
          <li>Luyện code</li>
        </ul>
      </section>
    </div>
  );
}
