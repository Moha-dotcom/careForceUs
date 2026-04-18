# CareFinder — 30 Day Build Plan (Backend + Frontend)

---

## Completed ✅
- Connect to database
- Build schema for Companies, Users, FavoriteCompanies
- Push all company data to the database
- Filter companies by city or zipCode (`GET /companies?city=&zipCode=`)
- Module-based project structure
- Global error handler
- Git setup + pushed to GitHub

---

## Week 1 — Auth Backend + Landing Page & Auth UI (Days 1–7)

### Day 1 — Auth Module Setup + Landing Page Design
**Backend**
- [ ] Create `src/modules/auth/` folder with empty files (repository, service, controller, routes)
- [ ] Install `bcrypt`, `@types/bcrypt`, `jsonwebtoken`, `@types/jsonwebtoken`

**Frontend (v0)**
- [ ] Design the Landing Page in v0
  - Hero section: headline, subheadline, search bar (city or zip)
  - How it works section (3 steps)
  - Call to action: "Sign up free"
- [ ] Export and save the component

---

### Day 2 — Register Endpoint + Register Page
**Backend**
- [ ] `POST /auth/register` — hash password, create user, return user without password
- [ ] Handle duplicate email/username errors

**Frontend (v0)**
- [ ] Design the Register page in v0
  - Fields: username, email, password
  - Submit button
  - Link to login page
- [ ] Export and save the component

---

### Day 3 — Login Endpoint + Login Page
**Backend**
- [ ] `POST /auth/login` — verify password, return JWT token
- [ ] Return 401 if credentials are wrong

**Frontend (v0)**
- [ ] Design the Login page in v0
  - Fields: email, password
  - Submit button
  - Link to register page
- [ ] Export and save the component

---

### Day 4 — JWT Middleware + Navigation Bar
**Backend**
- [ ] Build `src/middleware/auth.ts` — verify JWT from Authorization header
- [ ] Return 401 if token is missing or invalid

**Frontend (v0)**
- [ ] Design the Navbar in v0
  - Logo / app name
  - Links: Home, Search, Favorites
  - Auth state: show Login/Register when logged out, show username + logout when logged in
- [ ] Export and save the component

---

### Day 5 — Protect Routes + Connect Register UI to API
**Backend**
- [ ] Apply auth middleware to favorites and tag routes
- [ ] Test unauthenticated requests return 401

**Frontend**
- [ ] Wire up Register form to `POST /auth/register`
- [ ] On success redirect to login page
- [ ] Show error message if email already exists

---

### Day 6 — Extend Request Type + Connect Login UI to API
**Backend**
- [ ] Create `src/types/express.d.ts` — add `user` to Express `Request` type

**Frontend**
- [ ] Wire up Login form to `POST /auth/login`
- [ ] Save JWT token to localStorage
- [ ] On success redirect to search page
- [ ] Show error message on wrong credentials

---

### Day 7 — Auth Cleanup + Auth Flow Testing
**Backend**
- [ ] Manually test: register → login → use token → access protected route
- [ ] Commit to `feature/auth`, merge to main

**Frontend**
- [ ] Test full auth flow in browser: register → login → navbar updates → logout clears token
- [ ] Fix any UI bugs
- [ ] Commit frontend auth components

---

## Week 2 — Validation & Favorites Backend + Search & Favorites UI (Days 8–14)

### Day 8 — Zod Setup + Search Page Design
**Backend**
- [ ] Install `zod`
- [ ] Create `src/middleware/validate.ts` — reusable validation middleware

**Frontend (v0)**
- [ ] Design the Company Search page in v0
  - Search bar: city and/or zip code inputs
  - Search button
  - Results list (company cards)
  - Empty state when no results
- [ ] Export and save the component

---

### Day 9 — Validate Auth Inputs + Company Card Component
**Backend**
- [ ] Zod schema for register and login
- [ ] Apply validation middleware to auth routes

