# DevPass Database Schema

## Core Principle

DevPass separates three types of data:

1. GitHub-imported data
2. User-created data
3. AI-generated data

These data sources must never silently overwrite one another.

## Initial Entities

- Users
- Projects
- ProjectScreenshots
- Notes
- LearningItems
- Certifications
- GitHubAccounts
- GitHubRepositories
- GitHubCommits
- GitHubLanguages
- Reports
- AIReviews

## Core Relationships

User
└── Projects
└── Notes
└── LearningItems
└── Certifications
└── GitHubAccount
    └── GitHubRepositories
        ├── GitHubCommits
        └── GitHubLanguages
└── Reports
└── AIReviews