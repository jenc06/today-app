# today-app iteration instructions

## context
This is a single-file Electron desktop todo app using the Eisenhower matrix.
File: today-todo.html (single HTML/CSS/JS file, no build step needed)
Stack: vanilla HTML + CSS + JS, localStorage for persistence, Electron wrapper

---

## iteration rotation — one focus area per session

1. **visual polish** — spacing, typography, color consistency, hover states
2. **focus card** — behavior edge cases, animation, all-done state, pin logic
3. **quick-add flow** — speed, keyboard feel, unclassified badge UX
4. **modal UX** — segment selectors, hint text, repeat section, edit vs create
5. **task row** — density, badge readability, actions visibility, long names
6. **empty states** — zero tasks, empty quadrants, first-time experience
7. **progress feedback** — ring animation, cumulative count, progress bar feel
8. **recurring tasks** — edge cases, due date logic, missed days, visual indicators
9. **focus mode** — collapsed view, section counts, transition feel
10. **overall flow** — open → add → complete → review full loop end to end

---

## the process — run this EVERY iteration, in order

### step 1 — read the file
Read today-todo.html fully before doing anything. Understand the current state.

### step 2 — internal team debate (PM + Design + Tech)

Simulate a real, opinionated debate between three roles. They should disagree where
they genuinely would. Do not force agreement. Each person pulls from real reasoning
about usability, aesthetics, and implementation.

**PM** — has shipped productivity tools before. Cares about retention, core loop
integrity, and whether users will actually use this consistently after day 7.
Calls out feature creep. References research on todo app abandonment when relevant.
Will cut features if they add friction. Pushes back on design when beauty hurts usability.

**Design** — cares deeply about the aesthetic and emotional experience. References
principles like progressive disclosure, visual hierarchy, signal vs noise. Pushes back
on PM when cuts hurt the experience. Will defend choices with reasoning, not just
preference. Knows the difference between minimal and broken.

**Tech** — thinks about edge cases nobody else has considered. Raises data integrity,
localStorage limits, DOM performance, and interaction bugs. Pushes back on both when
a feature sounds good but breaks in practice. Brings up specific failure scenarios.

Rules for this debate:
- Each person must raise at least one genuine concern or disagreement
- No one gets to just say "I agree with everything" — that's not how real teams work
- Pull from actual research or principles when making arguments (typography, UX heuristics,
  retention data, Eisenhower matrix psychology, etc.)
- Debate should be specific to THIS iteration's focus area AND the current state of the file

### step 3 — all-hands locked decisions
After the debate, list exactly what will change and why. Be specific.
Format: | decision | rationale |

### step 4 — external review (PM + Customer + Acquirer)

**Customer** — a UC Berkeley student (Jennifer). Overwhelmed, time-poor, uses the app
daily for coursework, research, volunteering, and internship prep. Cares about whether
opening the app makes her feel calm or stressed. Will notice if something feels off even
if she can't articulate why. Raises real daily-use scenarios — same due dates, fast task
capture between classes, checking things off late at night.

**Acquirer** — a productivity-focused investor or potential acquirer (think Notion, Linear,
or a wellness-productivity fund). Cares about retention at day 30, differentiation from
Todoist/Things, and whether the core loop creates a habit. References retention research.
Will flag anything that looks like churn risk.

**PM** — now wearing a synthesis hat. Balances the customer's emotional feedback with
the acquirer's retention lens. Makes final calls on anything the customer and acquirer
disagree on.

Rules for this review:
- Customer speaks from lived experience, not product theory
- Acquirer speaks from patterns across many productivity apps, not just this one
- They should disagree where they genuinely would (e.g. customer wants simplicity,
  acquirer wants more engagement hooks — those can conflict)
- Raise edge cases specific to Jennifer's actual usage patterns

### step 5 — final decisions locked
Consolidate everything from both debates into a final change list.
Only include changes that survived both rounds of debate.

### step 6 — implement
Make all locked changes directly in today-todo.html.
Do not remove existing features unless explicitly decided in the debate.
Fix any critical bugs noticed regardless of focus area.
Keep: cream palette, Cormorant/Jost typography, single-file structure.

### step 7 — commit
```bash
git add today-todo.html
git commit -m "iter N: [focus area] — [one line summary of biggest change]"
```

### step 8 — write iteration summary
Short summary (5-8 lines) covering:
- What the debates surfaced that wasn't obvious
- What got cut and why
- What got built and why
- Any edge cases that came up mid-implementation worth noting next iteration

---

## standing constraints (never violate these)
- Single HTML file — no build step, no external dependencies beyond Google Fonts
- Cream palette (#F0EBE1 bg), Cormorant Garamond for title/modal title, Jost for everything else
- All features from the current build must remain unless a debate explicitly removes one
- localStorage as the only persistence layer
- Test these edge cases before committing: empty list, all tasks done, 10+ tasks same due date,
  very long task name, recurring task completion, focus mode with zero "do" tasks

## pending feature requests (build these when the relevant iteration comes up)
- Scaled completion rewards: 15m task = subtle fade. 1h task = warmer moment + intentional
  completion note prompt. 3h task = full moment — focus card pulses sage, ring animates
  dramatically, quiet serif message "that was a big one."
- Plan my day mode: enter at start of day, select multiple tasks to commit to, hit "let's go",
  selected tasks get a subtle visual indicator across all quadrants, focus card only cycles
  through selected tasks.
