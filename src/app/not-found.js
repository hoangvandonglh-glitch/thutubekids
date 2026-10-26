'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function NotFound() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    // Đếm ngược mỗi giây
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          router.replace('/');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [router]);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #FFF9F0 0%, #EFF6FF 100%)',
      padding: '24px',
      textAlign: 'center',
      fontFamily: "'Nunito', sans-serif",
    }}>
      <div style={{
        background: 'white',
        borderRadius: '28px',
        padding: '48px 36px',
        maxWidth: '520px',
        width: '100%',
        boxShadow: '0 20px 40px rgba(124, 58, 237, 0.12)',
        border: '3px solid #EDE9FE',
      }}>
        <div style={{ fontSize: '5rem', marginBottom: '12px', animation: 'bounce 1.5s infinite' }}>
          🎈
        </div>
        <h1 style={{
          fontFamily: "'Baloo 2', cursive",
          fontSize: '2.2rem',
          fontWeight: 800,
          color: '#7C3AED',
          marginBottom: '12px',
        }}>
          Oops! Trang Không Tồn Tại
        </h1>
        <p style={{ fontSize: '1.05rem', color: '#6B7280', lineHeight: 1.6, marginBottom: '24px' }}>
          Trang bạn tìm kiếm không có sẵn hoặc đã được di chuyển. Đang tự động đưa bạn về trang chủ trong{' '}
          <strong style={{ color: '#F59E0B', fontSize: '1.2rem' }}>{countdown}</strong> giây...
        </p>

        <Link
          href="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'linear-gradient(135deg, #7C3AED 0%, #EC4899 100%)',
            color: 'white',
            textDecoration: 'none',
            padding: '14px 28px',
            borderRadius: '50px',
            fontWeight: 800,
            fontSize: '1rem',
            boxShadow: '0 8px 24px rgba(124, 58, 237, 0.35)',
            transition: 'transform 0.2s ease',
          }}
        >
          🏠 Về Trang Chủ Ngay
        </Link>
      </div>
    </div>
  );
}
