# Gamgam Features Specification

## Product Goal

Gamgam helps people collaboratively plan trips.

The focus is not booking.

The focus is planning, organizing, and sharing travel ideas.

---

# Screen 1: Landing Page

## Purpose

Introduce the product and encourage users to create a trip.

## Components

### Hero Section

* Product name
* Short tagline
* Create Trip button
* Demo preview image

Example tagline:

"Planning the trip is half the fun."

---

### Features Section

Show 3 key features:

* Collaborative planning
* Visual itinerary builder
* Real-time updates

---

### CTA Section

Primary button:

* Create a Trip

Secondary button:

* Explore Demo

---

# Screen 2: Authentication

## Login

Methods:

* Google
* Email

## Signup

Methods:

* Google
* Email

---

# Screen 3: Dashboard

## Purpose

Show all trips belonging to the user.

## Components

### Header

* User avatar
* Notifications
* Create Trip button

### Search Bar

Search trips by:

* Trip title
* Destination

### Trip Grid

Trip Card contains:

* Cover image
* Trip title
* Destination
* Date range
* Member count

Actions:

* Open trip
* Delete trip
* Duplicate trip

---

# Screen 4: Create Trip

## Fields

Trip Name

Destination

Start Date

End Date

Cover Image

Trip Description (optional)

## Actions

Create Trip

Cancel

---

# Screen 5: Trip Workspace

## Purpose

Main planning area.

This is the core screen of the product.

---

## Layout

Desktop

Left:

* Day Navigation

Center:

* Itinerary Timeline

Right:

* Map Panel

Mobile

Top:

* Day Selector

Middle:

* Schedule Cards

Bottom:

* Map Toggle

---

# Day Navigation

Example

Day 1

Day 2

Day 3

Add Day Button

---

# Itinerary Timeline

Display schedule cards in chronological order.

Each card can be reordered using drag and drop.

---

# Schedule Card

Fields

Place Name

Time

Category

Memo

Image

Estimated Cost

Creator

---

## Actions

Edit

Delete

Duplicate

Move to Another Day

---

# Add Schedule Item

## Input Fields

Place Search

Custom Title

Category

Start Time

End Time

Memo

Cost

Image

---

## Categories

Food

Cafe

Hotel

Activity

Transportation

Shopping

Nature

Custom

---

# Time Conflict Detection

When two schedule items overlap:

Display warning message.

Example:

"Two activities overlap between 2:00 PM and 3:00 PM."

---

# Screen 6: Map View

## Purpose

Visualize trip locations.

## Features

Map Markers

Marker Clustering

Daily Route Visualization

Location Preview

Directions Link

---

# Screen 7: Collaboration

## Members

Owner

Editor

Viewer

---

## Invite User

Methods

Invite Link

Email Invitation

---

## Member List

Avatar

Name

Role

Online Status

---

# Realtime Features

Show updates instantly when:

Schedule created

Schedule edited

Schedule deleted

Schedule reordered

Member joined

Member left

---

# Screen 8: Comments

## Trip Comment

General discussion area.

Example

"Should we visit this cafe on Day 2?"

---

## Schedule Comment

Comment directly on a schedule card.

Example

"This restaurant requires reservations."

---

# Screen 9: Notifications

## Notification Types

Invitation Accepted

New Comment

Schedule Updated

Trip Updated

Member Joined

---

# Screen 10: Profile

## User Information

Profile Image

Name

Email

---

## Settings

Notification Preferences

Language

Account Settings

Logout

---

# MVP Release Scope

Included

✓ Authentication

✓ Dashboard

✓ Trip Creation

✓ Shared Workspace

✓ Schedule Cards

✓ Drag and Drop

✓ Map View

✓ Member Invitation

✓ Realtime Sync

✓ Comments

Excluded

✗ AI Planner

✗ Budget Tracking

✗ Transportation Optimization

✗ Offline Mode

✗ Mobile App

✗ Travel Journal

---

# Future Features

## AI Trip Planner

Generate schedules automatically.

---

## Budget Manager

Track expenses.

Calculate total budget.

---

## Transportation Assistant

Estimate travel times.

Suggest optimal routes.

---

## Travel Journal

Convert itinerary into post-trip memories.

Photos

Notes

Timeline

---

# Success Criteria

User can:

Create a trip within 1 minute.

Invite friends within 30 seconds.

Build a complete itinerary without external tools.

Collaborate with others in real time.

View all planned destinations on a map.
