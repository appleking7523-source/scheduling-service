# Scheduling Service

사용자의 일정과 할 일을 보다 직관적으로 관리할 수 있도록 설계한  
스케줄링 서비스 UI/UX 프로젝트입니다.

> 일정 확인, 할 일 관리, 저장 기능을 통해  
> 사용자 중심의 일정 관리 흐름을 구현했습니다.

---

## Project Overview

| Category   | Content                         |
| ---------- | ------------------------------- |
| Project    | Scheduling Service              |
| Type       | UI/UX · Web Design · Publishing |
| Tech       | HTML · CSS · JavaScript         |
| Responsive | Desktop · Mobile                |
| Storage    | LocalStorage                    |
| Deploy     | GitHub Pages                    |

---

## Core Features

| Feature        | Description                |
| -------------- | -------------------------- |
| Onboarding     | 서비스 소개 및 시작 화면   |
| Login          | 로그인 및 회원가입 흐름    |
| Dashboard      | 일정 및 할 일 요약         |
| Schedule       | 일정 관리 기능             |
| Todo           | 할 일 추가 및 상태 관리    |
| My Page        | 사용자 정보 및 저장 데이터 |
| Responsive Web | 반응형 UI 구현             |

---

# User Flow

```mermaid
flowchart LR

    A[Start]
    --> B[Login]

    B --> C[Home Dashboard]

    C --> D[Schedule]

    C --> E[Todo]

    C --> F[My Page]

```

---

# Design Process

```mermaid
flowchart LR

    A[Research]
    --> B[User Flow]

    B --> C[Wireframe]

    C --> D[UI Design]

    D --> E[Prototype]

    E --> F[Publishing]

    F --> G[Responsive]

```

---

# Information Architecture

```mermaid
flowchart TD

    A[Scheduling Service]

    A --> B[Start]
    A --> C[Login]
    A --> D[Home]

    D --> E[Schedule]
    D --> F[Todo]
    D --> G[My Page]

    E --> E1[Calendar]
    E --> E2[Daily Schedule]

    F --> F1[Task List]
    F --> F2[Task Status]

    G --> G1[Profile]
    G --> G2[Saved Data]

```

---

# UX/UI Keywords

```mermaid
mindmap
  root((UX/UI))

    User Flow
    Dashboard
    Responsive
    Minimal UI
    Calendar
    Todo
    Interaction
    Consistency

```

---

# Tech Stack

## Frontend

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

---

## Tools

![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=flat-square&logo=githubpages&logoColor=white)

---

# Main Pages

| Page     | Description                |
| -------- | -------------------------- |
| Start    | 서비스 시작 화면           |
| Login    | 로그인 및 회원가입         |
| Home     | 일정 및 할 일 요약         |
| Schedule | 일정 관리 화면             |
| Todo     | 할 일 관리 화면            |
| My Page  | 사용자 정보 및 저장 데이터 |

---

# State Flow

```mermaid
flowchart TD

    A[User Input]
    --> B[JavaScript]

    B --> C[LocalStorage]

    C --> D[Schedule Data]
    C --> E[Todo Data]
    C --> F[User Data]

```

---

# Folder Structure

```text
scheduling-service/
├── assets
├── css
├── js
├── index.html
├── home.html
├── schedule.html
├── todo.html
├── my.html
└── README.md
```

---

# Implementation Points

| Category    | Description                          |
| ----------- | ------------------------------------ |
| UI/UX       | 사용자 흐름 기반 일정 관리 구조 설계 |
| Web Design  | 대시보드 기반 UI 구성                |
| Publishing  | HTML/CSS 기반 반응형 구현            |
| Interaction | JavaScript 기반 인터랙션 구현        |
| Storage     | LocalStorage 기반 데이터 관리        |

---

# Future Improvements

```mermaid
flowchart LR

    A[Current Version]
    --> B[Responsive Improvement]

    B --> C[Calendar Interaction]

    C --> D[Cloud Storage]

    D --> E[Advanced Service]

```

---

# What I Learned

- 사용자 흐름 기반 화면 설계 경험
- 일정 관리 서비스 구조 설계 경험
- 반응형 웹 구현 경험
- LocalStorage 기반 상태 관리 경험
- 디자인과 퍼블리싱 연결 과정 이해

---

# Links

- GitHub  
  https://github.com/appleking7523-source/scheduling-service

- Notion  
  https://decisive-colt-c78.notion.site/32ca9342f6a68078a0aafbba7632f2c8
