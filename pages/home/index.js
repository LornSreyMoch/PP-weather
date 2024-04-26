function isValidEmail(email) {
    // Regular expression for validating an email address
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Check if the email matches the pattern
    return pattern.test(email);
}

// Example email addresses
const emails = [
    "user@example.com",        // Valid
    "user123@example",         // Invalid (missing top-level domain)
    "user.email@example.co.uk",// Valid
    "user@example_com",       // Invalid (underscore in domain)
    "user@123.123.123.123"    // Invalid (IP address format)
];

// Check validity of each email address
emails.forEach(email => {
    console.log(`${email}: ${isValidEmail(email)}`);
});
