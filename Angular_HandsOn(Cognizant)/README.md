# 🎓 Student Course Portal

> **Digital Nurture 5.0 – Angular Hands-On Exercises**

A complete **Angular Student Course Portal** developed as part of the **Cognizant Digital Nurture 5.0** training program. This project demonstrates modern Angular development practices, covering everything from Angular fundamentals to advanced concepts like **NgRx State Management**, **HTTP Interceptors**, **Route Guards**, and **Unit Testing**.

---

## 🚀 Features

* 📚 View all available courses
* 🔍 Search courses
* 📖 View course details
* 👨‍🎓 View enrolled students
* ✅ Enroll in courses
* ❌ Unenroll from courses
* 👤 View student profile
* 🎨 Dynamic course card styling
* 🔐 Protected routes using Route Guards
* 🌐 REST API integration
* ⚡ State management using NgRx
* 🧪 Unit testing with Vitest

---

## 🛠️ Tech Stack

* Angular
* TypeScript
* HTML5
* CSS3
* RxJS
* Angular Router
* Angular HttpClient
* NgRx Store
* NgRx Effects
* NgRx Selectors
* REST API
* JSON Server
* Vitest
* Angular TestBed
* MockStore
* Git & GitHub

---

# 📚 Hands-On Modules

## Hands-On 1 – Angular Fundamentals

### Topics Covered

* Angular CLI
* Project Structure
* Components
* Templates
* TypeScript
* Interpolation
* Property Binding
* Event Binding
* Two-Way Data Binding

Example:

```html
<h1>{{ title }}</h1>

<img [src]="imageUrl">

<button (click)="onClick()">Click Me</button>

<input [(ngModel)]="searchTerm">
```

---

## Hands-On 2 – Components & Templates

### Topics Covered

* Standalone Components
* Component Lifecycle
* Parent–Child Communication
* Component Styling

### Components

* Header
* Course Card
* Course List
* Course Detail
* Student Profile
* Notification

Structure

```text
Component
├── component.ts
├── component.html
└── component.css
```

---

## Hands-On 3 – Directives & Pipes

### Directives Used

* *ngIf
* *ngFor
* ngSwitch
* Custom Highlight Directive

Example

```html
<p *ngIf="isLoading">
  Loading courses...
</p>

<div *ngFor="let course of courses">
  {{ course.name }}
</div>
```

### Custom Pipe

Displays credits in a readable format.

Example

```text
4 Credits
```

---

## Hands-On 4 – Services & Dependency Injection

### Services

### CourseService

Responsible for:

* Fetching all courses
* Fetching course details
* Fetching enrolled students
* Communicating with the backend API

### EnrollmentService

Responsible for:

* Course enrollment
* Course unenrollment
* Managing enrollment state

> Later migrated to **NgRx Store**.

---

## Hands-On 5 – Routing & Navigation

### Topics

* Angular Router
* Route Parameters
* RouterLink
* Programmatic Navigation

Routes

```text
/courses
/courses/:id
/profile
```

Navigation

```typescript
this.router.navigate([
  'courses',
  this.course.id
]);
```

---

## Hands-On 6 – Forms

### Topics

* Template-Driven Forms
* ngModel
* Search
* Form Validation

Example

```html
<input
  [(ngModel)]="searchTerm"
  placeholder="Search course">
```

Search URL

```text
/courses?search=Angular
```

---

## Hands-On 7 – HTTP Client & REST API

### Topics

* HttpClient
* GET Requests
* REST APIs
* Error Handling
* HTTP Interceptors

Example

```typescript
this.http.get<Course[]>(
  'http://localhost:3000/courses'
);
```

Application Flow

```text
Component
    ↓
Service
    ↓
HTTP Request
    ↓
Interceptor
    ↓
Backend API
```

---

## Hands-On 8 – Advanced Angular Features

### Topics

* Route Guards
* Functional Guards
* Authentication Interceptor
* Error Interceptor
* Unsaved Changes Guard

Use Cases

* Authentication
* Authorization
* Prevent navigation with unsaved changes
* Centralized error handling

---

## Hands-On 9 – NgRx State Management

### Topics

* Store
* Actions
* Reducers
* Selectors
* Effects
* Redux DevTools

Architecture

```text
Component
    ↓
Dispatch Action
    ↓
Effect
    ↓
HTTP Request
    ↓
Success Action
    ↓
Reducer
    ↓
Store
    ↓
Selector
    ↓
Component
```

Course State

```typescript
{
  courses: Course[],
  loading: boolean,
  error: string | null
}
```

Enrollment State

```typescript
enrolledCourseIds: string[]
```

---

## Hands-On 10 – Unit Testing

### Topics

* Vitest
* Angular TestBed
* Component Testing
* Service Testing
* MockStore
* Route Testing

Example

```typescript
it('should create', () => {
  expect(component).toBeTruthy();
});
```

Mock Store

```typescript
provideMockStore();
```

Test Results

```text
Test Files: 19 Passed
Tests: 25 Passed
```

---

# 📁 Project Structure

```text
student-course-portal/
│
├── src/
│   ├── app/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── store/
│   │   ├── directives/
│   │   ├── pipes/
│   │   ├── guards/
│   │   ├── interceptors/
│   │   └── models/
│   │
├── public/
├── package.json
├── angular.json
├── tsconfig.json
├── .gitignore
└── README.md
```

---

# 🚀 Getting Started

## Clone the Repository

```bash
git clone https://github.com/<CodePool-soham>.git
```

## Install Dependencies

```bash
npm install
```

## Run the Application

```bash
ng serve
```

Open your browser and visit:

```text
http://localhost:4200
```

---

## Start the Backend

```bash
json-server --watch db.json
```

Backend URL

```text
http://localhost:3000
```

---

# 🧪 Running Tests

```bash
ng test
```

For coverage:

```bash
ng test --coverage
```

---

# 📊 Hands-On Progress

| Hands-On | Topic                           | Status      |
| -------- | ------------------------------- | ----------- |
| 1        | Angular Fundamentals            | ✅ Completed |
| 2        | Components & Templates          | ✅ Completed |
| 3        | Directives & Pipes              | ✅ Completed |
| 4        | Services & Dependency Injection | ✅ Completed |
| 5        | Routing & Navigation            | ✅ Completed |
| 6        | Forms & User Input              | ✅ Completed |
| 7        | HTTP Client & REST API          | ✅ Completed |
| 8        | Advanced Angular Features       | ✅ Completed |
| 9        | NgRx State Management           | ✅ Completed |
| 10       | Unit Testing                    | ✅ Completed |

---

# 🎯 Learning Outcomes

This project demonstrates practical experience with:

* Component-Based Architecture
* Standalone Components
* Angular Routing
* Data Binding
* Directives
* Custom Pipes
* Services
* Dependency Injection
* HTTP Client
* REST APIs
* Route Guards
* HTTP Interceptors
* RxJS
* NgRx Store
* NgRx Effects
* NgRx Selectors
* Redux DevTools
* Unit Testing
* MockStore
* Git & GitHub

---

