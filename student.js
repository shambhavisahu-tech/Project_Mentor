/* =========================================================
   MENTORA - STUDENT DASHBOARD
   COMPLETE STUDENT.JS
   ========================================================= */


/* =========================================================
   FACULTY DATA
   ========================================================= */

const facultyData = [

    {
        name: "Dr. Ananya Sharma",
        department: "Computer Science & Engineering",
        shortName: "CSE",
        search:
            "dr ananya sharma ananya sharma computer science engineering cse cs",
        avatar: "AS",
        color: "pink",
        availability: "10:00 AM – 12:00 PM"
    },

    {
        name: "Prof. Vikram Mehta",
        department: "Artificial Intelligence",
        shortName: "AI",
        search:
            "prof vikram mehta vikram mehta artificial intelligence ai",
        avatar: "VM",
        color: "blue",
        availability: "11:00 AM – 1:00 PM"
    },

    {
        name: "Dr. Rahul Verma",
        department: "Electronics & Communication Engineering",
        shortName: "ECE",
        search:
            "dr rahul verma rahul verma electronics communication engineering ece ec",
        avatar: "RV",
        color: "green",
        availability: "10:30 AM – 12:30 PM"
    },

    {
        name: "Dr. Priya Kapoor",
        department: "Mechanical Engineering",
        shortName: "ME",
        search:
            "dr priya kapoor priya kapoor mechanical engineering me",
        avatar: "PK",
        color: "orange",
        availability: "12:00 PM – 2:00 PM"
    },

    {
        name: "Prof. Arjun Singh",
        department: "Information Technology",
        shortName: "IT",
        search:
            "prof arjun singh arjun singh information technology it",
        avatar: "AS",
        color: "purple",
        availability: "2:00 PM – 4:00 PM"
    }

];


/* =========================================================
   APPOINTMENTS DATA
   ========================================================= */

let appointments = [

    {
        id: 1,
        faculty: "Dr. Ananya Sharma",
        department: "Computer Science & Engineering",
        date: "2026-08-12",
        time: "11:30 AM – 12:00 PM",
        mode: "Room 204 / Online",
        purpose: "Discussion about project guidance",
        status: "confirmed"
    },

    {
        id: 2,
        faculty: "Prof. Vikram Mehta",
        department: "Artificial Intelligence",
        date: "2026-08-15",
        time: "02:00 PM – 02:30 PM",
        mode: "Online",
        purpose: "Discussion about AI project",
        status: "pending"
    }

];


/* =========================================================
   PAGE ELEMENTS
   ========================================================= */

const appointmentsSection =
    document.getElementById("appointmentsSection");

const bookAppointmentSection =
    document.getElementById("bookAppointmentSection");

const findFacultySection =
    document.getElementById("findFacultySection");

const profileSection =
    document.getElementById("profileSection");

const mainOptions =
    document.querySelector(".main-options");

const welcomeSection =
    document.querySelector(".welcome-section");


/* =========================================================
   MAIN OPTION BUTTONS
   ========================================================= */

const myAppointmentsOption =
    document.getElementById("myAppointmentsOption");

const bookAppointmentOption =
    document.getElementById("bookAppointmentOption");

const findFacultyOption =
    document.getElementById("findFacultyOption");


/* =========================================================
   PROFILE BUTTONS
   ========================================================= */

const profileBtn =
    document.getElementById("profileBtn");

const profileBackBtn =
    document.getElementById("profileBackBtn");


/* =========================================================
   HIDE ALL PAGES
   ========================================================= */

function hideAllPages() {

    if (appointmentsSection) {
        appointmentsSection.classList.remove("active");
    }

    if (bookAppointmentSection) {
        bookAppointmentSection.classList.remove("active");
    }

    if (findFacultySection) {
        findFacultySection.classList.remove("active");
    }

    if (profileSection) {
        profileSection.classList.remove("active");
    }

}


/* =========================================================
   SHOW HOME
   ========================================================= */

function showHome() {

    hideAllPages();

    if (mainOptions) {
        mainOptions.style.display = "grid";
    }

    if (welcomeSection) {
        welcomeSection.style.display = "block";
    }

    updateBottomNavigation("home");

    scrollToTop();
}


/* =========================================================
   SHOW MY APPOINTMENTS
   ========================================================= */

function showAppointments() {

    hideAllPages();

    if (mainOptions) {
        mainOptions.style.display = "none";
    }

    if (welcomeSection) {
        welcomeSection.style.display = "none";
    }

    if (appointmentsSection) {
        appointmentsSection.classList.add("active");
    }

    renderAppointments();

    updateBottomNavigation("appointments");

    scrollToTop();
}


