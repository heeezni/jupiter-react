import React from 'react';

function AboutUs() {
  const teamMembers = [
    {
      name: '김민수',
      position: '대표이사',
      image: '/images/team-1.jpg',
      description: '20년간 농업 분야에서 경험을 쌓은 전문가입니다.'
    },
    {
      name: '이지영',
      position: '품질관리팀장',
      image: '/images/team-2.jpg',
      description: '식품안전 전문가로 최고의 품질을 보장합니다.'
    },
    {
      name: '박철민',
      position: '물류팀장',
      image: '/images/team-3.jpg',
      description: '신선도 유지를 위한 최적의 배송 시스템을 구축했습니다.'
    },
    {
      name: '최유진',
      position: '고객서비스팀장',
      image: '/images/team-4.jpg',
      description: '고객 만족을 최우선으로 생각하는 서비스 전문가입니다.'
    }
  ];

  const values = [
    {
      icon: 'fas fa-leaf',
      title: '신선함',
      description: '농장에서 바로 수확한 신선한 과일과 채소만을 엄선합니다.'
    },
    {
      icon: 'fas fa-heart',
      title: '건강',
      description: '화학 비료나 농약 없이 자연 친화적으로 재배된 유기농 제품입니다.'
    },
    {
      icon: 'fas fa-truck',
      title: '빠른 배송',
      description: '수확 당일 포장하여 24시간 내 신선하게 배송됩니다.'
    },
    {
      icon: 'fas fa-shield-alt',
      title: '품질 보증',
      description: '엄격한 품질 관리를 통해 최고 품질의 제품만을 제공합니다.'
    }
  ];

  const stats = [
    { number: '50,000+', label: '만족한 고객' },
    { number: '1,000+', label: '제품 종류' },
    { number: '99.9%', label: '신선도 보장' },
    { number: '24시간', label: '배송 시간' }
  ];

  return (
    <div className="py-16 bg-gray-50">
      {/* 페이지 헤더 */}
      <div className="bg-primary text-white py-16 mb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">회사 소개</h1>
          <p className="text-lg">신선함과 건강함을 전하는 Fruitables입니다</p>
        </div>
      </div>

      {/* 회사 소개 섹션 */}
      <div className="container mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              자연의 선물을 전하는 <span className="text-primary">Fruitables</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              2010년 설립된 Fruitables는 신선한 과일과 채소를 고객에게 직접 전달하는 것을 목표로 
              시작되었습니다. 우리는 전국의 신뢰할 수 있는 농장과 직접 계약을 맺어 
              최고 품질의 농산물만을 엄선합니다.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              화학 비료나 농약을 사용하지 않는 친환경 농법으로 재배된 유기농 제품을 통해 
              고객의 건강과 환경을 모두 생각합니다. 농장에서 고객의 식탁까지, 
              신선함을 그대로 전달하는 것이 우리의 약속입니다.
            </p>
            <div className="flex items-center space-x-4">
              <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors duration-300">
                더 알아보기
              </button>
              <button className="border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors duration-300">
                연락하기
              </button>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="/images/about-us.jpg"
              alt="About Fruitables"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -left-6 bg-secondary text-white p-6 rounded-lg shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold">14년</div>
                <div className="text-sm">신뢰의 경험</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 핵심 가치 섹션 */}
      <div className="bg-white py-16 mb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">우리의 핵심 가치</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Fruitables가 고객에게 약속하는 네 가지 핵심 가치입니다.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${value.icon} text-xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 통계 섹션 */}
      <div className="bg-primary text-white py-16 mb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 팀 소개 섹션 */}
      <div className="container mx-auto px-4 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">우리 팀을 소개합니다</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            각 분야의 전문가들이 모여 최고의 서비스를 제공합니다.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-primary font-semibold mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                
                {/* 소셜 미디어 링크 */}
                <div className="flex justify-center space-x-3 mt-4">
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 인증 및 수상 섹션 */}
      <div className="bg-white py-16 mb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">인증 및 수상</h2>
            <p className="text-gray-600">우리의 품질과 서비스를 인정받은 다양한 인증서와 상입니다.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: '유기농 인증', icon: 'fas fa-certificate' },
              { name: 'ISO 22000', icon: 'fas fa-award' },
              { name: '우수농산물 GAP', icon: 'fas fa-medal' },
              { name: '친환경 인증', icon: 'fas fa-leaf' }
            ].map((cert, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gray-100 text-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <i className={`${cert.icon} text-2xl`}></i>
                </div>
                <h4 className="font-semibold text-gray-800">{cert.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA 섹션 */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">지금 바로 시작하세요!</h2>
          <p className="text-lg mb-8 opacity-90">
            신선한 과일과 채소로 건강한 식단을 만들어보세요.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white text-primary px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-semibold">
              쇼핑하러 가기
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-primary transition-colors duration-300 font-semibold">
              카탈로그 다운로드
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;