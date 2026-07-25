Yes. Copy **everything inside this single code block** and paste it into your `README.md` file:

````markdown
# 🎓 Student Course Portal

## Digital Nurture 5.0 — Angular Hands-On Exercises

A complete Angular Student Course Portal developed as part of the Cognizant Digital Nurture 5.0 Angular Hands-On Exercise Programme.

This project demonstrates the development of a modern Angular application from basic Angular concepts to advanced state management and unit testing.

---

## 📌 Project Overview

The Student Course Portal allows students to:

- View available courses
- Search for courses
- View detailed course information
- View students enrolled in a course
- Enroll in courses
- Unenroll from courses
- View student profile information
- Manage application state using NgRx
- Communicate with REST APIs
- Protect routes using guards
- Handle HTTP requests using interceptors
- Test Angular components and services

The project was developed progressively through 10 Angular Hands-On Exercises.

---

## 🛠️ Technologies Used

- Angular
- TypeScript
- HTML5
- CSS3
- RxJS
- NgRx Store
- NgRx Effects
- NgRx Selectors
- Angular Router
- Angular HttpClient
- REST APIs
- JSON Server
- Vitest
- Angular TestBed
- MockStore
- Git and GitHub

---

# 📚 HANDS-ON 1 — Angular Fundamentals

## Topics Covered

- Introduction to Angular
- Angular CLI
- Creating an Angular application
- Angular project structure
- Components
- Templates
- TypeScript in Angular
- Interpolation
- Property Binding
- Event Binding
- Two-Way Data Binding

### Interpolation

```html
<h1>{{ title }}</h1>
````

### Property Binding

```html
<img [src]="imageUrl">
```

### Event Binding

```html
<button (click)="onClick()">
  Click Me
</button>
```

### Two-Way Data Binding

```html
<input [(ngModel)]="searchTerm">
```

---

# 📚 HANDS-ON 2 — Components and Templates

## Topics Covered

* Creating Angular components
* Standalone components
* Component structure
* Component templates
* Component styles
* Component lifecycle
* Parent-child component communication

## Components Implemented

* Header Component
* Course Card Component
* Notification Component
* Course List Component
* Course Detail Component
* Student Profile Component

Angular components follow the structure:

```text
Component
├── TypeScript File
├── HTML Template
└── CSS Styles
```

---

# 📚 HANDS-ON 3 — Directives and Pipes

## Topics Covered

* Structural Directives
* Attribute Directives
* Built-in Angular Directives
* Custom Directives
* Built-in Pipes
* Custom Pipes
* Dynamic Styling

## Directives Used

### *ngIf

```html
<p *ngIf="isLoading">
  Loading courses...
</p>
```

### *ngFor

```html
<div *ngFor="let course of courses">
  {{ course.name }}
</div>
```

### ngSwitch

```html
<div [ngSwitch]="course.gradeStatus">

  <span *ngSwitchCase="'passed'">
    Passed
  </span>

  <span *ngSwitchCase="'failed'">
    Failed
  </span>

  <span *ngSwitchCase="'pending'">
    Pending
  </span>

</div>
```

## Custom Directive

A custom highlight directive was implemented to provide visual feedback when interacting with course cards.

## Custom Pipe

A custom credit label pipe was implemented to format course credits.

Example:

```text
4 Credits
```

---

# 📚 HANDS-ON 4 — Services and Dependency Injection

## Topics Covered

* Angular Services
* Dependency Injection
* Reusable Business Logic
* Service-Based Architecture
* Sharing Data Between Components

## Services Implemented

### CourseService

Responsible for:

* Loading courses
* Fetching individual courses
* Fetching course students
* Communicating with the backend API

### EnrollmentService

Initially responsible for:

* Enrolling students in courses
* Unenrolling students from courses
* Managing enrolled course information

The enrollment state was later migrated to NgRx in Hands-On 9.

---

# 📚 HANDS-ON 5 — Routing and Navigation

## Topics Covered

* Angular Router
* Route Configuration
* Navigation
* Route Parameters
* RouterLink
* Programmatic Navigation

## Application Routes

```text
/courses
/courses/:id
/profile
```

## Route Parameters

Example URL:

```text
/courses/1
```

The course ID is retrieved using:

```typescript
this.route.snapshot.paramMap.get('id');
```

## Programmatic Navigation

```typescript
this.router.navigate([
  'courses',
  this.course.id
]);
```

---

# 📚 HANDS-ON 6 — Forms and User Input

## Topics Covered

* Template-Driven Forms
* ngModel
* User Input
* Search Functionality
* Query Parameters
* Form Validation Concepts

## Course Search

```html
<input
  [(ngModel)]="searchTerm"
  placeholder="Search course">