/* =========================================================
   SHOW BOOK APPOINTMENT
   ========================================================= */

function showBookAppointment(selectedFaculty = "") {

    hideAllPages();

    if (mainOptions) {
        mainOptions.style.display = "none";
    }

    if (welcomeSection) {
        welcomeSection.style.display = "none";
    }

    if (bookAppointmentSection) {
        bookAppointmentSection.classList.add("active");
    }

    updateBottomNavigation("book");

    scrollToTop();


    if (selectedFaculty) {

        const facultySelect =
            document.getElementById("facultySelect");

        if (facultySelect) {

            facultySelect.value =
                selectedFaculty;

        }

    }

}


/* =========================================================
   SHOW FIND FACULTY
   ========================================================= */

function showFindFaculty() {

    hideAllPages();

    if (mainOptions) {
        mainOptions.style.display = "none";
    }

    if (welcomeSection) {
        welcomeSection.style.display = "none";
    }

    if (findFacultySection) {
        findFacultySection.classList.add("active");
    }

    updateBottomNavigation("faculty");

    scrollToTop();


    setTimeout(function () {

        const searchInput =
            document.getElementById(
                "facultySearchInput"
            );

        if (searchInput) {
            searchInput.focus();
        }

    }, 250);

}


/* =========================================================
   SHOW STUDENT PROFILE
   ========================================================= */

function showProfile() {

    hideAllPages();

    if (mainOptions) {
        mainOptions.style.display = "none";
    }

    if (welcomeSection) {
        welcomeSection.style.display = "none";
    }

    if (profileSection) {
        profileSection.classList.add("active");
    }

    /*
       Profile is not one of the
       four bottom navigation pages,
       so remove active state.
    */

    updateBottomNavigation("");

    scrollToTop();

}


/* =========================================================
   SCROLL TO TOP
   ========================================================= */

function scrollToTop() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


/* =========================================================
   MAIN OPTION EVENTS
   ========================================================= */

if (myAppointmentsOption) {

    myAppointmentsOption.addEventListener(
        "click",
        function () {

            showAppointments();

        }
    );

}


if (bookAppointmentOption) {

    bookAppointmentOption.addEventListener(
        "click",
        function () {

            showBookAppointment();

        }
    );

}


if (findFacultyOption) {

    findFacultyOption.addEventListener(
        "click",
        function () {

            showFindFaculty();

        }
    );

}


/* =========================================================
   PROFILE BUTTON
   ========================================================= */

if (profileBtn) {

    profileBtn.addEventListener(
        "click",
        function () {

            showProfile();

        }
    );

}


/* =========================================================
   PROFILE BACK BUTTON
   ========================================================= */

if (profileBackBtn) {

    profileBackBtn.addEventListener(
        "click",
        function () {

            showHome();

        }
    );

}


/* =========================================================
   BACK BUTTONS
   ========================================================= */

const appointmentsBackBtn =
    document.getElementById(
        "appointmentsBackBtn"
    );

const bookBackBtn =
    document.getElementById(
        "bookBackBtn"
    );

const facultyBackBtn =
    document.getElementById(
        "facultyBackBtn"
    );


if (appointmentsBackBtn) {

    appointmentsBackBtn.addEventListener(
        "click",
        function () {

            showHome();

        }
    );

}


if (bookBackBtn) {

    bookBackBtn.addEventListener(
        "click",
        function () {

            showHome();

        }
    );

}


if (facultyBackBtn) {

    facultyBackBtn.addEventListener(
        "click",
        function () {

            showHome();

        }
    );

}


/* =========================================================
   APPOINTMENT FORM
   ========================================================= */

const appointmentForm =
    document.getElementById(
        "appointmentForm"
    );


