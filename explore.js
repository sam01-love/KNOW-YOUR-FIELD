const FIELDS = [
    { name: 'Medicine', icon: '⚕️', cat: 'Healthcare', group: 'Healthcare', academic: ['Credits in Biology, Chemistry, Physics, Mathematics & English (WAEC/NECO)', 'JAMB score of 280+ typically required by top universities', 'Post-UTME cut-off of 60%+ at most institutions', 'Further Mathematics is a strong competitive advantage'], skill: ['Basic laboratory skills and scientific observation', 'Clear written and verbal communication with patients', 'Ability to memorise and apply complex medical terminology', 'Research methodology and evidence-based analysis'], character: ['Deep empathy and genuine compassion for people', 'Calm composure under pressure and in emergencies', 'Unwavering integrity and adherence to medical ethics', 'Commitment to lifelong learning and self-improvement'] },
    { name: 'Law', icon: '⚖️', cat: 'Legal & Justice', group: 'Arts', academic: ['Five credits including English Language and Government or Literature', 'JAMB score of 250+ for Law faculties', 'Strong grades in Social Studies, CRS/IRS, and Economics', 'Excellent command of written and spoken English is essential'], skill: ['Excellent reading comprehension and legal research', 'Persuasive writing and structured argumentation', 'Critical thinking and logical analysis of evidence', 'Public speaking, moot court, and debate skills'], character: ['Unwavering commitment to justice and fairness', 'High emotional intelligence and patience', 'Strict discretion and confidentiality', 'Tenacity and resilience in complex cases'] },
    { name: 'Engineering', icon: '🏗️', cat: 'Applied Sciences', group: 'STEM', academic: ['Credits in Mathematics, Physics, Chemistry, English & Technical Drawing', 'JAMB score of 240+ for engineering faculties', 'Further Mathematics strongly recommended', 'High grades in Physics and Maths are most critical'], skill: ['Advanced mathematical problem-solving', 'CAD and technical drawing fundamentals', 'Programming basics (Python, MATLAB)', 'Systems thinking and design principles'], character: ['Methodical and detail-oriented mindset', 'Creative approach to structural problem-solving', 'Strong collaboration with multidisciplinary teams', 'Persistence through repeated trial and error'] },
    { name: 'Computer Science', icon: '💻', cat: 'Technology & ICT', group: 'STEM', academic: ['Credits in Mathematics, Physics, English & Computer Studies', 'JAMB score of 200–240+ depending on institution', 'Further Mathematics is a strong advantage', 'Good performance in Data Processing where available'], skill: ['Logical thinking and algorithm design', 'Programming in Python, Java, or C++', 'Understanding of networks and operating systems', 'Adapting quickly to new technologies and frameworks'], character: ['Curiosity and love for continuous learning', 'Patience and persistence when debugging problems', 'Ethical use of technology and respect for privacy', 'Creative thinking beyond conventional solutions'] },
    { name: 'Accounting', icon: '💰', cat: 'Business & Finance', group: 'Business', academic: ['Credits in Mathematics, English, Economics, Commerce & Accounting', 'JAMB score of 200+ for Business/Accounting programmes', 'ICAN professional path begins from SS level', 'Commerce and Economics are most critical subjects'], skill: ['Numerical accuracy and attention to fine detail', 'Spreadsheet proficiency (Microsoft Excel)', 'Financial reporting and bookkeeping procedures', 'Data interpretation and trend analysis'], character: ['Absolute integrity and ethical professional conduct', 'Orderly, systematic, and disciplined approach to work', 'Discretion with sensitive financial information', 'Patience for precise, repetitive analytical work'] },
    { name: 'Architecture', icon: '🏛️', cat: 'Built Environment', group: 'STEM', academic: ['Credits in Mathematics, Physics, Fine Art, English & Technical Drawing', 'JAMB score of 200–240+', 'Creative portfolio often required at interview stage', 'Geography is a helpful supporting subject'], skill: ['Freehand and technical drawing', '3D spatial visualisation and modelling', 'Computer-aided design — AutoCAD fundamentals', 'Understanding of structures, materials, and load'], character: ['Strong aesthetic sensibility and creative vision', 'Meticulous precision and attention to detail', 'Ability to balance creativity with functional constraints', 'Collaborative spirit with engineers and clients'] },
    { name: 'Nursing', icon: '🩺', cat: 'Healthcare', group: 'Healthcare', academic: ['Credits in Biology, Chemistry, English & two more science subjects', 'JAMB score of 180–220+', 'Basic Health Science and Human Biology are advantageous', 'Chemistry and Biology are the most critical subjects'], skill: ['Clinical observation and patient care techniques', 'Clear documentation and medical record-keeping', 'Basic first aid and emergency response protocols', 'Patient education and health communication'], character: ['Genuine compassion and emotional warmth for patients', 'Composure and calmness in clinical environments', 'Physical and mental stamina for demanding shifts', 'Deep respect for human dignity and cultural sensitivity'] },
    { name: 'Education', icon: '🎓', cat: 'Teaching & Training', group: 'Arts', academic: ['Credits in English, Mathematics & three subjects in your teaching area', 'JAMB score of 180–200+', 'Strong subject knowledge in your area of specialisation', 'Any subject can pair with education for specialisation'], skill: ['Clear and engaging verbal communication', 'Lesson planning and curriculum design', 'Classroom management and behaviour strategies', 'Use of educational technology tools'], character: ['Deep patience and genuine love for young people', 'Adaptability to different learning styles', 'Commitment to continuous self-development', 'Positive role model behaviour at all times'] },
    { name: 'Mass Communication', icon: '📡', cat: 'Media & Communication', group: 'Arts', academic: ['Credits in English Language, Literature & three other subjects', 'JAMB score of 180–220+', 'Government, History, and CRS are useful supporting subjects', 'A-level English is a strong asset'], skill: ['Excellent writing, grammar, and storytelling', 'Photography, video editing, or broadcasting basics', 'Research and investigative interviewing techniques', 'Social media and digital content creation'], character: ['Commitment to truth and journalistic ethics', 'Curiosity about the world and current events', 'Resilience in the face of public criticism', 'Respect for diverse perspectives and voices'] },
    { name: 'Agriculture', icon: '🌾', cat: 'Agric & Environment', group: 'STEM', academic: ['Credits in Agricultural Science, Biology, Chemistry, Mathematics & English', 'JAMB score of 180–200+', 'Geography and Economics are useful supporting subjects', 'Practical farm work experience is highly valued'], skill: ['Practical farming and crop management techniques', 'Soil analysis and environmental assessment', 'Agricultural technology and mechanisation basics', 'Business planning for agro-enterprises'], character: ['Passion for food security and sustainability', 'Patience with long agricultural production cycles', 'Entrepreneurial mindset and innovation drive', 'Physical resilience and love of working outdoors'] },
    { name: 'Fine Arts', icon: '🎨', cat: 'Creative Arts', group: 'Arts', academic: ['Credits in Fine Arts, English & three other subjects', 'JAMB score of 180–200+ for art programmes', 'A strong creative portfolio is often the primary admission factor', 'Art History knowledge is an advantage'], skill: ['Drawing, painting, and sculptural techniques', 'Digital art and graphic design (Adobe Creative Suite)', 'Colour theory, composition, and visual storytelling', 'Art history and critical visual analysis'], character: ['Fearless creativity and willingness to experiment', 'Resilience in the face of rejection or critique', 'Originality and an authentic personal artistic voice', 'Discipline to practice and refine work consistently'] },
    { name: 'Economics', icon: '📈', cat: 'Social Sciences', group: 'Business', academic: ['Credits in Economics, Mathematics, English, Commerce & one other', 'JAMB score of 200–240+', 'Further Mathematics gives a competitive edge', 'Statistics is a valuable supporting subject'], skill: ['Statistical analysis and quantitative data interpretation', 'Economic modelling and research methods', 'Policy writing and macroeconomic analysis', 'Understanding of financial markets and global trade'], character: ['Analytical and evidence-based thinking', 'Intellectual curiosity about societal and economic issues', 'Objectivity and openness to conflicting views', 'Strong ethical compass in financial decision-making'] },
    { name: 'Pharmacy', icon: '💊', cat: 'Healthcare', group: 'Healthcare', academic: ['Credits in Biology, Chemistry, Physics, Mathematics & English', 'JAMB score of 260+ at most institutions', 'Chemistry is the most critical subject for Pharmacy', 'Strong practical chemistry background is essential'], skill: ['Drug identification and compounding fundamentals', 'Detailed record-keeping and dispensing accuracy', 'Chemistry lab skills and scientific methodology', 'Patient counselling and health communication'], character: ['Extreme precision and zero tolerance for error', 'Deep sense of responsibility for patient safety', 'Honesty and transparency in professional practice', 'Continuous self-updating on pharmaceutical developments'] },
    { name: 'Psychology', icon: '🧠', cat: 'Social Sciences', group: 'Arts', academic: ['Credits in English, Biology, CRS or Government & two others', 'JAMB score of 200+ for Social Science faculties', 'Good grades in Health Science and Literature helpful', 'Mathematics is useful for statistical psychology modules'], skill: ['Active listening and empathetic communication', 'Observation and behavioural analysis', 'Research design and data collection methods', 'Report writing and case note documentation'], character: ['Genuine curiosity about human behaviour', 'Non-judgmental and accepting of all people', 'Emotional boundaries and professional detachment', 'Patience and sensitivity in difficult conversations'] },
    { name: 'Political Science', icon: '🏛️', cat: 'Social Sciences', group: 'Arts', academic: ['Credits in Government, English, History or CRS & two others', 'JAMB score of 180–210+', 'Government and English are the most critical subjects', 'History and Economics are strong supporting subjects'], skill: ['Research, policy analysis, and report writing', 'Debate, negotiation, and public argumentation', 'Understanding of governmental and legal systems', 'Data analysis for political and social research'], character: ['Strong civic awareness and sense of justice', 'Intellectual rigour and openness to challenge', 'Diplomacy and conflict resolution ability', 'Integrity and commitment to democratic values'] },
    { name: 'Journalism', icon: '📰', cat: 'Media & Communication', group: 'Arts', academic: ['Credits in English, Literature & three other subjects', 'JAMB score of 180–210+', 'Exceptional written English is non-negotiable', 'Government and History are strong supporting subjects'], skill: ['News writing, interviewing, and investigative research', 'Photography, video production, and editing', 'Digital publishing and social media management', 'Fact-checking and source verification'], character: ['Relentless pursuit of truth and accuracy', 'Courage to speak truth to power', 'Ethical integrity under editorial and commercial pressure', 'Empathy for the human stories behind every headline'] },
];