```

The search term is stored in the URL using query parameters.

Example:

```text
/courses?search=Angular
```

This allows the search state to be preserved in the URL.

---

# 📚 HANDS-ON 7 — HTTP Client and REST API

## Topics Covered

* Angular HttpClient
* HTTP GET Requests
* REST API Communication
* JSON Data
* API Error Handling
* HTTP Interceptors

## Course API

The CourseService communicates with the backend API to retrieve course data.

Example:

```typescript
this.http.get<Course[]>(
  'http://localhost:3000/courses'
);
```

## API Operations

The application supports:

* Getting all courses
* Getting a course by ID
* Getting students enrolled in a course

## Error Handling

Errors are handled using:

* Service-level error handling
* HTTP Error Interceptors

Application flow:

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

# 📚 HANDS-ON 8 — Advanced Angular Features

## Topics Covered

* Route Guards
* Functional Guards
* HTTP Interceptors
* Authentication Interceptor
* Error Handler Interceptor
* Unsaved Changes Guard
* Advanced Application Architecture

## Route Guards

Guards are used to control navigation and protect application routes.

Use cases include:

* Preventing unauthorized access
* Protecting pages
* Preventing navigation with unsaved changes

## HTTP Interceptors

The application includes:

### Authentication Interceptor

Handles authentication-related HTTP logic.

### Error Handler Interceptor

Centralizes HTTP error handling.

Application flow:

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

# 📚 HANDS-ON 9 — NgRx State Management

## Topics Covered

* NgRx Store
* Actions
* Action Creators
* Reducers
* Immutable State
* Selectors
* Memoisation
* Effects
* RxJS Operators
* Async Operations
* Enrollment State Management
* Redux DevTools

## NgRx Architecture

```text
Component
    ↓
Dispatch Action
    ↓
NgRx Effect
    ↓
HTTP API
    ↓
Success Action
    ↓
Reducer
    ↓
Updated Store
    ↓
Selector
    ↓
Component
```

## Course State

```typescript
{
  courses: Course[],
  loading: boolean,
  error: string | null
}
```

## Course Actions

```text
loadCourses
loadCoursesSuccess
loadCoursesFailure
```

## Course Selectors

```text
selectAllCourses
selectCoursesLoading
selectCoursesError
```

## NgRx Effects

Effects handle asynchronous operations such as HTTP requests.

```text
Action
  ↓
Effect
  ↓
HTTP Request
  ↓
