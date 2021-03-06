module.exports.testUrl = "https://www.csun.edu";
module.exports.testUrls = [
    "http://stembound.education/",
    "https://www.google.com/",
    "https://www.npmjs.com/package/axe-core",
];
module.exports.testRawHtml = `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
            href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400&family=Quicksand:wght@300&display=swap"
            rel="stylesheet"
        />
        <link rel="icon" type="image/png" href="/static/favicon.svg" />
        <link rel="stylesheet" href="styles.css" />
        <script defer src="main.js"></script>
        <title>STEM-bound</title>
    </head>
    <body>
        <div class="main-container">
            <div class="hero-section-container">
                <div class="hero-text-box">
                    <img
                        class="logo"
                        src="/static/stem-bound-word-logo-white.svg"
                        alt="stem-bound logo"
                    />
                    <h1>help connect students to opportunities</h1>
                    <p>
                        We are a platform that connects students in
                        underprivileged schools to professionals in STEM fields,
                        businesses, and universities to arrange courses,
                        internship, mentorship, and research opportunities.
                    </p>
                </div>
            </div>
            <div class="form-section-container">
                <form
                    id="mailing-list-form"
                    onsubmit="submitForm();return false"
                >
                    <div class="input-box">
                        <h3>keep in touch</h3>
                        <h2>Get notified when the beta version is available</h2>
                        <label for="email">Email</label>
                        <input type="text" id="email-input" />
                    </div>

                    <div class="input-box">
                        <label for="user-role">I am a </label>
                        <div class="radio-box">
                            <input
                                type="radio"
                                id="SCHOOL_OFFICIAL"
                                name="user-role"
                                value="SCHOOL_OFFICIAL"
                                class="radio"
                            />
                            <label for="SCHOOL_OFFICIAL">School Official</label>
                        </div>
                        <div class="radio-box">
                            <input
                                type="radio"
                                id="STUDENT"
                                name="user-role"
                                value="STUDENT"
                                class="radio"
                            />
                            <label for="STUDENT">Student</label>
                        </div>
                        <div class="radio-box">
                            <input
                                type="radio"
                                id="INSTRUCTOR"
                                name="user-role"
                                value="INSTRUCTOR"
                                class="radio"
                            />
                            <label for="INSTRUCTOR"
                                >Prospective Instructor</label
                            >
                        </div>
                    </div>

                    <button type="submit">Submit</button>
                    <p id="error-message"></p>
                </form>
                <div id="sign-up-confirmation-message-box">
                    <h3>You're signed up!</h3>
                    <p>We'll notify you when we are live!</p>
                </div>
            </div>
        </div>
    </body>
</html>`;
