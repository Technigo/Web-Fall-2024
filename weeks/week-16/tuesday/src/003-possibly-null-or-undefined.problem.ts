const searchParams = new URLSearchParams(window.location.search);

const id = searchParams.get("id");

console.log(id.toUpperCase());

// It gives us n error because maybe id is null. TypeScript cannot be sure that id will be giving us a value.
// We need to ensure this or check it some how.