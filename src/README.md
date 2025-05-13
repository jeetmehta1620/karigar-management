# Karigar Management System

## Overview
The Karigar Management System is an Angular application designed to manage job cards efficiently. This system allows users to create, view, edit, and delete job cards, providing a comprehensive solution for managing tasks and workflows.

## Features
- **Job Card Management**: Create, edit, and delete job cards.
- **Detailed View**: View detailed information about each job card.
- **Responsive Design**: Built with Angular Material for a modern UI experience.
- **Reactive Forms**: Utilizes reactive forms with validations for data entry.
- **Lazy Loading**: Implements lazy loading for the Job Card module to enhance performance.

## Project Structure
The project follows a folder-by-feature structure, making it easy to navigate and maintain. Below is the structure of the project:

```
karigar-management
├── src
│   ├── app
│   │   ├── app-routing.module.ts
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   └── job-card
│   │       ├── job-card-routing.module.ts
│   │       ├── job-card.module.ts
│   │       ├── components
│   │       │   ├── job-card-detail
│   │       │   │   ├── job-card-detail.component.html
│   │       │   │   ├── job-card-detail.component.scss
│   │       │   │   └── job-card-detail.component.ts
│   │       │   ├── job-card-form
│   │       │   │   ├── job-card-form.component.html
│   │       │   │   ├── job-card-form.component.scss
│   │       │   │   └── job-card-form.component.ts
│   │       │   └── job-card-list
│   │       │       ├── job-card-list.component.html
│   │       │       ├── job-card-list.component.scss
│   │       │       └── job-card-list.component.ts
│   │       ├── models
│   │       │   └── job-card.model.ts
│   │       ├── services
│   │       │   └── job-card.service.ts
│   │       └── types
│   │           └── job-card.interface.ts
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

## Getting Started
To get started with the Karigar Management System, follow these steps:

1. **Clone the Repository**: 
   ```
   git clone <repository-url>
   ```

2. **Navigate to the Project Directory**: 
   ```
   cd karigar-management
   ```

3. **Install Dependencies**: 
   ```
   npm install
   ```

4. **Run the Application**: 
   ```
   ng serve
   ```

5. **Access the Application**: Open your browser and navigate to `http://localhost:4200`.

## Technologies Used
- Angular
- Angular Material
- TypeScript
- SCSS

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.