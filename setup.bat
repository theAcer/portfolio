@echo off

rem Create directories
mkdir src\app\api\skills
mkdir src\app\projects
mkdir src\app\skills
mkdir src\app\contact
mkdir src\components\ui
mkdir src\pages
mkdir src\lib
mkdir src\styles

rem Create files
type nul > src\app\globals.css
type nul > src\app\layout.tsx
type nul > src\app\page.tsx
type nul > src\app\api\skills\route.ts
type nul > src\app\projects\page.tsx
type nul > src\app\skills\page.tsx
type nul > src\app\contact\page.tsx
type nul > src\components\ui\button.tsx
type nul > src\components\ui\card.tsx
type nul > src\components\ui\dropdown-menu.tsx
type nul > src\components\main-nav.tsx
type nul > src\components\mode-toggle.tsx
type nul > src\components\theme-provider.tsx
type nul > src\pages\HomePage.tsx
type nul > src\pages\ProjectsPage.tsx
type nul > src\pages\SkillsPage.tsx
type nul > src\pages\ContactPage.tsx
type nul > src\lib\utils.ts
type nul > src\styles\animations.css

echo Directories and files created successfully!
pause