const grid = document.getElementById('fieldsGrid');
let activeGroup = 'all';

function renderCards(arr) {
    grid.innerHTML = '';
    document.getElementById('noResults').classList.remove('visible');
    if (!arr.length) { document.getElementById('noResults').classList.add('visible'); return; }
    arr.forEach(f => {
        const c = document.createElement('div');
        c.className = 'field-card';
        c.dataset.group = f.group;
        c.innerHTML = `<div class="fc-arrow">→</div><div class="fc-icon">${f.icon}</div><div class="fc-name">${f.name}</div><div class="fc-cat">${f.cat}</div>`;
        c.onclick = () => openModal(f);
        grid.appendChild(c);
    });
}

renderCards(FIELDS);

function filter(group, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeGroup = group;
    const val = document.getElementById('searchInput').value.toLowerCase();
    applyFilters(group, val);
}

function search(val) {
    applyFilters(activeGroup, val.toLowerCase());
}

function applyFilters(group, searchVal) {
    const filtered = FIELDS.filter(f => {
        const gMatch = group === 'all' || f.group === group;
        const sMatch = !searchVal || f.name.toLowerCase().includes(searchVal) || f.cat.toLowerCase().includes(searchVal);
        return gMatch && sMatch;
    });
    renderCards(filtered);
}

function openModal(f) {
    document.getElementById('mIcon').textContent = f.icon;
    document.getElementById('mTitle').textContent = f.name;
    document.getElementById('mCat').textContent = f.cat;
    ['Academic', 'Skill', 'Character'].forEach(k => {
        const ul = document.getElementById('m' + k);
        ul.innerHTML = '';
        f[k.toLowerCase()].forEach(item => { const li = document.createElement('li'); li.textContent = item; ul.appendChild(li); });
    });
    document.getElementById('overlay').classList.add('open');
    document.body.style.overflow = 'hidden';
}
function closeModal(e) { if (e.target === document.getElementById('overlay')) closeModalDirect(); }
function closeModalDirect() { document.getElementById('overlay').classList.remove('open'); document.body.style.overflow = ''; }