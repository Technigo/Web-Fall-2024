const searchParams = new URLSearchParams(window.location.search);

const id = searchParams.get("id");

if (typeof id === "string") {
  console.log(id.toUpperCase());
}

// Before doing anything, check if we have an id and the type of that value is a string. 
// Only then run the upper case method.