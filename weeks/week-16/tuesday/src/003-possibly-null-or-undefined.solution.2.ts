const searchParams = new URLSearchParams(window.location.search);

const id = searchParams.get("id");

console.log(id!.toUpperCase());

// we guarantee that we have an id, and forcing the run the upper case method
// Be cautious with this!