if (appointmentForm) {

    appointmentForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const facultySelect =
                document.getElementById(
                    "facultySelect"
                );

            const appointmentDate =
                document.getElementById(
                    "appointmentDate"
                );

            const appointmentTime =
                document.getElementById(
                    "appointmentTime"
                );

            const appointmentPurpose =
                document.getElementById(
                    "appointmentPurpose"
                );


            const faculty =
                facultySelect.value;

            const date =
                appointmentDate.value;

            const time =
                appointmentTime.value;

            const purpose =
                appointmentPurpose.value.trim();


            const selectedMode =
                document.querySelector(
                    'input[name="meetingMode"]:checked'
                );


            const mode =
                selectedMode
                    ? selectedMode.value
                    : "Online";


            if (!faculty) {

                showToast(
                    "Please select a faculty member."
                );

                return;

            }


            if (!date) {

                showToast(
                    "Please select appointment date."
                );

                return;

            }


            if (!time) {

                showToast(
                    "Please select appointment time."
                );

                return;

            }


            if (!purpose) {

                showToast(
                    "Please enter appointment purpose."
                );

                return;

            }


            const selectedFaculty =
                facultyData.find(
                    function (item) {

                        return item.name === faculty;

                    }
                );


            const department =
                selectedFaculty
                    ? selectedFaculty.department
                    : "Faculty Department";


            const newAppointment = {

                id:
                    Date.now(),

                faculty:
                    faculty,

                department:
                    department,

                date:
                    date,

                time:
                    time,

                mode:
                    mode,

                purpose:
                    purpose,

                status:
                    "pending"

            };


            appointments.unshift(
                newAppointment
            );


            appointmentForm.reset();


            const onlineRadio =
                document.querySelector(
                    'input[name="meetingMode"][value="Online"]'
                );


            if (onlineRadio) {

                onlineRadio.checked =
                    true;

            }


            showToast(
                "Appointment request sent successfully!"
            );


            setTimeout(
                function () {

                    showAppointments();

                },
                900
            );

        }
    );

}


/* =========================================================
   RENDER APPOINTMENTS
   ========================================================= */

function renderAppointments(filter = "all") {

    const appointmentsList =
        document.getElementById(
            "appointmentsList"
        );

    const emptyAppointments =
        document.getElementById(
            "emptyAppointments"
        );


    if (!appointmentsList) {
        return;
    }


    const dynamicCards =
        appointmentsList.querySelectorAll(
            ".dynamic-appointment-card"
        );


    dynamicCards.forEach(
        function (card) {

            card.remove();

        }
    );


    const staticCards =
        appointmentsList.querySelectorAll(
            ".appointment-card:not(.dynamic-appointment-card)"
        );


    let visibleCount = 0;


    staticCards.forEach(
        function (card) {

            const status =
                card.dataset.status;


            if (
                filter === "all" ||
                status === filter
            ) {

                card.style.display =
                    "block";

                visibleCount++;

            }

            else {

                card.style.display =
                    "none";

            }

        }
    );


    appointments.forEach(
        function (appointment) {

            if (
                appointment.id === 1 ||
                appointment.id === 2
            ) {

                return;

            }


            if (
                filter !== "all" &&
                appointment.status !== filter
            ) {

                return;

            }


            const card =
                createAppointmentCard(
                    appointment
                );


            appointmentsList.insertBefore(
                card,
                emptyAppointments
            );


            visibleCount++;

        }
    );


    if (emptyAppointments) {

        if (visibleCount === 0) {

            emptyAppointments.style.display =
                "block";

        }

        else {

            emptyAppointments.style.display =
                "none";

        }

    }

}


/* =========================================================
   CREATE APPOINTMENT CARD
   ========================================================= */

function createAppointmentCard(
    appointment
) {

    const article =
        document.createElement(
            "article"
        );


    article.className =
        "appointment-card dynamic-appointment-card";


    article.dataset.status =
        appointment.status;


    const faculty =
        facultyData.find(
            function (item) {

                return item.name ===
                    appointment.faculty;

            }
        );


    const avatar =
        faculty
            ? faculty.avatar
            : "F";


    article.innerHTML = `

        <div class="appointment-card-top">

            <div class="faculty-small-avatar">

                ${avatar}

            </div>


            <div class="appointment-faculty-info">

                <h3>
                    ${escapeHTML(appointment.faculty)}
                </h3>

                <p>
                    ${escapeHTML(appointment.department)}
                </p>

            </div>


            <span class="appointment-status ${appointment.status}">

                ${getStatusText(appointment.status)}

            </span>

        </div>


        <div class="appointment-details">

            <div class="appointment-detail">

                <span>📅</span>

                <div>

                    <small>Date</small>

                    <strong>
                        ${formatDate(appointment.date)}
                    </strong>

                </div>

            </div>


            <div class="appointment-detail">

                <span>🕐</span>

                <div>

                    <small>Time</small>

                    <strong>
                        ${escapeHTML(appointment.time)}
                    </strong>

                </div>

            </div>


            <div class="appointment-detail">

                <span>📍</span>

                <div>

                    <small>Mode</small>

                    <strong>
                        ${escapeHTML(appointment.mode)}
                    </strong>

                </div>

            </div>

        </div>


        <div class="appointment-purpose">

            <span>Purpose</span>

            <p>
                ${escapeHTML(appointment.purpose)}
            </p>

        </div>


        <div class="appointment-actions">

            <button
                class="secondary-btn"
                data-action="view">

                View Details

            </button>


            <button
                class="cancel-btn"
                data-action="cancel">

                Cancel

            </button>

        </div>

    `;


    return article;

}