**Frontend (v0)**
- [ ] Design the Company Card component in v0
  - Company name
  - Address, city, state, zip
  - Phone number (clickable `tel:` link)
  - License type badge
  - "Save to Favorites" button
- [ ] Export and save the component

---

### Day 10 — Validate Company Filters + Wire Up Search
**Backend**
- [ ] Zod schema for company query params
- [ ] Apply to `GET /companies`

**Frontend**
- [ ] Wire up search form to `GET /companies?city=&zipCode=`
- [ ] Render company cards from API response
- [ ] Show loading state while fetching
- [ ] Show "no results" message if empty

---

### Day 11 — Favorites Module + Favorites Page Design
**Backend**
- [ ] `GET /favorites` — get logged-in user's favorites with company info

**Frontend (v0)**
- [ ] Design the Favorites page in v0
  - List of saved companies
  - Each card shows company info + current tag status
  - Empty state: "You haven't saved any companies yet"
- [ ] Export and save the component

---

### Day 12 — Add & Remove Favorites + Wire Up Save Button
**Backend**
- [ ] `POST /favorites` — add company to favorites
- [ ] `DELETE /favorites/:companyId` — remove from favorites

**Frontend**
- [ ] Wire up "Save to Favorites" button on company card
- [ ] Toggle button state: saved vs not saved
- [ ] Remove company from favorites page when deleted

---

### Day 13 — Validate Favorites + Wire Up Favorites Page
**Backend**
- [ ] Zod schema for add favorite (companyId must be UUID)

**Frontend**
- [ ] Wire up Favorites page to `GET /favorites`
- [ ] Render favorites with company info
- [ ] Handle unauthenticated users: redirect to login

---

### Day 14 — Favorites Cleanup + Commit
**Backend**
- [ ] Commit to `feature/favorites`, merge to main

**Frontend**
- [ ] Test search → save → view favorites flow end to end
- [ ] Commit all favorites UI components

---

## Week 3 — Tag System Backend + Pipeline UI (Days 15–21)

### Day 15 — Tag Endpoint + Tag Dropdown Design
**Backend**
- [ ] `PATCH /favorites/:companyId/tag` — update tag on a favorite

**Frontend (v0)**
- [ ] Design the Tag Dropdown component in v0
  - Dropdown with all 8 tag options
  - Each tag has a color (e.g. green for POSITION_AVAILABLE, blue for INTERVIEW)
  - Currently selected tag shown with badge
- [ ] Export and save the component

---

### Day 16 — Validate Tags + Wire Up Tag Dropdown
**Backend**
- [ ] Zod enum with all 8 tag values

**Frontend**
- [ ] Wire up tag dropdown to `PATCH /favorites/:companyId/tag`
- [ ] Update tag badge instantly on change (optimistic update)
- [ ] Show error if update fails

---

### Day 17 — Filter Favorites by Tag + Pipeline View Design
**Backend**
- [ ] `GET /favorites?tag=CALLED` — filter favorites by tag

**Frontend (v0)**
- [ ] Design the Pipeline View page in v0
  - Tab bar or sidebar with all 8 tag categories
  - Each tab shows companies with that tag
  - Looks like a kanban/pipeline tracker
- [ ] Export and save the component

---

### Day 18 — Tag Summary Endpoint + Summary Widget
**Backend**
- [ ] `GET /favorites/summary` — count of favorites per tag

**Frontend (v0)**
- [ ] Design the Summary Widget in v0
  - Shows count per tag: "5 Called · 3 Answered · 1 Interview"
  - Progress bar or visual indicator
- [ ] Wire up to `GET /favorites/summary`

---

### Day 19 — Pipeline View Wired Up
**Backend**
- [ ] Test full tag pipeline: add → tag → update tag → filter by tag

**Frontend**
- [ ] Wire up Pipeline View tabs to `GET /favorites?tag=`
- [ ] Clicking a tab loads companies with that tag
- [ ] Dragging or updating tag moves company to new tab

