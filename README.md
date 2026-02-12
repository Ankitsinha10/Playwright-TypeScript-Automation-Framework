# Playwright TypeScript Automation Framework

Production-ready test automation framework implementing **Page Object Model (POM)** for comprehensive UI and API testing.

**Tech Stack:** Playwright · TypeScript · Node.js · JSONPlaceholder API

[![Tests](https://img.shields.io/badge/tests-passing-brightgreen?style=flat-square)]()
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)]()
[![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=flat-square&logo=playwright&logoColor=white)]()

> Built as a technical assessment for **Finacplus QA Automation Engineer** position

---

## Assignment Coverage

| Test Type | Scope | Validation |
|-----------|-------|------------|
| **UI Testing** | Login → Navigate → Search → Extract Data → Logout | Element visibility · Data accuracy · File persistence |
| **API Testing** | POST (Create) → GET (Read) → PATCH (Update) | Status codes · Response bodies · Data integrity |

---

## Test Execution Videos

**Watch complete test execution with real browser interactions**

### UI Test Execution (Headed Mode)
[![UI Test Video](https://img.shields.io/badge/▶️-Watch_UI_Test-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://drive.google.com/file/d/1Llqp_y2NkltUeQDwxfgOyJsHJmwei1Fo/view?usp=sharing)

*Demonstrates: Login → Book Store Navigation → Search → Extract Details → File Write → Logout*

### API Test Execution (Parallel Cross-Browser)
[![API Test Video](https://img.shields.io/badge/▶️-Watch_API_Test-1E90FF?style=for-the-badge&logo=youtube&logoColor=white)](https://drive.google.com/file/d/1_AvCO6x6AjezKNmpSonD0z3-V_98JKl4/view?usp=sharing)

*Demonstrates: POST/GET/PATCH Operations · Parallel Execution · Cross-Browser Validation (Chromium & WebKit)*

---

## Test Results

**4 test cases** executed with **100% pass rate**  
**Cross-browser validation** on Chromium, Firefox, and WebKit  
**Parallel execution** using 2 workers  
**Approx 13.5s total execution time** across all suites  
**Zero flaky tests** - stable automation implementation  

---

## Test Reports

### Playwright HTML Report
[![Playwright Report](https://img.shields.io/badge/📊-View_Playwright_Report-45ba4b?style=for-the-badge)](https://drive.google.com/file/d/1gLQ8X3mG4JObtxF5lR0ZcU56iat8DQ3I/view?usp=sharing)

**Features:**
- Step-by-step execution trace
- Screenshots and videos on failure
- Network activity logs
- Performance metrics

### Allure Report
[![Allure Report](https://img.shields.io/badge/📈-View_Allure_Report-orange?style=for-the-badge)](https://drive.google.com/file/d/1D5OyVsMR6Plhv1_sdWdLl8VTMfOJRsRl/view?usp=sharing)

**Enhanced Analytics:**
- Test execution trends
- Suite-level breakdown
- Historical comparisons
- Detailed step logs

---

## Framework Architecture

### Design Patterns
- **Page Object Model (POM)**: Strict separation between test logic and page interactions
- **Utility Pattern**: Reusable `FileWriter` class for data persistence
- **Single Responsibility**: Each class handles only its specific domain

### Key Technical Features
- **Resilient Locators**: User-facing selectors (`getByRole`, `getByPlaceholder`, `getByText`)
- **Auto-waiting**: Leverages Playwright's built-in smart waits (no hard sleeps)
- **Type Safety**: Full TypeScript implementation with proper type definitions
- **Environment Security**: Credentials managed via `.env` file
- **Cross-browser Testing**: Validated on Chromium, WebKit, and Firefox
- **Parallel Execution**: Optimized test runs with multiple workers

---

## 📁 Project Structure
```
Playwright-TypeScript-Automation-Framework/
├── pages/
│   ├── loginPage.ts          # Login page objects and methods
│   └── bookStorePage.ts      # Book store page objects and methods
├── tests/
│   ├── ui/
│   │   └── bookstore.spec.ts # End-to-end UI test scenarios
│   └── api/
│       └── users.spec.ts     # RESTful API test scenarios
├── utils/
│   └── fileWriter.ts         # File operations utility
├── playwright.config.ts      # Framework configuration
├── package.json              # Dependencies and scripts
├── .env.example              # Environment variables template
└── README.md
```

---

## Key Highlights

**Architecture**
- Page Object Model with strict separation of concerns
- Type-safe TypeScript implementation
- Reusable utility classes for cross-cutting concerns

**Quality Assurance**
- 100% pass rate across all test scenarios
- Cross-browser validation (Chromium, Firefox, WebKit)
- Parallel execution for faster feedback

**Best Practices**
- Environment-based credential management
- Auto-waiting mechanisms (no brittle sleeps)
- Resilient, user-facing locators
- Comprehensive error handling and logging

---

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
```bash
# 1. Clone the repository
git clone https://github.com/Ankitsinha10/Playwright-TypeScript-Automation-Framework.git
cd Playwright-TypeScript-Automation-Framework

# 2. Install dependencies
npm install

# 3. Install Playwright browsers
npx playwright install

# 4. Configure environment variables
cp .env.example .env
# Edit .env with your DemoQA credentials
```

---

## Running Tests
```bash
# Run all tests
npm test

# Run with clean reports
npm run test:clean

# Run only UI tests
npm run test:ui

# Run only API tests
npm run test:api

# Run in headed mode (visible browser)
npx playwright test --headed

# Run on specific browser
npx playwright test --project=chromium

# View test reports
npm run allure:serve        # Allure report
npx playwright show-report  # Playwright report
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm test` | Run all tests |
| `npm run test:clean` | Clean old results and run fresh tests |
| `npm run test:ui` | Run UI tests only |
| `npm run test:api` | Run API tests only |
| `npm run allure:generate` | Generate Allure report |
| `npm run allure:serve` | Serve Allure report |

---

## Sample Output

### UI Test Execution
```bash
✓ Complete book store flow - login, search, extract details, logout (14.2s)

  Username validated successfully
  Logout button is visible
  Navigated to Book Store
  Searched for: Learning JavaScript Design Patterns
  Book found in search results
  
  Book Details Extracted:
    Title: Learning JavaScript Design Patterns
    Author: Addy Osmani
    Publisher: O'Reilly Media
  
  Book details written to file ✓
  Logged out successfully
```

### API Test Execution
```bash
✓ Create and Update User Flow (2.6s)
  - POST: User created with ID 11 (201) ✓
  - GET: User retrieved successfully (200) ✓
  - PATCH: User updated to "Ankit Updated" (200) ✓

Running 2 tests using 2 workers
  ✓ [chromium] › API Assignment (1.9s)
  ✓ [webkit] › API Assignment (1.9s)
  2 passed (2.6s)
```

**Extracted Book Details** (`book-details.txt`):
```
Book Details:
Title: Learning JavaScript Design Patterns
Author: Addy Osmani
Publisher: O'Reilly Media
```

---

## API Testing Implementation Note

**Original Requirement**: Test against `https://reqres.in`  
**Implementation**: `https://jsonplaceholder.typicode.com`

**Rationale**: ReqRes is protected by Cloudflare security that blocks automated requests, resulting in 403 errors. JSONPlaceholder provides equivalent REST API functionality without restrictions, demonstrating the same testing principles and validation strategies.

---

## Security

- Credentials stored in `.env` (gitignored)
- `.env.example` provided as template
- No sensitive data in repository
- Environment variable validation on test start

---

## Related Work

This framework demonstrates skills from my professional experience:
- **1,000+ test cycles** executed across SaaS, e-commerce, and mobile platforms
- **2,000+ validated defects** identified and documented
- **Playwright & TypeScript** automation expertise
- **API testing** with Postman API Fundamentals certification
- **Cross-browser validation** across multiple environments

**More Projects**: [GitHub Portfolio](https://github.com/Ankitsinha10)

---

## Author

**Ankit Kumar Sinha**  
QA Automation Engineer

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat-square&logo=linkedin&logoColor=white)](https://linkedin.com/in/ankitsinha07)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=flat-square&logo=github&logoColor=white)](https://github.com/Ankitsinha10)
[![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=flat-square&logo=google-chrome&logoColor=white)](https://www.ankitkumarsinha.com)
[![Email](https://img.shields.io/badge/Email-D14836?style=flat-square&logo=gmail&logoColor=white)](mailto:ankitkumarsinha05@gmail.com)

---

**Created as part of Finacplus QA Automation Engineer Technical Assessment**