/* =========================================================
   STATUS TEXT
   ========================================================= */

function getStatusText(status) {

    if (status === "confirmed") {
        return "Confirmed";
    }

    if (status === "pending") {
        return "Pending";
    }

    if (status === "completed") {
        return "Completed";
    }

    return "Pending";

}


/* =========================================================
   FORMAT DATE
   ========================================================= */

function formatDate(dateString) {

    if (!dateString) {
        return "-";
    }


    const date =
        new Date(
            dateString + "T00:00:00"
        );


    return date.toLocaleDateString(
        "en-IN",
        {
            day: "numeric",
            month: "long",
            year: "numeric"
        }
    );

}


/* =========================================================
   APPOINTMENT FILTERS
   ========================================================= */

const filterButtons =
    document.querySelectorAll(
        ".filter-btn"
    );


filterButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                filterButtons.forEach(
                    function (item) {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                button.classList.add(
                    "active"
                );


                const filter =
                    button.dataset.filter;


                renderAppointments(
                    filter
                );

            }
        );

    }
);


/* =========================================================
   APPOINTMENT ACTIONS
   ========================================================= */

document.addEventListener(
    "click",
    function (event) {

        const target =
            event.target.closest(
                "[data-action]"
            );


        if (!target) {
            return;
        }


        const action =
            target.dataset.action;


        if (action === "view") {

            const card =
                target.closest(
                    ".appointment-card"
                );


            if (!card) {
                return;
            }


            const facultyName =
                card.querySelector(
                    ".appointment-faculty-info h3"
                );


            if (facultyName) {

                showToast(
                    "Appointment with " +
                    facultyName.textContent.trim()
                );

            }

        }


        if (action === "cancel") {

            const card =
                target.closest(
                    ".appointment-card"
                );


            if (!card) {
                return;
            }


            const facultyElement =
                card.querySelector(
                    ".appointment-faculty-info h3"
                );


            const facultyName =
                facultyElement
                    ? facultyElement.textContent.trim()
                    : "this faculty";


            const confirmCancel =
                confirm(
                    "Are you sure you want to cancel the appointment with " +
                    facultyName +
                    "?"
                );


            if (!confirmCancel) {
                return;
            }


            if (
                card.classList.contains(
                    "dynamic-appointment-card"
                )
            ) {

                const appointment =
                    appointments.find(
                        function (item) {

                            return item.faculty ===
                                facultyName;

                        }
                    );


                if (appointment) {

                    appointments =
                        appointments.filter(
                            function (item) {

                                return item.id !==
                                    appointment.id;

                            }
                        );

                }

            }

            else {

                card.dataset.status =
                    "completed";


                const status =
                    card.querySelector(
                        ".appointment-status"
                    );


                if (status) {

                    status.className =
                        "appointment-status completed";

                    status.textContent =
                        "Cancelled";

                }

            }


            renderAppointments();

            showToast(
                "Appointment cancelled successfully."
            );

        }

    }
);


/* =========================================================
   EMPTY APPOINTMENT BOOK BUTTON
   ========================================================= */

const emptyBookBtn =
    document.getElementById(
        "emptyBookBtn"
    );


if (emptyBookBtn) {

    emptyBookBtn.addEventListener(
        "click",
        function () {

            showBookAppointment();

        }
    );

}


/* =========================================================
   FACULTY SEARCH
   ========================================================= */

const facultySearchInput =
    document.getElementById(
        "facultySearchInput"
    );

const clearSearchBtn =
    document.getElementById(
        "clearSearchBtn"
    );

const facultyResultCards =
    document.querySelectorAll(
        ".faculty-result-card"
    );

const noSearchResult =
    document.getElementById(
        "noSearchResult"
    );


/* =========================================================
   NORMALIZE SEARCH TEXT
   ========================================================= */

function normalizeText(text) {

    return text
        .toLowerCase()
        .trim()
        .replace(
            /\s+/g,
            " "
        );

}


/* =========================================================
   SEARCH FACULTY
   ========================================================= */

