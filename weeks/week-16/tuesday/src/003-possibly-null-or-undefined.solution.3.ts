const searchParams = new URLSearchParams(window.location.search);

const id = searchParams.get("id");

if (id) {
  console.log(id.toUpperCase());
}

// clear and simple, before doing anything, check if we have an id. Only then run the upper case method.