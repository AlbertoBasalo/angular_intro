# _Astro bookings_ feature tasks

> A website for space travel reservations.

## 0. Application, module, and root component.

- [x] Know the structure of the application
- [x] Run the application
- [x] Clean root component
- [x] Install a CSS framework (_picocss_)
- [x] Root layout (header-main-footer)

## 1. Templates

- [x] Show agencies counter
- [x] List all
- [x] Show agency details
- [x] Active agencies in bold, pending agencies in italic
- [x] Show an icon to indicate different operation ranges
- [x] Show trips counter
- [x] List all trips
- [x] Show trip details
- [x] Confirmed trips in green, waiting trips in orange
- [x] Show an icon to indicate the trip kind

## 2. Components

- [x] Move the header node to a new component
- [x] Move the footer node to a new component
- [x] Create a Home module
- [x] Move the main node to the Home component
- [x] Create components for agencies and trips
- [x] Create a Shared module
- [x] Move the reloading content to a component on the Shared module

## 3. Routes

- [x] Route for home page (/) bind to HomeComponent
- [x] Route for an about page (`/about`) to AboutModule
- [x] Route for an contact page (`/contact`) bind lazy to ContactModule
- [x] Route for a register page (`auth/register`) bind lazy to RegisterModule
- [x] Route for a login page (`auth/login`) bind lazy to LoginModule
- [x] Route for an agencies page (`/agencies`) bind lazy to AgenciesModule
- [x] Route for a page to create a new agency (`/agencies/new`) bind lazy to AgencyModule
- [x] Route for a parametric agency page (`/agencies/:id`) bind lazy to AgencyModule
