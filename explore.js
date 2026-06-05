const universityData = {
    "oau": {
        name: "Obafemi Awolowo University (OAU)",
        faculties: {
            "technology": {
                name: "Faculty of Technology",
                departments: {
                    "cse": {
                        name: "Computer Science & Engineering",
                        courses: [
                            {
                                id: "bsc_csc",
                                name: "B.Sc Computer Science",
                                oLevel: "5 Credits in English, Math, Physics, Chemistry, and Biology.",
                                utmeSubjects: "English, Math, Physics, and Chemistry.",
                                cutOff: "250+ (Highly Competitive)"
                            },
                            {
                                id: "bsc_cpe",
                                name: "B.Sc Computer Engineering",
                                oLevel: "5 Credits in English, Math, Physics, Chemistry, and Further Math.",
                                utmeSubjects: "English, Math, Physics, and Chemistry.",
                                cutOff: "260+"
                            }
                        ]
                    },
                    "civil": { name: "Civil Engineering", courses: [] },
                    "mech": { name: "Mechanical Engineering", courses: [] },
                    "elect": { name: "Electronic & Electrical Engineering", courses: [] },
                    "chem": { name: "Chemical Engineering", courses: [] },
                    "mat": { name: "Materials Science & Engineering", courses: [] },
                    "food": { name: "Food Science & Technology", courses: [] },
                    "agric_env": { name: "Agricultural & Environmental Engineering", courses: [] }
                }
            },
            "edm": {
                name: "Environmental Design and Management (EDM)",
                departments: {
                    "arch": {
                        name: "Architecture",
                        courses: [
                            {
                                id: "bsc_arch",
                                name: "B.Sc Architecture",
                                oLevel: "5 Credits in English, Math, Physics, Technical Drawing/Geography, and Fine Art.",
                                utmeSubjects: "English, Math, Physics, and one of Geography/Tech Drawing.",
                                cutOff: "240+"
                            }
                        ]
                    },
                    "building": { name: "Building", courses: [] },
                    "estate": { name: "Estate Management", courses: [] },
                    "faa": { name: "Fine and Applied Arts", courses: [] },
                    "qs": { name: "Quantity Surveying", courses: [] },
                    "urp": { name: "Urban and Regional Planning", courses: [] }
                }
            },
            "science": {
                name: "Faculty of Science",
                departments: {
                    "bc": { name: "Biochemistry", courses: [] },
                    "bot": { name: "Botany", courses: [] },
                    "chm": { name: "Chemistry", courses: [] },
                    "geo": { name: "Geology", courses: [] },
                    "mth": { name: "Mathematics", courses: [] },
                    "mcb": { name: "Microbiology", courses: [] },
                    "phy": { name: "Physics", courses: [] },
                    "zoo": { name: "Zoology", courses: [] }
                }
            },
            "health_sciences": {
                name: "College of Health Sciences",
                departments: {
                    "med": {
                        name: "Medicine and Surgery",
                        courses: [
                            {
                                id: "mbbs",
                                name: "Medicine and Surgery (MBBS)",
                                oLevel: "5 Credits in English, Math, Physics, Chemistry, Biology at ONE sitting.",
                                utmeSubjects: "English, Biology, Physics, and Chemistry.",
                                cutOff: "280+ (Extremely Competitive)"
                            }
                        ]
                    },
                    "dentistry": { name: "Dentistry", courses: [] },
                    "nursing": {
                        name: "Nursing Science",
                        courses: [
                            {
                                id: "bnsc",
                                name: "Bachelor of Nursing Science (BNSc)",
                                oLevel: "5 Credits in English, Math, Physics, Chemistry, Biology at ONE sitting.",
                                utmeSubjects: "English, Biology, Physics, and Chemistry.",
                                cutOff: "260+"
                            }
                        ]
                    },
                    "med_rehab": { name: "Medical Rehabilitation", courses: [] }
                }
            },
            "pharmacy": {
                name: "Faculty of Pharmacy",
                departments: {
                    "pharm": {
                        name: "Pharmacy",
                        courses: [
                            {
                                id: "bpharm",
                                name: "Bachelor of Pharmacy (B.Pharm)",
                                oLevel: "5 Credits in English, Math, Physics, Chemistry, Biology.",
                                utmeSubjects: "English, Biology, Physics, and Chemistry.",
                                cutOff: "270+"
                            }
                        ]
                    }
                }
            },
            "law": {
                name: "Faculty of Law",
                departments: {
                    "law": {
                        name: "Law",
                        courses: [
                            {
                                id: "llb",
                                name: "Bachelor of Laws (LL.B)",
                                oLevel: "5 Credits in English, Literature in English, Math, and any other two Arts/Social Science subjects.",
                                utmeSubjects: "English, Literature in English, and any two Arts/Social Science subjects.",
                                cutOff: "270+ (Highly Competitive)"
                            }
                        ]
                    }
                }
            },
            "arts": {
                name: "Faculty of Arts",
                departments: {
                    "african": { name: "African Languages and Literatures", courses: [] },
                    "drama": { name: "Dramatic Arts", courses: [] },
                    "english": { name: "English", courses: [] },
                    "foreign": { name: "Foreign Languages", courses: [] },
                    "history": { name: "History", courses: [] },
                    "music": { name: "Music", courses: [] },
                    "phil": { name: "Philosophy", courses: [] },
                    "religion": { name: "Religious Studies", courses: [] }
                }
            },
            "social_sciences": {
                name: "Faculty of Social Sciences",
                departments: {
                    "demography": { name: "Demography and Social Statistics", courses: [] },
                    "economics": { name: "Economics", courses: [] },
                    "geography": { name: "Geography", courses: [] },
                    "polisci": { name: "Political Science", courses: [] },
                    "psychology": { name: "Psychology", courses: [] },
                    "sociology": { name: "Sociology and Anthropology", courses: [] }
                }
            },
            "administration": {
                name: "Faculty of Administration",
                departments: {
                    "accounting": {
                        name: "Management and Accounting",
                        courses: [
                            {
                                id: "bsc_acc",
                                name: "B.Sc Accounting",
                                oLevel: "5 Credits in English, Math, Economics, and any other two subjects.",
                                utmeSubjects: "English, Math, Economics, and one other subject.",
                                cutOff: "250+"
                            }
                        ]
                    },
                    "busadmin": { name: "Business Administration", courses: [] },
                    "localgov": { name: "Local Government Studies", courses: [] },
                    "pubadmin": { name: "Public Administration", courses: [] }
                }
            },
            "agriculture": {
                name: "Faculty of Agriculture",
                departments: {
                    "agricecon": { name: "Agricultural Economics", courses: [] },
                    "agricext": { name: "Agricultural Extension and Rural Development", courses: [] },
                    "animalsci": { name: "Animal Sciences", courses: [] },
                    "crop": { name: "Crop Production and Protection", courses: [] },
                    "soil": { name: "Soil Science and Land Resources Management", courses: [] }
                }
            },
            "education": {
                name: "Faculty of Education",
                departments: {
                    "aded": { name: "Adult Education and Lifelong Learning", courses: [] },
                    "artsed": { name: "Arts and Social Sciences Education", courses: [] },
                    "edfound": { name: "Educational Foundations and Counselling", courses: [] },
                    "edmanage": { name: "Educational Management", courses: [] },
                    "pheet": { name: "Physical and Health Education", courses: [] },
                    "scied": { name: "Science and Technology Education", courses: [] }
                }
            }
        }
    }
};

