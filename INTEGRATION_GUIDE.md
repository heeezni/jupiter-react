# 🔗 백엔드 API 연동 가이드

## 📋 목차
1. [현재 상태](#-현재-상태)
2. [필요한 API 설계](#-필요한-api-설계)
3. [단계별 구현 순서](#-단계별-구현-순서)
4. [프론트엔드 수정 사항](#-프론트엔드-수정-사항)
5. [테스트 방법](#-테스트-방법)
6. [배포 가이드](#-배포-가이드)

---

## 📊 현재 상태

### ✅ 완료된 연동
- **AI 가격 예측 API**: `localhost:7777/api/predictions`
- **OpenAI GPT 연동**: 실제 AI 모델 사용 중
- **차트 시스템**: Chart.js 기반 시각화 구현

### ❌ 미완료 (하드코딩 상태)
- 상품 데이터 관리
- 가격 비교 정보
- 가격 히스토리 (시계열 데이터)
- 크롤링 시스템 연동

---

## 🛠 필요한 API 설계

### 1. 상품 관리 API

#### 전체 상품 목록 조회
```http
GET /api/products
```

**응답 예시:**
```json
{
  "products": [
    {
      "id": 1,
      "name": "참이슬 후레쉬",
      "category": "소주",
      "description": "대한민국 대표 소주...",
      "image": "https://example.com/image.jpg",
      "rating": 4.3,
      "reviewCount": 1247,
      "features": ["20.1% 알코올 도수", "360ml 용량"],
      "lowestPrice": 1890,
      "lastUpdated": "2025-09-16T10:00:00Z"
    }
  ]
}
```

#### 개별 상품 상세 조회
```http
GET /api/products/{productId}
```

**응답 예시:**
```json
{
  "id": 1,
  "name": "참이슬 후레쉬",
  "category": "소주",
  "description": "대한민국 대표 소주...",
  "image": "https://example.com/image.jpg",
  "rating": 4.3,
  "reviewCount": 1247,
  "features": ["20.1% 알코올 도수", "360ml 용량"],
  "lowestPrice": 1890,
  "lastUpdated": "2025-09-16T10:00:00Z"
}
```

### 2. 가격 비교 API

#### 상품별 가격 비교 조회
```http
GET /api/products/{productId}/price-comparison
```

**응답 예시:**
```json
{
  "productId": 1,
  "productName": "참이슬 후레쉬",
  "priceComparison": [
    {
      "store": "쿠팡",
      "price": 1890,
      "shipping": "무료배송",
      "link": "https://coupang.com/...",
      "discount": "5%",
      "lastCrawled": "2025-09-16T09:30:00Z"
    },
    {
      "store": "11번가",
      "price": 1950,
      "shipping": "무료배송",
      "link": "https://11st.co.kr/...",
      "discount": "2%",
      "lastCrawled": "2025-09-16T09:30:00Z"
    }
  ],
  "lowestPrice": 1890,
  "lastUpdated": "2025-09-16T09:30:00Z"
}
```

### 3. 가격 히스토리 API

#### 상품별 가격 변화 히스토리
```http
GET /api/products/{productId}/price-history?weeks=4
```

**응답 예시:**
```json
{
  "productId": 1,
  "productName": "참이슬 후레쉬",
  "priceHistory": [
    {
      "date": "2025-08-26",
      "price": 1820,
      "weeksAgo": 3,
      "source": "크롤링"
    },
    {
      "date": "2025-09-02",
      "price": 1850,
      "weeksAgo": 2,
      "source": "크롤링"
    },
    {
      "date": "2025-09-09",
      "price": 1890,
      "weeksAgo": 1,
      "source": "크롤링"
    }
  ],
  "currentPrice": 1890,
  "lastUpdated": "2025-09-16T09:30:00Z"
}
```

### 4. 통합 상품 정보 API (권장)

#### 상품 전체 정보 한 번에 조회
```http
GET /api/products/{productId}/full
```

**응답 예시:**
```json
{
  "product": {
    "id": 1,
    "name": "참이슬 후레쉬",
    "category": "소주",
    "description": "대한민국 대표 소주...",
    "image": "https://example.com/image.jpg",
    "rating": 4.3,
    "reviewCount": 1247,
    "features": ["20.1% 알코올 도수", "360ml 용량"],
    "lowestPrice": 1890
  },
  "priceComparison": [
    {
      "store": "쿠팡",
      "price": 1890,
      "shipping": "무료배송",
      "link": "https://coupang.com/...",
      "discount": "5%"
    }
  ],
  "priceHistory": [
    {
      "date": "2025-08-26",
      "price": 1820,
      "weeksAgo": 3
    }
  ],
  "lastUpdated": "2025-09-16T09:30:00Z"
}
```

---

## 🚀 단계별 구현 순서

### Phase 1: 백엔드 API 개발

#### 1.1 데이터베이스 설계
```sql
-- 상품 테이블
CREATE TABLE products (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(100),
    description TEXT,
    image_url VARCHAR(500),
    rating DECIMAL(2,1),
    review_count INT,
    features JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 가격 비교 테이블
CREATE TABLE price_comparison (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    product_id BIGINT,
    store_name VARCHAR(100),
    price INT,
    shipping_info VARCHAR(200),
    product_url VARCHAR(500),
    discount_rate VARCHAR(10),
    crawled_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (product_id) REFERENCES products(id)
);

-- 가격 히스토리 테이블
CREATE TABLE price_history (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    product_id BIGINT,
    price INT,
    recorded_date DATE,
    source VARCHAR(50) DEFAULT 'crawling',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (product_id) REFERENCES products(id)
);
```

#### 1.2 Spring Boot 엔티티 생성
```java
// Product.java
@Entity
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    private String category;
    private String description;
    private String imageUrl;
    private BigDecimal rating;
    private Integer reviewCount;

    @Convert(converter = StringListConverter.class)
    private List<String> features;

    @CreationTimestamp
    private LocalDateTime createdAt;

    @UpdateTimestamp
    private LocalDateTime updatedAt;

    // getters, setters, constructors...
}

// PriceComparison.java
@Entity
@Table(name = "price_comparison")
public class PriceComparison {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

    private String storeName;
    private Integer price;
    private String shippingInfo;
    private String productUrl;
    private String discountRate;

    @CreationTimestamp
    private LocalDateTime crawledAt;

    // getters, setters...
}

// PriceHistory.java
@Entity
@Table(name = "price_history")
public class PriceHistory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

    private Integer price;
    private LocalDate recordedDate;
    private String source;

    @CreationTimestamp
    private LocalDateTime createdAt;

    // getters, setters...
}
```

#### 1.3 Repository 생성
```java
// ProductRepository.java
@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByCategory(String category);
    List<Product> findByNameContaining(String keyword);
}

// PriceComparisonRepository.java
@Repository
public interface PriceComparisonRepository extends JpaRepository<PriceComparison, Long> {
    List<PriceComparison> findByProductIdOrderByPriceAsc(Long productId);

    @Query("SELECT pc FROM PriceComparison pc WHERE pc.product.id = :productId " +
           "AND pc.crawledAt >= :since ORDER BY pc.price ASC")
    List<PriceComparison> findRecentPricesByProductId(@Param("productId") Long productId,
                                                     @Param("since") LocalDateTime since);
}

// PriceHistoryRepository.java
@Repository
public interface PriceHistoryRepository extends JpaRepository<PriceHistory, Long> {
    @Query("SELECT ph FROM PriceHistory ph WHERE ph.product.id = :productId " +
           "ORDER BY ph.recordedDate DESC LIMIT :weeks")
    List<PriceHistory> findRecentPriceHistory(@Param("productId") Long productId,
                                            @Param("weeks") int weeks);
}
```

#### 1.4 Service 계층 구현
```java
// ProductService.java
@Service
@Transactional(readOnly = true)
public class ProductService {

    private final ProductRepository productRepository;
    private final PriceComparisonRepository priceComparisonRepository;
    private final PriceHistoryRepository priceHistoryRepository;

    public List<ProductSummaryDto> getAllProducts() {
        return productRepository.findAll().stream()
                .map(this::convertToSummaryDto)
                .collect(Collectors.toList());
    }

    public ProductDetailDto getProductDetail(Long productId) {
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new ProductNotFoundException("상품을 찾을 수 없습니다."));

        return convertToDetailDto(product);
    }

    public ProductFullDto getProductFullInfo(Long productId) {
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new ProductNotFoundException("상품을 찾을 수 없습니다."));

        List<PriceComparison> priceComparisons = priceComparisonRepository
                .findRecentPricesByProductId(productId, LocalDateTime.now().minusHours(24));

        List<PriceHistory> priceHistories = priceHistoryRepository
                .findRecentPriceHistory(productId, 4);

        return ProductFullDto.builder()
                .product(convertToDetailDto(product))
                .priceComparison(convertToPriceComparisonDtos(priceComparisons))
                .priceHistory(convertToPriceHistoryDtos(priceHistories))
                .lowestPrice(calculateLowestPrice(priceComparisons))
                .lastUpdated(LocalDateTime.now())
                .build();
    }

    private Integer calculateLowestPrice(List<PriceComparison> priceComparisons) {
        return priceComparisons.stream()
                .mapToInt(PriceComparison::getPrice)
                .min()
                .orElse(0);
    }

    // DTO 변환 메서드들...
}
```

#### 1.5 Controller 구현
```java
// ProductController.java
@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:5174")
public class ProductController {

    private final ProductService productService;

    @GetMapping
    public ResponseEntity<ProductListResponse> getAllProducts() {
        List<ProductSummaryDto> products = productService.getAllProducts();

        ProductListResponse response = ProductListResponse.builder()
                .products(products)
                .total(products.size())
                .lastUpdated(LocalDateTime.now())
                .build();

        return ResponseEntity.ok(response);
    }

    @GetMapping("/{productId}")
    public ResponseEntity<ProductDetailDto> getProductDetail(@PathVariable Long productId) {
        ProductDetailDto product = productService.getProductDetail(productId);
        return ResponseEntity.ok(product);
    }

    @GetMapping("/{productId}/full")
    public ResponseEntity<ProductFullDto> getProductFullInfo(@PathVariable Long productId) {
        ProductFullDto productInfo = productService.getProductFullInfo(productId);
        return ResponseEntity.ok(productInfo);
    }

    @GetMapping("/{productId}/price-comparison")
    public ResponseEntity<PriceComparisonResponse> getPriceComparison(@PathVariable Long productId) {
        PriceComparisonResponse response = productService.getPriceComparison(productId);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/{productId}/price-history")
    public ResponseEntity<PriceHistoryResponse> getPriceHistory(
            @PathVariable Long productId,
            @RequestParam(defaultValue = "4") int weeks) {
        PriceHistoryResponse response = productService.getPriceHistory(productId, weeks);
        return ResponseEntity.ok(response);
    }
}
```

### Phase 2: 프론트엔드 수정

#### 2.1 API 서비스 파일 생성
```javascript
// src/services/api.js
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080';

class ApiService {

  async getAllProducts() {
    const response = await fetch(`${API_BASE_URL}/api/products`);
    if (!response.ok) {
      throw new Error('상품 목록을 불러오는데 실패했습니다.');
    }
    return response.json();
  }

  async getProductDetail(productId) {
    const response = await fetch(`${API_BASE_URL}/api/products/${productId}`);
    if (!response.ok) {
      throw new Error('상품 정보를 불러오는데 실패했습니다.');
    }
    return response.json();
  }

  async getProductFullInfo(productId) {
    const response = await fetch(`${API_BASE_URL}/api/products/${productId}/full`);
    if (!response.ok) {
      throw new Error('상품 전체 정보를 불러오는데 실패했습니다.');
    }
    return response.json();
  }

  async getPriceComparison(productId) {
    const response = await fetch(`${API_BASE_URL}/api/products/${productId}/price-comparison`);
    if (!response.ok) {
      throw new Error('가격 비교 정보를 불러오는데 실패했습니다.');
    }
    return response.json();
  }

  async getPriceHistory(productId, weeks = 4) {
    const response = await fetch(`${API_BASE_URL}/api/products/${productId}/price-history?weeks=${weeks}`);
    if (!response.ok) {
      throw new Error('가격 히스토리를 불러오는데 실패했습니다.');
    }
    return response.json();
  }
}

export default new ApiService();
```

#### 2.2 ProductDetail.jsx 수정
```javascript
// src/pages/ProductDetail.jsx
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import PricePredictionChart from '../components/PricePredictionChart';
import ApiService from '../services/api';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        setLoading(true);
        // 통합 API 사용 (권장) 또는 개별 API 조합 사용
        const productData = await ApiService.getProductFullInfo(parseInt(id));
        setProduct(productData);
      } catch (err) {
        setError(err.message);
        console.error('상품 데이터 로딩 실패:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, [id]);

  if (loading) {
    return (
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center py-16">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            <p className="mt-4 text-gray-600">상품 정보를 불러오는 중...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center py-16">
            <div className="text-red-500 mb-4">
              <i className="fas fa-exclamation-triangle text-4xl"></i>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">오류가 발생했습니다</h2>
            <p className="text-gray-600 mb-8">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              다시 시도
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">상품을 찾을 수 없습니다</h2>
            <Link
              to="/shop"
              className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              상품 목록으로 돌아가기
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* 브레드크럼 */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-blue-600 hover:underline transition-colors duration-200 cursor-pointer">홈</Link>
          <i className="fas fa-chevron-right"></i>
          <Link to="/shop" className="hover:text-blue-600 hover:underline transition-colors duration-200 cursor-pointer">가격비교</Link>
          <i className="fas fa-chevron-right"></i>
          <span className="text-primary font-medium">{product.product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* 상품 이미지 */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <img
                src={product.product.image || product.product.imageUrl}
                alt={product.product.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                {product.product.category}
              </span>
              <h1 className="text-2xl font-bold text-gray-800 mt-4 mb-2">{product.product.name}</h1>
              <div className="flex items-center mb-4">
                <div className="flex items-center mr-4">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={`fas fa-star text-sm ${
                        i < Math.floor(product.product.rating) ? 'text-secondary' : 'text-gray-300'
                      }`}
                    ></i>
                  ))}
                  <span className="ml-2 text-gray-600">({product.product.rating})</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{product.product.description}</p>
            </div>
          </div>

          {/* 가격 비교 테이블 */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="bg-primary text-white p-6">
                <h2 className="text-2xl font-bold mb-2">가격 비교</h2>
                <div className="text-3xl font-bold text-secondary">
                  최저가 ₩{product.lowestPrice?.toLocaleString()}
                </div>
              </div>

              <div className="p-6">
                <div className="space-y-4">
                  {product.priceComparison?.map((store, index) => (
                    <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                            <i className="fas fa-store text-gray-600"></i>
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg">{store.store || store.storeName}</h3>
                            <div className="flex items-center space-x-2 text-sm text-gray-600">
                              <span>{store.shipping || store.shippingInfo}</span>
                              {store.discount && store.discount !== "0%" && (
                                <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full">
                                  {store.discount || store.discountRate} 할인
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`text-2xl font-bold ${store.price === product.lowestPrice ? 'text-red-600' : 'text-gray-800'}`}>
                            ₩{store.price?.toLocaleString()}
                          </div>
                          <a
                            href={store.link || store.productUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-2 bg-secondary text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors"
                          >
                            구매하러 가기
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 상품 상세 정보 */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h3 className="text-xl font-bold mb-4">상품 정보</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {product.product.features?.map((feature, index) => (
              <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                <i className="fas fa-check text-primary mr-2"></i>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 가격 예측 차트 */}
        <PricePredictionChart product={product} />

        {/* 나머지 컴포넌트들... */}
      </div>
    </div>
  );
}

export default ProductDetail;
```

#### 2.3 환경변수 설정
```bash
# .env.local
REACT_APP_API_BASE_URL=http://localhost:8080
REACT_APP_AI_API_BASE_URL=http://localhost:7777
```

### Phase 3: 크롤링 시스템 연동

#### 3.1 크롤링 스케줄러 구현
```java
// CrawlingScheduler.java
@Component
@Slf4j
public class CrawlingScheduler {

    private final CrawlingService crawlingService;
    private final ProductService productService;

    // 매일 오전 9시에 전체 상품 크롤링
    @Scheduled(cron = "0 0 9 * * ?")
    public void scheduledCrawling() {
        log.info("정기 크롤링 시작");

        List<Product> products = productService.getAllActiveProducts();

        for (Product product : products) {
            try {
                crawlingService.crawlProductPrices(product);
                Thread.sleep(2000); // 요청 간격 조절
            } catch (Exception e) {
                log.error("상품 {} 크롤링 실패: {}", product.getName(), e.getMessage());
            }
        }

        log.info("정기 크롤링 완료");
    }

    // 매주 월요일에 가격 히스토리 업데이트
    @Scheduled(cron = "0 0 10 * * MON")
    public void updatePriceHistory() {
        log.info("가격 히스토리 업데이트 시작");
        crawlingService.updateWeeklyPriceHistory();
        log.info("가격 히스토리 업데이트 완료");
    }
}
```

---

## 🧪 테스트 방법

### 1. 백엔드 API 테스트

#### 단위 테스트
```java
// ProductServiceTest.java
@ExtendWith(MockitoExtension.class)
class ProductServiceTest {

    @Mock
    private ProductRepository productRepository;

    @Mock
    private PriceComparisonRepository priceComparisonRepository;

    @InjectMocks
    private ProductService productService;

    @Test
    void 상품_전체정보_조회_성공() {
        // Given
        Long productId = 1L;
        Product product = createTestProduct();
        List<PriceComparison> priceComparisons = createTestPriceComparisons();
        List<PriceHistory> priceHistories = createTestPriceHistories();

        when(productRepository.findById(productId)).thenReturn(Optional.of(product));
        when(priceComparisonRepository.findRecentPricesByProductId(any(), any()))
                .thenReturn(priceComparisons);
        when(priceHistoryRepository.findRecentPriceHistory(productId, 4))
                .thenReturn(priceHistories);

        // When
        ProductFullDto result = productService.getProductFullInfo(productId);

        // Then
        assertThat(result).isNotNull();
        assertThat(result.getProduct().getName()).isEqualTo(product.getName());
        assertThat(result.getPriceComparison()).hasSize(priceComparisons.size());
        assertThat(result.getPriceHistory()).hasSize(priceHistories.size());
    }
}
```

#### 통합 테스트
```java
// ProductControllerIntegrationTest.java
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@Transactional
class ProductControllerIntegrationTest {

    @Autowired
    private TestRestTemplate restTemplate;

    @Autowired
    private ProductRepository productRepository;

    @Test
    void 상품_목록_조회_API_테스트() {
        // Given
        Product product = createAndSaveTestProduct();

        // When
        ResponseEntity<ProductListResponse> response = restTemplate.getForEntity(
                "/api/products", ProductListResponse.class);

        // Then
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(response.getBody().getProducts()).isNotEmpty();
    }
}
```

### 2. 프론트엔드 테스트

#### 컴포넌트 테스트
```javascript
// ProductDetail.test.jsx
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProductDetail from '../ProductDetail';
import ApiService from '../../services/api';

// Mock API Service
jest.mock('../../services/api');

const mockProductData = {
  product: {
    id: 1,
    name: '참이슬 후레쉬',
    category: '소주',
    description: '대한민국 대표 소주...',
    rating: 4.3,
    features: ['20.1% 알코올 도수', '360ml 용량']
  },
  priceComparison: [
    { store: '쿠팡', price: 1890, shipping: '무료배송' }
  ],
  priceHistory: [
    { date: '2025-08-26', price: 1820, weeksAgo: 3 }
  ],
  lowestPrice: 1890
};

test('상품 상세 정보가 올바르게 표시된다', async () => {
  // Given
  ApiService.getProductFullInfo.mockResolvedValue(mockProductData);

  // When
  render(
    <BrowserRouter>
      <ProductDetail />
    </BrowserRouter>
  );

  // Then
  await waitFor(() => {
    expect(screen.getByText('참이슬 후레쉬')).toBeInTheDocument();
    expect(screen.getByText('₩1,890')).toBeInTheDocument();
    expect(screen.getByText('쿠팡')).toBeInTheDocument();
  });
});

test('API 에러 시 에러 메시지가 표시된다', async () => {
  // Given
  ApiService.getProductFullInfo.mockRejectedValue(new Error('API 에러'));

  // When
  render(
    <BrowserRouter>
      <ProductDetail />
    </BrowserRouter>
  );

  // Then
  await waitFor(() => {
    expect(screen.getByText('오류가 발생했습니다')).toBeInTheDocument();
  });
});
```

### 3. E2E 테스트

#### Cypress 테스트
```javascript
// cypress/e2e/product-detail.cy.js
describe('상품 상세 페이지', () => {
  beforeEach(() => {
    // Mock API 응답 설정
    cy.intercept('GET', '/api/products/1/full', { fixture: 'product-full.json' }).as('getProduct');
    cy.intercept('POST', '/api/predictions', { fixture: 'price-prediction.json' }).as('getPrediction');
  });

  it('상품 정보와 가격 예측 차트가 정상적으로 표시된다', () => {
    // When
    cy.visit('/product/1');

    // Then
    cy.wait('@getProduct');
    cy.contains('참이슬 후레쉬').should('be.visible');
    cy.contains('최저가').should('be.visible');

    // AI 예측 차트 로딩 확인
    cy.wait('@getPrediction');
    cy.contains('AI 가격 예측').should('be.visible');
    cy.get('canvas').should('be.visible'); // Chart.js 캔버스
  });

  it('가격 비교 정보가 올바르게 표시된다', () => {
    cy.visit('/product/1');
    cy.wait('@getProduct');

    cy.contains('쿠팡').should('be.visible');
    cy.contains('₩1,890').should('be.visible');
    cy.contains('구매하러 가기').should('be.visible');
  });
});
```

---

## 🚀 배포 가이드

### 1. 환경별 설정

#### 개발 환경
```yaml
# application-dev.yml
server:
  port: 8080

spring:
  datasource:
    url: jdbc:h2:mem:testdb
    driver-class-name: org.h2.Driver
    username: sa
    password:

  jpa:
    hibernate:
      ddl-auto: create-drop
    show-sql: true

cors:
  allowed-origins: http://localhost:5174
```

#### 운영 환경
```yaml
# application-prod.yml
server:
  port: 8080

spring:
  datasource:
    url: jdbc:mysql://localhost:3306/product_db
    driver-class-name: com.mysql.cj.jdbc.Driver
    username: ${DB_USERNAME}
    password: ${DB_PASSWORD}

  jpa:
    hibernate:
      ddl-auto: validate
    show-sql: false

cors:
  allowed-origins: https://your-domain.com
```

### 2. Docker 설정

#### 백엔드 Dockerfile
```dockerfile
# Dockerfile
FROM openjdk:17-jdk-slim

WORKDIR /app

COPY target/*.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
```

#### 프론트엔드 Dockerfile
```dockerfile
# Dockerfile
FROM node:18-alpine as build

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

#### docker-compose.yml
```yaml
version: '3.8'

services:
  mysql:
    image: mysql:8.0
    environment:
      MYSQL_ROOT_PASSWORD: rootpassword
      MYSQL_DATABASE: product_db
      MYSQL_USER: appuser
      MYSQL_PASSWORD: apppassword
    ports:
      - "3306:3306"
    volumes:
      - mysql_data:/var/lib/mysql

  backend:
    build: ./backend
    ports:
      - "8080:8080"
    environment:
      DB_USERNAME: appuser
      DB_PASSWORD: apppassword
      SPRING_PROFILES_ACTIVE: prod
    depends_on:
      - mysql

  ai-service:
    build: ./ai-service
    ports:
      - "7777:7777"
    environment:
      OPENAI_API_KEY: ${OPENAI_API_KEY}

  frontend:
    build: ./frontend
    ports:
      - "80:80"
    environment:
      REACT_APP_API_BASE_URL: http://backend:8080
      REACT_APP_AI_API_BASE_URL: http://ai-service:7777
    depends_on:
      - backend
      - ai-service

volumes:
  mysql_data:
```

### 3. CI/CD 설정

#### GitHub Actions
```yaml
# .github/workflows/deploy.yml
name: Deploy Application

on:
  push:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3

    - name: Set up JDK 17
      uses: actions/setup-java@v3
      with:
        java-version: '17'
        distribution: 'temurin'

    - name: Set up Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'

    - name: Run backend tests
      run: |
        cd backend
        ./gradlew test

    - name: Run frontend tests
      run: |
        cd frontend
        npm ci
        npm test

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'

    steps:
    - uses: actions/checkout@v3

    - name: Deploy to production
      run: |
        # 배포 스크립트 실행
        docker-compose -f docker-compose.prod.yml up -d --build
```

---

## 📚 참고 자료

### 1. 필수 의존성

#### 백엔드 (Spring Boot)
```gradle
dependencies {
    implementation 'org.springframework.boot:spring-boot-starter-web'
    implementation 'org.springframework.boot:spring-boot-starter-data-jpa'
    implementation 'org.springframework.boot:spring-boot-starter-validation'
    implementation 'mysql:mysql-connector-java'
    implementation 'org.springframework.boot:spring-boot-starter-cache'

    testImplementation 'org.springframework.boot:spring-boot-starter-test'
    testImplementation 'com.h2database:h2'
}
```

#### 프론트엔드 (React)
```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.8.0",
    "chart.js": "^4.2.0",
    "react-chartjs-2": "^5.2.0"
  },
  "devDependencies": {
    "@testing-library/react": "^13.4.0",
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/user-event": "^14.4.3"
  }
}
```

### 2. 유용한 명령어

```bash
# 백엔드 개발 서버 실행
./gradlew bootRun

# 프론트엔드 개발 서버 실행
npm start

# 전체 테스트 실행
./gradlew test && npm test

# 프로덕션 빌드
./gradlew build && npm run build

# Docker 환경 실행
docker-compose up -d
```

---

## 🎯 마일스톤

### Week 1: 백엔드 API 개발
- [ ] 데이터베이스 설계 및 엔티티 생성
- [ ] Repository 및 Service 구현
- [ ] Controller 및 API 엔드포인트 구현
- [ ] 단위 테스트 작성

### Week 2: 프론트엔드 연동
- [ ] API 서비스 계층 구현
- [ ] ProductDetail 컴포넌트 수정
- [ ] 에러 처리 및 로딩 상태 구현
- [ ] 통합 테스트 작성

### Week 3: 크롤링 시스템 연동
- [ ] 크롤링 스케줄러 구현
- [ ] 가격 히스토리 업데이트 로직 구현
- [ ] 실시간 데이터 반영 테스트
- [ ] 성능 최적화

### Week 4: 테스트 및 배포
- [ ] E2E 테스트 작성
- [ ] 배포 환경 설정
- [ ] CI/CD 파이프라인 구축
- [ ] 운영 모니터링 설정

---

**🔥 중요 포인트:**
1. **단계적 접근**: Phase별로 순차적 구현
2. **테스트 우선**: 각 단계마다 테스트 코드 작성
3. **에러 처리**: 네트워크 에러, API 에러 등 예외 상황 대비
4. **성능 고려**: 캐싱, 페이지네이션 등 최적화 기법 적용
5. **보안**: CORS, 입력 검증, SQL 인젝션 방지

**이 가이드를 따라 구현하면 하드코딩된 데이터를 실제 API 연동으로 완전히 대체할 수 있습니다!** 🚀