Success / Failure Action
```

Reducers remain pure functions while Effects handle side effects.

## Enrollment State

Enrollment state was migrated from service-based state management to NgRx.

The enrollment store manages:

```typescript
enrolledCourseIds: string[]
```

Actions include:

```text
enrollInCourse
unenrollFromCourse
setEnrolledCourses
```

The Course Card Component dispatches enrollment actions directly to the Store.

## Redux DevTools

Redux DevTools was configured to inspect:

* Dispatched actions
* Application state
* Reducer updates
* NgRx Effects flow

---

# 📚 HANDS-ON 10 — Angular Unit Testing

## Topics Covered

* Unit Testing
* Vitest
* Angular TestBed
* ComponentFixture
* Component Testing
* Service Testing
* Mocking Dependencies
* MockStore
* Testing Inputs
* Testing Navigation
* Testing NgRx Components
* Testing Route-Dependent Components

## Component Testing

The Course Card component was tested for:

* Component creation
* Course input data
* Course name
* Course code
* Course details toggle
* Dynamic card classes
* Navigation
* Enrollment actions

Example:

```typescript
it('should create', () => {
  expect(component).toBeTruthy();
});
```

## NgRx Component Testing

NgRx-connected components were tested using:

```typescript
provideMockStore()
```

This allows the Store to be mocked during unit testing.

## Service Testing

Services were tested using mocked dependencies.

The Course Service tests verify:

* Course retrieval
* Course detail retrieval
* Course student retrieval
* Service behaviour

## Route-Dependent Component Testing

The Course Detail component was tested using a mocked ActivatedRoute.

```typescript
snapshot: {
  paramMap: {
    get: vi.fn().mockReturnValue('1')
  }
}
```

This allows the test to simulate route parameters.

## Test Results

All tests passed successfully.

```text
Test Files  19 passed
Tests       25 passed
```

Screenshot:

```text
handson-10-angular-unit-testing-all-tests-passed.png
```

---

# 🏗️ Application Features

The Student Course Portal currently supports:

* 📚 View all courses
* 🔍 Search courses
* 📖 View course details
* 👨‍🎓 View enrolled students
* ✅ Enroll in courses
* ❌ Unenroll from courses
* 🎨 Dynamic course card styling
* 🏆 Grade status display
* 🔐 Route protection
* 🌐 REST API communication
* ⚡ Reactive state management with NgRx
* 🧪 Automated unit testing

---

# 📁 Project Structure

```text
student-course-portal/
│
├── src/
│   └── app/
│       │
│       ├── components/
│       │   ├── course-card/
│       │   ├── header/
│       │   └── notification/
│       │
│       ├── pages/
│       │   ├── course-list/
│       │   ├── course-detail/
│       │   └── student-profile/
│       │
│       ├── services/
│       │   ├── course.ts
│       │   └── enrollment.ts
│       │
│       ├── store/
│       │   │
│       │   ├── course/
│       │   │   ├── course.actions.ts
│       │   │   ├── course.reducer.ts
│       │   │   ├── course.selectors.ts
│       │   │   └── course.effects.ts
│       │   │
│       │   └── enrollment/
│       │       ├── enrollment.actions.ts
│       │       ├── enrollment.reducer.ts
│       │       └── enrollment.selectors.ts
│       │
│       ├── directives/
│       ├── pipes/
│       ├── guards/
│       ├── interceptors/
│       └── models/
│
├── public/
├── package.json
├── angular.json
├── tsconfig.json
├── .gitignore
└── README.md
```

---

# 🚀 Running the Application

## Install Dependencies

```bash
npm install
```

## Start the Angular Application

```bash
ng serve
```

The application will be available at:

```text
http://localhost:4200
```

## Start the Backend API

If JSON Server is being used:

```bash
json-server --watch db.json
```

The API will run on:

```text
http://localhost:3000
```

---

# 🧪 Running Unit Tests

Run the tests:

```bash
ng test
```

Run tests with coverage:

```bash
ng test --coverage
```

---

# 📊 Hands-On Progress

| Hands-On | Topic                             | Status      |
| -------- | --------------------------------- | ----------- |
| 1        | Angular Fundamentals              | ✅ Completed |
| 2        | Components and Templates          | ✅ Completed |
| 3        | Directives and Pipes              | ✅ Completed |
| 4        | Services and Dependency Injection | ✅ Completed |
| 5        | Routing and Navigation            | ✅ Completed |
| 6        | Forms and User Input              | ✅ Completed |
| 7        | HTTP Client and REST API          | ✅ Completed |
| 8        | Advanced Angular Features         | ✅ Completed |
| 9        | NgRx State Management             | ✅ Completed |
| 10       | Angular Unit Testing              | ✅ Completed |

---

# 🎯 Final Project Status

## 🎉 HANDS-ON 1–10 COMPLETED SUCCESSFULLY

The project demonstrates a complete Angular application developed using modern Angular development practices.

The application includes:

* Component-Based Architecture
* Standalone Components
* Data Binding
* Directives
* Custom Pipes
* Services
* Dependency Injection
* Angular Routing
* Route Guards
* HTTP Client
* REST API Integration
* HTTP Interceptors
* RxJS
* NgRx Store
* NgRx Actions
* NgRx Reducers
* NgRx Selectors
* NgRx Effects
* Redux DevTools
* Unit Testing
* MockStore
* TestBed