function searchFaculty(searchValue) {

    const query =
        normalizeText(
            searchValue
        );


    let found = 0;


    facultyResultCards.forEach(
        function (card) {

            const name =
                normalizeText(
                    card.dataset.name || ""
                );


            const department =
                normalizeText(
                    card.dataset.department || ""
                );


            const shortName =
                normalizeText(
                    card.dataset.short || ""
                );


            const searchableText =
                name +
                " " +
                department +
                " " +
                shortName;


            if (
                query === "" ||
                searchableText.includes(
                    query
                )
            ) {

                card.style.display =
                    "grid";

                found++;

            }

            else {

                card.style.display =
                    "none";

            }

        }
    );


    if (clearSearchBtn) {

        if (query.length > 0) {

            clearSearchBtn.classList.add(
                "show"
            );

        }

        else {

            clearSearchBtn.classList.remove(
                "show"
            );

        }

    }


    if (noSearchResult) {

        if (
            found === 0 &&
            query !== ""
        ) {

            noSearchResult.classList.add(
                "show"
            );

        }

        else {

            noSearchResult.classList.remove(
                "show"
            );

        }

    }

}


/* =========================================================
   SEARCH INPUT
   ========================================================= */

if (facultySearchInput) {

    facultySearchInput.addEventListener(
        "input",
        function () {

            searchFaculty(
                facultySearchInput.value
            );

        }
    );

}


/* =========================================================
   CLEAR SEARCH
   ========================================================= */

if (clearSearchBtn) {

    clearSearchBtn.addEventListener(
        "click",
        function () {

            facultySearchInput.value =
                "";

            searchFaculty("");

            facultySearchInput.focus();

        }
    );

}


/* =========================================================
   SEARCH TAGS
   ========================================================= */

const searchTags =
    document.querySelectorAll(
        ".search-tag"
    );


searchTags.forEach(
    function (tag) {

        tag.addEventListener(
            "click",
            function () {

                const searchValue =
                    tag.dataset.search;


                facultySearchInput.value =
                    searchValue;


                searchFaculty(
                    searchValue
                );


                facultySearchInput.focus();

            }
        );

    }
);


/* =========================================================
   FACULTY BOOK BUTTONS
   ========================================================= */

const facultyBookButtons =
    document.querySelectorAll(
        ".faculty-book-btn"
    );


facultyBookButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                const faculty =
                    button.dataset.faculty;


                showBookAppointment(
                    faculty
                );

            }
        );

    }
);


/* =========================================================
   BOTTOM NAVIGATION
   ========================================================= */

const bottomNavItems =
    document.querySelectorAll(
        ".bottom-nav-item"
    );


function updateBottomNavigation(
    activePage
) {

    bottomNavItems.forEach(
        function (item) {

            item.classList.remove(
                "active"
            );


            if (
                item.dataset.page ===
                activePage
            ) {

                item.classList.add(
                    "active"
                );

            }

        }
    );

}


bottomNavItems.forEach(
    function (item) {

        item.addEventListener(
            "click",
            function () {

                const page =
                    item.dataset.page;


                if (page === "home") {

                    showHome();

                }

                else if (
                    page === "appointments"
                ) {

                    showAppointments();

                }

                else if (
                    page === "book"
                ) {

                    showBookAppointment();

                }

                else if (
                    page === "faculty"
                ) {

                    showFindFaculty();

                }

            }
        );

    }
);


/* =========================================================
   NOTIFICATION BUTTON
   ========================================================= */

const notificationBtn =
    document.getElementById(
        "notificationBtn"
    );


if (notificationBtn) {

    notificationBtn.addEventListener(
        "click",
        function () {

            showToast(
                "You have 2 appointment updates."
            );

        }
    );

}


/* =========================================================
   DATE VALIDATION
   ========================================================= */

const appointmentDate =
    document.getElementById(
        "appointmentDate"
    );


if (appointmentDate) {

    const today =
        new Date();


    const year =
        today.getFullYear();


    const month =
        String(
            today.getMonth() + 1
        ).padStart(
            2,
            "0"
        );


    const day =
        String(
            today.getDate()
        ).padStart(
            2,
            "0"
        );


    const todayString =
        `${year}-${month}-${day}`;


    appointmentDate.min =
        todayString;

}


/* =========================================================
   ESCAPE HTML
   ========================================================= */

function escapeHTML(value) {

    return String(value)
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );

}


/* =========================================================
   TOAST
   ========================================================= */

const toast =
    document.getElementById(
        "toast"
    );


let toastTimer;


function showToast(message) {

    if (!toast) {
        return;
    }


    toast.textContent =
        message;


    toast.classList.add(
        "show"
    );


    clearTimeout(
        toastTimer
    );


    toastTimer =
        setTimeout(
            function () {

                toast.classList.remove(
                    "show"
                );

            },
            2800
        );

}


/* =========================================================
   INITIAL PAGE
   ========================================================= */

showHome();