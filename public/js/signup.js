const signupForm = async (event) => {
  event.preventDefault();
  const email = document.querySelector("#email").value.trim();
  const name = document.querySelector("#name").value.trim();
  const password = document.querySelector("#password").value.trim();

  if (email && password && name) {
    const response = await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to sign up!");
    }
  } else alert("Please fill the form");
};

document.querySelector("#signup-form").addEventListener("submit", signupForm);
