// Root container
const app = document.getElementById("app");

// Create header
const header = document.createElement("header");
header.innerHTML = `
    <img src="college-logo.png" alt="College Logo">
    <h1>My College Name</h1>
    <p>Affiliated to XYZ University | Accredited with Grade 'A'</p>
`;
app.appendChild(header);

// Navigation
const nav = document.createElement("nav");
nav.innerHTML = `
    <a href="#about">About Us</a>
    <a href="#courses">Courses</a>
    <a href="#departments">Departments</a>
    <a href="#facilities">Facilities</a>
    <a href="#contact">Contact</a>
`;
app.appendChild(nav);

// About Section
const about = document.createElement("section");
about.id = "about";
about.innerHTML = `
    <h2>About Us</h2>
    <p>Our college was established in 1990 and has been providing quality education 
    in various fields. We aim to empower students with knowledge, skills, 
    and values to succeed in life.</p>
`;
app.appendChild(about);

// Courses
const courses = document.createElement("section");
courses.id = "courses";
courses.innerHTML = `
    <h2>Courses Offered</h2>
    <ul>
        <li>B.Sc Computer Science</li>
        <li>B.Sc Mathematics</li>
        <li>B.Com (General)</li>
        <li>B.A English</li>
        <li>MBA</li>
        <li>M.Sc Data Science</li>
    </ul>
`;
app.appendChild(courses);

// Departments
const departments = document.createElement("section");
departments.id = "departments";
departments.innerHTML = `
    <h2>Departments</h2>
    <ul>
        <li>Department of Computer Science</li>
        <li>Department of Commerce</li>
        <li>Department of Management Studies</li>
        <li>Department of Arts & Humanities</li>
    </ul>
`;
app.appendChild(departments);

// Facilities
const facilities = document.createElement("section");
facilities.id = "facilities";
facilities.innerHTML = `
    <h2>Facilities</h2>
    <ul>
        <li>Library with 50,000+ books</li>
        <li>Modern Computer Lab</li>
        <li>Sports Ground & Gym</li>
        <li>Boys & Girls Hostel</li>
        <li>Cafeteria & Medical Center</li>
    </ul>
`;
app.appendChild(facilities);

// Contact
const contact = document.createElement("section");
contact.id = "contact";
contact.innerHTML = `
    <h2>Contact Us</h2>
    <p>📍 Address: My College Road, City, State, PIN - 123456</p>
    <p>📞 Phone: +91-9876543210</p>
    <p>📧 Email: info@mycollege.com</p>

    <h3>Send a Message</h3>
    <form id="contactForm">
        <input type="text" placeholder="Your Name" required>
        <input type="email" placeholder="Your Email" required>
        <textarea rows="4" placeholder="Your Message"></textarea>
        <button type="submit">Submit</button>
    </form>
`;
app.appendChild(contact);

// Footer
const footer = document.createElement("footer");
footer.innerHTML = `<p>&copy; 2025 My College. All Rights Reserved.</p>`;
app.appendChild(footer);

// Form handling with JavaScript
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("✅ Thank you! Your message has been sent.");
});