// Make sure your `universityData` object is defined at the top of this file!

// Grab our HTML elements
const uniSelect = document.getElementById('uni-select');
const facultySelect = document.getElementById('faculty-select');
const deptSelect = document.getElementById('dept-select');
const resultsArea = document.getElementById('results-area');
const coursesGrid = document.getElementById('courses-grid');

// Initialize the page by loading the available universities
document.addEventListener('DOMContentLoaded', () => {
    // Clear existing options except the default
    uniSelect.innerHTML = '<option value="">-- Choose a University --</option>';

    // Loop through universityData and add them to the first dropdown
    for (const uniKey in universityData) {
        const option = document.createElement('option');
        option.value = uniKey;
        option.textContent = universityData[uniKey].name;
        uniSelect.appendChild(option);
    }
});

// Step 1: User selects a University
function loadFaculties() {
    const uniKey = uniSelect.value;

    // Reset the levels below
    facultySelect.innerHTML = '<option value="">-- Choose a Faculty --</option>';
    deptSelect.innerHTML = '<option value="">-- First choose a Faculty --</option>';
    facultySelect.disabled = true;
    deptSelect.disabled = true;
    resultsArea.style.display = 'none';

    // If a valid university was selected, load its faculties
    if (uniKey && universityData[uniKey]) {
        const faculties = universityData[uniKey].faculties;

        for (const facKey in faculties) {
            const option = document.createElement('option');
            option.value = facKey;
            option.textContent = faculties[facKey].name;
            facultySelect.appendChild(option);
        }
        facultySelect.disabled = false; // Unlock the Faculty dropdown
    }
}

