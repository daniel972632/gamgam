# Gamgam PRD

## Product Overview

Gamgam is a collaborative travel planning platform focused on the excitement of planning a trip before departure.

Unlike traditional travel apps that focus on booking hotels, flights, or tickets, Gamgam focuses on the planning experience itself.

The primary goal is to make trip planning collaborative, visual, and enjoyable.

---

# Problem

Most travel planning today happens across multiple disconnected tools.

Users typically use:

* Google Maps
* Notion
* KakaoTalk
* Instagram
* Notes app

As a result:

* Information becomes fragmented
* Group discussions become difficult to track
* Final itineraries are hard to organize

---

# Vision

Planning a trip should be as enjoyable as the trip itself.

Gamgam helps groups collect ideas, organize schedules, and build travel plans together in one shared workspace.

---

# Target Users

## Primary

* Friends planning trips together
* Couples planning vacations
* Small groups (2-8 people)

## Secondary

* Family travel planning
* Study abroad travel
* Business trip coordination

---

# Core Features

## 1. Trip Creation

Users can create a trip.

Fields:

* Trip Name
* Destination
* Start Date
* End Date
* Cover Image

---

## 2. Shared Workspace

Each trip has a shared workspace.

Members can:

* View itinerary
* Add places
* Edit schedules
* Leave comments

---

## 3. Invitation System

Users can invite members through:

* Shareable URL
* Email invitation

Roles:

* Owner
* Editor
* Viewer

---

## 4. Itinerary Builder

Trips are organized by day.

Example:

Day 1

* Airport
* Hotel
* Lunch
* Museum

Day 2

* Cafe
* Beach
* Dinner

Features:

* Drag and drop ordering
* Time assignment
* Notes

---

## 5. Card-Based Schedule

Each destination is represented as a card.

Card Fields:

* Title
* Address
* Category
* Image
* Memo
* Time
* Cost (optional)

Categories:

* Food
* Cafe
* Activity
* Hotel
* Transportation
* Shopping
* Nature
* Custom

---

## 6. Map View

Users can view itinerary locations on a map.

Features:

* Marker display
* Daily route visualization
* Quick navigation

---

## 7. Time Conflict Detection

When schedules overlap:

* Warning message displayed
* User can adjust schedule

---

## 8. Real-Time Collaboration

Changes are synchronized across members.

Examples:

* Add card
* Delete card
* Update card
* Reorder card

---

## 9. Comments

Users can comment on:

* Entire trip
* Individual schedule card

---

# MVP Scope

Included:

* Authentication
* Trip creation
* Shared workspace
* Invitation link
* Card-based itinerary
* Drag-and-drop ordering
* Map integration
* Realtime updates

Excluded:

* Flight booking
* Hotel booking
* Payments
* AI recommendations
* Offline mode

---

# Future Features

## AI Planning Assistant

Generate suggested itineraries.

## Budget Tracking

Track total expenses.

## Transportation Optimization

Suggest optimal travel routes.

## Travel Memories

Convert itinerary into travel journal after trip completion.

---

# Success Metrics

* Trip creation count
* Active collaborative trips
* Average itinerary items per trip
* Member invitation rate
* Weekly active users

---

# Technical Stack

Frontend:

* Next.js
* TypeScript
* Tailwind CSS
* shadcn/ui

Backend:

* Next.js Server Actions

Database:

* PostgreSQL
* Prisma

Infrastructure:

* Supabase
* Vercel

Maps:

* Google Maps API
