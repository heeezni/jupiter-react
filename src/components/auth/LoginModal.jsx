import { useState } from 'react';

const LoginModal = ({ isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleOAuthLogin = (provider) => {
    setIsLoading(true);

    // OAuth 로그인 로직 (실제 구현 시 각 provider별 OAuth URL로 리다이렉트)
    switch (provider) {
      case 'naver':
        // 네이버 OAuth URL로 리다이렉트
        console.log('네이버 로그인');
        break;
      case 'google':
        // 구글 OAuth URL로 리다이렉트
        console.log('구글 로그인');
        break;
      case 'kakao':
        // 카카오 OAuth URL로 리다이렉트
        console.log('카카오 로그인');
        break;
      default:
        break;
    }

    // 임시로 2초 후 로딩 해제
    setTimeout(() => {
      setIsLoading(false);
      onClose();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">로그인</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>

        <div className="space-y-4">
          <p className="text-center text-gray-600 mb-6">
            소셜 계정으로 간편하게 로그인하세요
          </p>

          {/* 네이버 로그인 */}
          <button
            onClick={() => handleOAuthLogin('naver')}
            disabled={isLoading}
            className="w-full bg-green-500 text-white py-3 px-4 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center space-x-3 disabled:opacity-50"
          >
            <img src="/images/naver.png" alt="Naver" width="20" height="20" className="object-contain" />
            <span>네이버로 로그인</span>
          </button>

          {/* 구글 로그인 */}
          <button
            onClick={() => handleOAuthLogin('google')}
            disabled={isLoading}
            className="w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center space-x-3 disabled:opacity-50"
          >
            <img src="/images/google.png" alt="Google" width="20" height="20" className="object-contain" />
            <span>구글로 로그인</span>
          </button>

          {/* 카카오 로그인 */}
          <button
            onClick={() => handleOAuthLogin('kakao')}
            disabled={isLoading}
            className="w-full bg-yellow-400 text-gray-900 py-3 px-4 rounded-lg hover:bg-yellow-500 transition-colors flex items-center justify-center space-x-3 disabled:opacity-50"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M10 1.5C5.30558 1.5 1.5 4.74765 1.5 8.75C1.5 11.5547 3.19677 14.0234 5.79688 15.3711L4.87891 18.3516C4.8125 18.5859 5.07422 18.7695 5.28516 18.6406L9.0625 16.4688C9.375 16.4922 9.6875 16.5 10 16.5C14.6944 16.5 18.5 13.2523 18.5 9.25C18.5 5.24765 14.6944 1.5 10 1.5Z" fill="#3C1E1E"/>
            </svg>
            <span>카카오톡으로 로그인</span>
          </button>
        </div>

        {isLoading && (
          <div className="mt-6 text-center">
            <div className="inline-block animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
            <p className="mt-2 text-sm text-gray-600">로그인 중...</p>
          </div>
        )}

        <div className="mt-8 text-center text-sm text-gray-500">
          로그인 시 <a href="#" className="text-primary hover:underline">이용약관</a> 및{' '}
          <a href="#" className="text-primary hover:underline">개인정보처리방침</a>에 동의합니다.
        </div>
      </div>
    </div>
  );
};

export default LoginModal;