# Study App

Ứng dụng web học tập với các chức năng:
- Tìm kiếm, lọc, xem chi tiết khóa học/tài liệu
- Thêm vào giỏ hàng, mục yêu thích
- Gợi ý sản phẩm phù hợp (AI Suggestion)
- Chatbot hỗ trợ
- Responsive, giao diện hiện đại

## 🚀 Chức năng nổi bật

- **Tìm kiếm & Lọc:**  
  Tìm kiếm theo tên, mô tả, từ khóa, lọc theo giá và loại sản phẩm.

- **Giỏ hàng & Yêu thích:**  
  Thêm/xóa sản phẩm vào giỏ hàng hoặc danh sách yêu thích.

- **Gợi ý sản phẩm phù hợp (AI):**  
  Nút "Gợi ý sản phẩm phù hợp" sẽ đề xuất các sản phẩm dựa trên hành vi người dùng (đã thích, đã xem).

- **Chatbot:**  
  Hỗ trợ trả lời nhanh về sản phẩm.

- **Responsive:**  
  Giao diện đẹp trên cả desktop và mobile.

## 🛠️ Cài đặt & chạy dự án

```bash
git clone <repo-url>
cd Study-app
npm install
npm start
```

Truy cập [http://localhost:3000](http://localhost:3000)

## 📝 Cấu trúc thư mục

```
src/
  components/
    Header/
    HeroSection/
    SearchFilterSection/
    ProductTabs/
    ProductGrid/
    ProductDetailModal/
    CartSection/
    FavoritesSection/
    Chatbot/
    Toast/
  styles/
    global.css
  App.js
```

## 💡 Gợi ý sản phẩm AI hoạt động như thế nào?

- Khi bấm nút "Gợi ý sản phẩm phù hợp", hệ thống sẽ:
  - Nếu bạn đã thích sản phẩm nào, sẽ gợi ý các sản phẩm cùng danh mục nhưng bạn chưa thích.
  - Nếu chưa thích gì, sẽ gợi ý ngẫu nhiên 3 sản phẩm đầu tiên.

## 📦 Công nghệ sử dụng

- ReactJS
- CSS3 (custom, không dùng framework UI)
- (Có thể mở rộng: API, Firebase, ...)

## 📸 Demo

![Demo giao diện]([Demo](https://study-app-livid-ten.vercel.app/))

---

**Tác giả:**  
Nguyen Thi Ly