// Step 2: User selects a Faculty
function loadDepartments() {
    const uniKey = uniSelect.value;
    const facKey = facultySelect.value;

    // Reset the level below
    deptSelect.innerHTML = '<option value="">-- Choose a Department --</option>';
    deptSelect.disabled = true;
    resultsArea.style.display = 'none';

    // If a valid faculty was selected, load its departments
    if (facKey) {
        const departments = universityData[uniKey].faculties[facKey].departments;

        for (const deptKey in departments) {
            const option = document.createElement('option');
            option.value = deptKey;
            option.textContent = departments[deptKey].name;
            deptSelect.appendChild(option);
        }
        deptSelect.disabled = false; // Unlock the Department dropdown
    }
}

// Step 3: User selects a Department
function showCourses() {
    const uniKey = uniSelect.value;
    const facKey = facultySelect.value;
    const deptKey = deptSelect.value;

    coursesGrid.innerHTML = ''; // Clear old results

    if (deptKey) {
        // Dig into the data to find the courses for this specific department
        const courses = universityData[uniKey].faculties[facKey].departments[deptKey].courses;

        if (courses && courses.length > 0) {
            // Build a card for each course
            courses.forEach(course => {
                const card = document.createElement('div');
                card.className = 'course-card';
                card.innerHTML = `
                    <h4 class="course-title">${course.name}</h4>
                    
                    <div class="req-section">
                        <div class="req-title">📚 O'Level Requirements</div>
                        <p class="req-desc">${course.oLevel}</p>
                    </div>
                    
                    <div class="req-section">
                        <div class="req-title">📝 UTME Subjects</div>
                        <p class="req-desc">${course.utmeSubjects}</p>
                    </div>
                    
                    <div class="req-section cut-off">
                        <div class="req-title">🎯 Target UTME Score</div>
                        <p class="req-desc target-score">${course.cutOff}</p>
                    </div>
                `;
                coursesGrid.appendChild(card);
            });
        } else {
            // Handle edge case where we haven't added courses to that department yet
            coursesGrid.innerHTML = `<div class="no-data">Detailed course requirements for this department are being updated. Check back soon!</div>`;
        }

        // Show the results area!
        resultsArea.style.display = 'block';
    } else {
        resultsArea.style.display = 'none';
    };
    courses.forEach(course => {
        const card = document.createElement('div');
        card.className = 'course-card';
        card.innerHTML = `
            <h4 class="course-title">${course.name}</h4>
            
            <div class="req-section">
                <div class="req-title">📚 Academic Requirements</div>
                <p class="req-desc">${course.oLevel}</p>
                <p class="req-desc"><strong>UTME:</strong> ${course.utmeSubjects}</p>
            </div>
            
            <div class="req-section">
                <div class="req-title">⚡ Skill Requirements</div>
                <ul class="req-list">
                    ${course.skills.map(s => `<li>${s}</li>`).join('')}
                </ul>
            </div>
            
            <div class="req-section">
                <div class="req-title">🌟 Character Requirements</div>
                <ul class="req-list">
                    ${course.character.map(c => `<li>${c}</li>`).join('')}
                </ul>
            </div>
        `;
        coursesGrid.appendChild(card);
    });
}

// ==========================================
// LOGO TRANSITION LOGIC
// ==========================================
function startLogoTransition() {
    const logos = document.querySelectorAll('.fading-logo');
    let currentIndex = 0;

    // If there are no logos, stop the function
    if (logos.length === 0) return;

    // Change logo every 3 seconds (3000 milliseconds)
    setInterval(() => {
        // Remove 'active' class from the current logo
        logos[currentIndex].classList.remove('active');

        // Move to the next logo, and loop back to 0 if at the end
        currentIndex = (currentIndex + 1) % logos.length;

        // Add 'active' class to the new logo
        logos[currentIndex].classList.add('active');
    }, 3000);
}

// Start the animation once the page loads
document.addEventListener('DOMContentLoaded', startLogoTransition);