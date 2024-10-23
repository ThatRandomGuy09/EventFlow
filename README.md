# Event Flow

Event Flow is a personal scheduling tool designed to streamline the process of creating events and scheduling calls, with seamless integration to Google Calendar. The core functionality is similar to Calendly but tailored for personal use, allowing users to book calls at available time slots while preventing overbooking by dynamically updating the calendar.

## Overview

With Event Flow, you can:
- Create and manage events.
- Allow others to schedule calls based on your availability.
- Automatically update your Google Calendar when a call is scheduled.
- Prevent double-booking by removing occupied time slots from the calendar.
- Restrict access to the events management page for authorized users only.

## Tech Stack

- **Next.js**: Used for building the web application with server-side rendering and a React-based framework.
- **TypeScript**: Ensures type safety and better development experience.
- **PostgreSQL**: Database for storing events and user data.
- **Drizzle ORM**: Used as the ORM for interacting with the database.
- **Shadcn UI**: Provides modular and reusable components for the user interface.
- **Tailwind CSS**: Utility-first CSS framework used for designing responsive and modern interfaces.

## Features

1. **Event Management**:
   - Create, update, and delete events.
   - Events page is restricted to authorized users for managing availability.

2. **Booking System**:
   - Allows users to schedule calls with you based on available slots.
   - Automatically integrates with Google Calendar for real-time updates.
   - Prevents double-booking by removing already booked time slots from the available calendar.

3. **Google Calendar Integration**:
   - Automatically updates your Google Calendar when a call is scheduled.
   - Reflects booked slots as unavailable to others trying to schedule at the same time.

## Getting Started

### Prerequisites
- Node.js
- PostgreSQL
- Google Cloud account (for Google Calendar API integration)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/event-flow.git
   cd event-flow
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up your environment variables in a `.env` file:
   - Include settings for PostgreSQL connection.
   - Configure Google Calendar API credentials.

4. Run database migrations:
   ```bash
   npm run migrate
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open `http://localhost:3000` in your browser to see the app in action.

## Configuration

- **Google Calendar Integration**: You need to set up the Google Calendar API and obtain credentials to integrate with your calendar.

## Usage

1. **Event Creation**: Create events through the admin interface.
2. **Scheduling a Call**: Share your booking page with others, who can then schedule a call based on available slots.
3. **Google Calendar Update**: When a call is booked, it will automatically appear on your Google Calendar, and the slot will no longer be available for other bookings.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