---

### Day 20 — Authorization + Protect Frontend Routes
**Backend**
- [ ] Return 403 Forbidden when user tries to modify another user's favorites

**Frontend**
- [ ] Redirect unauthenticated users away from Favorites and Pipeline pages
- [ ] Handle 401/403 responses globally: redirect to login

---

### Day 21 — Tag Cleanup + Commit
**Backend**
- [ ] Commit to `feature/tags`, merge to main

**Frontend**
- [ ] Test full user journey end to end:
  Register → Login → Search → Save → Tag → View Pipeline
- [ ] Commit all pipeline/tag UI components

---

## Week 4 — Polish, Security & Deploy (Days 22–30)

### Day 22 — Pagination Backend + Load More UI
**Backend**
- [ ] Add `page` and `limit` to `GET /companies`
- [ ] Return total count in response

**Frontend**
- [ ] Add "Load More" button or pagination controls to search results
- [ ] Wire up to page/limit params

---

### Day 23 — Company Search Improvements + Filter UI
**Backend**
- [ ] Filter by license type
- [ ] Sort by company name

**Frontend (v0)**
- [ ] Design filter panel in v0
  - License type dropdown
  - Sort order toggle
- [ ] Wire up filters to API query params

---

### Day 24 — Consistent API Responses + Error Toast UI
**Backend**
- [ ] Review every endpoint for consistent response shape

**Frontend (v0)**
- [ ] Design Toast notification component in v0
  - Success toast (green)
  - Error toast (red)
- [ ] Use toasts everywhere instead of console.log for user feedback

---

### Day 25 — Environment & Config + API Client Setup
**Backend**
- [ ] Create `.env.example`
- [ ] Add PORT, JWT_SECRET, JWT_EXPIRES_IN env vars

**Frontend**
- [ ] Create a central API client file (`src/lib/api.ts`)
- [ ] All fetch calls go through it — sets base URL and attaches JWT automatically
- [ ] No more scattered fetch calls across components

---

### Day 26 — Security + Loading States
**Backend**
- [ ] Install and configure `helmet`
- [ ] Install and configure `express-rate-limit` on auth routes

**Frontend**
- [ ] Add loading spinners to all API calls
- [ ] Disable buttons while requests are in flight
- [ ] Prevent double submits on forms

---

### Day 27 — Error Handling + Empty States
**Backend**
- [ ] Custom error classes: `NotFoundError`, `UnauthorizedError`
- [ ] Update error handler to return proper status codes

**Frontend (v0)**
- [ ] Design empty state illustrations for:
  - No search results
  - No favorites yet
  - No companies in a tag category

---

### Day 28 — README + About Page
**Backend**
- [ ] Write `README.md` — what it is, why you built it, how to run it, all endpoints

**Frontend (v0)**
- [ ] Design an About page
  - The story: your sister, DSP jobs, the commute problem
  - Why CareFinder exists
  - This is your pitch — it matters

---

### Day 29 — Final Testing
**Backend + Frontend**
- [ ] Full end-to-end test of every feature
- [ ] Fix any broken flows
- [ ] Final commits on all branches, merge everything to main

---

### Day 30 — Ship It
**Backend**
- [ ] Deploy API to Railway or Render (free tier)

**Frontend**
- [ ] Deploy frontend to Vercel (free tier, works great with v0/Next.js)
- [ ] Connect frontend to deployed API URL
- [ ] Add live URLs to README and GitHub

---

## Future (After 30 Days)
- [ ] Password reset via email
- [ ] Admin route to upload new company data
- [ ] Map view showing companies near you
- [ ] Mobile app for DSP workers on the go

---

> **Interview tip:** When asked about this project, lead with the story —
> your sister, the commute problem, the DSP job market.
> Then walk through the architecture. Product thinking + empathy + execution
> is what separates you from candidates who just built a CRUD app.
