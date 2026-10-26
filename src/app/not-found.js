import { redirect } from 'next/navigation';

// Chuyển hướng ngay lập tức về trang chủ khi gặp link 404 (0 giây)
export default function NotFound() {
  redirect('/');
}
