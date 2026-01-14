# 🛒 E-Commerce Simple Shop

> Một nền tảng thương mại điện tử Full-stack, được xây dựng với kiến trúc hiện đại tách biệt giữa Client và Server.


## 📖 Giới thiệu (Overview)

Dự án này là một ứng dụng web mô phỏng quy trình bán hàng thương mại điện tử. Mục tiêu của dự án là xây dựng một hệ thống có khả năng mở rộng, tối ưu hóa SEO và quản lý xác thực người dùng chặt chẽ.

Dự án áp dụng mô hình **Headless Architecture** với Frontend (Next.js) và Backend (Fastify) giao tiếp thông qua RESTful API.

## 🛠 Công nghệ sử dụng (Tech Stack)

### Frontend (Client-side)
| Công nghệ | Mô tả |
| :--- | :--- |
| **Next.js** | Framework React cho Production (Server-side Rendering & SEO). |
| **React** | Thư viện xây dựng giao diện người dùng. |
| **TailwindCSS** | (Optional) Styling framework giúp xây dựng giao diện nhanh chóng. |
| **TypeScript** | Đảm bảo tính chặt chẽ của dữ liệu (Type Safety). |

### Backend (Server-side)
| Công nghệ | Mô tả |
| :--- | :--- |
| **Fastify** | Framework Node.js hiệu năng cao (High performance). |
| **Node.js** | Môi trường thực thi JavaScript server-side. |
| **JWT** | JSON Web Token dùng cho Authentication & Authorization. |
| **SQL/NoSQL** | *[Điền Database bạn dùng, VD: MySQL / MongoDB]* |

---

## ✨ Tính năng chính (Key Features)

### 🔐 Authentication & Authorization
- **Đăng ký (Register):** Tạo tài khoản mới với mã hóa mật khẩu an toàn.
- **Đăng nhập (Login):** Cơ chế xác thực sử dụng JWT (Access Token & Refresh Token).
- **Middleware:** Bảo vệ các Route yêu cầu quyền truy cập (Private Routes).

### 📦 Quản lý sản phẩm (Product Management)
- **Danh sách sản phẩm:** Hiển thị danh sách với phân trang (Pagination).
- **Chi tiết sản phẩm:** Xem thông tin chi tiết (Dynamic Routing).
- **CRUD:** Thêm, Sửa, Xóa sản phẩm (Dành cho Admin/Shop Owner).

### 🚀 Tối ưu hóa (Optimization)
- **SEO Basic:** Cấu hình Meta tags, Open Graph chuẩn SEO với Next.js.
- **Performance:** Tối ưu tốc độ tải trang nhờ Server-side Rendering (SSR) và Static Site Generation (SSG).

---
