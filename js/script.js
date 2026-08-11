document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // ELEMENTS
    // =========================

    const navLinks = document.querySelectorAll(".nav-links a");
    const bottomLinks = document.querySelectorAll(".bottom-nav a");

    const homeContent = document.querySelector(".welcome-card");
    const dashboard = document.querySelector(".dashboard-grid");

    const requestsPage = document.querySelector(".requests-page");
    const schedulePage = document.querySelector(".schedule-page");
    const profilePage = document.querySelector(".profile-page");

    const profileModal = document.querySelector("#profileModal");
    const editProfileButton = document.querySelector("#editProfileBtn");
    const closeProfileModal = document.querySelector("#closeProfileModal");
    const cancelProfileEdit = document.querySelector("#cancelProfileEdit");
    const profileForm = document.querySelector("#profileForm");


    // =========================
    // HIDE ALL PAGES
    // =========================

    function hideAllPages() {

        if (homeContent) {
            homeContent.style.display = "none";
        }

        if (dashboard) {
            dashboard.style.display = "none";
        }

        if (requestsPage) {
            requestsPage.style.display = "none";
        }

        if (schedulePage) {
            schedulePage.style.display = "none";
        }

        if (profilePage) {
            profilePage.style.display = "none";
        }
    }


    // =========================
    // SHOW HOME
    // =========================

    function showHome() {

        hideAllPages();

        if (homeContent) {
            homeContent.style.display = "flex";
        }

        if (dashboard) {
            dashboard.style.display = "grid";
        }

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }


    // =========================
    // SHOW SCHEDULE
    // =========================

    function showSchedule() {

        hideAllPages();

        if (schedulePage) {
            schedulePage.style.display = "block";
        }

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }


    // =========================
    // SHOW REQUESTS
    // =========================

    function showRequests() {

        hideAllPages();

        if (requestsPage) {
            requestsPage.style.display = "block";
        }

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }


    // =========================
    // SHOW PROFILE
    // =========================

    function showProfile() {

        hideAllPages();

        if (profilePage) {
            profilePage.style.display = "block";
        }

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }


    // =========================
    // TOP NAVIGATION
    // =========================

    navLinks.forEach(link => {

        link.addEventListener("click", (event) => {

            event.preventDefault();

            const page =
                link.textContent.trim();

            navLinks.forEach(item => {
                item.classList.remove("active");
            });

            link.classList.add("active");


            if (page === "Home") {

                showHome();

            } else if (page === "Schedule") {

                showSchedule();

            } else if (page === "Requests") {

                showRequests();

            } else if (page === "Profile") {

                showProfile();

            }

        });

    });


    // =========================
    // BOTTOM NAVIGATION
    // =========================

    bottomLinks.forEach(link => {

        link.addEventListener("click", (event) => {

            event.preventDefault();

            const span =
                link.querySelector("span");

            if (!span) return;

            const page =
                span.textContent.trim();


            if (page === "Home") {

                showHome();

            } else if (page === "Schedule") {

                showSchedule();

            } else if (page === "Requests") {

                showRequests();

            } else if (page === "Profile") {

                showProfile();

            }

        });

    });


    // =========================
    // ACCEPT REQUEST
    // =========================

    const acceptButtons =
        document.querySelectorAll(".accept-btn");

    acceptButtons.forEach(button => {

        button.addEventListener("click", () => {

            const card =
                button.closest(".request-full-card");

            if (!card) return;

            const priority =
                card.querySelector(".priority");

            if (priority) {

                priority.textContent =
                    "✓ Accepted";

                priority.className =
                    "priority accepted";
            }

            button.textContent =
                "Accepted ✓";

            button.disabled = true;

            card.style.opacity = "0.75";

        });

    });


    // =========================
    // REJECT REQUEST
    // =========================

    const rejectButtons =
        document.querySelectorAll(".reject-btn");

    rejectButtons.forEach(button => {

        button.addEventListener("click", () => {

            const card =
                button.closest(".request-full-card");

            if (!card) return;

            const priority =
                card.querySelector(".priority");

            if (priority) {

                priority.textContent =
                    "✕ Rejected";

                priority.className =
                    "priority rejected";
            }

            button.textContent =
                "Rejected";

            button.disabled = true;

            card.style.opacity = "0.6";

        });

    });


    // =========================
    // RESCHEDULE REQUEST
    // =========================

    const rescheduleButtons =
        document.querySelectorAll(".reschedule-btn");

    rescheduleButtons.forEach(button => {

        button.addEventListener("click", () => {

            alert(
                "Reschedule Request\n\n" +
                "Choose a new date and time for this student."
            );

        });

    });


    // =========================
    // SCHEDULE DAY SELECTION
    // =========================

    const days =
        document.querySelectorAll(".week-days .day");

    days.forEach(day => {

        day.addEventListener("click", () => {

            days.forEach(item => {

                item.classList.remove("active-day");

            });

            day.classList.add("active-day");

        });

    });


    // =========================
    // OPEN EDIT PROFILE
    // =========================

    if (editProfileButton && profileModal) {

        editProfileButton.addEventListener("click", () => {

            profileModal.classList.add("show");

        });

    }


    // =========================
    // CLOSE EDIT PROFILE
    // =========================

    function closeProfileEditor() {

        if (profileModal) {

            profileModal.classList.remove("show");

        }

    }


    if (closeProfileModal) {

        closeProfileModal.addEventListener(
            "click",
            closeProfileEditor
        );

    }


    if (cancelProfileEdit) {

        cancelProfileEdit.addEventListener(
            "click",
            closeProfileEditor
        );

    }


    // =========================
    // CLOSE WHEN CLICKING OUTSIDE
    // =========================

    if (profileModal) {

        profileModal.addEventListener("click", (event) => {

            if (event.target === profileModal) {

                closeProfileEditor();

            }

        });

    }


    // =========================
    // SAVE PROFILE
    // =========================

    if (profileForm) {

        profileForm.addEventListener("submit", (event) => {

            event.preventDefault();


            // GET FORM VALUES

            const name =
                document.querySelector("#editName")?.value.trim();

            const email =
                document.querySelector("#editEmail")?.value.trim();

            const department =
                document.querySelector("#editDepartment")?.value.trim();

            const facultyId =
                document.querySelector("#editFacultyId")?.value.trim();

            const room =
                document.querySelector("#editRoom")?.value.trim();

            const hours =
                document.querySelector("#editHours")?.value.trim();


            // UPDATE PROFILE NAME

            const profileName =
                document.querySelector(".profile-name h2");

            if (profileName && name) {

                profileName.textContent = name;

            }


            // UPDATE PROFILE INFORMATION

            const profileInfo =
                document.querySelectorAll(
                    ".profile-page .profile-info strong"
                );


            if (profileInfo.length >= 8) {

                if (name) {
                    profileInfo[0].textContent = name;
                }

                if (email) {
                    profileInfo[1].textContent = email;
                }

                if (department) {
                    profileInfo[2].textContent = department;
                }

                if (facultyId) {
                    profileInfo[3].textContent = facultyId;
                }

                if (room) {
                    profileInfo[4].textContent = room;
                }

                if (hours) {
                    profileInfo[5].textContent = hours;
                }

            }


            // CLOSE MODAL

            closeProfileEditor();


            // SUCCESS MESSAGE

            alert(
                "Profile updated successfully! ✓"
            );

        });

    }


    // =========================
    // DEFAULT PAGE
    // =========================

    showHome();

});