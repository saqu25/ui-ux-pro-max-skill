// Medicullum — "Get Matched" eligibility / program finder widget
// Renders a Contra-style multi-step "device" into any element with [data-widget].
// Facts sourced from the 2026-intake Medicullum brochures (MU-Plovdiv, MU-Sofia,
// MU-Varna, Nursing Pathways in Europe).

(function () {
  const UNIVERSITIES = {
    medicine: [
      { id: 'plovdiv', name: 'Medical University of Plovdiv', city: 'Plovdiv', tuition: '€10,000 / year', duration: '6-year MD, taught in English', intake: 'October intake', window: 'Applications March – September', tag: 'Largest medical university in Bulgaria · est. 1945' },
      { id: 'sofia', name: 'Medical University of Sofia', city: 'Sofia', tuition: '€10,000 / year', duration: '6-year MD, taught in English', intake: 'October intake', window: 'Applications March – July', tag: 'Capital city · 13+ university hospitals · est. 1917' },
      { id: 'varna', name: 'Medical University of Varna', city: 'Varna', tuition: '€10,000 / year', duration: '6-year MD, taught in English', intake: 'October intake', window: 'Applications February – March', tag: 'Black Sea coast · 1,200-bed St. Marina Hospital · est. 1961' }
    ],
    nursing: [
      { id: 'nurse-sofia', name: 'MU Sofia — Nursing (BSc)', city: 'Sofia', tuition: '€5,000 / year', duration: '4-year BSc programme', intake: '2026 intake', window: 'Documents due 27 Jul · Exam 3 Sep', tag: 'Capital city · GMC & NMC approved' },
      { id: 'nurse-plovdiv', name: 'MU Plovdiv — Nursing (BSc)', city: 'Plovdiv', tuition: '€5,000 / year', duration: '4-year BSc programme', intake: '2026 intake', window: 'Documents due 4 Sep · Exam 15 Apr', tag: 'Faculty of Public Health · early exam cycle' },
      { id: 'nurse-trakia', name: 'Trakia University, Stara Zagora — Nursing (BSc)', city: 'Stara Zagora', tuition: '€5,000 / year', duration: '4-year BSc programme', intake: '2026 intake', window: 'Documents due 10 Jun · Exam 25 Apr', tag: 'Practice-focused Medical College · early deadline advantage' }
    ]
  };

  const STEPS = ['track', 'university', 'intake', 'stage'];

  function buildState() {
    return { step: 0, track: null, university: null, intakeYear: null, stage: null };
  }

  function optionsForUniversityStep(state) {
    const list = state.track === 'nursing' ? UNIVERSITIES.nursing : UNIVERSITIES.medicine;
    return [...list.map(u => ({ value: u.id, label: u.city })), { value: 'any', label: 'No preference' }];
  }

  function screenFor(state) {
    switch (STEPS[state.step]) {
      case 'track':
        return {
          question: 'What would you like to study?',
          options: [
            { value: 'medicine', label: 'Medicine (MD)' },
            { value: 'nursing', label: 'Nursing (BSc)' }
          ],
          field: 'track'
        };
      case 'university':
        return {
          question: 'Any preferred university?',
          options: optionsForUniversityStep(state),
          field: 'university'
        };
      case 'intake':
        return {
          question: 'When do you want to start?',
          options: [
            { value: '2026', label: '2026 intake' },
            { value: '2027', label: '2027 intake' },
            { value: 'unsure', label: 'Not sure yet' }
          ],
          field: 'intakeYear'
        };
      case 'stage':
        return {
          question: 'Where are you in school right now?',
          options: [
            { value: 'final-year', label: 'Final year of high school' },
            { value: 'graduated', label: 'Already graduated' },
            { value: 'degree', label: 'Hold a Bachelor’s / other degree' }
          ],
          field: 'stage'
        };
    }
  }

  function matchResult(state) {
    const list = state.track === 'nursing' ? UNIVERSITIES.nursing : UNIVERSITIES.medicine;
    if (state.university && state.university !== 'any') {
      return list.filter(u => u.id === state.university);
    }
    return list;
  }

  function el(tag, className, html) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (html !== undefined) node.innerHTML = html;
    return node;
  }

  function render(container, state) {
    container.innerHTML = '';

    const device = el('div', 'device grain p-2 sm:p-3 max-w-xl w-full mx-auto relative overflow-hidden');

    // top bar
    const topBar = el('div', 'flex items-center justify-between px-4 pt-3 pb-2 relative z-10');
    topBar.innerHTML = `
      <div class="flex items-center gap-2 text-paper/80 font-body text-xs tracking-widest uppercase">
        <span class="w-2 h-2 rounded-full bg-accent inline-block"></span>
        Medicullum Match
      </div>
      <div class="flex items-center gap-1" aria-hidden="true">
        <span class="w-1.5 h-1.5 rounded-full bg-paper/30"></span>
        <span class="w-1.5 h-1.5 rounded-full bg-paper/30"></span>
        <span class="w-1.5 h-1.5 rounded-full bg-accent"></span>
      </div>`;
    device.appendChild(topBar);

    // screen
    const screenWrap = el('div', 'px-3 pb-3 relative z-10');
    const screen = el('div', 'device-screen min-h-[280px] sm:min-h-[300px] p-6 flex flex-col');
    screenWrap.appendChild(screen);
    device.appendChild(screenWrap);

    if (state.step < STEPS.length) {
      const data = screenFor(state);
      const q = el('p', 'font-display text-xl sm:text-2xl text-ink mb-5 leading-snug');
      q.textContent = data.question;
      screen.appendChild(q);

      const list = el('div', 'flex flex-col gap-2 flex-1');
      data.options.forEach((opt) => {
        const selected = state[data.field] === opt.value;
        const btn = el('button', `option-btn text-left font-body text-sm sm:text-base border border-ink/15 rounded-xl px-4 py-3 hover:border-ink/40 ${selected ? 'is-selected' : 'bg-white/60 text-ink'}`, opt.label);
        btn.type = 'button';
        btn.addEventListener('click', () => {
          state[data.field] = opt.value;
          if (data.field === 'track') state.university = null;
          state.step += 1;
          render(container, state);
        });
        list.appendChild(btn);
      });
      screen.appendChild(list);
    } else {
      const matches = matchResult(state);
      const heading = el('p', 'font-body text-xs tracking-widest uppercase text-primary mb-2', 'You’re matched with');
      screen.appendChild(heading);
      const title = el('p', 'font-display text-xl sm:text-2xl text-ink mb-4 leading-snug');
      title.textContent = matches.length > 1 ? `${matches.length} Bulgarian universities` : matches[0].name;
      screen.appendChild(title);

      const cardWrap = el('div', 'flex flex-col gap-2 overflow-y-auto flex-1 pr-1');
      matches.forEach((u) => {
        const card = el('div', 'border border-ink/10 rounded-xl p-3 bg-white/70');
        card.innerHTML = `
          <p class="font-body font-semibold text-ink text-sm">${u.name}</p>
          <p class="font-body text-xs text-ink/60 mt-0.5">${u.duration} · ${u.tuition}</p>
          <p class="font-body text-xs text-primary mt-0.5">${u.tag}</p>`;
        cardWrap.appendChild(card);
      });
      screen.appendChild(cardWrap);
    }

    // controls
    const controls = el('div', 'flex items-center justify-between px-4 pb-4 pt-1 relative z-10');

    const dots = el('div', 'flex items-center gap-1.5');
    STEPS.forEach((_, i) => {
      dots.appendChild(el('span', `device-dot ${i === state.step ? 'is-active' : ''}`));
    });
    dots.appendChild(el('span', `device-dot ${state.step >= STEPS.length ? 'is-active' : ''}`));

    const btnGroup = el('div', 'flex items-center gap-2');

    const resetBtn = el('button', 'tap-btn font-body text-xs uppercase tracking-widest text-paper/70 hover:text-paper border border-paper/20 rounded-full px-4 py-2', 'Reset');
    resetBtn.type = 'button';
    resetBtn.addEventListener('click', () => {
      Object.assign(state, buildState());
      render(container, state);
    });
    btnGroup.appendChild(resetBtn);

    if (state.step >= STEPS.length) {
      const cta = el('a', 'tap-btn font-body text-xs uppercase tracking-widest bg-accent text-ink rounded-full px-5 py-2 font-semibold', 'Talk to an advisor');
      cta.href = 'contact.html?track=' + encodeURIComponent(state.track || '');
      btnGroup.appendChild(cta);
    } else if (state.step > 0) {
      const backBtn = el('button', 'tap-btn font-body text-xs uppercase tracking-widest text-paper/70 hover:text-paper border border-paper/20 rounded-full px-4 py-2', 'Back');
      backBtn.type = 'button';
      backBtn.addEventListener('click', () => { state.step -= 1; render(container, state); });
      btnGroup.appendChild(backBtn);
    }

    controls.appendChild(dots);
    controls.appendChild(btnGroup);
    device.appendChild(controls);

    const stepLabel = el('p', 'text-center font-body text-[11px] tracking-[0.2em] uppercase text-paper/40 pb-3 relative z-10');
    stepLabel.textContent = `Step ${Math.min(state.step + 1, STEPS.length + 1)} — ${STEPS.length + 1}`;
    device.appendChild(stepLabel);

    container.appendChild(device);
  }

  function init() {
    document.querySelectorAll('[data-widget]').forEach((container) => {
      const state = buildState();
      render(container, state);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
